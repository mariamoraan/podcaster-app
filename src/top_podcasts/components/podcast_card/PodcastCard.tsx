import React from 'react';
import styled from "styled-components";

const IMAGE_HEIGHT = 120;

const Wrapper = styled.div`
    position: relative;
    padding-top: calc(24px + ${IMAGE_HEIGHT/2}px);
    text-decoration: none;
`;

const Image = styled.img`
    position: absolute;
    top: 25px;
    left: 0;
    right: 0;
    margin: auto;
    height: ${IMAGE_HEIGHT}px;
    width: ${IMAGE_HEIGHT}px;
    border-radius: 100%;
    object-fit: cover;
`

const DataWrapper = styled.div`
    padding: 24px;
    padding-top: calc(24px + ${IMAGE_HEIGHT/2}px);
    text-align: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const Title = styled.p`
    margin-bottom: 12px;
    font-weight: bold;
    color: var(--primary);
`

const Author = styled.p`
    color: var(--primary-light-300);
`

interface Props {
    title: string,
    author: string,
    imageUrl: string,
    id: string,
}

export const PodcastCard = (props: Props) => {
    const {title, author, imageUrl, id} = props;

    return (
        <Wrapper>
            <Image src={imageUrl} />
            <DataWrapper>
                <Title>{title}</Title>
                <Author>Author: {author}</Author>
            </DataWrapper>
        </Wrapper>
    )
}