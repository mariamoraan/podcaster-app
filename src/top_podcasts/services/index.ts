import { makeGetRequest } from "common/utils/querys";
import { LAST_REQUEST_PODCASTS } from "top_podcasts/constants";
import { Entry, VideoPost } from "top_podcasts/models/index";

export const fetchTop100Songs = async(loc: string = 'us', limit: number = 100): Promise<Entry[]> => {
    const url = `https://itunes.apple.com/${loc}/rss/toppodcasts/limit=${limit}/json`;
    try {
        const data: VideoPost = await makeGetRequest(url);
        return data.feed.entry;
    } catch(error) {
        console.error(error)
        throw Error
    } 
}

export const getLocalStoragePodcasts = () => {
    const localPodcasts = localStorage.getItem(LAST_REQUEST_PODCASTS);
    if(!localPodcasts) return null
    const {timestamp, podcasts}: {timestamp: number, podcasts: Entry[]} = JSON.parse(localPodcasts)
    return {timestamp, podcasts}
}

export const saveLocalStoragePodcasts = (podcasts: Entry[]) => {
    localStorage.setItem(LAST_REQUEST_PODCASTS, JSON.stringify({
        timestamp: Date.now(),
        podcasts: podcasts
    }))
}