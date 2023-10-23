import { IEpisodeDetail } from 'episode_detail/models';
import React from 'react';
import './styless.css';

interface Props {
    episodeDetail: IEpisodeDetail | undefined,
    className?: string;
}

export const EpisodeMainBox = (props: Props) => {
    const {className = '', episodeDetail} = props;
    if (!episodeDetail) return <></>
    
    const {episode} = episodeDetail;
    return (
        <div className={`box ${className}`}>
            <h2>{episode.trackName}</h2>
            <p>{episode.description}</p>
            <audio 
            controls
            >
                <source src={episode.previewUrl} type="audio/ogg" />
                <source src={episode.previewUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}