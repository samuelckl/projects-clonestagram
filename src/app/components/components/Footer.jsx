import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-900 text-white p-1 w-full mt-4 flex justify-center items-center shadow-md">
      <div className="flex items-center gap-2">
        <FaRegCopyright className="text-ml" />
        <h2 className="text-sm">2025 Clonstagram - Sam Kin Lok Chan. All rights reserved.</h2>
      </div>
    </div>
  );
}

export default Footer;