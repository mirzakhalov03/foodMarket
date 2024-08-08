import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BsTicketPerforated } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import Link from "next/link";

import Image from "next/image";

const Sider = () => {
  return (
    <div className="sider w-[100px] min-h-screen bg-[#ffffffcb] p-5 rounded-r-3xl border-r-white">
      <br />
      <Image src="/fire.svg" alt="logo" width={100} height={100} />
      <br />
      <br />
      <br />
      <div className="mt-5 items-center justify-center flex flex-col gap-10">
        <Link href="/" legacyBehavior>
          <AiOutlineHome size={28} />
        </Link>
        <Link href="/messages" legacyBehavior>
          <BiMessageSquareDetail size={28} />
        </Link>
        <Link href="/liked" legacyBehavior>
          <AiOutlineHeart size={28} />
        </Link>
        <Link href="/cart" legacyBehavior>
          <BiShoppingBag size={28} />
        </Link>
        <Link href="/ticket" legacyBehavior>
          <BsTicketPerforated size={28} />
        </Link>
        <Link href="/settings" legacyBehavior>
          <FiSettings size={28} />
        </Link>
      </div>
    </div>
  );
};

export default Sider;
