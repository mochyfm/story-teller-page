import ReactMarkdown from "react-markdown";
import './AnimatedButton.css'

interface AnimatedButtonProps {
  className?: string;
  link?: string;
  text: string;
}

const AnimatedButton = ({ className, text, link }: AnimatedButtonProps) => {
  return (
    <a
      className={`flex flex-row rounded-md px-5 py-3 mt-10 self-start btn-animation btn-decoration ${className} hover:cursor-pointer`} href={link}
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </a>
  );
};

export default AnimatedButton;
