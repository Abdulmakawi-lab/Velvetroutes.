import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import DestinationsList from '@/pages/DestinationsList';
import DestinationDetail from '@/pages/DestinationDetail';
import ServiceDetail from '@/pages/ServiceDetail';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Testimonials from '@/pages/Testimonials';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-navy-900 antialiased">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<DestinationsList />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
