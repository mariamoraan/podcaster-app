import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import * as Services from '../services';

import { mockFetchPodcastDetails, mockStoragedPodcastId, mockUnStoragedPodcastId } from 'podcast_detail/mocks';
import { IPodcast } from 'podcast_detail/models';
import { getPodcastDetails } from '../services';
require('jest-fetch-mock').enableMocks()

//const spyGetLocalStoragePodcastsDetails = jest.spyOn(Services, 'getLocalStoragePodcastsDetails')

describe('getPodcastDetails module', () => {
    beforeEach(() => {
        jest.clearAllMocks()
        jest.resetModules()
        jest.restoreAllMocks()
    })
    it('Podcast does not exist in loal storage. It should call fetchPodcastDetails', async() => {
        const spyFetchPodcastDetails =  jest.spyOn(Services, 'fetchPodcastDetails')
        const spyGetLocalStoragePodcastDetail =  jest.spyOn(Services, 'getLocalStoragePodcastDetail')
        const spySaveLocalStoragePodcastDetail = jest.spyOn(Services, 'saveLocalStoragePodcastDetail')


        spyFetchPodcastDetails.mockImplementation((): Promise<IPodcast> => {return Promise.resolve(mockFetchPodcastDetails)})
        const mockLocalStoragePodcastsDetails = jest.mock(
            require('podcast_detail/mocks').mockLocalStoragePodcastsDetails
        )

        spyGetLocalStoragePodcastDetail.mockImplementation(() => (mockLocalStoragePodcastsDetails[mockUnStoragedPodcastId]))
        spySaveLocalStoragePodcastDetail.mockImplementation(() => {})
        await getPodcastDetails(mockUnStoragedPodcastId)
        expect(spyFetchPodcastDetails).toHaveBeenCalled();
    });
    it('Podcast exists in local storage and timestamp > 24h. Should call fetchPodcastDetails', async() => {
        const spyFetchPodcastDetails =  jest.spyOn(Services, 'fetchPodcastDetails')
        const spyGetLocalStoragePodcastDetail =  jest.spyOn(Services, 'getLocalStoragePodcastDetail')
        const spySaveLocalStoragePodcastDetail = jest.spyOn(Services, 'saveLocalStoragePodcastDetail')

        spyFetchPodcastDetails.mockImplementation((): Promise<IPodcast> => {return Promise.resolve(mockFetchPodcastDetails)})
        const mockLocalStoragePodcastsDetails = jest.mock(
            require('podcast_detail/mocks').mockLocalStoragePodcastsDetails
        )

        spyGetLocalStoragePodcastDetail.mockImplementation(() => mockLocalStoragePodcastsDetails[mockStoragedPodcastId])
        spySaveLocalStoragePodcastDetail.mockImplementation(() => {})
        await getPodcastDetails(mockStoragedPodcastId)
        expect(spyFetchPodcastDetails).toHaveBeenCalled();
    })
    it('Podcast exists in local storage and timestamp < 24h. Should not call fetchPodcastDetails', async() => {
        const spyFetchPodcastDetails =  jest.spyOn(Services, 'fetchPodcastDetails')
        const spyGetLocalStoragePodcastDetail =  jest.spyOn(Services, 'getLocalStoragePodcastDetail')
        const spySaveLocalStoragePodcastDetail = jest.spyOn(Services, 'saveLocalStoragePodcastDetail')

        const mockLocalStoragePodcastsDetails = jest.mock(
            require('podcast_detail/mocks').mockLocalStoragePodcastsDetails
        )

        spyGetLocalStoragePodcastDetail.mockImplementation(() => ({...mockLocalStoragePodcastsDetails[mockStoragedPodcastId], timestamp: Date.now()}))
        spySaveLocalStoragePodcastDetail.mockImplementation(() => {})
        await getPodcastDetails(mockStoragedPodcastId)
        expect(spyFetchPodcastDetails).not.toHaveBeenCalled();
    })
});