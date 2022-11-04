import { Fragment } from "react";
import "../../assets/style/footer.css";
import marketing from "../../assets/images/banner/services8.jpg";

export default function Footer() {
    return (
        <Fragment>
            <div className="bg-gray pt-3 pb-3 text-white">
                <div>
                    <div className="w-70 mr-auto d-grid grid-one-one-one-one ">
                        <div>
                            <h1>LOGO</h1>
                        </div>
                        <div>
                            <h3>Main Office</h3>
                            <div>
                                <p>Slipi Tower Building, Jakarta</p>
                            </div>
                            <div>
                                <p>111011010101</p>
                            </div>
                        </div>
                        <div>
                            <h3>Useful Links</h3>
                            <p>Our Services</p>
                            <p>Our Team</p>
                            <p>Portofolio</p>
                            <p>Shortcodes</p>
                            <p>Typography</p>
                            <p>Privacy policy</p>
                        </div>
                        <div>
                            <h3>Socials</h3>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="w-70 mr-auto d-grid grid-one-one-one-one bg-gray">
                    <p>Logo@2021, All Right Reserved</p>
                </div>
            </div>
        </Fragment>
    );
}
