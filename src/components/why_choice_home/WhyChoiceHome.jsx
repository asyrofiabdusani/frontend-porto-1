import { Fragment } from "react";
import why from "../../assets/images/banner/Home.jpg";
import "../../assets/style/why_choice.css";

export default function WhyChoiceHome() {
    return (
        <Fragment>
            <div>
                <div className="w-70 mr-auto">
                    <div className="d-grid grid-one-one gap-3">
                        <img src={why} alt="" className="w-100 h-100" />
                        <div>
                            <p>WHY CHOICE US</p>
                            <h1>Lorem ipsum dolor sit amet consectetur</h1>
                            <p className="line-7px">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptatum animi, vero,
                                exercitationem ipsam sint quidem odit commodi
                                consequatur debitis esse ratione nam non minus
                                aliquid ipsa. Odio quaerat hic alias dolor
                                soluta atque eaque natus quae vel, eligendi iure
                                ipsam dolore eius iusto ratione voluptate magni,
                                tenetur maxime inventore a!
                            </p>
                            <div className="mt-3">
                                <h4 className="mb-1">Locally Recommended</h4>
                                <div className="d-flex just-end w-80 bg-purple">
                                    <p>80%</p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h4 className="mb-1">
                                    Project Complete Successfully
                                </h4>
                                <div className="d-flex just-end w-90 bg-purple">
                                    <p>90%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
