import { Fragment } from "react";
import "../../assets/style/article.css";
import marketing from "../../assets/images/banner/services7.jpg";
import marketingBanner from "../../assets/images/banner/services1.jpg";

export default function ArticleRight(props) {
    return (
        <Fragment>
            <div className="grid-areas d-grid grid-one-one w-70 mr-auto gap-1">
                <img
                    src={marketingBanner}
                    alt=""
                    className="image-content h-100 w-100"
                />
                <div className="text-content d-flex flex-column align-center just-center text-center ps-2 pe-2 bg-white pt-2 pb-2">
                    <img src={marketing} alt="" />
                    <h3>{props.title}</h3>
                    <p className="line-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sequi, obcaecati eos. Totam, dicta doloremque!
                        Pariatur fugiat earum ipsa consectetur voluptatibus
                        voluptatem dicta, eius repellat quos voluptates ipsam
                        doloremque accusantium ratione
                    </p>
                    <div className="w-fit pt-0p5 pe-2 pb-0p5 ps-2 bg-purple text-white text-bold">
                        Read More
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
