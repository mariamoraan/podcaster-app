import { afterEach, describe, expect, it, jest } from '@jest/globals';
import fetchMock from 'jest-fetch-mock';
import { mockLocalStorage, mockTop100PodcastResponse } from 'top_podcasts/mocks';
import * as Services from "top_podcasts/services";
import { getTop100Podcasts } from 'top_podcasts/services';
require('jest-fetch-mock').enableMocks()

fetchMock.doMock()
const spyFetchTop100Podcasts =  jest.spyOn(Services, 'fetchTop100Podcasts')
const spySaveLocalStoragePodcasts = jest.spyOn(Services, 'saveLocalStoragePodcasts')
const spyGetLocalStoragePodcasts =  jest.spyOn(Services, 'getLocalStoragePodcasts')

describe('getTop100Podcasts module', () => {
    afterEach(() => {
        jest.clearAllMocks()
        jest.resetModules()
        jest.restoreAllMocks()
    })
    it('should call fetchTop100Podcasts', async() => {
        fetchMock.mockResponses(JSON.stringify(mockTop100PodcastResponse))
        spyGetLocalStoragePodcasts.mockImplementationOnce(() => null)
        spySaveLocalStoragePodcasts.mockImplementationOnce(() => {})
        await getTop100Podcasts();
        expect(spyFetchTop100Podcasts).toHaveBeenCalled();
    });
    it('should not call fetchTop100Podcasts', async() => {
        fetchMock.mockResponses(JSON.stringify(mockTop100PodcastResponse))
        spySaveLocalStoragePodcasts.mockImplementationOnce(() => {})
        // one hour difference between local storage timestamp and current timestamp
        spyGetLocalStoragePodcasts.mockImplementationOnce(() => ({
            ...mockLocalStorage, 
            timestamp: Date.now() - (3600*1000) 
        }))
        await getTop100Podcasts();
        expect(spyFetchTop100Podcasts).not.toHaveBeenCalled();
    });
});