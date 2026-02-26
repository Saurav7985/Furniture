import React from 'react'
import '../styles/footer.scss'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__container">

        {/* Brand */}
        <div className="footer__brand">
          <h2>Vinayak</h2>
          <p>Crafting comfort & elegance for modern homes.</p>
        </div>

        {/* Important Links */}
        <div className="footer__links">
          <h3>Important Links</h3>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        {/* Contact Info */}
        <div className="footer__contact">
          <h3>Contact Us</h3>
          <p>Email: vinayak@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Bhopal, Madhya Pradesh</p>
        </div>

        {/* Social Media */}
        <div className="footer__social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
          </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Vinayak. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer