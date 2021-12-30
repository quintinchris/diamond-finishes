import { Hero } from './components/Hero';
import { Hero2 } from './components/Hero2';
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';


export function HomePage() {
    return (
        <>
        <Hero2 />
        <Features />
        <Team />
        <Testimonials />
        </>
    )
}