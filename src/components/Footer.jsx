import { FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#343434] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} NITHISH. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            NITHISH KUMAR R
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
            href="https://github.com/nithishkumarr05"
            className="hover:text-[#fe5617]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="http://linkedin.com/in/nithish-kumar-r-0156b9292"
            className="hover:text-[#fe5617]"
          >
            <FaLinkedin size={29} />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
