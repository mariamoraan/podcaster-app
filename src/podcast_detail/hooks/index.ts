import { IEpisode, IPodcast } from "podcast_detail/models"
import { getPodcastDetails } from "podcast_detail/services"
import { useEffect, useState } from "react"

export const usePodcastDetails = (podcastId: string) => {
    const [podcast, setPodcast] = useState<IEpisode[]>([])

    useEffect(() => {
        const getEpisodes = async() => {
            const res: IPodcast = await getPodcastDetails(podcastId)
            setPodcast(res.results)
        }
        getEpisodes()
    }, [])

    return {details: podcast[0], episodes: podcast.slice(1), episodesNumber: podcast.length - 1}
}