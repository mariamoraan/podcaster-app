import React from 'react'
import { Header } from "../Header"
import "./styless.css"

export const Layout = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    return (
        <>
            <Header />
            <main className='layout-wrapper'>
                {children}
            </main>
        </>
    )
}