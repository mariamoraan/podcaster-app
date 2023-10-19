import EpisodeDetail from "episode_detail/components";
import PodcastDetail from "podcast_detail/components";
import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import { EPISODE_DETAIL, PODCAST_DETAIL, POPULAR_PODCASTS } from "routes";
import PopularPodcasts from "top_podcasts/components";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={POPULAR_PODCASTS} element={<PopularPodcasts />} />
                <Route path={PODCAST_DETAIL} element={<PodcastDetail />} />
                <Route path={EPISODE_DETAIL} element={<EpisodeDetail />} />
            </Routes>
        </Router>
    )
}

export default App