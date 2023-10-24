import { IEpisodeDetail } from "episode_detail/models";
import { getEpisodeById } from "episode_detail/services";
import { useContext, useEffect, useState } from "react";
import { ILoaderContext, LoaderContext } from "../../App";

export const useGetEpisodeDetails = (podcastId?: string, episodeId?: string) => {
    const { setIsLoading, isLoading }: ILoaderContext = useContext(LoaderContext) as ILoaderContext;
    const [episodeDetail, setEpisodeDetail] = useState<IEpisodeDetail | undefined>(undefined)
    useEffect(() => {
        const getEpisodeDetails = async() => {
            if (!podcastId || !episodeId) {
                setEpisodeDetail(undefined)
                setIsLoading(false)
            } 
            
            else {
                const episodeDetails = await getEpisodeById(podcastId, episodeId);
                setEpisodeDetail(episodeDetails)
                setIsLoading(false)
            }
        }
        setIsLoading(true)
        getEpisodeDetails()
        
    }, [podcastId, episodeId])

    
    return {episodeDetail, isLoading}
}