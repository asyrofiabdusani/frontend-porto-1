import { Fragment } from "react";
import company from "../../assets/images/banner/services2.jpg";
import "../../assets/style/about_company_home.css";

export default function AboutCompanyHome() {
    return (
        <Fragment>
            <div>
                <div className="w-70 mr-auto d-grid grid-one-one gap-3">
                    <div>
                        <p>ABOUT OUR COMPANY</p>
                        <h1>Lorem ipsum dolor sit amet consectetur</h1>
                        <p className="line-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Impedit perferendis ipsum debitis sint iusto
                            at, vero architecto ipsa quaerat repellat explicabo
                            adipisci tempore harum totam. Vitae accusamus eaque
                            labore voluptate molestiae, iste perspiciatis
                            voluptas? Quidem facilis maxime quis porro
                            distinctio.
                        </p>
                        <div className="w-fit pt-0p5 pe-2 pb-0p5 ps-2 bg-purple text-white text-bold">
                            Read More
                        </div>
                    </div>
                    <img src={company} alt="" className="w-100 h-100" />
                </div>
            </div>
        </Fragment>
    );
}
