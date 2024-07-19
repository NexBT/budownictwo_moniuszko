import Image from 'next/image';
import Header from './components/Header'; // Importuj Header z właściwego katalogu
import Logo from './components/Logo'; // Importuj Logo z właściwego katalogu
import AboutSection from './components/AboutSection'; // Importuj AboutSection z właściwego katalogu
import OfferSection from './components/OfferSection'; // Importuj OfferSection z właściwego katalogu
import InvestmentSection from './components/InvestmentSection'; // Importuj OfferSection z właściwego katalogu
import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Importujemy ikony
import Footer from './components/Footer'; // Importuj Footer z właściwego katalogu

export const metadata = {
  title: 'Usługi budowlane Poznań - Firma ogólnobudowlana w Poznaniu | Firma budowlana Moniuszko',
  description: 'BUDOWNICTWO MONIUSZKO - Profesjonalne usługi budowlane, sprzedaż domów i mieszkań, rekuperacja oraz inwestycje. Skontaktuj się z nami, aby dowiedzieć się więcej!',
  keywords: 'budownictwo, sprzedaż domów, rekuperacja, inwestycje, usługi budowlane',
  alternates: {
    canonical: 'https://budownictwomoniuszko.com/',
  },
  openGraph: {
    title: 'Usługi budowlane Poznań - Firma ogólnobudowlana w Poznaniu | Firma budowlana Moniuszko',
    description: 'BUDOWNICTWO MONIUSZKO - Profesjonalne usługi budowlane, sprzedaż domów i mieszkań, rekuperacja oraz inwestycje. Skontaktuj się z nami, aby dowiedzieć się więcej!',
    url: 'https://budownictwomoniuszko.com/',
    type: 'website',
    images: [
      {
        url: 'https://www.twojastrona.pl/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
  },
};
const HomePage = () => {
  return (
    <>
      <div className="relative h-screen">
        <Header />
        <div className="absolute inset-0">
          <Image
            src="/images/photo-house.webp"
            alt="House"
            fill
            className="object-cover brightness-75 z-[-1]"
          />
        </div>
        <div className="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-start items-center md:ml-[20vw] ml-[0vw]">
          <Logo className="transform scale-125 md:scale-150 lg:scale-250 mb-4 md:mb-0" />
          <div className="qwitcher-grypen-regular text-6xl md:text-6xl lg:text-9xl text-[#fff] text-center md:text-left mt-[0vw] md:mt-[12vw]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Twój dom nasza pasja
          </div>
        </div>
        {/* Ikony po prawej stronie ekranu */}
        <div className="fixed right-4 top-2/3 md:top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          <a href="#" className="group">
            <div className="bg-[#3C3232] p-2 rounded-full text-white transition-colors duration-300 cursor-pointer group-hover:bg-[#1877F2]">
              <FaFacebookF className="w-6 h-6" />
            </div>
          </a>
          <a href="#" className="group">
            <div className="bg-[#3C3232] p-2 rounded-full text-white transition-colors duration-300 cursor-pointer group-hover:bg-[#E4405F]">
              <FaInstagram className="w-6 h-6" />
            </div>
          </a>
        </div>

      </div>
      <AboutSection />
      <OfferSection />
      <InvestmentSection />
      <Footer />

    </>
  );
};

export default HomePage;
