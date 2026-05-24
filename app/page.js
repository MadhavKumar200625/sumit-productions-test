import Image from "next/image";
import Hero from "./home/Hero";
import FeaturedWork from "./home/FeaturedWork";
import Services from "./home/Services";
import TestimonialsSection from "./home/Testimonials";
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <FeaturedWork></FeaturedWork>
      <Services></Services>
      <TestimonialsSection></TestimonialsSection>
      
    </div>
  );
}
