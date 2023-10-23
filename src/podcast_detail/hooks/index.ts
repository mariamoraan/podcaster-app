import { IEpisode, IPodcast } from "podcast_detail/models"
import { getPodcastDetails } from "podcast_detail/services"
import { useEffect, useState } from "react"

export const usePodcastDetails = (podcastId: string) => {
    const [podcast, setPodcast] = useState<IEpisode[] | undefined>([])

    useEffect(() => {
        const getEpisodes = async() => {
            const res: IPodcast | undefined = await getPodcastDetails(podcastId)
            setPodcast(res ? res.results: undefined)
        }
        getEpisodes()
    }, [])


    if(!podcast) return
    return {details: podcast[0], episodes: podcast.slice(1), episodesNumber: podcast.length - 1}
}