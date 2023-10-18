import React from 'react';
import styled from "styled-components";
import { useFilterPodcast } from 'top_podcasts/hooks';
import { PodcastCard } from '../podcast_card/PodcastCard';

const Wrapper = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const ListWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    list-style: none;
`

const FilterWrapper = styled.div`
    width: min-content;
    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: 8px;
`

const PodcastCounter = styled.span`
    padding: 2px 4px;
    background: var(--accent-color);
    color: white;
    border-radius: 12px;
`

const Filter = styled.input`
    padding: 2px 4px;
    width: min-content;
`

export const PodcastsList = () => {

    const {filter, filteredPodcasts, setFilter} = useFilterPodcast();

    return (
        <Wrapper>
            <FilterWrapper>
                <PodcastCounter>{filteredPodcasts.length}</PodcastCounter>
                <Filter 
                    placeholder='Filter podcasts...'
                    value={filter}
                    onChange={(event) => {
                        setFilter(event.target.value)
                    }}
                />
            </FilterWrapper>
            <ListWrapper>
                {
                    filteredPodcasts.map((podcast) => <PodcastCard 
                    key={podcast.id.attributes["im:id"]} 
                    title={podcast.title.label} 
                    author={podcast["im:artist"].label}
                    imageUrl={podcast["im:image"][2].label}
                    id={podcast.id.attributes["im:id"]}
                    />)
                }
            </ListWrapper>
        </Wrapper>
    )
}