import { Fragment } from "react";
import "../../assets/style/footer.css";
import address from "../../assets/images/icon/address-home.png";
import address_pin from "../../assets/images/icon/address.png";

import fb from "../../assets/images/icon/facebook.png";
import ig from "../../assets/images/icon/instagram.png";
import youtube from "../../assets/images/icon/youtube.png";
import wa from "../../assets/images/icon/whatsapp.png";

export default function Footer() {
    return (
        <Fragment>
            <div className="w-70 mr-auto d-grid grid-one-one-one-one text-white gap-1">
                <div className="mt-2">
                    <h1>LOGO</h1>
                </div>
                <div className="mt-2">
                    <h3>Main Office</h3>
                    <div className="d-flex gap-1 align-center">
                        <img src={address} alt="" className="icon" />
                        <p>Slipi Tower Building, Jakarta</p>
                    </div>
                    <div className="d-flex gap-1 align-center">
                        <img src={address_pin} alt="" className="icon" />
                        <p>111011010101</p>
                    </div>
                </div>
                <div className="mt-2">
                    <h3>Useful Links</h3>
                    <p>Our Services</p>
                    <p>Our Team</p>
                    <p>Portofolio</p>
                    <p>Shortcodes</p>
                    <p>Typography</p>
                    <p>Privacy policy</p>
                </div>
                <div className="mt-2">
                    <h3>Socials</h3>
                    <div className="d-flex gap-1 mt-1">
                        <img src={fb} alt="" className="icon" />
                        <img src={ig} alt="" className="icon" />
                        <img src={youtube} alt="" className="icon" />
                        <img src={wa} alt="" className="icon" />
                    </div>
                </div>
            </div>
            <div className="w-70 mr-auto d-grid grid-one-one text-white">
                <p className="mt-2">Logo@2021, All Right Reserved</p>
            </div>
        </Fragment>
    );
}
