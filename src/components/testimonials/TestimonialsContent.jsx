import { Fragment } from "react";
import "../../assets/style/testimonials.css";

export default function TestimonialsContent(props) {
    const img = require(`../../assets/images/banner/${props.img_name}`);

    return (
        <Fragment>
            <div className={props.class}>
                <img src={img} alt="" className="person-pic mt-1 mb-1" />
                <p>{props.comment}</p>
                <p className="text-bold">{props.name}</p>
                <p>{props.city}</p>
            </div>
        </Fragment>
    );
}
