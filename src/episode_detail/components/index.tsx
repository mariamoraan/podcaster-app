import { Layout } from "common/components/Layout/Layout"
import React from 'react'
import { useParams } from 'react-router-dom'

const EpisodeDetail = () => {
    const {podcastId, episodeId} = useParams()
    return (
        <Layout>
            <h1>{podcastId}/{episodeId}</h1>
        </Layout>
    )
}

export default EpisodeDetail