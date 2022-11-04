import { Fragment } from "react";
import "../../assets/style/info.css";
import marketing from "../../assets/images/banner/services8.jpg";
import marketingBanner from "../../assets/images/banner/services1.jpg";

export default function Info() {
    return (
        <Fragment>
            <div className="d-flex flex-column align-center text-center">
                <img src={marketing} alt="" className="logo-info" />
                <h3>Lorem, ipsum dolor</h3>
                <p className="line-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Soluta fuga rerum illum tempora et ducimus repellat ea
                    consequuntur id minus
                </p>
            </div>
        </Fragment>
    );
}
