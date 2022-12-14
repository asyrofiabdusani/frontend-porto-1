import { Fragment, useEffect, useRef, useState } from "react";
import "../../assets/style/testimonials.css";
import TestimonialsContent from "./TestimonialsContent";

export default function Testimonials() {
    const carousel = useRef();
    const initState = [];
    const [stateSlides, setStatSlides] = useState(initState);
    let count = 1;

    let bullet = [];
    for (let i = 0; i < stateSlides; i++) {
        if (i === 0) {
            bullet.push(<div className="bullet bg-purple" key={i}></div>);
        } else {
            bullet.push(<div className="bullet" key={i}></div>);
        }
    }

    useEffect(() => {
        setStatSlides(carousel.current.childElementCount);
        const totalSlides = carousel.current.childElementCount;
        const lastSlide = totalSlides - 1;

        const interval = setInterval(() => {
            if (count === 0) {
                carousel.current.childNodes[count].classList.add("slide-show");
                carousel.current.childNodes[count].classList.remove("hide");
                carousel.current.nextSibling.childNodes[count].classList.add(
                    "bg-purple"
                );

                carousel.current.childNodes[lastSlide].classList.remove(
                    "slide-show"
                );
                carousel.current.childNodes[lastSlide].classList.add("hide");
                carousel.current.nextSibling.childNodes[
                    lastSlide
                ].classList.remove("bg-purple");
            } else {
                let prevSlides = count - 1;
                carousel.current.childNodes[count].classList.add("slide-show");
                carousel.current.childNodes[count].classList.remove("hide");
                carousel.current.nextSibling.childNodes[count].classList.add(
                    "bg-purple"
                );

                carousel.current.childNodes[prevSlides].classList.remove(
                    "slide-show"
                );
                carousel.current.childNodes[prevSlides].classList.add("hide");
                carousel.current.nextSibling.childNodes[
                    prevSlides
                ].classList.remove("bg-purple");
            }
            if (count < lastSlide) {
                count++;
            } else {
                count = 0;
            }
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Fragment>
            <div ref={carousel}>
                <TestimonialsContent
                    img_name="face.jpeg"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quo"
                    name="Misha"
                    city="Jakarta"
                />
                <TestimonialsContent
                    img_name="images.jpeg"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quo"
                    name="Pundit"
                    city="Pekalongan"
                    class="hide"
                />
                <TestimonialsContent
                    img_name="face2.jpeg"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quo"
                    name="Broto"
                    city="Semarang"
                    class="hide"
                />
            </div>
            <div className="d-flex just-center gap-1">{bullet}</div>
        </Fragment>
    );
}
