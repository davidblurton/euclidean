import { h } from 'preact';
import { useContext, useState } from 'preact/hooks';

import Euclidean from '../../components/euclidean';
import Slider from '../../components/slider';
import { SequencerContext, useSequencer } from '../../components/store';
import { Instrument } from '../types';
import style from './style.css';

interface Props {
    track: Instrument;
}

const Track: preact.FunctionalComponent<Props> = ({ track }) => {
    // const [getRotation, setRotation] = useState(0);
    const [_, setFoo] = useState(0);

    const sequencer = useContext(SequencerContext);
    sequencer.addEventListener("update", () => setFoo(i => i + 1));

    const { beat, pattern, k, n } = useSequencer()[track];

    const first = Math.min(k, n);
    const second = n;

    const setK = (value: number) => {
        sequencer.setK(track, value);
    };

    const setN = (value: number) => {
        sequencer.setN(track, value);
    };

    return (
        <div class={style.home}>
            <Euclidean n={second} pattern={pattern} offset={0} beat={beat} />
            <div class={style.header}>{`E(${first}, ${second})`}</div>

            <Slider
                min={1}
                max={second}
                step={1}
                onChange={setK}
                value={first}
            />
            <Slider min={1} max={16} step={1} onChange={setN} value={second} />
            {/* <Slider
                min={0}
                max={second}
                step={1}
                onChange={setRotation}
                value={getRotation}
            /> */}
        </div>
    );
};

export default Track;
