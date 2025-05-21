'use client';

import { useEffect, useState } from 'react';

export default function AnimatedText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState('');
  const [animationKey, setAnimationKey] = useState(0); // used to restart animation

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.substring(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayText('');
          setAnimationKey((prev) => prev + 1); // trigger re-animation
        }, 3000); // wait 3 seconds before restart
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, animationKey]);

  return <h1 className={className}>{displayText}</h1>;
}
