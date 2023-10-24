import { Loader } from "common/components/loader/Loader";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ILoaderContext, LoaderContext } from "../../App";

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
    const { isLoading }: ILoaderContext = useContext(LoaderContext) as ILoaderContext;
    return (
        <HeaderWrapper to="/">
            <HeaderTitle>Podcaster</HeaderTitle>
            {isLoading ? <Loader /> : null}
        </HeaderWrapper>
    )
}