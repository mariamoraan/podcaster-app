import { IEpisodeDetail } from "episode_detail/models"
import { getEpisodeById } from "episode_detail/services"
import { useEffect, useState } from "react"

export const useGetEpisodeDetails = (podcastId?: string, episodeId?: string) => {
    const [episodeDetail, setEpisodeDetail] = useState<IEpisodeDetail | undefined>(undefined)
    useEffect(() => {
        const getEpisodeDetails = async() => {
            if (!podcastId || !episodeId) {
                setEpisodeDetail(undefined)
            } 
            
            else {
                const episodeDetails = await getEpisodeById(podcastId, episodeId);
                setEpisodeDetail(episodeDetails)
            }
        }
        getEpisodeDetails()
        
    }, [podcastId, episodeId])

    
    return {episodeDetail}
}