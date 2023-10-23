import { Layout } from 'common/components/Layout/Layout';
import { LateralBar } from 'common/components/lateral_bar/LateralBar';
import { usePodcastDetails } from 'podcast_detail/hooks';
import { IEpisode } from 'podcast_detail/models';
import React from 'react';
import { useParams } from "react-router-dom";
import { EpisodesTable } from './EpisodesTable';
import './styless.css';

const getPodcastDescription = (details: IEpisode): string => {
    if (details?.shortDescription) return details.shortDescription
    if (details?.description) return details.description
   return `${details?.trackName} podcast.${details?.artistName ? ` By ${details.artistName}` : ''}`
}


const PodcastDetail = () => {
    const {podcastId} = useParams()
    const {details, episodesNumber, episodes} = usePodcastDetails(podcastId || '');
    return (
        <Layout>
            <LateralBar
                title={details?.trackName} 
                description={getPodcastDescription(details)} 
                artists={details?.artistName}
                imageUrl={details?.artworkUrl100}        
            />
            <EpisodesTable 
                episodes={episodes} 
                episodesNumber={episodesNumber}
                className='episodes' 
            />
        </Layout>
    )
}

export default PodcastDetail;