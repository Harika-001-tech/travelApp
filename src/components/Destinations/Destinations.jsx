import React from 'react';
import Borabora from '../../assets/Cheetah_with_cubs.jpg';
import Borabora2 from '../../assets/GnusAndZebrasInMaraMasai.jpg';
import Keywest from '../../assets/Mara_River_Massai_Mara.jpg';
import Maldives from '../../assets/Wbeest_Mara.jpg';
import Maldives2 from '../../assets/Masai_Mara_at_Sunset.jpg';

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>Discover Wildlife In A Luxury Vehicle With Expert Guides</h1>
      <p className="py-4">On the Kenya Safari</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={Borabora}
          alt="Borabora"
        />
        <img
          className="w-full h-full object-cover "
          src={Borabora2}
          alt="Borabora2"
        />
        <img
          className="w-full h-full object-cover "
          src={Maldives}
          alt="Maldives"
        />
        <img
          className="w-full h-full object-cover "
          src={Maldives2}
          alt="Maldives2"
        />
        <img
          className="w-full h-full object-cover "
          src={Keywest}
          alt="Keywest"
        />
      </div>
    </div>
  );
};

export default Destinations;
