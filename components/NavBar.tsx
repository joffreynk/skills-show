import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";

 const NarvBar = async() =>{
  const session =  await getCurrentUser();
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
      <div className="flexCenter gap-4">
        {
          session? (
            <>
            <Image src={``} alt="userPhoto' width={50} height={50}" />
            <Link href='/create-project'>Share your work</Link>

            </>
          ): <AuthProviders />
        }
      </div>
    </nav>
  )
}

export default NarvBar;