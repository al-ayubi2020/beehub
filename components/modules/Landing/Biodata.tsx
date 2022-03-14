import Image from "next/image";
import PpImage from "../../../public/img/S__13279259_0_square.jpg";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Biodata = () => {
  return (
    <div className="h-screen md:flex">
      <div className="h-2/5 md:h-full md:w-1/2 w-full  flex flex-col items-center justify-center">
        <div className=" h-56 w-56 md:h-80 md:w-80 mt-5 rounded-full shadow-2xl">
          <Image src={PpImage} className="rounded-full" />
        </div>
      </div>
      <div className="h-3/5 w-full px-10 md:h-full md:w-1/2 md:flex md:items-center md:justify-center ">
        <div className="h-full w-full md:h-fit ">
          <div className="text-2xl space-y-2 text-center">
            <p className="">Hey there! {"I'm"}</p>
            <p className="font-bold">Muhammad Al Ayubi</p>
            <div className="flex space-x-1 items-center justify-center">
              <p>aka</p>
              <p className="bg-red-300 text-white px-2 rounded-sm">Bee</p>
              <p>from</p>
              <p>Bakung</p>
            </div>
            <p className="text-sm">
              {"I'm"} currently focusing on web development and {"can't"} wait
              to see what projects will be faced on in the future
            </p>
          </div>
          <div className="justify-start mt-5">
            <p className="text-base font-bold mb-2">Contact Person</p>
            <p>
              <AlternateEmailIcon /> al.ayubi2020@gmail.com
            </p>
            <p>
              <GitHubIcon /> al-ayubi2020
            </p>
            <p>
              <InstagramIcon /> al.ayubi2020
            </p>
            <p>
              <ChatBubbleOutlineIcon /> iyoubee (Line)
            </p>
            <p>
              <WhatsAppIcon /> 081290153849
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
