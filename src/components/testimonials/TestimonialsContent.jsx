import { Fragment } from "react";
import "../../assets/style/testimonials.css";
import marketing from "../../assets/images/banner/services8.jpg";

export default function TestimonialsContent(props) {
    return (
        <Fragment>
            <div className={props.class}>
                <img src={marketing} alt="" />
                <p>{props.comment}</p>
                <p className="text-bold">{props.name}</p>
                <p>{props.city}</p>
            </div>
        </Fragment>
    );
}
