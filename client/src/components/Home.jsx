import React from 'react'
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { Team } from "./components/Team";
import { Particle } from "./components/Particle";

const Home = () => {
    return (
            <div>
                <Hero />
                <Particle />
                <Team />
                <Contact />
            </div>
    )
}

export default Home
