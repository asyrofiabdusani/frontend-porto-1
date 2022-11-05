import { Fragment } from "react";
import Jbtron from "../../components/jbtron/Jbtron";
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";
import ArticleFull from "../../components/article/ArticleList";
import ArticleImg from "../../components/article/ArticleImg";
import ArticleDetail from "../../components/article/ArticleDetail";
import ArticleButton from "../../components/article/ArticleButton";
import ArticleText from "../../components/article/ArticleText";
import ArticleHeader from "../../components/article/ArticleHeader";

export default function About() {
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
                    About Us"
                    btn_class=""
                    btn_text=""
                />
            </div>
            {/* list article section */}
            <div className="pt-5 pb-5">
                <div className="d-grid grid-one-one-one gap-3 w-70 mr-auto">
                    <div className="text-center">
                        <ArticleImg
                            img_name="About Us2.jpg"
                            img_class="w-100"
                        />
                        <ArticleHeader
                            header_class="text-bold"
                            header_text="Website Development"
                            title_class=""
                            title=""
                        />
                        <ArticleText
                            text_class="line-2 text-gray"
                            text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa"
                        />
                        <div className="d-flex just-center">
                            <ArticleButton
                                btn_class="btn text-white bg-pink"
                                btn_text="Read More"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <ArticleImg
                            img_name="About Us3.jpg"
                            img_class="w-100"
                        />
                        <ArticleHeader
                            header_class="text-bold"
                            header_text="Marketing Solutions"
                            title_class=""
                            title=""
                        />
                        <ArticleText
                            text_class="line-2 text-gray"
                            text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa"
                        />
                        <div className="d-flex just-center">
                            <ArticleButton
                                btn_class="btn text-white bg-pink"
                                btn_text="Read More"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <ArticleImg
                            img_name="About Us4.jpg"
                            img_class="w-100"
                        />
                        <ArticleHeader
                            header_class="text-bold"
                            header_text="Application Development"
                            title_class=""
                            title=""
                        />
                        <ArticleText
                            text_class="line-2 text-gray"
                            text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa"
                        />
                        <div className="d-flex just-center">
                            <ArticleButton
                                btn_class="btn text-white bg-pink"
                                btn_text="Read More"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* we provide section  */}
            <div className="bg-lg-gray pt-5 pb-5">
                <div className="d-grid grid-one-one w-70 mr-auto gap-3">
                    <div>
                        <ArticleHeader
                            header_class="text-bold text-purple"
                            header_text="We Provides Digital Services"
                            title_class=""
                            title="Services We're Offering"
                        />
                        <div className="mt-2">
                            <ArticleImg
                                img_name="services1.jpg"
                                img_class="w-100"
                            />
                        </div>
                    </div>
                    <div>
                        <ArticleImg
                            img_name="About Us5.jpg"
                            img_class="w-100"
                        />
                        <ArticleText
                            text_class="line-2 text-gray"
                            text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa"
                        />
                        <ArticleButton
                            btn_class="btn text-white bg-pink"
                            btn_text="Read More"
                        />
                    </div>
                </div>
            </div>
            {/* our team section  */}
            <div className="w-70 mr-auto d-flex flex-column align-center pt-5 pb-5">
                <ArticleHeader
                    header_class="text-bold text-purple"
                    header_text="Our Team"
                    title_class=""
                    title="Meet Our Team"
                />
                <div className="w-100 d-grid grid-one-one-one-one gaph-3 pt-3">
                    <div>
                        <ArticleImg
                            img_name="About Us8.jpg"
                            img_class="w-100"
                        />
                        <div className="text-center pt-1">
                            <ArticleHeader
                                header_class="text-bold"
                                header_text="Brenda Hold"
                                title_class=""
                                title=""
                            />
                            <ArticleText
                                text_class="line-2 text-gray"
                                text="Voluptatum animi"
                            />
                        </div>
                    </div>
                    <div>
                        <ArticleImg
                            img_name="About Us9.jpg"
                            img_class="w-100"
                        />
                        <div className="text-center pt-1">
                            <ArticleHeader
                                header_class="text-bold"
                                header_text="Clara"
                                title_class=""
                                title=""
                            />
                            <ArticleText
                                text_class="line-2 text-gray"
                                text="Odio quaerat hic"
                            />
                        </div>
                    </div>
                    <div>
                        <ArticleImg
                            img_name="About Us10.jpg"
                            img_class="w-100"
                        />
                        <div className="text-center pt-1">
                            <ArticleHeader
                                header_class="text-bold"
                                header_text="Maryln"
                                title_class=""
                                title=""
                            />
                            <ArticleText
                                text_class="line-2 text-gray"
                                text="Eligendi iure ipsam dolore eius"
                            />
                        </div>
                    </div>
                    <div>
                        <ArticleImg
                            img_name="About Us11.jpg"
                            img_class="w-100"
                        />
                        <div className="text-center pt-1">
                            <ArticleHeader
                                header_class="text-bold"
                                header_text="Hanah Culbura"
                                title_class=""
                                title=""
                            />
                            <ArticleText
                                text_class="line-2 text-gray"
                                text="Tenetur maxime inventore"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* over article section  */}
            <div className="pt-5 pb-5 bg-lg-gray">
                <div className="w-70 mr-auto d-flex flex-column align-center">
                    <ArticleHeader
                        header_class="text-bold text-purple"
                        header_text="Over Articles"
                        title_class=""
                        title="Our Latest News"
                    />
                    <div className="d-grid grid-one-one-one-one gap-3 pt-3">
                        <div className="bg-white pb-2">
                            <ArticleImg
                                img_name="About Us5.jpg"
                                img_class="w-100"
                            />
                            <div className="w-90 mr-auto">
                                <ArticleHeader
                                    header_class="text-bold line-2"
                                    header_text="Exercitationem ipsam sint quidem odit commodi consequatur"
                                    title_class=""
                                    title=""
                                />
                                <ArticleText
                                    text_class="line-2 text-gray"
                                    text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa"
                                />
                                <ArticleButton
                                    btn_class="btn text-white bg-pink"
                                    btn_text="Read More"
                                />
                            </div>
                        </div>
                        <div className="bg-white pb-2">
                            <ArticleImg
                                img_name="About Us7.jpg"
                                img_class="w-100"
                            />
                            <div className="w-90 mr-auto">
                                <ArticleHeader
                                    header_class="text-bold line-2"
                                    header_text="Esse ratione nam non minus aliquid ipsa"
                                    title_class=""
                                    title=""
                                />
                                <ArticleText
                                    text_class="line-2 text-gray"
                                    text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa"
                                />
                                <ArticleButton
                                    btn_class="btn text-white bg-pink"
                                    btn_text="Read More"
                                />
                            </div>
                        </div>
                        <div className="bg-white pb-2">
                            <ArticleImg
                                img_name="About Us5.jpg"
                                img_class="w-100"
                            />
                            <div className="w-90 mr-auto">
                                <ArticleHeader
                                    header_class="text-bold line-2"
                                    header_text="Sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa"
                                    title_class=""
                                    title=""
                                />
                                <ArticleText
                                    text_class="line-2 text-gray"
                                    text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa"
                                />
                                <ArticleButton
                                    btn_class="btn text-white bg-pink"
                                    btn_text="Read More"
                                />
                            </div>
                        </div>
                        <div className="bg-white pb-2">
                            <ArticleImg
                                img_name="About Us7.jpg"
                                img_class="w-100"
                            />
                            <div className="w-90 mr-auto">
                                <ArticleHeader
                                    header_class="text-bold line-2"
                                    header_text="Consequatur debitis esse ratione nam non minus aliquid ipsa"
                                    title_class=""
                                    title=""
                                />
                                <ArticleText
                                    text_class="line-2 text-gray"
                                    text="Voluptatum animi, vero, exercitationem ipsam sint quidem odit commodi consequatur debitis esse ratione nam non minus aliquid ipsa"
                                />
                                <ArticleButton
                                    btn_class="btn text-white bg-pink"
                                    btn_text="Read More"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5 pb-5 bg-black">
                <Footer />
            </div>
        </Fragment>
    );
}
