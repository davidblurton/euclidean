import WebMidi, { INoteParam, Input, Output } from 'webmidi';

const CLOCK_DIVIDOR = 12;

class MidiApi extends EventTarget {
    private input?: Input;
    private output?: Output;
    private clock: number = 0;

    public connect() {
        WebMidi.enable(err => {
            if (err) {
                console.error(err);
                return;
            }

            this.input = WebMidi.inputs[0];
            this.output = WebMidi.outputs[0];

            this.input.on("clock", "all", () => {
                this.clock++;

                if (this.clock === CLOCK_DIVIDOR) {
                    this.dispatchEvent(new Event("beat"));
                    this.clock = 0;
                }
            });

            this.input.on("start", "all", () => {
                this.clock = 0;
            });
        });
    }

    public playNote(note: INoteParam) {
        if (!this.output) {
            console.log("No output");
            return;
        }

        this.output.playNote(note, 1, {
            duration: 10
        });
    }
}

export default MidiApi;
