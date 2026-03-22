import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MembershipPlans from "@/components/MembershipPlans";
import TransformationGallery from "@/components/TransformationGallery";
import ClassSchedule from "@/components/ClassSchedule";
import TrainerProfiles from "@/components/TrainerProfiles";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MembershipPlans />
      <TransformationGallery />
      <ClassSchedule />
      <TrainerProfiles />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
