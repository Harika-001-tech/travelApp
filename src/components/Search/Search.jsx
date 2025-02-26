import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Big Cats Week at Maasai Mara - Diwali 2023 special 
          </h2>
          <p className="py-4">
          Overview - November is one of the Best times to visit Kenya, especially to visit its prime park, Maasai Mara. This is because the large migratory herds would have returned to Tanzania and now the Big cats have to venture long distances to hunt their prey. 

November is also the season of short rains. This makes the plains of Maasai Mara lush green. The skies are truly dramatic and colourful. The Sun rise and Sun sets during November at Mara is simply breath taking. 

November is also a time for holidaying and getting together with our families. And the icing on the cake is we have curated this itinerary for such an affordable costs without compromising on any of the services. This is commemorate our first year anniversary of opening up operations at Nairobi. 

Join us on this unforgettable journey of your life time. 

          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">GET ADDITIONAL 10% LEFT</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label htmlFor="">Destination</label>
            <select className="border rounded-md p-2 cursor-pointer">
              <option value="">Kenya</option>
              <option value="">KeyWest </option>
              <option value="">Maasai Maraa</option>
              <option value="">Cozumel</option>
              <option value="">Jamaica</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-in</label>
            <input
              className="border rounded-md p-2 cursor-pointer"
              type="date"
            />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-out</label>
            <input
              className="border rounded-md p-2 cursor-pointer"
              type="date"
            />
          </div>
          <div>
            <button className="w-full my-4 cursor-pointer">
              Rates & Availabilities
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
