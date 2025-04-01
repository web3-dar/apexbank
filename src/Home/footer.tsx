import fc from '../assets/fdic.png'
import cd from '../assets/ehl.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#123689] text-white py-10">
      <div className="container mx-auto flex  flex-wrap gap-3 justify-evenly">
        {/* Company Info */}
        <div>
          <p className="text-sm leading-relaxed w-[400px]">
            We believe in building a brighter future together. We offer you personalized financial solutions, 
            unwavering support, and transformational, not transactional banking. Our mission is for everyone in 
            our community to grow and thrive. Experience a partner who truly cares about your journey and success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold uppercase">Quicklinks</h3>
          <ul className="mt-2 space-y-2 text-gray-200 text-sm">
            <li><a href="#" className="hover:text-gray-100">Personal Banking</a></li>
            <li><a href="#" className="hover:text-gray-100">Business Banking</a></li>
            <li><a href="#" className="hover:text-gray-100">Loans & Mortgages</a></li>
            <li><a href="#" className="hover:text-gray-100">Security Center</a></li>
            <li><a href="#" className="hover:text-gray-100">News</a></li>
            <li><a href="#" className="hover:text-gray-100">Financial Literacy</a></li>
            <li><a href="#" className="hover:text-gray-100">About</a></li>
            <li><a href="#" className="hover:text-gray-100">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-100">Careers</a></li>
          </ul>
        </div>

        {/* Social Media & Logos */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-lg font-semibold uppercase">Social Media</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="bg-white p-2 rounded-full text-[#123689] hover:opacity-75">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-white p-2 rounded-full text-[#123689] hover:opacity-75">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Logos */}
         
        </div>


<div className="mt-6 flex space-x-4">
            <img src={fc} alt="FDIC Member" className="h-8" />
            <img src={cd} alt="Equal Housing Lender" className="h-8" />
          </div>
       
      </div> 

      {/* Disclaimer */}
      <div className="mt-10 px-6 text-gray-300 text-xs text-center max-w-5xl mx-auto leading-relaxed">
        Important information: Apex Bank will never ask you for personal information, like account numbers and 
        or passwords through e-mail. Be aware of e-mails asking you to download programs; Apex Bank will never 
        ask you to do so. Apex Bank will NEVER ask for gift cards as payment for any service. Do not respond to 
        any e-mail asking you to update your personal information online or through the phone. Only utilize the 
        Bank numbers found on our website. Links to Online Banking, ATM locator and FDIC are links to external 
        websites. Please note that Apex Bank cannot be held responsible for other websites’ privacy policies or 
        content. The Federal Depository Insurance Corporation (FDIC) has sent out an alert to consumers, companies 
        and financial institutions about certain fraudulent e-mails which supposedly come from, or are related to, 
        financial institutions. Such fraudulent e-mails are scams that use the internet as a vehicle and incorporate 
        certain news such as mergers, acquisitions, and or bank closures to appear legitimate to obtain information.
      </div>

      <div className="mt-6  text-center m-auto text-sm">
        <div className="text-white  font-semibold">
          <a href="#" className="hover:underline">USA Patriot Act</a> |
          <a href="#" className="hover:underline">Terms of Use</a> |
          <a href="#" className="hover:underline">Privacy Policy</a> |
          <a href="#" className="hover:underline">Digital Privacy Statement</a>
        </div>
        <div className="mt-2 text-gray-300 text-xs text-center">
          Copyright © 2025 Apex Bank. All Rights Reserved.  
          <br />
          Website Design and Development by <span className="font-semibold">VIEO Design</span>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
