import React from "react";
import "../App.css";
import FooterCList from "./FooterCList";
import InfoCard from "./InfoCard";
function Footer() {
  return (
    <footer className="footer">
      <div className="mx-10 py-9 flex justify-evenly">
        <FooterCList
          title="About"
          list={[
            "Contact Us",
            "About Us",
            "Careers",
            "Flipkart Stories",
            "Press",
            "Flipkart Wholesale",
          ]}
        />
        <FooterCList
          title="Help"
          list={["Payment", "Shipping", "Returns", "FAQS"]}
        />
        <FooterCList
          title="Policy"
          list={[
            "Return Policy",
            "Terms Of Use",
            "Security",
            "Privacy",
            "Sitemap",
            "EPR Compliance",
          ]}
        />
        <FooterCList title="Social" list={["Facebook", "Twitter", "YouTube"]} />
        <InfoCard
          title="Mail Us:"
          info="Flipkart Internet Private Limited,
Buildings Alyssa, Begonia &
Clove Embassy Tech Village,
Outer Ring Road, Devarabeesanahalli Village,
Bengaluru, 560103,
Karnataka, India"
        />
        <InfoCard
          title="Registered Office Address:"
          info="Flipkart Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India

CIN : U51109KA2012PTC066107

Telephone: 1800 202 9898

"
        />
      </div>
      <hr className="text-gray-800" />
    </footer>
  );
}

export default Footer;
