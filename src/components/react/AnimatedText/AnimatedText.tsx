import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface CardProps {
  text: string | string[];
  time?: "fast" | "normal" | "slow" | number;
  className: string;
}

const AnimatedText = ({ text, className, time = "normal" }: CardProps) => {
  const [animatedText, setAnimatedText] = useState<string>("");

  const setTimeAmount = () => {
    switch (time) {
      case "slow":
        return 120;
      case "normal":
        return 60;
      case "fast":
        return 20;
      default:
        return typeof time === "number" ? time : 60;
    }
  };

  const [timeMeasure] = useState<number>(setTimeAmount());

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setAnimatedText((prevText) => {
        if (index < text.length) {
          index += 1;
          return prevText + text[index - 1];
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, timeMeasure);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <>
      <ReactMarkdown className={`text-white w-1/2 ${className}`}>
        {animatedText}
      </ReactMarkdown>
    </>
  );
};

export default AnimatedText;
