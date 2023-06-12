import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import ChangeLog from './components/pages/ChangeLog'
import Faq from './components/pages/Faq'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<Home />} />
      <Route path="/our-menu" element={<Home />} />
      <Route path="/meet-the-chef" element={<Home />} />
      <Route path="/the-chef-single" element={<Home />} />
      <Route path="/gallery" element={<Home />} />
      <Route path="/gallery/view" element={<Home />} />
      <Route path="/reserve" element={<Home />} />
      <Route path="/shop" element={<Home />} />
      <Route path="/blog" element={<Home />} />
      <Route path="/blog/view" element={<Home />} />
      <Route path="/contact-us" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/recipe" element={<Home />} />
      <Route path="/licenses" element={<Home />} />
      <Route path="/changelog" element={<ChangeLog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App