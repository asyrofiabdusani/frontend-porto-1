import { Fragment } from "react";
import WhyChoiceHome from "../../components/why_choice_home/WhyChoiceHome";
import AboutUsHome from "../../components/about_us_home/AboutUsHome";
import Jbtron from "../../components/jbtron/Jbtron";
import Navbar from "../../components/nav/Navbar";
import AboutCompanyHome from "../../components/about_company_home/AboutCompanyHome";
import ArticleLeft from "../../components/article_left/ArticleLeft";
import ArticleRight from "../../components/article_right/ArticleRight";
import Testimonials from "../../components/testimonials/Testimonials";
import BusinessChoiceUs from "../../components/business_choice_us/BusinessChoiceUs";
import Footer from "../../components/footer/Footer";

export default function Home() {
    return (
        <Fragment>
            <Navbar />
            <Jbtron />
            <AboutUsHome />
            <WhyChoiceHome />
            <AboutCompanyHome />
            <div className="text-center">
                <p>WHAT WE DO</p>
                <h1>We Are Provide Invest & Business Services</h1>
            </div>
            <ArticleLeft />
            <ArticleRight />
            <Testimonials />
            <BusinessChoiceUs />
            <Footer />
        </Fragment>
    );
}
