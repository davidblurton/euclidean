import { h } from 'preact';
import { Route, Router, RouterOnChangeArgs } from 'preact-router';
import { useEffect } from 'preact/hooks';

import Home from '../routes/home';
import { midi, sequencer, SequencerContext } from './store';

if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    useEffect(() => {
        midi.connect();
    });

    return (
        <div id="app">
            <SequencerContext.Provider value={sequencer}>
                <Router onChange={handleRoute}>
                    <Route path="/" component={Home} />
                </Router>
            </SequencerContext.Provider>
        </div>
    );
};

export default App;
