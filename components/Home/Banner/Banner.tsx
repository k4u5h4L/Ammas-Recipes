import React from "react";

export default function Banner() {
    return (
        <div
            className="banner padding-tb-20px background-overlay"
            style={{ backgroundImage: `url('/assets/img/banner_1.jpg')` }}
        >
            <div className="container">
                <div className="padding-tb-120px z-index-2 position-relative">
                    <div className="text-center">
                        <h1
                            className="
                                text-white
                                pull-l
                                icon-large
                                font-weight-500
                                margin-bottom-40px
                            "
                        >
                            +20,000
                        </h1>
                        <h3 className="text-white icon-large font-weight-100">
                            Cooking Recipes
                        </h3>
                    </div>
                    <div className="margin-top-45px">
                        <div className="row justify-content-center margin-tb-60px">
                            <div className="col-lg-8">
                                <div className="listing-search">
                                    <form className="row no-gutters">
                                        <div className="col-md-4">
                                            <div className="keywords">
                                                <input
                                                    className="listing-form first"
                                                    type="text"
                                                    placeholder="Keywords..."
                                                    // value=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="categories dropdown">
                                                <a
                                                    className="
                                                        listing-form
                                                        d-block
                                                        text-nowrap
                                                    "
                                                    id="dropdownMenu2"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    All Categories
                                                </a>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenu2"
                                                >
                                                    <button
                                                        className="
                                                            dropdown-item
                                                            text-up-small
                                                        "
                                                        type="button"
                                                    >
                                                        Fish
                                                    </button>
                                                    <button
                                                        className="
                                                            dropdown-item
                                                            text-up-small
                                                        "
                                                        type="button"
                                                    >
                                                        Cocktails
                                                    </button>
                                                    <button
                                                        className="
                                                            dropdown-item
                                                            text-up-small
                                                        "
                                                        type="button"
                                                    >
                                                        Salads
                                                    </button>
                                                    <button
                                                        className="
                                                            dropdown-item
                                                            text-up-small
                                                        "
                                                        type="button"
                                                    >
                                                        Asian
                                                    </button>
                                                    <button
                                                        className="
                                                            dropdown-item
                                                            text-up-small
                                                        "
                                                        type="button"
                                                    >
                                                        Fish
                                                    </button>
                                                    <button
                                                        className="
                                                            dropdown-item
                                                            text-up-small
                                                        "
                                                        type="button"
                                                    >
                                                        Cocktails
                                                    </button>
                                                    <button
                                                        className="
                                                            dropdown-item
                                                            text-up-small
                                                        "
                                                        type="button"
                                                    >
                                                        Salads
                                                    </button>
                                                    <button
                                                        className="
                                                            dropdown-item
                                                            text-up-small
                                                        "
                                                        type="button"
                                                    >
                                                        Asian
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <a
                                                className="
                                                    listing-bottom
                                                    background-second-color
                                                    box-shadow
                                                "
                                                href="#"
                                            >
                                                Search Now
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
