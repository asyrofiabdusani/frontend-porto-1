import { Fragment } from "react";

export default function ArticleImg(props) {
    let img = "";

    if (props.img_name !== false) {
        img = require(`../../assets/images/banner/${props.img_name}`);
    }
    return (
        <Fragment>
            <img src={img} alt="" className={props.img_class} />
        </Fragment>
    );
}

ArticleImg.defaultProps = {
    img_name: false,
};
