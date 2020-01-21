import { h } from 'preact';

import Track from '../../components/track';
import { Instrument } from '../../components/types';
import * as style from './style.css';

interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
    const tracks = [Instrument.KICK, Instrument.SNARE, Instrument.HIHAT];

    return (
        <div class={style.home}>
            {tracks.map(track => (
                <Track track={track} />
            ))}
        </div>
    );
};

export default Home;
