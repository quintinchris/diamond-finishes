// import { Hero } from './components/Hero';
// import { Hero2 } from './components/Hero2';
// import { Hero3 } from './components/Hero3';
import { Hero4 } from './components/Hero4';
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Form } from '../../components/Form/Form';
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { ContactForm } from '../Contact/components/ContactForm';


export function HomePage() {
    return (
        <>
        <NavBar />
        <Hero4 />
        <Features />
        <Team />
        <Testimonials />
        <ContactForm />
        <Footer />
        </>
    )
}