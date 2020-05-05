import React, { ReactElement } from 'react';

interface CorgiCardProps {
  image: string;
  text: string;
}

export default function CorgiCard({ image, text }: CorgiCardProps): ReactElement {
  return (
    <div style={{background: `/images/${ image }`}}>
      <div>
        { text }
      </div>
    </div>
  );
}
