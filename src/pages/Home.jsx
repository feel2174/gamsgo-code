import Hero from '../components/Hero';
import ServiceGrid from '../components/ServiceGrid';
import TrustSection from '../components/TrustSection';
import Guide from '../components/Guide';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <TrustSection />
            <ServiceGrid />
            <Guide />
            <FAQ />
        </>
    );
};

export default Home;
