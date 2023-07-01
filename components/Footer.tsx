import Image from "next/image";

const Footer = ()=>{
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image alt="show your skills" src="/logo-purple.svg" width={115} height={38}/>
        </div>
        <p className="text-start text-sm font-normal mt-5 max-w-xs">
          SHow skills is the world's leading community for creating and share your skills with talents ad stakeholders
        </p>
      </div>
    </footer>
  )
}

export default Footer;