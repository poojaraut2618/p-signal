import React from 'react';
import image1 from '../services/ai.png'

const ImageBox = () => {
  const items = [
    {
      imgSrc: {image1},
      title: 'Title 1',
      description: 'Description for item 1.',
    },
    {
      imgSrc: 'app.png',
      title: 'Title 2',
      description: 'Description for item 2.',
    },
    {
      imgSrc: 'inte.png',
      title: 'Title 3',
      description: 'Description for item 3.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex bg-gray-100 p-4 rounded-lg shadow-md">
            {/* Image */}
            
            <div className="absolute top-2 left-2 text-blue-600">
                <img src={item.imgSrc} alt={item.title} className="w-16 h-16 object-contain mr-4" />
            </div>

            {/* Text (Title and Description) */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBox;
