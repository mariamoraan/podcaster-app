import { Table } from 'common/components/table/Table'
import { IEpisode } from 'podcast_detail/models'
import { buildPodcastTable } from 'podcast_detail/utils'
import React from 'react'
import { EpisodesNumber } from './EpisodesNumber'

interface Props {
    episodes: IEpisode[],
    episodesNumber: number,
    className?: string,
}

export const EpisodesTable = (props: Props) => {
    const {episodes, episodesNumber, className = ''} = props;

    if (!episodes) return <></>

    return (
        <div className={className}>
            <EpisodesNumber episodesNumber={episodesNumber} />
            <Table {...buildPodcastTable(episodes)} />
        </div>
    )
}