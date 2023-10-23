import { Layout } from 'common/components/layout/Layout';
import React from 'react';
import { PodcastsList } from 'top_podcasts/components/podcast_list/PodcastList';

const PopularPodcasts = () => {
    return (
        <Layout>
            <PodcastsList />
        </Layout>
    )
}

export default PopularPodcasts;