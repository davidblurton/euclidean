import { createContext } from 'preact';
import { useLayoutEffect, useReducer, useRef, useState } from 'preact/hooks';

import MidiApi from './MidiApi';
import Sequencer from './Sequencer';
import { Instrument } from './types';

export const midi = new MidiApi();
export const sequencer = new Sequencer(midi);

export const SequencerContext = createContext(sequencer);

midi.addEventListener("clock", sequencer.handleClock.bind(sequencer));
midi.addEventListener("start", sequencer.handleStart.bind(sequencer));
midi.addEventListener("stop", sequencer.handleStop.bind(sequencer));

function createUseSequencerHook() {
    return function() {
        const [state, setState] = useState(sequencer.getState());

        sequencer.addEventListener("update", () => {
            setState(sequencer.getState());
        });

        return state;
    };
}

export const useSequencer = createUseSequencerHook();
