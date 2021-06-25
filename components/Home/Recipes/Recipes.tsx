import React from "react";

import RecipeCard from "@/components/Home/RecipeCard/RecipeCard";

export default function Recipes() {
    const recipes = [
        {
            title: "Slow Cooker Loaded Potato Soup",
            imgSrc: "/assets/img/recipes-1.jpg",
            rating: 4,
            serving: [6, 8],
            cook: "Alison Brie",
        },
        {
            title: "Slow Cooker Loaded Potato Soup",
            imgSrc: "/assets/img/recipes-2.jpg",
            rating: 4,
            serving: [6, 8],
            cook: "Alison Brie",
        },
        {
            title: "Slow Cooker Loaded Potato Soup",
            imgSrc: "/assets/img/recipes-3.jpg",
            rating: 4,
            serving: [6, 8],
            cook: "Alison Brie",
        },
        {
            title: "Slow Cooker Loaded Potato Soup",
            imgSrc: "/assets/img/recipes-4.jpg",
            rating: 4,
            serving: [6, 8],
            cook: "Alison Brie",
        },
        {
            title: "Slow Cooker Loaded Potato Soup",
            imgSrc: "/assets/img/recipes-5.jpg",
            rating: 4,
            serving: [6, 8],
            cook: "Alison Brie",
        },
        {
            title: "Slow Cooker Loaded Potato Soup",
            imgSrc: "/assets/img/recipes-6.jpg",
            rating: 4,
            serving: [6, 8],
            cook: "Alison Brie",
        },
        {
            title: "Slow Cooker Loaded Potato Soup",
            imgSrc: "/assets/img/recipes-1.jpg",
            rating: 4,
            serving: [6, 8],
            cook: "Alison Brie",
        },
        {
            title: "Slow Cooker Loaded Potato Soup",
            imgSrc: "/assets/img/recipes-2.jpg",
            rating: 4,
            serving: [6, 8],
            cook: "Alison Brie",
        },
    ];

    return (
        <section className="padding-tb-100px">
            <div className="container">
                <div className="title text-center">
                    <h2 className="font-weight-700 text-main-color">
                        Latest Recipes
                    </h2>
                    <div className="row justify-content-center margin-bottom-45px">
                        <div className="col-md-7">
                            <p className="text-grey-2">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&apos;s standard dummy text ever
                                since the 1500s
                            </p>
                        </div>
                    </div>
                </div>

                <div className="recipes-masonry">
                    {/* <!-- Recipe Item --> */}
                    {recipes.map((recipe, index) => (
                        <RecipeCard
                            key={index}
                            title={recipe.title}
                            imgSrc={recipe.imgSrc}
                            rating={recipe.rating}
                            serving={recipe.serving}
                            cook={recipe.cook}
                        />
                    ))}
                    {/* <!-- // Recipe Item --> */}
                </div>
                <div className="text-center">
                    <a
                        href="#"
                        className="
                            btn
                            box-shadow
                            margin-top-50px
                            padding-tb-10px
                            btn-sm
                            border-2 border-radius-30
                            btn-inline-block
                            width-210px
                            background-second-color
                            text-white
                        "
                    >
                        Show All Recipes
                    </a>
                </div>
            </div>
        </section>
    );
}
