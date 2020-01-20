import er from 'euclidean-rhythms';

import MidiApi from './MidiApi';
import { Drum808, Track, Tracks } from './types';

class Sequencer extends EventTarget {
    private midi: MidiApi;
    private tracks: { [key in Tracks]: Track } = {
        [Tracks.KICK]: {
            n: 7,
            k: 5,
            beat: 0,
            pattern: [],
            note: Drum808.KICK
        },
        [Tracks.SNARE]: {
            n: 8,
            k: 3,
            beat: 0,
            pattern: [],
            note: Drum808.SNARE
        },
        [Tracks.HIHAT]: {
            n: 14,
            k: 6,
            beat: 0,
            pattern: [],
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

    public setN(name: Tracks, n: number) {
        const track = this.tracks[name];

        track.n = n;
        track.pattern = er.getPattern(track.k, track.n);

        this.dispatchEvent(new Event("update"));
    }

    public setK(name: Tracks, k: number) {
        const track = this.tracks[name];

        track.k = k;
        track.pattern = er.getPattern(track.k, track.n);

        this.dispatchEvent(new Event("update"));
    }

    public handleStart() {
        Object.entries(this.tracks).forEach(([key, track]) => {
            track.beat = 0;
        });
    }

    public handleBeat() {
        Object.entries(this.tracks).forEach(([key, track]) => {
            track.beat = (track.beat + 1) % track.n;

            if (track.pattern[track.beat]) {
                this.midi.playNote(track.note);
            }
        });

        this.dispatchEvent(new Event("update"));
    }

    public getState() {
        return this.tracks;
    }
}

export default Sequencer;
