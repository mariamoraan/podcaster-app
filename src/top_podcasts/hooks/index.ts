import { useContext, useEffect, useState } from 'react';
import { Entry } from 'top_podcasts/models';
import { getTop100Podcasts } from 'top_podcasts/services';
import { ILoaderContext, LoaderContext } from '../../App';

export const useGetTop100Podcasts = () => {
    const { setIsLoading}: ILoaderContext = useContext(LoaderContext) as ILoaderContext;
    const [podcasts, setPodcasts] = useState<Entry[]>([])
    useEffect(() => {
        const getPodcasts = async() => {
            const podcasts = await getTop100Podcasts()
            setPodcasts(podcasts)
            setIsLoading(false)
        }
        setIsLoading(true)
        getPodcasts()
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