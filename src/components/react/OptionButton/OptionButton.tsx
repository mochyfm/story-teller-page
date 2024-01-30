import React from "react";

interface CommonButtonProps {
  to: string;
  text: string;
  "color:purple"?: boolean;
  "color:cyan"?: boolean;
  "color:green"?: boolean;
  "color:pink"?: boolean;
  "color:orange"?: boolean;
  "color:teal"?: boolean;
  "color:yellow"?: boolean;
}

const OptionButton = ({
  to,
  text,
  "color:purple": purpleColor,
  "color:cyan": cyanColor,
  "color:green": greenColor,
  "color:pink": pinkColor,
  "color:orange": orangeColor,
  "color:teal": tealColor,
  "color:yellow": yellowColor,
}: CommonButtonProps) => {
  const updateStyles = () => {
    let newStyles = {
      gradientColorFrom: "",
      gradientColorTo: "",
      hoverColor: "",
      borderStyles: "",
      bgStyles: "",
      focusRing: "",
      darkFocusRing: "",
      shadowStyles: "",
    };

    switch (true) {
      case purpleColor:
        newStyles = {
          gradientColorFrom: "from-purple-500",
          gradientColorTo: "to-purple-600",
          hoverColor: "hover:bg-gradient-to-br",
          borderStyles: "border-2 border-purple-600",
          bgStyles: "bg-transparent",
          focusRing: "focus:ring-4 focus:outline-none focus:ring-purple-300",
          darkFocusRing: "dark:focus:ring-purple-800",
          shadowStyles: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
        };
        break;
      case cyanColor:
        newStyles = {
          gradientColorFrom: "from-cyan-400",
          gradientColorTo: "to-cyan-600",
          hoverColor: "hover:bg-gradient-to-br",
          borderStyles: "border-2 border-cyan-500",
          bgStyles: "bg-transparent",
          focusRing: "focus:ring-4 focus:outline-none focus:ring-cyan-300",
          darkFocusRing: "dark:focus:ring-cyan-800",
          shadowStyles: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
        };
        break;
      case greenColor:
        newStyles = {
          gradientColorFrom: "from-green-400",
          gradientColorTo: "to-green-600",
          hoverColor: "hover:bg-gradient-to-br",
          borderStyles: "border-2 border-green-500",
          bgStyles: "bg-transparent",
          focusRing: "focus:ring-4 focus:outline-none focus:ring-green-300",
          darkFocusRing: "dark:focus:ring-green-800",
          shadowStyles: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
        };
        break;
      case pinkColor:
        newStyles = {
          gradientColorFrom: "from-pink-400",
          gradientColorTo: "to-pink-600",
          hoverColor: "hover:bg-gradient-to-br",
          borderStyles: "border-2 border-pink-500",
          bgStyles: "bg-transparent",
          focusRing: "focus:ring-4 focus:outline-none focus:ring-pink-300",
          darkFocusRing: "dark:focus:ring-pink-800",
          shadowStyles: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
        };
        break;
      case tealColor:
        newStyles = {
          gradientColorFrom: "from-teal-400",
          gradientColorTo: "to-teal-600",
          hoverColor: "hover:bg-gradient-to-br",
          borderStyles: "border-2 border-teal-500",
          bgStyles: "bg-transparent",
          focusRing: "focus:ring-4 focus:outline-none focus:ring-teal-300",
          darkFocusRing: "dark:focus:ring-teal-800",
          shadowStyles: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80",
        };
        break;
      case yellowColor:
        newStyles = {
          gradientColorFrom: "from-lime-200",
          gradientColorTo: "to-lime-500",
          hoverColor: "hover:bg-gradient-to-br hover:text-gray-800",
          borderStyles: "border-2 border-lime-500",
          bgStyles: "bg-transparent",
          focusRing: "focus:ring-4 focus:outline-none focus:ring-lime-300",
          darkFocusRing: "dark:focus:ring-lime-800",
          shadowStyles: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
        };
        break;
      case orangeColor:
        newStyles = {
          gradientColorFrom: "from-red-400",
          gradientColorTo: "to-red-600",
          hoverColor: "hover:bg-gradient-to-br",
          borderStyles: "border-2 border-red-500",
          bgStyles: "bg-transparent",
          focusRing: "focus:ring-4 focus:outline-none focus:ring-red-300",
          darkFocusRing: "dark:focus:ring-red-800",
          shadowStyles: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
        };
        break;
      default:
        break;
    }

    return {
      defaultStyles:
        "relative inline-flex items-center justify-center px-4 py-2 mb-2 me-2 text-white overflow-hidden text-sm font-medium rounded-lg group",
      ...newStyles,
    };
  };

  const buttonStyles = updateStyles();

  return (
    <a
      className={`${buttonStyles.defaultStyles} ${buttonStyles.gradientColorFrom} ${buttonStyles.gradientColorTo} ${buttonStyles.hoverColor} ${buttonStyles.borderStyles} ${buttonStyles.bgStyles} ${buttonStyles.focusRing} ${buttonStyles.darkFocusRing} ${buttonStyles.shadowStyles}`}
      href={to}
    >
      {text}
    </a>
  );
};

export default OptionButton;
