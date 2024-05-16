import React from "react";

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const initials = name
    .split(" ")
    .map(part => part.charAt(0))
    .join("");

  // const randomColor = () => {
  //   const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-purple-500", "text-yellow-500"];
  //   return colors[Math.floor(Math.random() * colors.length)];
  // };

  return (
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center text-white bg-black text-lg font-semibold 
     
      }`}
    >
      {initials}
    </div>
  );
};

export default Avatar;