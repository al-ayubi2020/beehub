import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-[#2b3d53] py-3">
      <div className="w-full h-fit flex items-center justify-center space-x-4">
        <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center">
          <InstagramIcon />
        </div>
        <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center">
          <WhatsAppIcon />
        </div>
        <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center">
          <ChatBubbleOutlineIcon />
        </div>
        <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center">
          <GitHubIcon />
        </div>
      </div>
      <div className="h-fit w-full flex items-center justify-center">
        <p className="text-4xl text-red-300 font-extrabold">BEEHUB</p>
      </div>
      <div className="h-fit w-full flex items-center justify-center">
        <p className="text-white">made by Bee</p>
      </div>
    </div>
  );
};

export default Footer;
