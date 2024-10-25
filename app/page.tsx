import Appointment from "@/components/pages/home/Appointment";
import CustomerReview from "@/components/pages/home/CustomerReview";
import Hero from "@/components/pages/home/Hero";
import ImageSection from "@/components/pages/home/ImageSection";


export default function Home() {
  return (
    <>
      <Hero />
      <CustomerReview />
      <ImageSection />
      <Appointment />     
    </>
    
  );
}
