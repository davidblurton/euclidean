import er from 'euclidean-rhythms';

import MidiApi from './MidiApi';
import { Drum808, Instrument, TrackData } from './types';

const trackDefaults = {
    clockDividor: 6,
    beat: 0,
    pattern: []
};

class Sequencer extends EventTarget {
    private midi: MidiApi;
    private clock: number = 0;

    private tracks: { [key in Instrument]: TrackData } = {
        [Instrument.KICK]: {
            ...trackDefaults,
            n: 16,
            k: 4,
            note: Drum808.KICK
        },
        [Instrument.SNARE]: {
            ...trackDefaults,
            n: 16,
            k: 3,
            note: Drum808.SNARE
        },
        [Instrument.HIHAT]: {
            ...trackDefaults,
            n: 14,
            k: 6,
            note: Drum808.HIHAT
        }
    };

    constructor(midi: MidiApi) {
        super();
        this.midi = midi;

        Object.entries(this.tracks).forEach(([key, track]) => {
            track.pattern = er.getPattern(track.k, track.n);
        });
    }

    public setN(name: Instrument, n: number) {
        const track = this.tracks[name];

        track.n = n;
        track.pattern = er.getPattern(track.k, track.n);

        this.dispatchEvent(new Event("update"));
    }

    public setK(name: Instrument, k: number) {
        const track = this.tracks[name];

        track.k = k;
        track.pattern = er.getPattern(track.k, track.n);

        this.dispatchEvent(new Event("update"));
    }

    public handleStart() {
        this.clock = 0;

        Object.entries(this.tracks).forEach(([key, track]) => {
            track.beat = 0;
        });
    }

    public handleStop() {
        this.clock = 0;

        Object.entries(this.tracks).forEach(([key, track]) => {
            track.beat = 0;
        });
    }

    public handleClock() {
        this.clock += 1;

        Object.entries(this.tracks).forEach(([key, track]) => {
            if (this.clock % track.clockDividor !== 0) {
                return;
            }

            track.beat = (track.beat + 1) % track.n;

            if (track.pattern[track.beat]) {
                this.midi.playNote(track.note);
            }

            this.dispatchEvent(new Event("update"));
        });
    }

    public getState() {
        return this.tracks;
    }
}

export default Sequencer;
