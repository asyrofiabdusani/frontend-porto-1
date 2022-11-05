import { Fragment } from "react";
import img from "../../assets/images/banner/services4.jpg";

export default function ArticleFull(props) {
    return (
        <Fragment>
            <div className="text-center">
                <img src={img} alt="" className="w-100 mb-2" />
                <div className="w-80 mr-auto d-flex flex-column align-center ">
                    <h3>{props.title}</h3>
                    <p className="text-gray">{props.paragraph}</p>
                    <div className="bg-pink text-white text-bold w-fit ps-2 pt-0p5 pe-2 pb-0p5">
                        Read More
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
