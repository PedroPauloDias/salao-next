import { useEffect, useState } from 'react';
import {WhatsappFloat} from "../WhatsappFloat"

export const WhatsApp = () => {
  const [showButton, setShowButton] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {showButton && <WhatsappFloat />}       
 
    </div>
  );
};

