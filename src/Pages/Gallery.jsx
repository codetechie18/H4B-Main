import React from 'react';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-6">
          {/* First Row */}
          <div className="rounded-xl overflow-hidden">
  {/* Image */}
  <div className="aspect-[4/3]">
    <img
      src="/img/img1.jpg"
      alt="Hackers Coding"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text below image */}
  <div className="text-center mt-6">
    <h2 className="text-[80px] font-bold text-green-500 leading-none">500+</h2>
    <p className="text-3xl text-green-500 font-semibold">Hackers</p>
  </div>
</div>


          <div className="rounded-xl row-span-4 h-auto mt- overflow-hidden">
  {/* Top Image */}
  <div className="h-[600px]">
    <img
      src="/img/game3.jpg"
      alt="Team Work"
      className="w-full h-full object-cover rounded-t-xl"
    />
  </div>

  {/* Centered Text */}
  <div className="p-6 text-center mt-6">
    <h2 className="text-[80px] font-bold text-green-500 leading-none">24+</h2>
    <p className="text-3xl text-green-500 font-semibold">Hack Hours</p>
  </div>

  {/* Bottom Image */}
  <div className="mt-2">
    <img
      src="/img/workshop2.jpg"
      alt="Bottom Image"
      className="w-full h-90 object-cover rounded-b-xl"
    />
  </div>
</div>



          {/* Second Row */}
          <div className="flex items-center justify-center bg-transparent text-center p-4 pl-6">
            <div>
              <h2 className="text-[80px] font-bold text-green-500 leading-none">50+</h2>
              <p className="text-3xl text-green-500 font-semibold">Partners</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
            <img
              src="/img/img2.jpg"
              alt="Speaker"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third Row */}

          <div>
               <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
            <img
              src="/img/img1.jpg"
              alt="Hackers Coding"
              className="w-full h-full object-cover"
            />
          </div>
            </div>
            <div className="rounded-xl row-span-4 overflow-hidden">
  {/* Image */}
  <div className="h-[400px] mt-10">
    <img
      src="/img/game1.jpg"
      alt="Team Work"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text below image */}
  <div className="text-center mt-40">
    <h2 className="text-[80px] font-bold text-green-500 leading-none">10+</h2>
    <p className="text-3xl text-green-500 font-semibold">Successful Event</p>
  </div>
</div>

         

          
          
         
          
 
   
  
 


          {/* Fourth Row */}
          <div className="flex items-center justify-center bg-transparent gap-40 text-center p-4 pl-6">
             <img
              src="/img/img4.jpg"
              alt="Group Photo"
              className="w-full h-full object-cover"
            /> 
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
