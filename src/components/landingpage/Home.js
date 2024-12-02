import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import OurClients from './OurClients'
import OurWork from './OurWork'
import OurProjects from './OurProjects'
import OurProficiency from './OurProficiency'
import VideoDection from './VideoDection'

const Home = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [])
    return (
        <>
            <HeroSection />
            <OurClients/>
            <OurProjects/>
            <OurWork/>
            <OurProficiency/>
            <VideoDection/>
        </>
    )
}

export default Home