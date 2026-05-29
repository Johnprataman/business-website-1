import Nav from "./components/Nav";
import Hero from "./components/Hero";
import DailyBakes from "./components/DailyBakes";
import MenuSection from "./components/MenuSection";
import PreOrder from "./components/PreOrder";
import Booking from "./components/Booking";
import Promotions from "./components/Promotions";
import Reviews from "./components/Reviews";
import FreshnessGuarantee from "./components/FreshnessGuarantee";
import OnlineStore from "./components/OnlineStore";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DailyBakes />
        <MenuSection />
        <PreOrder />
        <Booking />
        <Promotions />
        <Reviews />
        <FreshnessGuarantee />
        <OnlineStore />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
