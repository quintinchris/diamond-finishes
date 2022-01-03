import { Hero } from './components/Hero';
import { Hero2 } from './components/Hero2';
import { Hero3 } from './components/Hero3';
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Form } from '../../components/Form';


export function HomePage() {
    return (
        <>
        <Hero3 />
        <Features />
        <Team />
        <Testimonials />
        <Form />
        </>
    )
}