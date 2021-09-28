import React from "react";
import Link from "next/link";

export default function RecipeCard({
    title,
    imgSrc,
    rating,
    cuisine,
    cook,
    path,
}) {
    return (
        <div
            className="
                            col-xl-3 col-lg-4 col-md-6
                            recipe-item
                            margin-bottom-40px
                        "
        >
            <div className="card border-0 box-shadow">
                <div className="card-img-top">
                    <a href="#">
                        <img src={imgSrc} alt="" />
                    </a>
                </div>
                <div className="padding-lr-30px padding-tb-20px">
                    <h5 className="margin-bottom-20px margin-top-10px">
                        <Link href={`/recipe/${path}`}>
                            <a className="text-dark">{title}</a>
                        </Link>
                    </h5>
                    <div className="rating">
                        {rating ? (
                            <ul>
                                {[...Array(rating)].map(
                                    (rating: number, index: number) => (
                                        <li className="active" key={index}></li>
                                    )
                                )}
                                {/* {[...Array(5 - rating)].map(
                                (rating: number, index: number) => (
                                    <li key={index}></li>
                                )
                            )} */}
                            </ul>
                        ) : (
                            <p>(No ratings yet)</p>
                        )}
                    </div>
                    <hr />
                    <div className="row no-gutters">
                        <div className="col-4 text-left">
                            <a href="#" className="text-red">
                                <i className="far fa-heart"></i>
                                Save
                            </a>
                        </div>
                        <div className="col-8 text-right">
                            <a href="#" className="text-grey-2">
                                <i className="fas fa-utensils"></i> {cuisine}
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
                                            margin-right-15px
                                        "
                            alt=""
                            width={30}
                            height={30}
                        />
                        {cook}
                    </a>
                </div>
            </div>
        </div>
    );
}
