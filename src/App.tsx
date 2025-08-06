import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => (
  <div className="p-8 text-center text-xl">Welcome to Our Team's Website!</div>
);
const OurTeam = () => (
  <div className="p-8 text-center text-xl">Meet Our Team</div>
);
const Publications = () => (
  <div className="p-8 text-center text-xl">Publications and Research</div>
);
const Gallery = () => (
  <div className="p-8 text-center text-xl">Photo and Video Gallery</div>
);
const MerchStore = () => (
  <div className="p-8 text-center text-xl">Buy Official Merch</div>
);
const ContactUs = () => (
  <div className="p-8 text-center text-xl">Contact Us</div>
);

const Navbar = () => (
  <nav className="flex justify-center gap-6 bg-gray-100 p-4 text-lg shadow-md">
    <Link to="/">Home</Link>
    <Link to="/our-team">Our Team</Link>
    <Link to="/publications">Publications</Link>
    <Link to="/gallery">Gallery</Link>
    <Link to="/merch-store">Merch Store</Link>
    <Link to="/contact">Contact Us</Link>
  </nav>
);

export default function App() {
  return (
    <Router>
      <div className="bg-black">
        hi
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/merch-store" element={<MerchStore />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}
