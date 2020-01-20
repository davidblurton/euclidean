export enum Drum808 {
    KICK = "C2",
    SNARE = "D2",
    HIHAT = "F#2"
}

export enum Tracks {
    KICK,
    SNARE,
    HIHAT
}

export interface Track {
    note: Drum808;
    beat: number;
    k: number;
    n: number;
    pattern: number[];
}
