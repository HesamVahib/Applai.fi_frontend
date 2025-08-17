import { useState, useEffect } from "react";

export default function ScrollListener() {

  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // console.log(`Current Scroll Position: ${currentScrollY}`);

        if (currentScrollY > 100) {
            setScrollDirection('down');
        } else if (currentScrollY <= 100) {
            setScrollDirection('up');
        }
      };
    
      window.addEventListener('scroll', handleScroll);

      return () => {
        console.log("Removing scroll event listener");
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return scrollDirection;
}
  