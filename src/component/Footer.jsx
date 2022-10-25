import { FiFacebook } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className="social">
          <li className="social_item">
            <a href="#" className="social_link">
              <BiPhone className="social_link-icon" />
            </a>
          </li>
          <li className="social_item">
            <a href="#" className="social_link">
              <BsInstagram className="social_link-icon" />
            </a>
          </li>
          <li className="social_item">
            <a href="#" className="social_link">
              <FiFacebook className="social_link-icon" />
            </a>
          </li>
          <li className="social_item">
            <a href="#" className="social_link">
              <GoMail className="social_link-icon" />
            </a>
          </li>
          <li className="social_item">
            <a href="#" className="social_link">
              <TbBrandTelegram className="social_link-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
