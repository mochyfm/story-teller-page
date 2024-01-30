import ReactMarkdown from "react-markdown";
import "./AnimatedButton.css";

interface AnimatedButtonProps {
  className?: string;
  to?: string;
  text: string;
}

const AnimatedButton = ({ className, text, to }: AnimatedButtonProps) => {
  return (
    <a
      className={`btn flex flex-row rounded-md px-5 py-3 mt-10 self-start ${className} hover:cursor-pointer`}
      href={to}
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </a>
  );
};

export default AnimatedButton;
