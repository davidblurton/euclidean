import WebMidi, { INoteParam, Input, Output } from 'webmidi';

class MidiApi extends EventTarget {
    private input?: Input;
    private output?: Output;

    public connect() {
        WebMidi.enable(err => {
            if (err) {
                console.error(err);
                return;
            }

            this.input = WebMidi.inputs[0];
            this.output = WebMidi.outputs[0];

            this.input.on("clock", "all", () => {
                this.dispatchEvent(new Event("clock"));
            });

            this.input.on("start", "all", () => {
                this.dispatchEvent(new Event("start"));
            });

            this.input.on("stop", "all", () => {
                this.dispatchEvent(new Event("stop"));
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
