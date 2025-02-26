import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>BEACHES AND WILDLIFE.</h1>
          
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon cursor-pointer" />
            <FaTwitter className="icon cursor-pointer" />
            <FaYoutube className="icon cursor-pointer" />
            <FaPinterest className="icon cursor-pointer" />
            <FaInstagram className="icon cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Partnerships</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Newsroom</li>
            <li className="cursor-pointer">Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
          <p>Refer to <a  className='text-blue-700' href="http://www.travelunbounded.com"> www.travelunbounded.com</a> for terms and conditions, vaccination requirements, and more.</p>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
