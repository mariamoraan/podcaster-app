import { IEpisodeDetail } from "episode_detail/models";
import { getPodcastDetails } from "podcast_detail/services";


const url = "https://itunes.apple.com/lookup"

export const getEpisodeById = async(podcastId: string, episodeId: string): Promise<IEpisodeDetail | undefined> => {
    const podcast = await getPodcastDetails(podcastId)
    if(!podcast) return  

    const episodes = podcast?.results
    const episode = episodes?.find(({trackId}) => trackId.toString() === episodeId)
    const artistName = episodes[0]?.artistName
    const trackName = episodes[0]?.trackName

    if (!episode || !artistName || !trackName) return
    return {
        episode, 
        artistName, 
        trackName,
    }
}