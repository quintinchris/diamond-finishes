import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Form } from './components/Form';
import { WorkFlow } from './components/Workflow';
import { Layout } from "../../components/Layout/Layout";


export function HomePage() {
  return (
    <Layout>
      <Hero />
      <Features />
      <WorkFlow />
      <Testimonials />
      <Form />
    </Layout>
  );
}