import { footerLinks } from "@/constants";
import Image from "next/image";

const FooterColumn = ()=>(<div className="footer_column">
  <h4 className="font-semibold">Title</h4>
  <ul className="flex flex-col gap-2 font-normal">
    links
  </ul>
</div>);

const Footer = ()=>{
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image alt="show your skills" src="/logo-purple.svg" width={115} height={38}/>
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            SHow skills is the world's leading community for creating and share your skills with talents ad stakeholders
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
        </div>
      </div>
    </footer>
  )
}

export default Footer;