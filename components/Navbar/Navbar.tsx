import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="background-main-color">
            <div className="container">
                <div className="header-output">
                    <div className="header-in">
                        <div className="row">
                            <div className="col-lg-2 col-md-12">
                                <Link href="/">
                                    <a
                                        id="logo"
                                        className="d-inline-block margin-tb-5px"
                                    >
                                        <img
                                            src="/icon.png"
                                            alt="logo-icon"
                                            width={50}
                                            height={50}
                                        />
                                    </a>
                                </Link>
                                <a
                                    className="
                                        mobile-toggle
                                        padding-13px
                                        background-main-color
                                    "
                                    href="#"
                                >
                                    <i className="fas fa-bars"></i>
                                </a>
                            </div>
                            <div className="col-lg-8 col-md-12 position-inherit">
                                <ul
                                    id="menu-main"
                                    className="
                                        white-link
                                        dropdown-dark
                                        text-lg-center
                                        nav-menu
                                        link-padding-tb-17px
                                    "
                                >
                                    <li className="has-dropdown">
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                        {/* <ul className="sub-menu text-left">
                                            <li>
                                                <a href="index.html">Home 1</a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">
                                                    Home 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index-3.html">
                                                    Home 3
                                                </a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li className="has-dropdown">
                                        <Link href="/recipes">
                                            <a>recipes</a>
                                        </Link>
                                    </li>
                                    <li className="has-dropdown">
                                        <Link href="/login">
                                            <a>login</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <hr className="margin-bottom-0px d-block d-sm-none" />
                                <Link href="/new-recipe">
                                    <a
                                        className="
                                        text-white
                                        ba-2
                                        box-shadow
                                        float-right
                                        padding-lr-23px padding-tb-15px
                                        text-extra-large
                                    "
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                                {/* <a
                                    href="page-login.html"
                                    className="
                                        text-white
                                        ba-1
                                        box-shadow
                                        float-right
                                        padding-lr-23px padding-tb-15px
                                        text-extra-large
                                    "
                                >
                                    <i className="far fa-user"></i>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
