import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/myshuplogo.png";

const Footer = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("shop-section");
    if (element) {
      const offset = -120;
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY + offset;

      setTimeout(function () {
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <footer className="mt-4 px-8 pt-6 max-w-4xl mx-auto ">
      <div className="flex flex-col sm:flex-row justify-between items-start">
        <div>
          <img
            className="w-[108px] h-[27px] my-4"
            src={Logo}
            alt="myshup Logo"
          />
        </div>
        <div className="flex flex-row flex-wrap gap-6 text-base my-4">
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">Product</h3>
            <ul className="flex flex-col gap-2">
              <Link to="/">
                <div
                  className="opacity-60 hover:opacity-100 cursor-pointer"
                  onClick={() => handleClickScroll()}
                >
                  <li>Shop</li>
                </div>{" "}
              </Link>
              <Link to="/">
                {" "}
                <div
                  className="opacity-60 hover:opacity-100 cursor-pointer"
                  onClick={() => handleClickScroll()}
                >
                  <li>Men's Clothing</li>
                </div>{" "}
              </Link>
              <Link to="/">
                {" "}
                <div
                  className="opacity-60 hover:opacity-100 cursor-pointer"
                  onClick={() => handleClickScroll()}
                >
                  <li>Women's Clothing</li>
                </div>{" "}
              </Link>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">Brand</h3>
            <ul className="flex flex-col gap-2">
              <Link className="opacity-60 hover:opacity-100" to="/">
                <li>About Us</li>
              </Link>
              <Link className="opacity-60 hover:opacity-100" to="/">
                <li>Blog</li>
              </Link>
              <Link className="opacity-60 hover:opacity-100" to="/">
                <li>Newsletter</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">Support</h3>
            <ul className="flex flex-col gap-2">
              <Link className="opacity-60 hover:opacity-100" to="/">
                <li>Customer Support</li>
              </Link>
              <Link className="opacity-60 hover:opacity-100" to="/">
                <li>Product Support</li>
              </Link>
              <Link className="opacity-60 hover:opacity-100" to="/">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* bottom Info */}
      <div className="mt-6 flex flex-row py-3 text-base gap-2 items-center">
        <p className="opacity-60">Legal terms and information:</p>

        <Link className="hover:underline" to={"/"}>
          Privacy policy
        </Link>

        <p className="hidden sm:block  opacity-60"> · </p>

        <Link className="hover:underline" to={"/"}>
          Terms and Condition
        </Link>
      </div>
      {/* copyright info */}
      <div className="flex flex-row justify-between items-center py-[18px] border-t border-[#00000033]">
        <p className="text-sm opacity-60">© myshup 2023</p>

        {/* Footer Social Icons */}
        <div className="flex flex-row gap-2 items-center">
          <div>
            <a
              href="https://www.facebook.com/chidi.nweke.735/
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="opacity-60 hover:opacity-100"
                alt="facebook"
                src="https://prismic-io.s3.amazonaws.com/mishmash/9026de85-0f0c-484e-81c9-7853a928b75d_Facebook.svg"
              />
            </a>{" "}
          </div>
          <div>
            <a
              href="https://www.instagram.com/iam_ngoddy/
          "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="opacity-60 hover:opacity-100"
                alt="Instagram"
                src="https://prismic-io.s3.amazonaws.com/mishmash/b25034ec-8e9b-41b3-a950-c66caa7b70d6_Instagram.svg"
              />
            </a>{" "}
          </div>
          <div>
            <a
              href="https://twitter.com/NwekeChidi_G"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="opacity-60 hover:opacity-100"
                alt="Twitter"
                src="https://prismic-io.s3.amazonaws.com/mishmash/efd0a28c-eb4b-4565-b4a8-1e4941320a81_Twitter.svg"
              />
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
