import { olderThan24Hours } from 'common/utils/dates';
import { useEffect, useState } from 'react';
import { Entry } from 'top_podcasts/models';
import { fetchTop100Songs, getLocalStoragePodcasts, saveLocalStoragePodcasts } from 'top_podcasts/services';

export const useGetTop100Podcasts = () => {
    const [podcasts, setPodcasts] = useState<Entry[]>([])
    useEffect(() => {
        const fetchPodcasts = async() => {
            const fetchedPodcasts = await fetchTop100Songs()
            setPodcasts(fetchedPodcasts)
            saveLocalStoragePodcasts(fetchedPodcasts)
        }

        const localPodcasts = getLocalStoragePodcasts();

        if (localPodcasts) {
            if(!olderThan24Hours(localPodcasts.timestamp)) {
                setPodcasts(localPodcasts.podcasts)
                return
            }
        } 
        fetchPodcasts()
    }, [])

    return {podcasts, setPodcasts}
}


export const useFilterPodcast = () => {
    const {podcasts} = useGetTop100Podcasts();
    const [filter, setFilter] = useState('');
    const [filteredPodcasts, setFilteredPodcasts] = useState<Entry[]>([]);

    const compareStrings = (a: String, b: String) =>  a.toLowerCase().includes(b.toLowerCase());
    const filterPodcasts = (filter: string) => {
        const newPodcasts = podcasts.filter((podcast) => compareStrings(podcast.title.label, filter) || compareStrings(podcast["im:artist"].label, filter));
        setFilteredPodcasts(newPodcasts)
    }

    useEffect(() => {
        setFilteredPodcasts(podcasts);
    }, [podcasts])

    useEffect(() => {
        filterPodcasts(filter)
    }, [filter])

    return {filteredPodcasts, setFilter, filter, setFilteredPodcasts}
}