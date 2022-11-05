import { Fragment } from "react";
import "../../assets/style/jbtron.css";
export default function Jbtron(props) {
    const img = require(`../../assets/images/banner/${props.img_name}`);
    return (
        <Fragment>
            <div className="w-80 mr-auto d-flex flex-column align-center just-center text-white absolute top-0 left-0 btm-8 right-0 mt-7">
                <h3 className="text-center mb-1">{props.top_text}</h3>
                <h1 className="text-center title-jbtron mb-1">{props.title}</h1>
                <div className={props.btn_class}>{props.btn_text}</div>
            </div>
            <img src={img} alt="" className="img-jbtron w-100" />
        </Fragment>
    );
}
