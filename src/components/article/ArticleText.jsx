import { Fragment } from "react";
import "../../assets/style/article.css";

export default function ArticleText(props) {
    return (
        <Fragment>
            <p className={props.text_class}>{props.text}</p>
        </Fragment>
    );
}
