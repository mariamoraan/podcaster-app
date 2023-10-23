import React, { createContext, useContext } from "react";
import "./styless.css";


const INITIAL = {
    title: undefined,
    description: undefined,
    artists: undefined,
    imageUrl: undefined,
}

const LateralBarContext = createContext<Props>(INITIAL);

interface Props {
    title: string | undefined,
    description: string | undefined,
    artists: string | undefined,
    imageUrl: string | undefined,
    link?: string,
}

const LateralBarImage = () => {
    const {imageUrl} = useContext(LateralBarContext)
    if (!imageUrl) return <></>
    return (
        <div className="imageWrapper">
            <img src={imageUrl} className="image" />
        </div>
    )
}

const LateralBarTitle = () => {
    const {title, artists, link} = useContext(LateralBarContext)
    if (!title || !artists) return <></>
    return (
        <div className="titleWrapper">
            <span className="title">{link ? <a href={link} className="link">{title}</a> : title}</span>
            <span className="subtitle">by {link ? <a href={link} className="link">{artists}</a> : artists}</span>
        </div>
    )
}

const LateralBarDescription = () => {
    const {description} = useContext(LateralBarContext)
    if (!description) return <></>
    return (
        <div className="descriptionWrapper">
            <p className="title">Description</p>
            <p className="subtitle">{description}</p>
        </div>
    )
}

export const LateralBar = (props: Props) => {
    return (
        <LateralBarContext.Provider value={props}>
            <div className="wrapper">
                <LateralBarImage />
                <LateralBarTitle />
                <LateralBarDescription />
            </div>
        </LateralBarContext.Provider>
    )
}
