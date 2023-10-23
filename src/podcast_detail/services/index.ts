import { olderThan24Hours } from "common/utils/dates";
import { makeGetRequest } from "common/utils/querys";
import { LAST_REQUEST_PODCASTS_DETAIL } from "podcast_detail/constants";
import { IPodcast } from "podcast_detail/models";

export const fetchPodcastDetails = async(podcastId: string): Promise<IPodcast> => {
    const URL = "https://itunes.apple.com/lookup"
    const params = {
        id: podcastId,
        media: "podcast",
        entity: "podcastEpisode",
        limit: "20",
    };
    try {
        const data: IPodcast = await makeGetRequest(URL, params);
        return data;
    } catch(error) {
        console.error(error)
        throw Error
    } 
}

export interface IStoragePodcastDetail {
    timestamp: number,
    podcastDetail: IPodcast,
}

export const getLocalStoragePodcastsDetails = () => {
    const localPodcasts = localStorage.getItem(LAST_REQUEST_PODCASTS_DETAIL);
    if(!localPodcasts) return {}
    const localPodcastsDetails: {[key:string]: IStoragePodcastDetail}  = JSON.parse(localPodcasts)
    return localPodcastsDetails
}

export const getLocalStoragePodcastDetail = (podcastId: string) => {
    const localPodcastsDetails = getLocalStoragePodcastsDetails()
    console.log(localPodcastsDetails)
    return localPodcastsDetails[podcastId]
}

export const saveLocalStoragePodcastDetail = (podcastId: string, podcastDetail: IPodcast) => {
    const newLocalStoragePodcastDetail = {
        ...getLocalStoragePodcastsDetails(), 
        [podcastId]: {timestamp: Date.now(), podcastDetail: podcastDetail}}
    localStorage.setItem(LAST_REQUEST_PODCASTS_DETAIL, JSON.stringify(newLocalStoragePodcastDetail))
}

export const getPodcastDetails = async(podcastId: string): Promise<IPodcast> => {
    const localPodcastDetail = getLocalStoragePodcastDetail(podcastId)
    if (localPodcastDetail && !olderThan24Hours(localPodcastDetail.timestamp)) {
        return localPodcastDetail.podcastDetail
    } else {
        const podcastDetails = await fetchPodcastDetails(podcastId)
        saveLocalStoragePodcastDetail(podcastId, podcastDetails)
        return podcastDetails
    }
}