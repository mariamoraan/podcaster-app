import { Loader } from "common/components/loader/Loader";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled(Link)`
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
`;

const HeaderTitle = styled.p`
    color: var(--accent-color);
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const Header = () => {
    return (
        <HeaderWrapper to="/">
            <HeaderTitle>Podcaster</HeaderTitle>
            <Loader />
        </HeaderWrapper>
    )
}