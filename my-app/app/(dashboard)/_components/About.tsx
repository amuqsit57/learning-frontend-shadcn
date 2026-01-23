import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/shop1.jpg"
              alt="Winter Sale Shopping"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Winter Sale Up To 50% Off
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio
          </p>

         
        </div>
      </div>
    </div>
  )
}

export default About
