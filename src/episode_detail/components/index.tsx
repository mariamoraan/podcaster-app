import { LateralBar } from "common/components/lateral_bar/LateralBar"
import { Layout } from "common/components/layout/Layout"
import { useGetEpisodeDetails } from "episode_detail/hooks"
import React from 'react'
import { useParams } from 'react-router-dom'
import { EpisodeMainBox } from "./episode_main_box/EpisodeMainBox"
import "./styless.css"

const EpisodeDetail = () => {
    const {podcastId, episodeId} = useParams()
    const {episodeDetail, isLoading} = useGetEpisodeDetails(podcastId, episodeId)

    if(isLoading) {
        return <></>
    }
    
    if(!episodeDetail) {
        return (
            <Layout><p>Episode not found</p></Layout>
        )
    }
    
    return (
        <Layout>
            <LateralBar
                title={episodeDetail?.trackName} 
                description={episodeDetail?.episode?.shortDescription} 
                artists={episodeDetail?.artistName} 
                imageUrl={episodeDetail?.episode?.artworkUrl160}    
                link={`/podcast/${podcastId}`}         
            />
            <EpisodeMainBox
            episodeDetail={episodeDetail}
            className='episode'
            />
        </Layout>
    )
}

export default EpisodeDetail