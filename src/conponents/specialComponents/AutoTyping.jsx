import React, { useState, useEffect } from 'react';

const AutoTyping = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    let timer;
  
    const typeText = () => {
      if (isReversed) {
        if (typedText.length === 0) {
          setIsReversed(false);
          return;
        }
        setTypedText((prevText) => prevText.slice(0, -1));
      } else if (typedText.length === text.length) {
        setIsReversed(true);
        return;
      } else {
        setTypedText((prevText) => text.slice(0, prevText.length + 1));
      }
    };
  
    timer = setInterval(() => {
      typeText();
    }, 100); // Adjust typing speed here (milliseconds)
  
    if (typedText === text && !isReversed) {
      clearInterval(timer);
      setTimeout(() => {
        setIsReversed(true);
      }, 3000); // Delay before reversing (milliseconds)
    }
  
    return () => {
      clearInterval(timer);
    };
  }, [text, isReversed, typedText]);
  

  return (
    <div>
      <h3 className="home__subtitle">
        {typedText}
    </h3>
    </div>
  );
};

export default AutoTyping;
