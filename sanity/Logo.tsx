import React from "react";
import Image from "next/image";

export function StudioLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <Image 
        src="/logo/image.png" 
        alt="The Seekers International" 
        width={30} 
        height={30} 
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
