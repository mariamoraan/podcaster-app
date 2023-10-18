export const POPULAR_PODCASTS = "/"
export const PODCAST_DETAIL = "/podcast/:podcastId"
export const EPISODE_DETAIL = "/podcast/:podcastId/episode/:episodeId"

export const buildPodcastDetailPath = (id: string) => PODCAST_DETAIL.replace(":podcastId", id)
export const buildEpisodeDetailPath = (podcastId: string, episodeDetail: string) => EPISODE_DETAIL.replace(":podcastId", podcastId).replace(":episodeId", episodeDetail)