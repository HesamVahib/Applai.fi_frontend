import { useState, useEffect, useRef } from "react";

export default function ScrollListener() {

  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // console.log(`Current Scroll Position: ${currentScrollY}`);

        if (currentScrollY > lastScrollY.current) {
            setScrollDirection('down');
        } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection('up');
        }
        lastScrollY.current = currentScrollY;
      };
    
      window.addEventListener('scroll', handleScroll);

      return () => {
        console.log("Removing scroll event listener");
        window.removeEventListener('scroll', handleScroll);
      };
  }, []); // Add scrollDirection to dependency array

  return scrollDirection;
}
  