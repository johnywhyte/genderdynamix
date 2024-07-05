import React from "react";
import Image from "next/image";
import PaddingWrapper from "@/components/layouts/PaddingWrapper";
import Link from "next/link";

function Footer() {
  const careers = [
    { text: "Blogs", key: "blogs" },
    {
      text: "Press",
      key: "press",
    },
    { text: "Partnership", key: "partnership" },
    { text: "Support", key: "support" },
    { text: "Help Center", key: "helpcenter" },
  ];

  const usefulLinks = [
    { text: "About Us", key: "aboutus" },
    {
      text: "Contact Us",
      key: "contactus",
    },
    { text: "Projects", key: "projects" },
    { text: "Terms Of Service", key: "termsofservice" },
    { text: "Privacy Policy", key: "privacypolicy" },
  ];

  
  // const contacts = [
  //   { text: "1629 K Street, Suite 300, Washington DC 20006", key: "#" },
  //   { text: "(470) 796-0376", key: "#" },
  //   { text: "Info@tradestack.finance", key: "#" },
  // ];


  return (
    <div className="py-8">
      <PaddingWrapper>
        <div className="pb-8 lg:flex justify-between">
          <div className="relative h-[60px] w-[240px] mb-8 cursor-pointer">
            <Image
              src="/images/darklogo.png"
              alt="1UBank Logo"
              fill
              className="object-contain "
              priority
              sizes="100vw"
            />
          </div>
          <div className="flex gap-14">
            <div>
              <h6 className="text-lg font-medium leading-[26px] tracking-[-0.36px]">
                Useful Links
              </h6>
              <ul className="md:mt-5">
                {usefulLinks.map((item) => (
                  <li className="mt-2" key={item.text}>
                    <Link href={item.key} passHref legacyBehavior>
                      <a
                        className="text-sm tracking-[-0.4px] "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-lg font-medium leading-[26px] tracking-[-0.36px]">
                Careers
              </h6>
              <ul className="md:mt-5">
                {careers.map((item) => (
                  <li className="mt-2" key={item.text}>
                    <Link href={item.key} passHref legacyBehavior>
                      <a
                        className="text-sm tracking-[-0.4px] "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h6 className="text-lg font-medium leading-[26px] tracking-[-0.36px]">
                CONTACT
              </h6>
              <ul className="md:mt-5">
                {contacts.map((item) => (
                  <li className="mt-2" key={item.text}>
                    <Link
                      href={`/${item.key}`}
                      className="text-sm tracking-[-0.4px] "
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
 */}
          </div>
        </div>
        <p className="text-sm font-light">
          © Copywrite genderdynamics 2024, All Rights Reserved.
        </p>
      </PaddingWrapper>
    </div>
  );
}

export default Footer;
