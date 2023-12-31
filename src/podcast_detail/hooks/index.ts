import { IEpisode, IPodcast } from "podcast_detail/models";
import { getPodcastDetails } from "podcast_detail/services";
import { useContext, useEffect, useState } from "react";
import { ILoaderContext, LoaderContext } from "../../App";

export const usePodcastDetails = (podcastId: string) => {
    const { setIsLoading, isLoading }: ILoaderContext = useContext(LoaderContext) as ILoaderContext;
    const [podcast, setPodcast] = useState<IEpisode[] | undefined>([])

    useEffect(() => {
        const getEpisodes = async() => {
            const res: IPodcast | undefined = await getPodcastDetails(podcastId)
            setPodcast(res ? res.results: undefined)
            setIsLoading(false)
        }
        setIsLoading(true)
        getEpisodes()
    }, [])


    if(!podcast) return
    return {details: podcast[0], episodes: podcast.slice(1), episodesNumber: podcast.length - 1, isLoading}
}