import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './orbitfs/components/HomePage'
import AboutPage from './orbitfs/about/components/AboutPage';
import ServicesPage from './orbitfs/services/components/ServicesPage';
import FAQPage from './orbitfs/faq/components/FAQPage';
import ContactUsPage from './orbitfs/contact/pages/ContactUsPage';
import Blog from './orbitfs/blog/blog';
import Post from './orbitfs/blog/Post';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/services' element={<ServicesPage />}/>
      <Route path='/faq' element={<FAQPage />}/>
      <Route path='/contact' element={<ContactUsPage />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/post' element={<Post />}/>
    </Routes>
   </Router>
  )
}

export default App
