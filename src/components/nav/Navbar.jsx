import { Fragment, useEffect } from "react";
import "../../assets/style/main.css";
import "../../assets/style/navbar_no_cart.css";
import NavbarFunction from "../../utils/navbar_no_cart/NavbarFunc";

import clock from "../../assets/images/icon/clock.png";
import phone from "../../assets/images/icon/telephone-call.png";
import pin from "../../assets/images/icon/pin.png";
import fb from "../../assets/images/icon/facebook-gr.png";
import ig from "../../assets/images/icon/instagram-gr.png";
import youtube from "../../assets/images/icon/youtube-gr.png";
import wa from "../../assets/images/icon/whatsapp-gr.png";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

export default function Navbar() {
    const navMenus = useRef();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            navMenus.current.childNodes[0].classList.add("active");
            navMenus.current.childNodes[0].classList.add("default");
        } else if (location.pathname === "/services") {
            navMenus.current.childNodes[1].classList.add("active");
            navMenus.current.childNodes[1].classList.add("default");
        } else if (location.pathname === "/about") {
            navMenus.current.childNodes[2].classList.add("active");
            navMenus.current.childNodes[2].classList.add("default");
        }
    }, []);

    function handleClickMenu(event) {
        if (event.target.checked === true) {
            NavbarFunction.topHamburgerCheck(event);
            NavbarFunction.ctrHamburgerCheck(event);
            NavbarFunction.btmHamburgerCheck(event);
            NavbarFunction.menusShow(event);
            NavbarFunction.invertLogo(event);
        } else {
            NavbarFunction.topHamburgerUncheck(event);
            NavbarFunction.ctrHamburgerUncheck(event);
            NavbarFunction.btmHamburgerUncheck(event);
            NavbarFunction.menusHide(event);
            NavbarFunction.invertLogoBack(event);
        }
    }

    return (
        <Fragment>
            <div className="fixed top-0 left-0 right-0 z999">
                <div className="nav-info bg-lg-gray">
                    <div className="w-70 mr-auto d-grid grid-four-one py-5px">
                        <div className="m-hide-flex gap-2">
                            <div className="d-flex align-center gap-1">
                                <img src={clock} alt="" className="icon" />
                                <p>Monday - Friday 08.00 - 17.00</p>
                            </div>
                            <div className="d-flex align-center gap-1">
                                <img src={phone} alt="" className="icon" />
                                <p>+62 812 1321 1321</p>
                            </div>
                            <div className="d-flex align-center gap-1">
                                <img src={pin} alt="" className="icon" />
                                <p>Slipi Tower Building, Jakarta</p>
                            </div>
                        </div>
                        <div className="w-100 d-flex gap-1 just-end align-center m-just-start">
                            <img src={fb} alt="" className="icon" />
                            <img src={ig} alt="" className="icon" />
                            <img src={youtube} alt="" className="icon" />
                            <img src={wa} alt="" className="icon" />
                        </div>
                    </div>
                </div>
                <nav className="bg-white">
                    <div className="w-70 mr-auto d-grid grid-one-two align-center">
                        <div className="icon-cont align-center just-center">
                            <div className="d-flex align-center h-100">
                                <h3>LOGO</h3>
                            </div>
                            <div className="d-hide-flex flex-column just-self-end align-center just-center mb-1">
                                <input
                                    type="checkbox"
                                    className="check pointer"
                                    onChange={(e) => handleClickMenu(e)}
                                />
                                <div>
                                    <div className="hamb-icon top-icon"></div>
                                    <div className="hamb-icon ct-icon my-7px"></div>
                                    <div className="hamb-icon bt-icon"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="menus-cont d-flex just-self-end gap-3 align-center pt-1 pb-1"
                            ref={navMenus}
                        >
                            <Link to={"/"} className="pointer">
                                Home
                            </Link>
                            <Link to={"/services"} className="pointer">
                                Services
                            </Link>
                            <Link to={"/about"} className="pointer">
                                About
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
}
