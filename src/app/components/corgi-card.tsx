import React, { ReactElement } from 'react';

interface CorgiCardProps {
  image: string;
  text: string;
}

export default function CorgiCard({ image, text }: CorgiCardProps): ReactElement {
  return (
    <div className="bg-white border-gray-400 mb-8 mx-4 p-4">
      <img
        alt={ text }
        className="block border-gray-400 h-auto mb-4 object-cover w-full md:h-64 md:w-48"
        src={ `/images/${ image }`}
        />

      <div className="w-full md:w-48">
        <p className="break-normal px-4 text-base text-center text-gray-700">
          { text }
        </p>
      </div>
    </div>
  );
}
