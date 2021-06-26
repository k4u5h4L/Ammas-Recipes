import React from "react";
import {} from "next-auth/client";

import { RecipeType } from "@/types/RecipeType";
interface PropTypes {
    recp: RecipeType;
}

export default function SingleRecipe({ recp }: PropTypes) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="margin-bottom-40px card border-0 box-shadow">
                        <div className="card-img-top">
                            <a href="#">
                                <img
                                    src="/assets/img/recipes-single.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="padding-lr-30px padding-tb-20px">
                            <h5 className="margin-bottom-20px margin-top-10px">
                                <a className="text-dark" href="#">
                                    {recp.name}
                                </a>
                            </h5>
                            <div className="rating">
                                <ul>
                                    {[...Array(recp.rating)].map(
                                        (rating: number, index: number) => (
                                            <li
                                                className="active"
                                                key={index}
                                            ></li>
                                        )
                                    )}
                                    {[...Array(5 - recp.rating)].map(
                                        (rating: number, index: number) => (
                                            <li key={index}></li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <hr />
                            <h3>Ingredients</h3>
                            <ul>
                                {recp.ingredients.map((ing, index) => (
                                    <li key={index}>
                                        <strong>{ing.quantity}</strong>{" "}
                                        {ing.item}
                                    </li>
                                ))}
                            </ul>
                            <h3>Method</h3>
                            <ol>
                                {recp.method.map(
                                    (met: string, index: number) => (
                                        <li key={index}>{met}</li>
                                    )
                                )}
                            </ol>
                            <hr />
                            <div className="row no-gutters">
                                <div className="col-4 text-left">
                                    <a href="#" className="text-red">
                                        <i className="far fa-heart"></i> Save
                                    </a>
                                </div>
                                <div className="col-8 text-right">
                                    <a href="#" className="text-grey-2">
                                        <i className="fas fa-utensils"></i>{" "}
                                        {recp.cuisine}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="
                                background-light-grey
                                border-top-1 border-grey
                                padding-lr-30px padding-tb-20px
                            "
                        >
                            <a
                                href="#"
                                className="
                                    d-inline-block
                                    text-grey-3
                                    h6
                                    margin-bottom-0px margin-right-15px
                                "
                            >
                                <img
                                    src="/assets/default-profile.png"
                                    className="
                                        height-30px
                                        border-radius-30
                                        margin-right-15px"
                                    alt="profile-pic"
                                />
                                {recp.cook}
                            </a>
                        </div>
                    </div>

                    <div className="margin-bottom-40px box-shadow">
                        <div className="padding-30px background-white">
                            <h3>
                                <i
                                    className="
                                        far
                                        fa-star
                                        margin-right-10px
                                        text-main-color
                                    "
                                ></i>
                                Review &amp; Rating
                            </h3>
                            <hr />

                            <ul
                                className="
                                    commentlist
                                    padding-0px
                                    margin-0px
                                    list-unstyled
                                    text-grey-3
                                "
                            >
                                {/* ##################################################### */}
                                {recp.reviews.map((review, index) => (
                                    <li
                                        key={index}
                                        className="
                                        border-bottom-1 border-grey-1
                                        margin-bottom-20px
                                    "
                                    >
                                        <img
                                            src="/assets/default-profile.png"
                                            width={60}
                                            height={60}
                                            className="
                                            float-left
                                            margin-right-20px
                                            border-radius-60
                                            margin-bottom-20px
                                        "
                                            alt=""
                                        />
                                        <div className="margin-left-85px">
                                            <a
                                                className="
                                                d-inline-block
                                                text-dark text-medium
                                                margin-right-20px
                                            "
                                                href="#"
                                            >
                                                {review.author}
                                            </a>
                                            <span className="text-extra-small">
                                                Date :
                                                <a
                                                    href="#"
                                                    className="text-main-color"
                                                >
                                                    {review.date}
                                                </a>
                                            </span>
                                            <div className="rating">
                                                <ul>
                                                    {[
                                                        ...Array(review.rating),
                                                    ].map(
                                                        (
                                                            rating: number,
                                                            index: number
                                                        ) => (
                                                            <li
                                                                className="active"
                                                                key={index}
                                                            ></li>
                                                        )
                                                    )}
                                                    {[
                                                        ...Array(
                                                            5 - review.rating
                                                        ),
                                                    ].map(
                                                        (
                                                            rating: number,
                                                            index: number
                                                        ) => (
                                                            <li
                                                                key={index}
                                                            ></li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <p className="margin-top-15px text-grey-2">
                                                {review.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                                {/* ##################################################### */}
                            </ul>
                        </div>
                    </div>

                    <div className="margin-bottom-80px box-shadow">
                        <div className="padding-30px background-white">
                            <h3>
                                <i
                                    className="
                                        far
                                        fa-star
                                        margin-right-10px
                                        text-main-color
                                    "
                                ></i>
                                Add Review
                            </h3>
                            <hr />
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputName">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">
                                        Comment :
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        placeholder="Comment"
                                    ></textarea>
                                </div>
                                <a
                                    href="#"
                                    className="
                                        btn-sm btn-lg btn-block
                                        background-main-color
                                        text-white text-center
                                        font-weight-bold
                                        text-uppercase
                                        border-radius-10
                                        padding-10px
                                    "
                                >
                                    Add Now !
                                </a>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div
                        className="
                            listing-search
                            box-shadow
                            background-main-color
                            padding-30px
                            margin-bottom-30px
                        "
                    >
                        <form className="row no-gutters">
                            <div className="col-md-12">
                                <div className="keywords">
                                    <input
                                        className="
                                            listing-form
                                            first
                                            border-radius-10
                                            margin-bottom-10px
                                        "
                                        type="text"
                                        placeholder="Keywords..."
                                        value=""
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="categories dropdown">
                                    <a
                                        className="
                                            listing-form
                                            d-block
                                            text-nowrap
                                            border-radius-10
                                            margin-bottom-10px
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
                                            className="dropdown-item text-up-small"
                                            type="button"
                                        >
                                            Fish
                                        </button>
                                        <button
                                            className="dropdown-item text-up-small"
                                            type="button"
                                        >
                                            Cocktails
                                        </button>
                                        <button
                                            className="dropdown-item text-up-small"
                                            type="button"
                                        >
                                            Salads
                                        </button>
                                        <button
                                            className="dropdown-item text-up-small"
                                            type="button"
                                        >
                                            Asian
                                        </button>
                                        <button
                                            className="dropdown-item text-up-small"
                                            type="button"
                                        >
                                            Fish
                                        </button>
                                        <button
                                            className="dropdown-item text-up-small"
                                            type="button"
                                        >
                                            Cocktails
                                        </button>
                                        <button
                                            className="dropdown-item text-up-small"
                                            type="button"
                                        >
                                            Salads
                                        </button>
                                        <button
                                            className="dropdown-item text-up-small"
                                            type="button"
                                        >
                                            Asian
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <a
                                    className="
                                        listing-bottom
                                        border-radius-10
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

                    <div className="row margin-tb-45px">
                        <div className="col-6 margin-bottom-25px">
                            <a
                                href="#"
                                className="
                                    d-block
                                    box-shadow
                                    background-main-color
                                    text-white
                                    hvr-float
                                "
                            >
                                <div className="thum">
                                    <img src="/assets/img/cat-1.jpg" alt="" />
                                </div>
                                <h4 className="text-center padding-15px">
                                    Fish
                                </h4>
                            </a>
                        </div>
                        <div className="col-6 margin-bottom-25px">
                            <a
                                href="#"
                                className="
                                    d-block
                                    box-shadow
                                    background-main-color
                                    text-white
                                    hvr-float
                                "
                            >
                                <div className="thum">
                                    <img src="/assets/img/cat-2.jpg" alt="" />
                                </div>
                                <h4 className="text-center padding-15px">
                                    Cocktails
                                </h4>
                            </a>
                        </div>
                        <div className="col-6 margin-bottom-25px">
                            <a
                                href="#"
                                className="
                                    d-block
                                    box-shadow
                                    background-main-color
                                    text-white
                                    hvr-float
                                "
                            >
                                <div className="thum">
                                    <img src="/assets/img/cat-3.jpg" alt="" />
                                </div>
                                <h4 className="text-center padding-15px">
                                    Eggs
                                </h4>
                            </a>
                        </div>
                        <div className="col-6 margin-bottom-25px">
                            <a
                                href="#"
                                className="
                                    d-block
                                    box-shadow
                                    background-main-color
                                    text-white
                                    hvr-float
                                "
                            >
                                <div className="thum">
                                    <img src="/assets/img/cat-4.jpg" alt="" />
                                </div>
                                <h4 className="text-center padding-15px">
                                    Salads
                                </h4>
                            </a>
                        </div>
                    </div>

                    <div className="widget widget_categories">
                        <div className="margin-bottom-30px">
                            <div
                                className="
                                    padding-30px
                                    background-white
                                    border-radius-10
                                "
                            >
                                <h4>
                                    <i
                                        className="
                                            fab
                                            fa-instagram
                                            margin-right-10px
                                            text-main-color
                                        "
                                    ></i>
                                    Instagram
                                </h4>
                                <hr />
                                <div className="row">
                                    <div className="col-6 margin-bottom-20px">
                                        <a href="#">
                                            <img
                                                className="border-radius-10"
                                                src="/assets/img/instgram-1.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="col-6 margin-bottom-20px">
                                        <a href="#">
                                            <img
                                                className="border-radius-10"
                                                src="/assets/img/instgram-2.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="col-6 margin-bottom-20px">
                                        <a href="#">
                                            <img
                                                className="border-radius-10"
                                                src="/assets/img/instgram-3.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="col-6 margin-bottom-20px">
                                        <a href="#">
                                            <img
                                                className="border-radius-10"
                                                src="/assets/img/instgram-4.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
