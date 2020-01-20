import { h } from 'preact';

import Track from '../../components/track';
import { Tracks } from '../../components/types';
import * as style from './style.css';

interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
    const tracks = [Tracks.KICK, Tracks.SNARE, Tracks.HIHAT];

    return (
        <div class={style.home}>
            {tracks.map(track => (
                <Track track={track} />
            ))}
        </div>
    );
};

export default Home;
