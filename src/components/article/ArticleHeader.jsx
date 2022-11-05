import { Fragment } from "react";
import "../../assets/style/article.css";

export default function ArticleHeader(props) {
    return (
        <Fragment>
            <p className={props.header_class}>{props.header_text}</p>
            <h1 className={props.title_class}>{props.title}</h1>
        </Fragment>
    );
}
