import React from 'react';
import { Layout } from './Component/Layout/Layout';
import HomeSection from './Component/HomeSection/HomeSection';
import Blog from './Component/Blog/Blog';
import PlateformSolution from './Component/PlateformSolution/PlateformSolution';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './Component/NavBar/Navbar';
import Footer from './Component/Footer/Footer';
import Changelog from './Component/Changelog/Changelog';
import BlogDetail from './Component/BlogDetail/BlogDetail';
import ContactForm from './Component/ContactForm/ContactForm';
import Faq from './Component/Faq/Faq';
function App() {
  return (
    <Router>
      <Layout>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeSection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/plateform" element={<PlateformSolution />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<HomeSection />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;

