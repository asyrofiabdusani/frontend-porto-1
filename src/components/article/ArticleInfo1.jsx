import { Fragment } from "react";
import "../../assets/style/main.css";

export default function ArticleInfo1(props) {
    return (
        <Fragment>
            <div>
                <h4 className={props.head_text_class}>{props.head_text}</h4>
                <h1 className={props.body_text_class}>{props.body_text}</h1>
                <h4 className={props.footer_text_class}>{props.footer_text}</h4>
            </div>
        </Fragment>
    );
}
