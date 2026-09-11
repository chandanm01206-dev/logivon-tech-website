import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Feedback from '@/components/Feedback';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';

export default function Page() {
    return (
        <main className="bg-bg-dark min-h-screen">
            <Navbar />
            <Hero />
            <About />
            {/* Server component — fetches real repos from api.github.com/users/logivontech-Dev/repos */}
            <Work />
            <Feedback />
            <ComingSoon />
            <Footer />
        </main>
    );
}