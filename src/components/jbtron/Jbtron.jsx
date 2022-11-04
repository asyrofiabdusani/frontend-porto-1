import { Fragment } from "react";
import jbtron from "../../assets/images/banner/services.jpg";
import "../../assets/style/jbtron.css";
export default function Jbtron() {
    return (
        <Fragment>
            <div className="mt-7">
                <div className="d-flex flex-column align-center just-center text-white absolute top-0 left-0 btm-8 right-0 mt-7">
                    <h3 className="text-center mb-1">
                        WELCOME TO DIGITAL STARTUP AGENCY
                    </h3>
                    <h1 className="text-center title-jbtron mb-1">
                        Best Digital Technology Agency
                    </h1>
                    <div className="bg-white text-purple w-fit ps-1 pt-0p5 pe-1 pb-0p5">
                        Read more
                    </div>
                </div>
                <img src={jbtron} alt="" className="img-jbtron w-100" />
            </div>
        </Fragment>
    );
}
