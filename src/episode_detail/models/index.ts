import { IEpisode } from "podcast_detail/models";

export interface IEpisodeDetail {
    episode: IEpisode,
    artistName: string,
    trackName: string,
}