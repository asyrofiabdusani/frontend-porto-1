import { Fragment } from "react";
import Jbtron from "../../components/jbtron/Jbtron";
import Navbar from "../../components/nav/Navbar";
import ArticleLeft from "../../components/article/ArticleLeft";
import ArticleRight from "../../components/article/ArticleRight";
import Footer from "../../components/footer/Footer";
import Testimonials from "../../components/testimonials/Testimonials";
import ArticleHeader from "../../components/article/ArticleHeader";
import ArticleImg from "../../components/article/ArticleImg";
import ArticleText from "../../components/article/ArticleText";
import ArticleButton from "../../components/article/ArticleButton";

export default function Services() {
    return (
        <Fragment>
            {/* navbar section  */}
            <Navbar />
            {/* jumbotron section */}
            <div className="mt-7">
                <Jbtron
                    img_name="services.jpg"
                    top_text=""
                    title="
                    Services"
                    btn_class=""
                    btn_text=""
                />
            </div>
            {/* article section  */}
            <div className="text-center pt-5 pb-3 bg-lg-gray">
                <div className="w-70 mr-auto">
                    <div className="mb-3">
                        <ArticleHeader
                            header_class="text-bold text-pink"
                            header_text="WHAT WE DO"
                            title_class=""
                            title="We Are Provide Invest & Business Services"
                        />
                    </div>
                    <div className="grid-content-img d-grid grid-one-one gaph-1 mb-1">
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
                    <div className="grid-img-content d-grid grid-one-one gaph-1 mb-1">
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
                    <div className="grid-content-img d-grid grid-one-one gaph-1 mb-1 ">
                        <div className="d-flex flex-column align-center just-center pt-2 ps-2 pb-2 pe-2 bg-white text-content">
                            <ArticleImg img_name="services8.jpg" img_class="" />
                            <ArticleHeader
                                header_class="text-bold"
                                header_text="Business Investment"
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
                        <div className="image-content">
                            <ArticleImg
                                img_name="services3.jpg"
                                img_class="w-100 h-100"
                            />
                        </div>
                    </div>
                    <div className="grid-img-content d-grid grid-one-one gaph-1 mb-1">
                        <div className="image-content">
                            <ArticleImg
                                img_name="services4.jpg"
                                img_class="w-100 h-100"
                            />
                        </div>
                        <div className="d-flex flex-column align-center just-center pt-2 ps-2 pb-2 pe-2 bg-white text-content">
                            <ArticleImg img_name="services5.jpg" img_class="" />
                            <ArticleHeader
                                header_class="text-bold"
                                header_text="Research"
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
            </div>
            <div className="w-70 mr-auto text-center pt-5 pb-5">
                <Testimonials />
            </div>
            <div className="pt-5 pb-5 bg-black">
                <Footer />
            </div>
        </Fragment>
    );
}
