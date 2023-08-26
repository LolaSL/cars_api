"use client"

import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@constants";

const currentYear = new Date().getFullYear();

const FooterLink = ({ link }) => (
  <Link href={link.url} className="text-gray-500">
    {link.title}
  </Link>
);

const FooterSection = ({ title, links }) => (
  <div className="footer__link">
    <h3 className="font-bold">{title}</h3>
    <div className="flex flex-col gap-5">
      {links.map((link) => (
        <FooterLink key={link.title} link={link} />
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/car-logo.png"
            alt="logo"
            width={118}
            height={14}
            className="object-contain"
          />
        </div>
        <div className="footer__links">
          {footerLinks.map((item) => (
            <FooterSection key={item.title} title={item.title} links={item.links} />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>&copy; {currentYear} Copyright: Car LOFT</p>

        <div className="footer__copyrights-link p-3">
          <FooterLink link={{ title: "Privacy & Policy", url: "/privacypolicy" }} />
          <FooterLink link={{ title: "Terms & Condition", url: "/termsconditions" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  


