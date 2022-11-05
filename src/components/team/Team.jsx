import { Fragment } from "react";
import img from "../../assets/images/banner/About Us11.jpg";

export default function Team() {
    return (
        <Fragment>
            <div className="d-flex flex-column align-center">
                <img src={img} alt="" className="w-100" />
                <h3>Lorem ipsum dolor sit</h3>
                <p className="text-gray">Lorem ipsum dolor sit</p>
            </div>
        </Fragment>
    );
}
