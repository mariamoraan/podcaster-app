import { IPodcast } from "./models"
import { IStoragePodcastDetail } from "./services"

export const mockStoragedPodcastId = "1200361736"
export const mockUnStoragedPodcastId = "1711415265"
export const mockLocalStoragePodcastsDetails: {[key: string]: IStoragePodcastDetail
} = {
    "1200361736": {
        "timestamp": 1698004085370,
        "podcastDetail": {
            "resultCount": 21,
            "results": [
                {
                    "wrapperType": "track",
                    "kind": "podcast",
                    "artistId": 121664449,
                    "collectionId": 1200361736,
                    "trackId": 1200361736,
                    "artistName": "The New York Times",
                    "collectionName": "The Daily",
                    "trackName": "The Daily",
                    "collectionCensoredName": "The Daily",
                    "trackCensoredName": "The Daily",
                    "artistViewUrl": "https://podcasts.apple.com/us/artist/the-new-york-times/121664449?uo=4",
                    "collectionViewUrl": "https://podcasts.apple.com/us/podcast/the-daily/id1200361736?uo=4",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-daily/id1200361736?uo=4",
                    "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/30x30bb.jpg",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/100x100bb.jpg",
                    "collectionPrice": 0,
                    "trackPrice": 0,
                    "collectionHdPrice": 0,
                    "releaseDate": "2023-10-20T09:45:00Z",
                    "collectionExplicitness": "notExplicit",
                    "trackExplicitness": "cleaned",
                    "trackCount": 1971,
                    "trackTimeMillis": 2128,
                    "country": "USA",
                    "currency": "USD",
                    "primaryGenreName": "Daily News",
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "genreIds": [
                        "1526",
                        "26",
                        "1489"
                    ],
                    "genres": [
                        "Daily News",
                        "Podcasts",
                        "News"
                    ]
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/eab0b927-e224-4f02-a78e-c92297164391/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=eab0b927-e224-4f02-a78e-c92297164391&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/eab0b927-e224-4f02-a78e-c92297164391/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=eab0b927-e224-4f02-a78e-c92297164391&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-sunday-read-the-genius-behind-hollywoods/id1200361736?i=1000632169678&uo=4",
                    "trackTimeMillis": 3147000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "Kihekah Avenue cuts through the town of Pawhuska, Okla., roughly north to south, forming the only corridor you might call a “business district” in the town of 2,900. Standing in the middle is a small TV-and-appliance store called Hometown, which occupies a two-story brick building and hasn’t changed much in decades. Boards cover its second-story windows, and part of the sign above its awning is broken, leaving half the lettering intact, spelling “Home.”\n\nOne winter day in February 2021, Jack Fisk stood before Hometown with Martin Scorsese, explaining how beautiful it could be. For much of the last week, he and Scorsese had been walking around Pawhuska, scouting set locations for the director’s 28th feature film, “Killers of the Flower Moon.” The film, which is based on David Grann’s best-selling book, chronicles the so-called 1920s Reign of Terror, when the Osage Nation’s discovery of oil made them some of the richest people in the world but also the target of a conspiracy among white people seeking to kill them for their shares of the mineral rights.\n\nTo render the events as accurately as possible, Scorsese had decided to film the movie in Osage County. It would be a sprawling, technically complicated shoot, with much of the undertaking falling to Fisk. Unlike production designers who use soundstages or computer-generated imagery, he prefers to build from scratch or to remodel period buildings, and even more than most of his peers, he aspires to exacting historical detail. His task would be to create a full-scale replica of a 1920s boom town atop what remains of 2020s Pawhuska.",
                    "trackId": 1000632169678,
                    "trackName": "The Sunday Read: ‘The Genius Behind Hollywood’s Most Indelible Sets’",
                    "shortDescription": "Kihekah Avenue cuts through the town of Pawhuska, Okla., roughly north to south, forming the only corridor you might call a “business district” in the town of 2,900. Standing in the middle is a small TV-and-appliance store called Hometown, which occ",
                    "releaseDate": "2023-10-22T10:00:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "43e9d272-66bc-4d21-95e1-e941fc738e1e",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/400fcead-dc05-41d6-b7e3-d544082f3193/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=400fcead-dc05-41d6-b7e3-d544082f3193&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/400fcead-dc05-41d6-b7e3-d544082f3193/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=400fcead-dc05-41d6-b7e3-d544082f3193&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/hamas-took-her-son/id1200361736?i=1000631991964&uo=4",
                    "trackTimeMillis": 2128000,
                    "contentAdvisoryRating": "Explicit",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "Warning: This episode contains strong language and descriptions of violence.\n\nWhen Hamas attacked Israel, they took two hundred hostages back with them into the Gaza Strip, including grandparents and children as young as nine months old. It was one of the largest mass abductions in recent history.\n\nNow, the fate of those hostages is at the center of a deepening crisis in the Middle East, and a looming ground invasion of Gaza. Today, we hear from the mother of one of these hostages.\n\nGuest: Rachel Goldberg, the mother of Hersh Goldberg-Polin, who is currently being held hostage by Hamas.",
                    "trackId": 1000631991964,
                    "trackName": "Hamas Took Her Son",
                    "shortDescription": "Warning: This episode contains strong language and descriptions of violence.\n\nWhen Hamas attacked Israel, they took two hundred hostages back with them into the Gaza Strip, including grandparents and children as young as nine months old. It was one of t",
                    "releaseDate": "2023-10-20T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "b91cc8d2-0a8c-485c-86b6-02b4505d8bfd",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d46478b7-10c8-4c21-b79c-8227ba1cc9a4/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d46478b7-10c8-4c21-b79c-8227ba1cc9a4&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d46478b7-10c8-4c21-b79c-8227ba1cc9a4/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d46478b7-10c8-4c21-b79c-8227ba1cc9a4&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/a-texas-town-wanted-tougher-border-security-now-its/id1200361736?i=1000631847378&uo=4",
                    "trackTimeMillis": 1713000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "When the governor of Texas announced an extraordinary plan to use local law enforcement to try to deter migrants from crossing from the border with Mexico, few communities were more receptive than the city of Eagle Pass, where residents had become fed up with the federal government’s approach.\n\nNow, two years later, people who once welcomed the plan are turning against it. Edgar Sandoval, who writes about South Texas for The New York Times, and Nina Feldman, a producer on “The Daily,” traveled to Eagle Pass to find out why.\n\nGuest: Edgar Sandoval, a reporter covering South Texas for The New York Times.",
                    "trackId": 1000631847378,
                    "trackName": "A Texas Town Wanted Tougher Border Security. Now It’s Having Regrets.",
                    "shortDescription": "When the governor of Texas announced an extraordinary plan to use local law enforcement to try to deter migrants from crossing from the border with Mexico, few communities were more receptive than the city of Eagle Pass, where residents had become fed u",
                    "releaseDate": "2023-10-19T09:50:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "9e10d2c9-368b-4330-911a-8c1ab21b200b",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/43dc8170-a974-4037-af7a-56fcfa2f90b5/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=43dc8170-a974-4037-af7a-56fcfa2f90b5&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/43dc8170-a974-4037-af7a-56fcfa2f90b5/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=43dc8170-a974-4037-af7a-56fcfa2f90b5&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-diplomatic-scramble-to-contain-the-israel-hamas-war/id1200361736?i=1000631714719&uo=4",
                    "trackTimeMillis": 1829000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "A devastating blast at a hospital in Gaza on Tuesday killed hundreds and ignited protests across the broader Middle East, deepening the crisis in the region.\n\nAs President Biden visits Israel looking to ease tensions and avoid a broader conflict, Edward Wong, a diplomatic correspondent for The Times, discusses the narrow path the American leader must navigate.\n\nGuest: Edward Wong, a diplomatic correspondent for The New York Times.",
                    "trackId": 1000631714719,
                    "trackName": "The Diplomatic Scramble to Contain the Israel-Hamas War",
                    "shortDescription": "A devastating blast at a hospital in Gaza on Tuesday killed hundreds and ignited protests across the broader Middle East, deepening the crisis in the region.\n\nAs President Biden visits Israel looking to ease tensions and avoid a broader conflict, Edward",
                    "releaseDate": "2023-10-18T09:50:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "f6ce89a9-47ae-4fbb-a812-2e330d4d92b8",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/81f3f107-ebba-46ce-b316-184b5f9c4ab5/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=81f3f107-ebba-46ce-b316-184b5f9c4ab5&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/81f3f107-ebba-46ce-b316-184b5f9c4ab5/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=81f3f107-ebba-46ce-b316-184b5f9c4ab5&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-arm-twisting-back-stabbing-battle-for-house-speaker/id1200361736?i=1000631585821&uo=4",
                    "trackTimeMillis": 1578000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "The House of Representatives still has no speaker, crippling a vital branch of the government. And the Republican who seems to be in the strongest position to take the role, Jim Jordan of Ohio, was once called a “legislative terrorist” by a former speaker of his own party.\n\nCatie Edmondson, who covers Congress for The Times, talks through the latest turns in the saga of the leaderless House.\n\nGuest: Catie Edmondson, a congressional correspondent for The New York Times.",
                    "trackId": 1000631585821,
                    "trackName": "The Arm-Twisting, Back-Stabbing Battle for House Speaker",
                    "shortDescription": "The House of Representatives still has no speaker, crippling a vital branch of the government. And the Republican who seems to be in the strongest position to take the role, Jim Jordan of Ohio, was once called a “legislative terrorist” by a former s",
                    "releaseDate": "2023-10-17T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "c6e21d96-92fc-413a-8ef1-7b5bec26e774",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d08f6d17-3448-43a8-bf95-c6f81a98e884/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d08f6d17-3448-43a8-bf95-c6f81a98e884&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d08f6d17-3448-43a8-bf95-c6f81a98e884/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d08f6d17-3448-43a8-bf95-c6f81a98e884&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/voices-from-gaza/id1200361736?i=1000631455926&uo=4",
                    "trackTimeMillis": 2093000,
                    "contentAdvisoryRating": "Explicit",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "Warning: This episode contains descriptions of death.\n\nAs the conflict continues, Israel has blocked food, water and electricity from entering Gaza and has bombarded the area with airstrikes that have killed more than 2,600 Palestinians.\n\nLate last week, Israel ordered people in the north of Gaza, nearly half the enclave’s population, to evacuate to the south ahead of an expected Israeli ground invasion. Many in Gaza now fear that this mass expulsion will become permanent.\n\nLast week we told the story of a father of four whose kibbutz was attacked by Hamas. Today, we hear from the Gaza residents Abdallah Hasaneen and Wafa Elsaka about what they’ve experienced so far and what they expect will come next.\n\nGuest: Abdallah Hasaneen, from the town Rafah in southern Gaza. Wafa Elsaka, a Palestinian-American and one of those who have fled from the north of Gaza over the past few days.",
                    "trackId": 1000631455926,
                    "trackName": "Voices from Gaza",
                    "shortDescription": "Warning: This episode contains descriptions of death.\n\nAs the conflict continues, Israel has blocked food, water and electricity from entering Gaza and has bombarded the area with airstrikes that have killed more than 2,600 Palestinians.\n\nLate last week",
                    "releaseDate": "2023-10-16T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "dff87138-610e-4b5b-82fb-c9bbfd4a7c02",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/0fe3c25f-3f8d-4c78-b3b0-5dd0a81f1276/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=0fe3c25f-3f8d-4c78-b3b0-5dd0a81f1276&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/0fe3c25f-3f8d-4c78-b3b0-5dd0a81f1276/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=0fe3c25f-3f8d-4c78-b3b0-5dd0a81f1276&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-sunday-read-is-m%C3%A5neskin-the-last-rock-band/id1200361736?i=1000631350860&uo=4",
                    "trackTimeMillis": 1731000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "The triumphant return to Rome of Måneskin — arguably the only rock stars of their generation, and almost certainly the biggest Italian rock band of all time — coincided with a heat wave across Southern Europe. On a Thursday morning in July, the band’s vast management team was officially concerned that the night’s sold-out performance at the Stadio Olimpico would be delayed. When Måneskin finally took the stage around 9:30 p.m., it was still well into the 90s — which was too bad, because there would be pyro.\n\nThe need to feel the rock may explain the documented problem of fans’ taste becoming frozen in whatever era was happening when they were between the ages of 15 and 25. Anyone who adolesced after Spotify, however, did not grow up with rock as an organically developing form and is likely to have experienced the whole catalog simultaneously, listening to Led Zeppelin at the same time they listened to Pixies and Franz Ferdinand — i.e. as a genre rather than as particular artists, the way the writer Dan Brook’s generation experienced jazz.\n\nThe members of Måneskin belong to this post-Spotify cohort. As the youngest and most prominent custodians of the rock tradition, their job is to sell new, guitar-driven songs of 100 to 150 beats per minute to a larger and larger audience, many of whom are young people who primarily think of such music as a historical artifact. Starting in September, Måneskin brought this business to the United States — a market where they are considerably less known — on a multivenue tour,  with their first stop at Madison Square Garden.",
                    "trackId": 1000631350860,
                    "trackName": "The Sunday Read: ‘Is Måneskin the Last Rock Band?’",
                    "shortDescription": "The triumphant return to Rome of Måneskin — arguably the only rock stars of their generation, and almost certainly the biggest Italian rock band of all time — coincided with a heat wave across Southern Europe. On a Thursday morning in July, the ban",
                    "releaseDate": "2023-10-15T10:00:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "31fb3c14-c3c5-4b01-a5a3-bad6acdd326c",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/210f61d1-6c4d-40cc-9b3f-ac74cd64ea35/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=210f61d1-6c4d-40cc-9b3f-ac74cd64ea35&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/210f61d1-6c4d-40cc-9b3f-ac74cd64ea35/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=210f61d1-6c4d-40cc-9b3f-ac74cd64ea35&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/golans-story/id1200361736?i=1000631195140&uo=4",
                    "trackTimeMillis": 1937000,
                    "contentAdvisoryRating": "Explicit",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "Warning: this episode contains descriptions of death.\nIn the week since Israel suffered the deadliest day in its modern history, fresh accounts have emerged in village after village of just how extreme and widespread the violence was. Today we hear the story of one man at the epicenter of that violence: Golan Abitbul, a resident of Kibbutz Be’eri, where more than 100 civilians were killed.",
                    "trackId": 1000631195140,
                    "trackName": "Golan’s Story",
                    "shortDescription": "Warning: this episode contains descriptions of death.\nIn the week since Israel suffered the deadliest day in its modern history, fresh accounts have emerged in village after village of just how extreme and widespread the violence was. Today we hear the",
                    "releaseDate": "2023-10-13T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "1143317e-17fd-4c22-88d2-993fb57d3aff",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/64b1406c-67a1-4247-8e4d-349364650711/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=64b1406c-67a1-4247-8e4d-349364650711&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/64b1406c-67a1-4247-8e4d-349364650711/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=64b1406c-67a1-4247-8e4d-349364650711&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-spoiler-threat-of-r-f-k-jr/id1200361736?i=1000631069281&uo=4",
                    "trackTimeMillis": 1776000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "Robert F. Kennedy Jr. was once dismissed as a fringe figure in the 2024 presidential race. But this week, as he announces an independent run for the White House, he’s striking fear within both the Democratic and Republican parties. Rebecca Davis O’Brien, who covers campaign finance for The Times, explains why.",
                    "trackId": 1000631069281,
                    "trackName": "The Spoiler Threat of R.F.K. Jr.",
                    "shortDescription": "Robert F. Kennedy Jr. was once dismissed as a fringe figure in the 2024 presidential race. But this week, as he announces an independent run for the White House, he’s striking fear within both the Democratic and Republican parties. Rebecca Davis O’B",
                    "releaseDate": "2023-10-12T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "2fbc6437-c554-4656-90d4-6c3f331ae517",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/418cfadb-6ed0-43e3-b644-a15280f18495/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=418cfadb-6ed0-43e3-b644-a15280f18495&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/418cfadb-6ed0-43e3-b644-a15280f18495/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=418cfadb-6ed0-43e3-b644-a15280f18495&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/israels-plan-to-destroy-hamas/id1200361736?i=1000630942173&uo=4",
                    "trackTimeMillis": 1608000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "For years, Israel’s leaders believed that they could coexist with Hamas. After this weekend’s massacre, that belief is over.\n\nSteven Erlanger, a former Jerusalem bureau chief at The New York Times, explains what Israel’s plan to destroy Hamas will mean for Palestinians and Israelis.\n\nGuest: Steven Erlanger, the chief diplomatic correspondent in Europe for The New York Times.",
                    "trackId": 1000630942173,
                    "trackName": "Israel’s Plan to Destroy Hamas",
                    "shortDescription": "For years, Israel’s leaders believed that they could coexist with Hamas. After this weekend’s massacre, that belief is over.\n\nSteven Erlanger, a former Jerusalem bureau chief at The New York Times, explains what Israel’s plan to destroy Hamas will",
                    "releaseDate": "2023-10-11T09:50:35Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "d42890f5-752b-4807-9173-19c0cccd46ef",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d4a38bd2-3c82-4303-b802-2e2b2d55dcdc/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d4a38bd2-3c82-4303-b802-2e2b2d55dcdc&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d4a38bd2-3c82-4303-b802-2e2b2d55dcdc/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d4a38bd2-3c82-4303-b802-2e2b2d55dcdc&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-new-supreme-court-cases-to-watch/id1200361736?i=1000630808673&uo=4",
                    "trackTimeMillis": 1509000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "Last week, the Supreme Court began its new term, picking up where it left off on the most contentious issues of the day, with cases connected to government power, gun rights and abortion. Adam Liptak, who covers the Supreme Court for The Times, explains why, while previous terms produced major victories for the conservative legal movement, this term may be different.",
                    "trackId": 1000630808673,
                    "trackName": "The New Supreme Court Cases to Watch",
                    "shortDescription": "Last week, the Supreme Court began its new term, picking up where it left off on the most contentious issues of the day, with cases connected to government power, gun rights and abortion. Adam Liptak, who covers the Supreme Court for The Times, explains",
                    "releaseDate": "2023-10-10T09:50:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "043f0e56-549a-46f3-8b42-4f39d1f79df6",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/bfe11168-96ac-4a6e-84b0-65d83c2e73f9/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=bfe11168-96ac-4a6e-84b0-65d83c2e73f9&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/bfe11168-96ac-4a6e-84b0-65d83c2e73f9/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=bfe11168-96ac-4a6e-84b0-65d83c2e73f9&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/war-in-israel/id1200361736?i=1000630672675&uo=4",
                    "trackTimeMillis": 1700000,
                    "contentAdvisoryRating": "Explicit",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "Warning: This episode contains descriptions of violence.\n\nOver the weekend, Palestinian militants with Hamas, the Islamic group that controls the Gaza Strip, mounted a stunning and highly coordinated invasion of Israel, rampaging through Israeli towns, killing people in their homes and on the streets, and taking hostages.\n\nIsabel Kershner, who covers Israeli and Palestinian politics and society for The Times, talks about the attack and the all-out war that it has now prompted.\n\nGuest: Isabel Kershner, a correspondent in Jerusalem for The New York Times.",
                    "trackId": 1000630672675,
                    "trackName": "War in Israel",
                    "shortDescription": "Warning: This episode contains descriptions of violence.\n\nOver the weekend, Palestinian militants with Hamas, the Islamic group that controls the Gaza Strip, mounted a stunning and highly coordinated invasion of Israel, rampaging through Israeli towns,",
                    "releaseDate": "2023-10-09T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "3b13d2d2-8eaf-450b-b697-aad06d9031ce",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/bbca83fd-423a-4725-b36f-b651c63b18b7/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=bbca83fd-423a-4725-b36f-b651c63b18b7&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/bbca83fd-423a-4725-b36f-b651c63b18b7/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=bbca83fd-423a-4725-b36f-b651c63b18b7&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-sunday-read-the-dungeons-dragons-players-of-death-row/id1200361736?i=1000630585709&uo=4",
                    "trackTimeMillis": 2069000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "The first time Tony Ford played Dungeons & Dragons, he was a wiry Black kid who had never seen the inside of a prison. His mother, a police officer in Detroit, had quit the force and moved the family to West Texas. To Ford, it seemed like a different world. Strangers talked funny, and El Paso was half desert. But he could skateboard in all that open space, and he eventually befriended a nerdy white kid with a passion for Dungeons & Dragons. Ford fell in love with the role-playing game right away; it was complex and cerebral, a saga you could lose yourself in. And in the 1980s, everyone seemed to be playing it.\n\nThe game has since become one of the most popular in the world, celebrated in nostalgic television shows and dramatized in movies. It is played in homes, at large conventions and even in prisons.\n\nWhen Ford, who is now on death row, first overheard the other men playing D.&D., they were engaged in a fast, high-octane version. The gamers were members of the Mexican Mafia, an insular crew that let Ford into their circle after they realized he could draw. The gang’s leader, Spider, pulled some strings, Ford recalls, and got him moved to a neighboring cell to serve as his personal artist. Ford earned some money drawing intricate Aztec designs in ink. He also began to join their D.&D. sessions, eventually becoming a Dungeon Master and running games all over the row.",
                    "trackId": 1000630585709,
                    "trackName": "The Sunday Read: ‘The Dungeons & Dragons Players of Death Row’",
                    "shortDescription": "The first time Tony Ford played Dungeons & Dragons, he was a wiry Black kid who had never seen the inside of a prison. His mother, a police officer in Detroit, had quit the force and moved the family to West Texas. To Ford, it seemed like a different wo",
                    "releaseDate": "2023-10-08T10:00:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "dce9192c-cb38-42f0-a9a6-07faab4333de",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/4d15f2ca-1b98-45bb-a79f-5159a478a9ed/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=4d15f2ca-1b98-45bb-a79f-5159a478a9ed&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/4d15f2ca-1b98-45bb-a79f-5159a478a9ed/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=4d15f2ca-1b98-45bb-a79f-5159a478a9ed&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/chaos-or-conscience-a-republican-explains-his-vote/id1200361736?i=1000630422121&uo=4",
                    "trackTimeMillis": 1934000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "The ouster of House Speaker Kevin McCarthy a few days ago demonstrated how powerful a small group of hard-right House Republicans have become and how deep their grievances run. We speak to one of the eight republicans who brought down Mr. McCarthy: Representative Tim Burchett of Tennessee.",
                    "trackId": 1000630422121,
                    "trackName": "Chaos or Conscience? A Republican Explains His Vote to Oust McCarthy.",
                    "shortDescription": "The ouster of House Speaker Kevin McCarthy a few days ago demonstrated how powerful a small group of hard-right House Republicans have become and how deep their grievances run. We speak to one of the eight republicans who brought down Mr. McCarthy: Repr",
                    "releaseDate": "2023-10-06T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "d42b18f1-a84f-45a2-9aaa-610762324a6e",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/b9f2d091-6cac-4ded-88f8-11718cc99829/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=b9f2d091-6cac-4ded-88f8-11718cc99829&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/b9f2d091-6cac-4ded-88f8-11718cc99829/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=b9f2d091-6cac-4ded-88f8-11718cc99829&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-mosquitoes-are-winning/id1200361736?i=1000630292157&uo=4",
                    "trackTimeMillis": 1812000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "For decades, the world seemed to be winning the war against mosquitoes and tamping down the deadly diseases they carried. But in the past few years, progress has not only stalled, it has reversed. Stephanie Nolen, who covers global health for The Times, explains how the mosquito has once again gained the upper hand in the fight.",
                    "trackId": 1000630292157,
                    "trackName": "The Mosquitoes Are Winning",
                    "shortDescription": "For decades, the world seemed to be winning the war against mosquitoes and tamping down the deadly diseases they carried. But in the past few years, progress has not only stalled, it has reversed. Stephanie Nolen, who covers global health for The Times,",
                    "releaseDate": "2023-10-05T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "13da9641-ea5f-4946-b2f6-678861acb0fe",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/c71be009-7378-41d4-bf7f-50017584659d/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=c71be009-7378-41d4-bf7f-50017584659d&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/c71be009-7378-41d4-bf7f-50017584659d/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=c71be009-7378-41d4-bf7f-50017584659d&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-ouster-of-house-speaker-kevin-mccarthy/id1200361736?i=1000630157650&uo=4",
                    "trackTimeMillis": 1704000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "The vote on Tuesday to remove Representative Kevin McCarthy as speaker of the House of Representative has left the chamber mired in chaos. Luke Broadwater, a congressional correspondent for The Times, describes what happened on an unprecedented day in American politics.",
                    "trackId": 1000630157650,
                    "trackName": "The Ouster of House Speaker Kevin McCarthy",
                    "shortDescription": "The vote on Tuesday to remove Representative Kevin McCarthy as speaker of the House of Representative has left the chamber mired in chaos. Luke Broadwater, a congressional correspondent for The Times, describes what happened on an unprecedented day in A",
                    "releaseDate": "2023-10-04T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "71d5ed89-20bc-4662-8d4d-af0970ffbcb1",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/a50e139d-a61f-4fc4-ad4b-ae00ad8cf6bc/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=a50e139d-a61f-4fc4-ad4b-ae00ad8cf6bc&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/a50e139d-a61f-4fc4-ad4b-ae00ad8cf6bc/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=a50e139d-a61f-4fc4-ad4b-ae00ad8cf6bc&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/sam-bankman-fried-goes-on-trial/id1200361736?i=1000630020064&uo=4",
                    "trackTimeMillis": 1795000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "Sam Bankman-Fried, the fallen golden boy of crypto, is going on trial for what prosecutors are calling the largest financial fraud in recent history. David Yaffe-Bellany, a technology reporter for The Times, explains the case of the man who was supposed to save the cryptocurrency industry and what its outcome could tell us about why he did not.",
                    "trackId": 1000630020064,
                    "trackName": "Sam Bankman-Fried Goes on Trial",
                    "shortDescription": "Sam Bankman-Fried, the fallen golden boy of crypto, is going on trial for what prosecutors are calling the largest financial fraud in recent history. David Yaffe-Bellany, a technology reporter for The Times, explains the case of the man who was supposed",
                    "releaseDate": "2023-10-03T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "83cf378a-0773-493e-9c73-ba0d91067ecf",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/80eb74ba-ac4f-4543-a6d8-7fe57a791e37/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=80eb74ba-ac4f-4543-a6d8-7fe57a791e37&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/80eb74ba-ac4f-4543-a6d8-7fe57a791e37/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=80eb74ba-ac4f-4543-a6d8-7fe57a791e37&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/amazons-most-beloved-features-may-turn-out-to-be-illegal/id1200361736?i=1000629885202&uo=4",
                    "trackTimeMillis": 1353000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "The U.S. government has filed a landmark antitrust lawsuit against Amazon, pointing to a set of familiar features that have made the internet retail giant so beloved by consumers. Karen Weise, a technology correspondent for The Times, explains why those features may actually be illegal.",
                    "trackId": 1000629885202,
                    "trackName": "Amazon’s Most Beloved Features May Turn Out to Be Illegal",
                    "shortDescription": "The U.S. government has filed a landmark antitrust lawsuit against Amazon, pointing to a set of familiar features that have made the internet retail giant so beloved by consumers. Karen Weise, a technology correspondent for The Times, explains why those",
                    "releaseDate": "2023-10-02T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "46caa0a6-92c1-4627-8d56-a2cc069f9b95",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/a2bd8b3e-0d16-40ce-bb30-23100bd3d8da/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=a2bd8b3e-0d16-40ce-bb30-23100bd3d8da&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/a2bd8b3e-0d16-40ce-bb30-23100bd3d8da/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=a2bd8b3e-0d16-40ce-bb30-23100bd3d8da&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-sunday-read-the-art-of-telling-forbidden/id1200361736?i=1000629789022&uo=4",
                    "trackTimeMillis": 2287000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "As China strove for a larger role on the international stage at the turn of the century, the arrival of the internet and a relatively relaxed political environment spurred a boom in self-expression. Many writers tested the boundaries of Chinese literary culture, experimenting with subjects that were quotidian but taboo on the page: corruption, sexual desire and evolving gender roles.\n\nIn today’s China, though, the pursuit of free expression requires writers to operate under the ever-watchful eye of a complex state surveillance system. This can resemble a high-stakes game of Whac-a-Mole in which writers, editors and online publishers try to outmaneuver the Chinese Communist Party’s apparatus, using any opportunity and resource at their disposal to chronicle life as they see it.",
                    "trackId": 1000629789022,
                    "trackName": "The Sunday Read: ‘The Art of Telling Forbidden Stories in China’",
                    "shortDescription": "As China strove for a larger role on the international stage at the turn of the century, the arrival of the internet and a relatively relaxed political environment spurred a boom in self-expression. Many writers tested the boundaries of Chinese literary",
                    "releaseDate": "2023-10-01T10:00:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "e2948c20-5622-416e-9855-8e8a33c93b70",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                },
                {
                    "country": "USA",
                    "episodeFileExtension": "mp3",
                    "episodeContentType": "audio",
                    "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
                    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
                    "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/23649923-8612-4c83-9e5e-5264ecf4c0f8/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=23649923-8612-4c83-9e5e-5264ecf4c0f8&feed=54nAGcIl",
                    "artistIds": [
                        121664449
                    ],
                    "closedCaptioning": "none",
                    "collectionId": 1200361736,
                    "collectionName": "The Daily",
                    "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/23649923-8612-4c83-9e5e-5264ecf4c0f8/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=23649923-8612-4c83-9e5e-5264ecf4c0f8&feed=54nAGcIl",
                    "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
                    "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
                    "trackViewUrl": "https://podcasts.apple.com/us/podcast/why-the-government-is-about-to-shut-down/id1200361736?i=1000629628475&uo=4",
                    "trackTimeMillis": 1503000,
                    "contentAdvisoryRating": "Clean",
                    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
                    "description": "A showdown between House Republicans and their leader, Speaker Kevin McCarthy, is heading toward a government shutdown.\n\nCarl Hulse, chief Washington correspondent for The Times, explains the causes and consequences of the looming crisis.\n\nGuest: Carl Hulse, is chief Washington correspondent for The New York Times.",
                    "trackId": 1000629628475,
                    "trackName": "Why the Government is About to Shut Down",
                    "shortDescription": "A showdown between House Republicans and their leader, Speaker Kevin McCarthy, is heading toward a government shutdown.\n\nCarl Hulse, chief Washington correspondent for The Times, explains the causes and consequences of the looming crisis.\n\nGuest: Carl H",
                    "releaseDate": "2023-09-29T09:45:00Z",
                    "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
                    "genres": [
                        {
                            "name": "Daily News",
                            "id": "1526"
                        }
                    ],
                    "episodeGuid": "09228f15-cff4-427d-91ee-78eab7421800",
                    "kind": "podcast-episode",
                    "wrapperType": "podcastEpisode"
                }
            ]
        }
    }
}
export const mockFetchPodcastDetails: IPodcast
 = {
    "resultCount": 21,
    "results": [
        {
            "wrapperType": "track",
            "kind": "podcast",
            "artistId": 121664449,
            "collectionId": 1200361736,
            "trackId": 1200361736,
            "artistName": "The New York Times",
            "collectionName": "The Daily",
            "trackName": "The Daily",
            "collectionCensoredName": "The Daily",
            "trackCensoredName": "The Daily",
            "artistViewUrl": "https://podcasts.apple.com/us/artist/the-new-york-times/121664449?uo=4",
            "collectionViewUrl": "https://podcasts.apple.com/us/podcast/the-daily/id1200361736?uo=4",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-daily/id1200361736?uo=4",
            "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/30x30bb.jpg",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/100x100bb.jpg",
            "collectionPrice": 0,
            "trackPrice": 0,
            "collectionHdPrice": 0,
            "releaseDate": "2023-10-19T09:50:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "cleaned",
            "trackCount": 1969,
            "trackTimeMillis": 1713,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Daily News",
            "contentAdvisoryRating": "Clean",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "genreIds": [
                "1526",
                "26",
                "1489"
            ],
            "genres": [
                "Daily News",
                "Podcasts",
                "News"
            ]
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "9e10d2c9-368b-4330-911a-8c1ab21b200b",
            "description": "When the governor of Texas announced an extraordinary plan to use local law enforcement to try to deter migrants from crossing from the border with Mexico, few communities were more receptive than the city of Eagle Pass, where residents had become fed up with the federal government’s approach.\n\nNow, two years later, people who once welcomed the plan are turning against it. Edgar Sandoval, who writes about South Texas for The New York Times, and Nina Feldman, a producer on “The Daily,” traveled to Eagle Pass to find out why.\n\nGuest: Edgar Sandoval, a reporter covering South Texas for The New York Times.",
            "trackId": 1000631847378,
            "trackName": "A Texas Town Wanted Tougher Border Security. Now It’s Having Regrets.",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-19T09:50:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "When the governor of Texas announced an extraordinary plan to use local law enforcement to try to deter migrants from crossing from the border with Mexico, few communities were more receptive than the city of Eagle Pass, where residents had become fed u",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d46478b7-10c8-4c21-b79c-8227ba1cc9a4/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d46478b7-10c8-4c21-b79c-8227ba1cc9a4&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/a-texas-town-wanted-tougher-border-security-now-its/id1200361736?i=1000631847378&uo=4",
            "trackTimeMillis": 1713000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d46478b7-10c8-4c21-b79c-8227ba1cc9a4/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d46478b7-10c8-4c21-b79c-8227ba1cc9a4&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "f6ce89a9-47ae-4fbb-a812-2e330d4d92b8",
            "description": "A devastating blast at a hospital in Gaza on Tuesday killed hundreds and ignited protests across the broader Middle East, deepening the crisis in the region.\n\nAs President Biden visits Israel looking to ease tensions and avoid a broader conflict, Edward Wong, a diplomatic correspondent for The Times, discusses the narrow path the American leader must navigate.\n\nGuest: Edward Wong, a diplomatic correspondent for The New York Times.",
            "trackId": 1000631714719,
            "trackName": "The Diplomatic Scramble to Contain the Israel-Hamas War",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-18T09:50:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "A devastating blast at a hospital in Gaza on Tuesday killed hundreds and ignited protests across the broader Middle East, deepening the crisis in the region.\n\nAs President Biden visits Israel looking to ease tensions and avoid a broader conflict, Edward",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/43dc8170-a974-4037-af7a-56fcfa2f90b5/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=43dc8170-a974-4037-af7a-56fcfa2f90b5&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-diplomatic-scramble-to-contain-the-israel-hamas-war/id1200361736?i=1000631714719&uo=4",
            "trackTimeMillis": 1829000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/43dc8170-a974-4037-af7a-56fcfa2f90b5/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=43dc8170-a974-4037-af7a-56fcfa2f90b5&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "c6e21d96-92fc-413a-8ef1-7b5bec26e774",
            "description": "The House of Representatives still has no speaker, crippling a vital branch of the government. And the Republican who seems to be in the strongest position to take the role, Jim Jordan of Ohio, was once called a “legislative terrorist” by a former speaker of his own party.\n\nCatie Edmondson, who covers Congress for The Times, talks through the latest turns in the saga of the leaderless House.\n\nGuest: Catie Edmondson, a congressional correspondent for The New York Times.",
            "trackId": 1000631585821,
            "trackName": "The Arm-Twisting, Back-Stabbing Battle for House Speaker",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-17T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "The House of Representatives still has no speaker, crippling a vital branch of the government. And the Republican who seems to be in the strongest position to take the role, Jim Jordan of Ohio, was once called a “legislative terrorist” by a former s",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/81f3f107-ebba-46ce-b316-184b5f9c4ab5/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=81f3f107-ebba-46ce-b316-184b5f9c4ab5&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-arm-twisting-back-stabbing-battle-for-house-speaker/id1200361736?i=1000631585821&uo=4",
            "trackTimeMillis": 1578000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/81f3f107-ebba-46ce-b316-184b5f9c4ab5/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=81f3f107-ebba-46ce-b316-184b5f9c4ab5&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "dff87138-610e-4b5b-82fb-c9bbfd4a7c02",
            "description": "Warning: This episode contains descriptions of death.\n\nAs the conflict continues, Israel has blocked food, water and electricity from entering Gaza and has bombarded the area with airstrikes that have killed more than 2,600 Palestinians.\n\nLate last week, Israel ordered people in the north of Gaza, nearly half the enclave’s population, to evacuate to the south ahead of an expected Israeli ground invasion. Many in Gaza now fear that this mass expulsion will become permanent.\n\nLast week we told the story of a father of four whose kibbutz was attacked by Hamas. Today, we hear from the Gaza residents Abdallah Hasaneen and Wafa Elsaka about what they’ve experienced so far and what they expect will come next.\n\nGuest: Abdallah Hasaneen, from the town Rafah in southern Gaza. Wafa Elsaka, a Palestinian-American and one of those who have fled from the north of Gaza over the past few days.",
            "trackId": 1000631455926,
            "trackName": "Voices from Gaza",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-16T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "Warning: This episode contains descriptions of death.\n\nAs the conflict continues, Israel has blocked food, water and electricity from entering Gaza and has bombarded the area with airstrikes that have killed more than 2,600 Palestinians.\n\nLate last week",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d08f6d17-3448-43a8-bf95-c6f81a98e884/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d08f6d17-3448-43a8-bf95-c6f81a98e884&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/voices-from-gaza/id1200361736?i=1000631455926&uo=4",
            "trackTimeMillis": 2093000,
            "contentAdvisoryRating": "Explicit",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d08f6d17-3448-43a8-bf95-c6f81a98e884/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d08f6d17-3448-43a8-bf95-c6f81a98e884&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "31fb3c14-c3c5-4b01-a5a3-bad6acdd326c",
            "description": "The triumphant return to Rome of Måneskin — arguably the only rock stars of their generation, and almost certainly the biggest Italian rock band of all time — coincided with a heat wave across Southern Europe. On a Thursday morning in July, the band’s vast management team was officially concerned that the night’s sold-out performance at the Stadio Olimpico would be delayed. When Måneskin finally took the stage around 9:30 p.m., it was still well into the 90s — which was too bad, because there would be pyro.\n\nThe need to feel the rock may explain the documented problem of fans’ taste becoming frozen in whatever era was happening when they were between the ages of 15 and 25. Anyone who adolesced after Spotify, however, did not grow up with rock as an organically developing form and is likely to have experienced the whole catalog simultaneously, listening to Led Zeppelin at the same time they listened to Pixies and Franz Ferdinand — i.e. as a genre rather than as particular artists, the way the writer Dan Brook’s generation experienced jazz.\n\nThe members of Måneskin belong to this post-Spotify cohort. As the youngest and most prominent custodians of the rock tradition, their job is to sell new, guitar-driven songs of 100 to 150 beats per minute to a larger and larger audience, many of whom are young people who primarily think of such music as a historical artifact. Starting in September, Måneskin brought this business to the United States — a market where they are considerably less known — on a multivenue tour,  with their first stop at Madison Square Garden.",
            "trackId": 1000631350860,
            "trackName": "The Sunday Read: ‘Is Måneskin the Last Rock Band?’",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-15T10:00:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "The triumphant return to Rome of Måneskin — arguably the only rock stars of their generation, and almost certainly the biggest Italian rock band of all time — coincided with a heat wave across Southern Europe. On a Thursday morning in July, the ban",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/0fe3c25f-3f8d-4c78-b3b0-5dd0a81f1276/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=0fe3c25f-3f8d-4c78-b3b0-5dd0a81f1276&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-sunday-read-is-m%C3%A5neskin-the-last-rock-band/id1200361736?i=1000631350860&uo=4",
            "trackTimeMillis": 1731000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/0fe3c25f-3f8d-4c78-b3b0-5dd0a81f1276/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=0fe3c25f-3f8d-4c78-b3b0-5dd0a81f1276&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "1143317e-17fd-4c22-88d2-993fb57d3aff",
            "description": "Warning: this episode contains descriptions of death.\nIn the week since Israel suffered the deadliest day in its modern history, fresh accounts have emerged in village after village of just how extreme and widespread the violence was. Today we hear the story of one man at the epicenter of that violence: Golan Abitbul, a resident of Kibbutz Be’eri, where more than 100 civilians were killed.",
            "trackId": 1000631195140,
            "trackName": "Golan’s Story",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-13T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "Warning: this episode contains descriptions of death.\nIn the week since Israel suffered the deadliest day in its modern history, fresh accounts have emerged in village after village of just how extreme and widespread the violence was. Today we hear the",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/210f61d1-6c4d-40cc-9b3f-ac74cd64ea35/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=210f61d1-6c4d-40cc-9b3f-ac74cd64ea35&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/golans-story/id1200361736?i=1000631195140&uo=4",
            "trackTimeMillis": 1937000,
            "contentAdvisoryRating": "Explicit",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/210f61d1-6c4d-40cc-9b3f-ac74cd64ea35/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=210f61d1-6c4d-40cc-9b3f-ac74cd64ea35&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "2fbc6437-c554-4656-90d4-6c3f331ae517",
            "description": "Robert F. Kennedy Jr. was once dismissed as a fringe figure in the 2024 presidential race. But this week, as he announces an independent run for the White House, he’s striking fear within both the Democratic and Republican parties. Rebecca Davis O’Brien, who covers campaign finance for The Times, explains why.",
            "trackId": 1000631069281,
            "trackName": "The Spoiler Threat of R.F.K. Jr.",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-12T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "Robert F. Kennedy Jr. was once dismissed as a fringe figure in the 2024 presidential race. But this week, as he announces an independent run for the White House, he’s striking fear within both the Democratic and Republican parties. Rebecca Davis O’B",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/64b1406c-67a1-4247-8e4d-349364650711/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=64b1406c-67a1-4247-8e4d-349364650711&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-spoiler-threat-of-r-f-k-jr/id1200361736?i=1000631069281&uo=4",
            "trackTimeMillis": 1776000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/64b1406c-67a1-4247-8e4d-349364650711/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=64b1406c-67a1-4247-8e4d-349364650711&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "d42890f5-752b-4807-9173-19c0cccd46ef",
            "description": "For years, Israel’s leaders believed that they could coexist with Hamas. After this weekend’s massacre, that belief is over.\n\nSteven Erlanger, a former Jerusalem bureau chief at The New York Times, explains what Israel’s plan to destroy Hamas will mean for Palestinians and Israelis.\n\nGuest: Steven Erlanger, the chief diplomatic correspondent in Europe for The New York Times.",
            "trackId": 1000630942173,
            "trackName": "Israel’s Plan to Destroy Hamas",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-11T09:50:35Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "For years, Israel’s leaders believed that they could coexist with Hamas. After this weekend’s massacre, that belief is over.\n\nSteven Erlanger, a former Jerusalem bureau chief at The New York Times, explains what Israel’s plan to destroy Hamas will",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/418cfadb-6ed0-43e3-b644-a15280f18495/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=418cfadb-6ed0-43e3-b644-a15280f18495&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/israels-plan-to-destroy-hamas/id1200361736?i=1000630942173&uo=4",
            "trackTimeMillis": 1608000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/418cfadb-6ed0-43e3-b644-a15280f18495/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=418cfadb-6ed0-43e3-b644-a15280f18495&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "043f0e56-549a-46f3-8b42-4f39d1f79df6",
            "description": "Last week, the Supreme Court began its new term, picking up where it left off on the most contentious issues of the day, with cases connected to government power, gun rights and abortion. Adam Liptak, who covers the Supreme Court for The Times, explains why, while previous terms produced major victories for the conservative legal movement, this term may be different.",
            "trackId": 1000630808673,
            "trackName": "The New Supreme Court Cases to Watch",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-10T09:50:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "Last week, the Supreme Court began its new term, picking up where it left off on the most contentious issues of the day, with cases connected to government power, gun rights and abortion. Adam Liptak, who covers the Supreme Court for The Times, explains",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d4a38bd2-3c82-4303-b802-2e2b2d55dcdc/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d4a38bd2-3c82-4303-b802-2e2b2d55dcdc&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-new-supreme-court-cases-to-watch/id1200361736?i=1000630808673&uo=4",
            "trackTimeMillis": 1509000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/d4a38bd2-3c82-4303-b802-2e2b2d55dcdc/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=d4a38bd2-3c82-4303-b802-2e2b2d55dcdc&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "3b13d2d2-8eaf-450b-b697-aad06d9031ce",
            "description": "Warning: This episode contains descriptions of violence.\n\nOver the weekend, Palestinian militants with Hamas, the Islamic group that controls the Gaza Strip, mounted a stunning and highly coordinated invasion of Israel, rampaging through Israeli towns, killing people in their homes and on the streets, and taking hostages.\n\nIsabel Kershner, who covers Israeli and Palestinian politics and society for The Times, talks about the attack and the all-out war that it has now prompted.\n\nGuest: Isabel Kershner, a correspondent in Jerusalem for The New York Times.",
            "trackId": 1000630672675,
            "trackName": "War in Israel",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-09T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "Warning: This episode contains descriptions of violence.\n\nOver the weekend, Palestinian militants with Hamas, the Islamic group that controls the Gaza Strip, mounted a stunning and highly coordinated invasion of Israel, rampaging through Israeli towns,",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/bfe11168-96ac-4a6e-84b0-65d83c2e73f9/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=bfe11168-96ac-4a6e-84b0-65d83c2e73f9&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/war-in-israel/id1200361736?i=1000630672675&uo=4",
            "trackTimeMillis": 1700000,
            "contentAdvisoryRating": "Explicit",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/bfe11168-96ac-4a6e-84b0-65d83c2e73f9/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=bfe11168-96ac-4a6e-84b0-65d83c2e73f9&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "dce9192c-cb38-42f0-a9a6-07faab4333de",
            "description": "The first time Tony Ford played Dungeons & Dragons, he was a wiry Black kid who had never seen the inside of a prison. His mother, a police officer in Detroit, had quit the force and moved the family to West Texas. To Ford, it seemed like a different world. Strangers talked funny, and El Paso was half desert. But he could skateboard in all that open space, and he eventually befriended a nerdy white kid with a passion for Dungeons & Dragons. Ford fell in love with the role-playing game right away; it was complex and cerebral, a saga you could lose yourself in. And in the 1980s, everyone seemed to be playing it.\n\nThe game has since become one of the most popular in the world, celebrated in nostalgic television shows and dramatized in movies. It is played in homes, at large conventions and even in prisons.\n\nWhen Ford, who is now on death row, first overheard the other men playing D.&D., they were engaged in a fast, high-octane version. The gamers were members of the Mexican Mafia, an insular crew that let Ford into their circle after they realized he could draw. The gang’s leader, Spider, pulled some strings, Ford recalls, and got him moved to a neighboring cell to serve as his personal artist. Ford earned some money drawing intricate Aztec designs in ink. He also began to join their D.&D. sessions, eventually becoming a Dungeon Master and running games all over the row.",
            "trackId": 1000630585709,
            "trackName": "The Sunday Read: ‘The Dungeons & Dragons Players of Death Row’",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-08T10:00:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "The first time Tony Ford played Dungeons & Dragons, he was a wiry Black kid who had never seen the inside of a prison. His mother, a police officer in Detroit, had quit the force and moved the family to West Texas. To Ford, it seemed like a different wo",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/bbca83fd-423a-4725-b36f-b651c63b18b7/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=bbca83fd-423a-4725-b36f-b651c63b18b7&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-sunday-read-the-dungeons-dragons-players-of-death-row/id1200361736?i=1000630585709&uo=4",
            "trackTimeMillis": 2069000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/bbca83fd-423a-4725-b36f-b651c63b18b7/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=bbca83fd-423a-4725-b36f-b651c63b18b7&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "d42b18f1-a84f-45a2-9aaa-610762324a6e",
            "description": "The ouster of House Speaker Kevin McCarthy a few days ago demonstrated how powerful a small group of hard-right House Republicans have become and how deep their grievances run. We speak to one of the eight republicans who brought down Mr. McCarthy: Representative Tim Burchett of Tennessee.",
            "trackId": 1000630422121,
            "trackName": "Chaos or Conscience? A Republican Explains His Vote to Oust McCarthy.",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-06T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "The ouster of House Speaker Kevin McCarthy a few days ago demonstrated how powerful a small group of hard-right House Republicans have become and how deep their grievances run. We speak to one of the eight republicans who brought down Mr. McCarthy: Repr",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/4d15f2ca-1b98-45bb-a79f-5159a478a9ed/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=4d15f2ca-1b98-45bb-a79f-5159a478a9ed&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/chaos-or-conscience-a-republican-explains-his-vote/id1200361736?i=1000630422121&uo=4",
            "trackTimeMillis": 1934000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/4d15f2ca-1b98-45bb-a79f-5159a478a9ed/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=4d15f2ca-1b98-45bb-a79f-5159a478a9ed&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "13da9641-ea5f-4946-b2f6-678861acb0fe",
            "description": "For decades, the world seemed to be winning the war against mosquitoes and tamping down the deadly diseases they carried. But in the past few years, progress has not only stalled, it has reversed. Stephanie Nolen, who covers global health for The Times, explains how the mosquito has once again gained the upper hand in the fight.",
            "trackId": 1000630292157,
            "trackName": "The Mosquitoes Are Winning",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-05T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "For decades, the world seemed to be winning the war against mosquitoes and tamping down the deadly diseases they carried. But in the past few years, progress has not only stalled, it has reversed. Stephanie Nolen, who covers global health for The Times,",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/b9f2d091-6cac-4ded-88f8-11718cc99829/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=b9f2d091-6cac-4ded-88f8-11718cc99829&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-mosquitoes-are-winning/id1200361736?i=1000630292157&uo=4",
            "trackTimeMillis": 1812000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/b9f2d091-6cac-4ded-88f8-11718cc99829/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=b9f2d091-6cac-4ded-88f8-11718cc99829&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "71d5ed89-20bc-4662-8d4d-af0970ffbcb1",
            "description": "The vote on Tuesday to remove Representative Kevin McCarthy as speaker of the House of Representative has left the chamber mired in chaos. Luke Broadwater, a congressional correspondent for The Times, describes what happened on an unprecedented day in American politics.",
            "trackId": 1000630157650,
            "trackName": "The Ouster of House Speaker Kevin McCarthy",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-04T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "The vote on Tuesday to remove Representative Kevin McCarthy as speaker of the House of Representative has left the chamber mired in chaos. Luke Broadwater, a congressional correspondent for The Times, describes what happened on an unprecedented day in A",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/c71be009-7378-41d4-bf7f-50017584659d/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=c71be009-7378-41d4-bf7f-50017584659d&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-ouster-of-house-speaker-kevin-mccarthy/id1200361736?i=1000630157650&uo=4",
            "trackTimeMillis": 1704000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/c71be009-7378-41d4-bf7f-50017584659d/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=c71be009-7378-41d4-bf7f-50017584659d&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "83cf378a-0773-493e-9c73-ba0d91067ecf",
            "description": "Sam Bankman-Fried, the fallen golden boy of crypto, is going on trial for what prosecutors are calling the largest financial fraud in recent history. David Yaffe-Bellany, a technology reporter for The Times, explains the case of the man who was supposed to save the cryptocurrency industry and what its outcome could tell us about why he did not.",
            "trackId": 1000630020064,
            "trackName": "Sam Bankman-Fried Goes on Trial",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-03T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "Sam Bankman-Fried, the fallen golden boy of crypto, is going on trial for what prosecutors are calling the largest financial fraud in recent history. David Yaffe-Bellany, a technology reporter for The Times, explains the case of the man who was supposed",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/a50e139d-a61f-4fc4-ad4b-ae00ad8cf6bc/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=a50e139d-a61f-4fc4-ad4b-ae00ad8cf6bc&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/sam-bankman-fried-goes-on-trial/id1200361736?i=1000630020064&uo=4",
            "trackTimeMillis": 1795000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/a50e139d-a61f-4fc4-ad4b-ae00ad8cf6bc/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=a50e139d-a61f-4fc4-ad4b-ae00ad8cf6bc&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "46caa0a6-92c1-4627-8d56-a2cc069f9b95",
            "description": "The U.S. government has filed a landmark antitrust lawsuit against Amazon, pointing to a set of familiar features that have made the internet retail giant so beloved by consumers. Karen Weise, a technology correspondent for The Times, explains why those features may actually be illegal.",
            "trackId": 1000629885202,
            "trackName": "Amazon’s Most Beloved Features May Turn Out to Be Illegal",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-02T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "The U.S. government has filed a landmark antitrust lawsuit against Amazon, pointing to a set of familiar features that have made the internet retail giant so beloved by consumers. Karen Weise, a technology correspondent for The Times, explains why those",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/80eb74ba-ac4f-4543-a6d8-7fe57a791e37/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=80eb74ba-ac4f-4543-a6d8-7fe57a791e37&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/amazons-most-beloved-features-may-turn-out-to-be-illegal/id1200361736?i=1000629885202&uo=4",
            "trackTimeMillis": 1353000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/80eb74ba-ac4f-4543-a6d8-7fe57a791e37/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=80eb74ba-ac4f-4543-a6d8-7fe57a791e37&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "e2948c20-5622-416e-9855-8e8a33c93b70",
            "description": "As China strove for a larger role on the international stage at the turn of the century, the arrival of the internet and a relatively relaxed political environment spurred a boom in self-expression. Many writers tested the boundaries of Chinese literary culture, experimenting with subjects that were quotidian but taboo on the page: corruption, sexual desire and evolving gender roles.\n\nIn today’s China, though, the pursuit of free expression requires writers to operate under the ever-watchful eye of a complex state surveillance system. This can resemble a high-stakes game of Whac-a-Mole in which writers, editors and online publishers try to outmaneuver the Chinese Communist Party’s apparatus, using any opportunity and resource at their disposal to chronicle life as they see it.",
            "trackId": 1000629789022,
            "trackName": "The Sunday Read: ‘The Art of Telling Forbidden Stories in China’",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-10-01T10:00:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "As China strove for a larger role on the international stage at the turn of the century, the arrival of the internet and a relatively relaxed political environment spurred a boom in self-expression. Many writers tested the boundaries of Chinese literary",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/a2bd8b3e-0d16-40ce-bb30-23100bd3d8da/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=a2bd8b3e-0d16-40ce-bb30-23100bd3d8da&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-sunday-read-the-art-of-telling-forbidden/id1200361736?i=1000629789022&uo=4",
            "trackTimeMillis": 2287000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/a2bd8b3e-0d16-40ce-bb30-23100bd3d8da/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=a2bd8b3e-0d16-40ce-bb30-23100bd3d8da&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "09228f15-cff4-427d-91ee-78eab7421800",
            "description": "A showdown between House Republicans and their leader, Speaker Kevin McCarthy, is heading toward a government shutdown.\n\nCarl Hulse, chief Washington correspondent for The Times, explains the causes and consequences of the looming crisis.\n\nGuest: Carl Hulse, is chief Washington correspondent for The New York Times.",
            "trackId": 1000629628475,
            "trackName": "Why the Government is About to Shut Down",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-09-29T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "A showdown between House Republicans and their leader, Speaker Kevin McCarthy, is heading toward a government shutdown.\n\nCarl Hulse, chief Washington correspondent for The Times, explains the causes and consequences of the looming crisis.\n\nGuest: Carl H",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/23649923-8612-4c83-9e5e-5264ecf4c0f8/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=23649923-8612-4c83-9e5e-5264ecf4c0f8&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/why-the-government-is-about-to-shut-down/id1200361736?i=1000629628475&uo=4",
            "trackTimeMillis": 1503000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/23649923-8612-4c83-9e5e-5264ecf4c0f8/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=23649923-8612-4c83-9e5e-5264ecf4c0f8&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "19ac8ceb-b80c-48f3-a030-8f05f3a05e07",
            "description": "Although one major strike, against Hollywood studios, was finally resolved this past week, another, against U.S. vehicle makers, is expanding. The plight of the autoworkers has now become a major point of contention in the presidential race.\n\nJonathan Weisman, a political correspondent for The Times, explains why the strike could be an essential test along the road to the White House.\n\nGuest: Jonathan Weisman, a political correspondent for The New York Times.",
            "trackId": 1000629494571,
            "trackName": "The Presidential Politics of the Autoworkers’ Strike",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-09-28T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "Although one major strike, against Hollywood studios, was finally resolved this past week, another, against U.S. vehicle makers, is expanding. The plight of the autoworkers has now become a major point of contention in the presidential race.\n\nJonathan W",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/a6883c53-7cbe-4956-8f69-59acc81cda7d/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=a6883c53-7cbe-4956-8f69-59acc81cda7d&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/the-presidential-politics-of-the-autoworkers-strike/id1200361736?i=1000629494571&uo=4",
            "trackTimeMillis": 1516000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/a6883c53-7cbe-4956-8f69-59acc81cda7d/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=a6883c53-7cbe-4956-8f69-59acc81cda7d&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        },
        {
            "country": "USA",
            "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/600x600bb.jpg",
            "artistIds": [
                121664449
            ],
            "closedCaptioning": "none",
            "collectionId": 1200361736,
            "collectionName": "The Daily",
            "genres": [
                {
                    "name": "Daily News",
                    "id": "1526"
                }
            ],
            "episodeGuid": "44c85452-f8b0-4361-80c4-bd2213f02370",
            "description": "After 148 days on strike, writers of movies and television are returning to work on Wednesday\n\n with an agreement in hand that amounts to a major win for organized labor in Hollywood.\n\nJohn Koblin, a media reporter for The Times, explains why the studios acquiesced to writers’ demands and what the deal means for the future of American entertainment.\n\nGuest: John Koblin, a media reporter for The New York Times.",
            "trackId": 1000629364876,
            "trackName": "Did Hollywood Writers Get Their Happy Ending?",
            "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/160x160bb.jpg",
            "episodeFileExtension": "mp3",
            "episodeContentType": "audio",
            "releaseDate": "2023-09-27T09:45:00Z",
            "feedUrl": "https://feeds.simplecast.com/54nAGcIl",
            "shortDescription": "After 148 days on strike, writers of movies and television are returning to work on Wednesday\n\n with an agreement in hand that amounts to a major win for organized labor in Hollywood.\n\nJohn Koblin, a media reporter for The Times, explains why the studio",
            "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/972d5fe4-7447-469e-ab6f-7c0770d79ac5/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=972d5fe4-7447-469e-ab6f-7c0770d79ac5&feed=54nAGcIl",
            "artistViewUrl": "https://itunes.apple.com/us/artist/the-new-york-times/121664449?mt=2&uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-daily/id1200361736?mt=2&uo=4",
            "trackViewUrl": "https://podcasts.apple.com/us/podcast/did-hollywood-writers-get-their-happy-ending/id1200361736?i=1000629364876&uo=4",
            "trackTimeMillis": 1550000,
            "contentAdvisoryRating": "Clean",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/1c/ac/04/1cac0421-4483-ff09-4f80-19710d9feda4/mza_12421371692158516891.jpeg/60x60bb.jpg",
            "previewUrl": "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/pfx.vpixl.com/6qj4J/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/972d5fe4-7447-469e-ab6f-7c0770d79ac5/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=972d5fe4-7447-469e-ab6f-7c0770d79ac5&feed=54nAGcIl",
            "kind": "podcast-episode",
            "wrapperType": "podcastEpisode"
        }
    ]
}