import { Fragment } from "react";
import "../../assets/style/main.css";
import "../../assets/style/navbar_no_cart.css";
import NavbarFunction from "../../utils/navbar_no_cart/NavbarFunc";

export default function Navbar() {
    function handleClickMenu(event) {
        if (event.target.checked === true) {
            NavbarFunction.topHamburgerCheck(event);
            NavbarFunction.ctrHamburgerCheck(event);
            NavbarFunction.btmHamburgerCheck(event);
            NavbarFunction.menusShow(event);
        } else {
            NavbarFunction.topHamburgerUncheck(event);
            NavbarFunction.ctrHamburgerUncheck(event);
            NavbarFunction.btmHamburgerUncheck(event);
            NavbarFunction.menusHide(event);
        }
    }

    return (
        <Fragment>
            <div className="fixed top-0 left-0 right-0 z999">
                <div className="nav-info p-0 m-0 bg-lg-gray">
                    <div className="d-grid grid-one-one m-hide">
                        <div className="d-flex gap-1">
                            <div className="d-flex">
                                <p>Monday - Friday 08.00 - 17.00</p>
                            </div>
                            <div className="d-flex">
                                <p>+62 812 1321 1321</p>
                            </div>
                            <div className="d-flex">
                                <p>Slipi Tower Building, Jakarta</p>
                            </div>
                        </div>
                        <div className="d-flex"></div>
                    </div>
                </div>
                <nav className="d-grid grid-one-two align-center">
                    <div className="icon-cont">
                        <div>
                            <h3>Icon</h3>
                        </div>
                        <div className="d-hide d-flex flex-column align-center just-self-end">
                            <input
                                type="checkbox"
                                className="check pointer"
                                onChange={(e) => handleClickMenu(e)}
                            />
                            <div>
                                <div className="hamb-icon top-icon"></div>
                                <div className="hamb-icon ct-icon"></div>
                                <div className="hamb-icon bt-icon"></div>
                            </div>
                        </div>
                    </div>
                    <div className="menus-cont d-flex just-self-end gap-3 align-center">
                        <p className="">Home</p>
                        <p className="">Services</p>
                        <p className="">About</p>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
}
