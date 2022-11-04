import { Fragment } from "react";
import "../../assets/style/business_choice_us.css";
import marketing from "../../assets/images/banner/services8.jpg";
import marketingBanner from "../../assets/images/banner/services1.jpg";
import Info from "../info/Info";

export default function BusinessChoiceUs() {
    return (
        <Fragment>
            <div className=" w-70 mr-auto d-flex flex-column text-center">
                <p>WHY BUSINESS CHOICE US</p>
                <h1>Lorem, ipsum dolor</h1>
                <p className="line-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi vero consectetur similique quam a voluptatem voluptate
                    repellat harum voluptatibus minus, eius sunt necessitatibus
                    dolores error? Consequuntur asperiores obcaecati
                    perspiciatis consequatur explicabo
                </p>
                <div className="d-grid grid-one-one-one gap-2">
                    <Info />
                    <Info />
                    <Info />
                </div>
            </div>
        </Fragment>
    );
}
