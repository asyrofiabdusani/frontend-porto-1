import { Fragment } from "react";
import "../../assets/style/article.css";
import img from "../../assets/images/banner/services2.jpg";

export default function ArticleDetail(props) {
    return (
        <Fragment>
            <div className="h-100 d-flex flex-column">
                <img src={img} alt="" className="w-100" />
                <h3>{props.title}</h3>
                <p className="line-2 pt-2 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi, obcaecati eos. Totam, dicta doloremque! Pariatur
                    fugiat earum ipsa consectetur voluptatibus voluptatem dicta,
                    eius repellat quos voluptates ipsam doloremque accusantium
                    ratione. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Cum itaque saepe dolorum facere quo impedit. Nam natus
                    in doloremque quo!
                </p>
                <div className="w-fit pt-0p5 pe-2 pb-0p5 ps-2 bg-purple text-white text-bold">
                    Read More
                </div>
            </div>
        </Fragment>
    );
}
