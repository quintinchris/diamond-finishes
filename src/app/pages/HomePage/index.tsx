import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { ContactForm } from '../Contact/components/ContactForm';
import { WorkFlow } from './components/Workflow';


export function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <WorkFlow />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}