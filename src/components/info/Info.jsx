import { Fragment } from "react";
import "../../assets/style/info.css";

export default function Info(props) {
    const img = require(`../../assets/images/banner/${props.img_name}`);

    return (
        <Fragment>
            <div className={props.class}>
                <div className="d-flex flex-column align-center text-center">
                    <img src={img} alt="" className="logo-info mb-3" />
                    <h3>{props.title}</h3>
                    <p className="line-2">{props.content}</p>
                </div>
            </div>
        </Fragment>
    );
}
