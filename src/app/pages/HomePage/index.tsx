import { Hero } from './components/Hero';
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
        <Hero />
        <Features />
        <Team />
        <Testimonials />
        <ContactForm />
        <Footer />
        </>
    )
}