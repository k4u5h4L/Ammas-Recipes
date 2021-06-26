import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="padding-top-100px padding-bottom-70px background-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 sm-mb-30px">
                        <div className="logo margin-bottom-10px">
                            <img
                                src="/icon.png"
                                alt="logo-alt"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="text-grey-2 font-weight-300">
                            Done as a side project. Please don&apos;t make this
                            commercial lol
                        </div>
                        {/* <ul
                            className="
                                list-inline
                                text-left
                                margin-tb-20px margin-lr-0px
                                text-white
                            "
                        >
                            <li className="list-inline-item">
                                <a className="facebook" href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="youtube" href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="linkedin" href="#">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="google" href="#">
                                    <i className="fab fa-google-plus"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="twitter" href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="rss" href="#">
                                    <i
                                        className="fa fa-rss"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </li>
                        </ul> */}
                    </div>

                    <div className="col-lg-4 col-md-4 sm-mb-30px">
                        <ul
                            className="
                                footer-menu-2
                                row
                                margin-0px
                                padding-0px
                                list-unstyled
                            "
                        >
                            <li className="col-6 padding-tb-5px">
                                <Link href="/">
                                    <a className="text-grey-2">Home</a>
                                </Link>
                            </li>
                            <li className="col-6 padding-tb-5px">
                                <Link href="/recipes">
                                    <a className="text-grey-2">Recipes</a>
                                </Link>
                            </li>
                            <li className="col-6 padding-tb-5px">
                                <Link href="/login">
                                    <a className="text-grey-2">Login</a>
                                </Link>
                            </li>

                            <li className="col-6 padding-tb-5px">
                                <a
                                    href="https://github.com/k4u5h4L/Ammas-Recipes/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-grey-2"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="col-lg-4 col-md-4 sm-mb-30px">
                        <ul
                            className="
                                footer-menu-2
                                row
                                margin-0px
                                padding-0px
                                list-unstyled
                            "
                        >
                            <li className="col-6 padding-tb-5px">
                                <a href="#" className="text-grey-2">
                                    Github
                                </a>
                            </li>
                            <li className="col-6 padding-tb-5px">
                                <a href="#" className="text-grey-2">
                                    Featured
                                </a>
                            </li>
                            <li className="col-6 padding-tb-5px">
                                <a href="#" className="text-grey-2">
                                    Feedback
                                </a>
                            </li>
                            <li className="col-6 padding-tb-5px">
                                <a href="#" className="text-grey-2">
                                    Ask a Question
                                </a>
                            </li>
                            <li className="col-6 padding-tb-5px">
                                <a href="#" className="text-grey-2">
                                    Team
                                </a>
                            </li>
                            <li className="col-6 padding-tb-5px">
                                <a href="#" className="text-grey-2">
                                    Maintenance
                                </a>
                            </li>
                            <li className="col-6 padding-tb-5px">
                                <a href="#" className="text-grey-2">
                                    Get a Quote
                                </a>
                            </li>
                            <li className="col-6 padding-tb-5px">
                                <a href="#" className="text-grey-2">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
