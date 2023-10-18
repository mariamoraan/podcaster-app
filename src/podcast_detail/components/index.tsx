import { Layout } from "common/components/Layout/Layout"
import React from 'react'
import { useParams } from 'react-router-dom'

const PodcastDetail = () => {
    const {podcastId} = useParams()
    return (
        <Layout>
            <h1>{podcastId}</h1>
        </Layout>
    )
}

export default PodcastDetail