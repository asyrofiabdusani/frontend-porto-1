import { Fragment } from "react";
import "../../assets/style/article.css";

export default function ArticleButton(props) {
    return (
        <Fragment>
            <div className={props.btn_class}>{props.btn_text}</div>
        </Fragment>
    );
}
