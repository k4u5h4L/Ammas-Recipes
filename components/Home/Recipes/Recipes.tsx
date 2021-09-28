import React from "react";

import RecipeCard from "@/components/Home/RecipeCard/RecipeCard";
import { RecipeType } from "@/types/RecipeType";
import Link from "next/link";

interface PropTypes {
    recipes: RecipeType[];
}

export default function Recipes({ recipes }: PropTypes) {
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
                                Learn new recipes uploaded by our users!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="recipes-masonry">
                    {/* <!-- Recipe Item --> */}
                    {recipes.map((recipe, index) => (
                        <RecipeCard
                            key={index}
                            path={recipe._id}
                            title={recipe.name}
                            imgSrc={recipe.imgSrc}
                            rating={recipe.rating}
                            cuisine={recipe.cuisine}
                            cook={recipe.cook}
                        />
                    ))}
                    {/* <!-- // Recipe Item --> */}
                </div>
                <div className="text-center">
                    <Link href="/recipes">
                        <a
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
                    </Link>
                </div>
            </div>
        </section>
    );
}
