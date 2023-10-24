import EpisodeDetail from "episode_detail/components";
import PodcastDetail from "podcast_detail/components";
import React, { createContext, useState } from "react";
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import { EPISODE_DETAIL, PODCAST_DETAIL, POPULAR_PODCASTS } from "routes";
import PopularPodcasts from "top_podcasts/components";

export interface ILoaderContext {
    isLoading: boolean,
    setIsLoading: (bool: boolean) => void
}
export const LoaderContext = createContext<ILoaderContext | null>(null)

const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <LoaderContext.Provider value={{isLoading, setIsLoading}}>
            <Router>
                <Routes>
                    <Route path={POPULAR_PODCASTS} element={<PopularPodcasts />} />
                    <Route path={PODCAST_DETAIL} element={<PodcastDetail />} />
                    <Route path={EPISODE_DETAIL} element={<EpisodeDetail />} />
                    <Route path={POPULAR_PODCASTS} element={<PopularPodcasts />} />
                </Routes>
            </Router>
        </LoaderContext.Provider>
    )
}

export default App