import { Fragment } from "react";
import "../../assets/style/article.css";
import img from "../../assets/images/banner/services2.jpg";

export default function ArticleFull(props) {
    return (
        <Fragment>
            <div className="d-flex flex-column">
                <p className="text-bold text-purple">{props.header_text}</p>
                <h1>{props.title}</h1>
                <img src={img} alt="" className={props.img_class} />
                <p className="line-2 pt-2 pb-2 text-gray">{props.body_text}</p>
                <div className={props.btn_class}>{props.btn_text}</div>
            </div>
        </Fragment>
    );
}
