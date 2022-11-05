import { Fragment } from "react";
import Navbar from "../../components/nav/Navbar";
import Jbtron from "../../components/jbtron/Jbtron";
import Testimonials from "../../components/testimonials/Testimonials";
import BusinessChoiceUs from "../../components/business_choice_us/BusinessChoiceUs";
import Footer from "../../components/footer/Footer";
import ArticleImg from "../../components/article/ArticleImg";
import Percentage from "../../components/article/Percentage";
import ArticleHeader from "../../components/article/ArticleHeader";
import ArticleText from "../../components/article/ArticleText";
import ArticleInfo1 from "../../components/article/ArticleInfo1";
import ArticleButton from "../../components/article/ArticleButton";

export default function Home() {
    return (
        <Fragment>
            {/* navbar section  */}
            <Navbar />
            {/* jumbotron section */}
            <div className="mt-7">
                <Jbtron
                    img_name="About Us1.jpg"
                    top_text="WELCOME TO DIGITAL STARTUP AGENCY"
                    title="
                    Best
                    Digital
                    Technology
                    Agency"
                    btn_class="bg-white text-purple text-bold w-fit ps-2 pt-0p5 pe-2 pb-0p5"
                    btn_text="Read More"
                />
            </div>
            {/* about us section  */}
            <div className="pt-5 pb-5">
                <div className="w-70 mr-auto d-grid grid-two-one gaph-3 pb-1">
                    <div>
                        <ArticleHeader
                            header_class="text-bold text-purple"
                            header_text="About Us"
                            title_class=""
                            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                        />
                    </div>
                </div>
                <div className="w-70 mr-auto d-grid grid-two-one gaph-3">
                    <ArticleImg img_name="services2.jpg" img_class="w-100" />
                    <ArticleText
                        text_class="line-2 text-gray"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur est molestiae sequi doloremque fugiat quisquam quia saepe libero distinctio repudiandae. Eius provident, totam quidem labore obcaecati voluptatem ipsam, eveniet autem doloremque reiciendis nulla! Reprehenderit repellat atque autem assumenda aspernatur, quam maxime accusamus voluptate asperiores at perferendis odit rem, expedita voluptas"
                    />
                </div>
                <div className="w-70 mr-auto d-grid grid-one-one translateY-7">
                    <div></div>
                    <div className="d-grid grid-one-one-static bg-purple pt-2 pe-2 pb-2 ps-2 text-white gap-1">
                        <ArticleInfo1
                            head_text="People"
                            body_text="254+"
                            body_text_class="pt-0p5 pb-0p5"
                            footer_text="doloremque reiciendis nulla"
                        />
                        <ArticleInfo1
                            head_text="World Offices"
                            body_text="12"
                            body_text_class="pt-0p5 pb-0p5"
                            footer_text="repellat atque autem assumenda aspernatur"
                        />
                    </div>
                </div>
            </div>
            {/* why choice us section  */}
            <div className="pt-5 pb-5 bg-lg-gray">
                <div className="w-70 grid-header-img-content mr-auto d-grid grid-one-one gaph-3">
                    <div className="image-content">
                        <ArticleImg
                            img_name="Home.jpg"
                            img_class="w-100 mb-1"
                        />
                    </div>
                    <div className="header-content mb-1">
                        <ArticleHeader
                            header_class="text-bold text-purple"
                            header_text="Why Choice Us"
                            title_class=""
                            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                        />
                    </div>
                    <div className="text-content mb-1">
                        <ArticleText
                            text_class="line-2 text-gray"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur est molestiae sequi doloremque fugiat quisquam quia saepe libero distinctio repudiandae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa. Odio quaerat hic alias dolor soluta atque eaque natus quae vel, eligendi iure ipsam dolore eius iusto ratione voluptate magni, tenetur maxime inventore"
                        />
                    </div>
                    <div className="h-fit">
                        <Percentage />
                    </div>
                </div>
            </div>
            {/* about our company section  */}
            <div className="pt-5 pb-5">
                <div className="grid-header-content-img w-70 mr-auto d-grid grid-one-one gaph-3">
                    <div className="header-content mb-1">
                        <ArticleHeader
                            header_class="text-bold text-purple"
                            header_text="About our company"
                            title_class=""
                            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                        />
                    </div>
                    <div className="text-content mb-1">
                        <ArticleText
                            text_class="line-2 text-gray"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur est molestiae sequi doloremque fugiat quisquam quia saepe libero distinctio repudiandae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa. Odio quaerat hic alias dolor soluta atque eaque natus quae vel, eligendi iure ipsam dolore eius iusto ratione voluptate magni, tenetur maxime inventore"
                        />
                    </div>
                    <div className="other1 mb-1">
                        <ArticleButton
                            btn_class="btn text-white bg-purple"
                            btn_text="Read More"
                        />
                    </div>
                    <div className="image-content mb-1">
                        <ArticleImg
                            img_name="About Us7.jpg"
                            img_class="w-100"
                        />
                    </div>
                </div>
            </div>
            {/* what we do section  */}
            <div className="text-center pt-5 pb-5 bg-lg-gray">
                <div className="mb-3">
                    <ArticleHeader
                        header_class="text-bold text-pink"
                        header_text="What We Do"
                        title_class=""
                        title="We Are Provide Invest & Business Services"
                    />
                </div>
                <div className="grid-content-img d-grid grid-one-one gaph-1 mr-auto w-70">
                    <div className="d-flex flex-column align-center just-center pt-2 ps-2 pb-2 pe-2 bg-white text-content">
                        <ArticleImg img_name="services7.jpg" img_class="" />
                        <ArticleHeader
                            header_class="text-bold"
                            header_text="Marketing Strategy"
                            title_class=""
                            title=""
                        />
                        <ArticleText
                            text_class="line-2 text-gray"
                            text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa. Odio quaerat hic alias dolor soluta atque eaque natus quae vel, eligendi iure ipsam dolore eius iusto ratione voluptate magni, tenetur maxime inventore"
                        />
                        <ArticleButton
                            btn_class="btn text-white bg-pink"
                            btn_text="Read More"
                        />
                    </div>
                    <div className="image-content">
                        <ArticleImg
                            img_name="services3.jpg"
                            img_class="w-100 h-100"
                        />
                    </div>
                </div>
                <div className="grid-img-content d-grid grid-one-one gaph-1 mr-auto w-70 pt-1">
                    <div className="image-content">
                        <ArticleImg
                            img_name="services4.jpg"
                            img_class="w-100 h-100"
                        />
                    </div>
                    <div className="d-flex flex-column align-center just-center pt-2 ps-2 pb-2 pe-2 bg-white text-content">
                        <ArticleImg img_name="services6.jpg" img_class="" />
                        <ArticleHeader
                            header_class="text-bold"
                            header_text="Management"
                            title_class=""
                            title=""
                        />
                        <ArticleText
                            text_class="line-2 text-gray"
                            text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa. Odio quaerat hic alias dolor soluta atque eaque natus quae vel, eligendi iure ipsam dolore eius iusto ratione voluptate magni, tenetur maxime inventore"
                        />
                        <ArticleButton
                            btn_class="btn text-white bg-purple"
                            btn_text="Read More"
                        />
                    </div>
                </div>
            </div>
            {/* Testimonial section  */}
            <div className="pt-5 pb-5">
                <div className="w-70 mr-auto d-flex flex-column just-center text-center">
                    <ArticleHeader
                        header_class="text-bold text-pink"
                        header_text="Testimonials"
                        title_class=""
                        title="What Our Clients Said"
                    />
                    <Testimonials />
                </div>
            </div>

            {/* why business choice us */}
            <div className="pt-5 pb-5 bg-lg-gray">
                <div className=" w-70 mr-auto d-flex flex-column text-center">
                    <ArticleHeader
                        header_class="text-bold text-pink"
                        header_text="Why Business Choice Us"
                        title_class=""
                        title="Esse ratione nam non minus aliquid"
                    />
                    <ArticleText
                        text_class="line-2 text-gray"
                        text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa. Odio quaerat hic alias dolor soluta atque eaque natus quae vel, eligendi iure ipsam dolore eius iusto ratione voluptate magni, tenetur maxime inventore"
                    />
                    <BusinessChoiceUs />
                </div>
            </div>

            {/* footer section  */}
            <div className="pt-5 pb-5 bg-black">
                <Footer />
            </div>
        </Fragment>
    );
}
