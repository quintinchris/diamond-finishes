import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { Form } from './components/Form';
import { WorkFlow } from './components/Workflow';


export function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <WorkFlow />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
}