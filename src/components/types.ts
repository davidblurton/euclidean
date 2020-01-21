export enum Drum808 {
    KICK = "C2",
    SNARE = "D2",
    HIHAT = "F#2"
}

export enum Instrument {
    KICK,
    SNARE,
    HIHAT
}

export interface TrackData {
    note: Drum808;
    clockDividor: number;
    beat: number;
    k: number;
    n: number;
    pattern: number[];
}
