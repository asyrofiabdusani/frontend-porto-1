import { useEffect, useRef } from "react";
import { Fragment } from "react";
import "../../assets/style/business_choice_us.css";
import Info from "../info/Info";

export default function BusinessChoiceUs() {
    const listInfo = useRef();
    let count = 1;

    useEffect(() => {
        const totalSlides = listInfo.current.childElementCount;
        const lastSlide = totalSlides - 1;

        if (window.screen.width < 1024) {
            const interval = setInterval(() => {
                if (count === 0) {
                    listInfo.current.childNodes[count].classList.add(
                        "list-show"
                    );
                    listInfo.current.childNodes[count].classList.remove(
                        "list-info"
                    );

                    listInfo.current.childNodes[lastSlide].classList.remove(
                        "list-show"
                    );
                    listInfo.current.childNodes[lastSlide].classList.add(
                        "list-info"
                    );
                } else {
                    let prevSlides = count - 1;
                    listInfo.current.childNodes[count].classList.add(
                        "list-show"
                    );
                    listInfo.current.childNodes[count].classList.remove(
                        "list-info"
                    );

                    listInfo.current.childNodes[prevSlides].classList.remove(
                        "list-show"
                    );
                    listInfo.current.childNodes[prevSlides].classList.add(
                        "list-info"
                    );
                }
                if (count < lastSlide) {
                    count++;
                } else {
                    count = 0;
                }
            }, 3000);
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <Fragment>
            <div
                className="d-grid grid-one-one-one just-center gap-5"
                ref={listInfo}
            >
                <Info
                    img_name="Home2.jpg"
                    title="We're Loyal"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero consectetur similique quam a voluptatem voluptatez repellat harum voluptatibus minus"
                />
                <Info
                    img_name="services7.jpg"
                    title="We're Helpful"
                    content="Consequuntur asperiores obcaecati perspiciatis consequatur explicabo"
                    class="list-info"
                />
                <Info
                    img_name="Home4.jpg"
                    title="We're Flexible"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero  voluptate repellat harum voluptatibus minus"
                    class="list-info"
                />
            </div>
        </Fragment>
    );
}
