import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

 const NarvBar = () =>{
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href='/'>
          <Image src="/logo.svg" alt="show case logo"  width={115} height={43} />
        </Link>
        <ul className="hidden xl:flex text-small gap-7">
            {
              NavLinks.map((link) => (<Link className="" href={link.href} key={link.key} >{link.text}</Link>))
            }
        </ul>
      </div>
    </nav>
  )
}

export default NarvBar;