import { Fragment } from "react";
import about from "../../assets/images/banner/services2.jpg";
import "../../assets/style/about_home.css";

export default function AboutUsHome() {
    return (
        <Fragment>
            <div className="w-70 mr-auto">
                <p>About us</p>
                <div className="d-grid grid-two-one gap-3">
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </h1>
                    <div></div>
                    <img src={about} alt="" className="w-100 h-100" />
                    <p className="line-7px m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur est molestiae sequi doloremque fugiat
                        quisquam quia saepe libero distinctio repudiandae. Eius
                        provident, totam quidem labore obcaecati voluptatem
                        ipsam, eveniet autem doloremque reiciendis nulla!
                        Reprehenderit repellat atque autem assumenda aspernatur,
                        quam maxime accusamus voluptate asperiores at
                        perferendis odit rem, expedita voluptas
                    </p>
                </div>
                <div className="d-grid grid-one-one translateY-7">
                    <div></div>
                    <div className="bg-purple text-white pt-3 pe-2 ps-2 pb-2">
                        <div className="d-grid grid-one-one gap-2">
                            <div className="flex">
                                <h4>People</h4>
                                <h1 className="pt-0p5 pb-0p5">254+</h1>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                            </div>
                            <div className="flex">
                                <h4>People</h4>
                                <h1 className="pt-0p5 pb-0p5">254+</h1>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                            </div>
                            <div className="d-flex"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
