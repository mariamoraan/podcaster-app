import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 8px 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const Title = styled.p`
    font-weight: bold;
    font-size: 24px;
`

interface Props {
    episodesNumber: number,
    className?: string, 
}


export const EpisodesNumber = (props: Props) => {
    const {episodesNumber, className = ''} = props;
    return (
        <Wrapper className={className}>
            <Title>Episodes: {episodesNumber}</Title>
        </Wrapper>
    )
}