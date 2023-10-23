import { IColumn, ITable } from 'common/components/table/Table'
import { getReadableDate, millisecondsToSecondsAndMinutes } from 'common/utils/dates'
import { IEpisode } from 'podcast_detail/models'
import React from 'react'
import { Link, useLocation } from "react-router-dom"
import "./styless.css"

export const buildPodcastTable = (episodes: IEpisode[]): ITable => {
    const location = useLocation();
    const columns: IColumn[] = [
        {id: "episode-title", title: "Title"},
        {id: "episode-date", title: "Date"},
        {id: "episode-duration", title: "Duration"},
    ]
    const rows = episodes.map(({trackName, trackId, releaseDate, trackTimeMillis}) => ({cells: [
        {columnId: "episode-title", content: <Link className='episode-link' to={`${location.pathname}/episode/${trackId}`}>{trackName}</Link>},
        {columnId: "episode-date", content: getReadableDate(new Date(releaseDate))},
        {columnId: "episode-duration", content: millisecondsToSecondsAndMinutes(trackTimeMillis)},
    ]}))
    return ({
        id: "podcast-table",
        columns,
        rows,
        gridTemplateColumns: "70% 15% 15%"
    })
}