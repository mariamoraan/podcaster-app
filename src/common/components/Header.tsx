import { Loader } from "common/components/loader/Loader";
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderTitle = styled.p`
    color: var(--accent-color);
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTitle>Podcaster</HeaderTitle>
            <Loader />
        </HeaderWrapper>
    )
}