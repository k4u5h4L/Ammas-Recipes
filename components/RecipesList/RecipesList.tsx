import React, { useState, useRef } from "react";
import Link from "next/link";

import { Ingredient, RecipeType } from "@/types/index";

export default function RecipesList({ recp }) {
    const [recipes, setRecipes] = useState<RecipeType[]>(recp);
    const searchRef = useRef("");

    // console.log("recipes comp", recipes);

    const searchIngredients = (
        ingredients: Ingredient[],
        query: RegExp
    ): boolean => {
        ingredients.forEach((ingredient: Ingredient) => {
            if (query.test(ingredient.item)) {
                return true;
            }
        });

        return false;
    };

    const handleSearchChange = (e: any) => {
        searchRef.current = e.target.value.trim();

        const searchRegex: RegExp = new RegExp(searchRef.current, "gim");

        setRecipes(
            recp.filter(
                (recipe: RecipeType) =>
                    searchRegex.test(recipe.name) ||
                    searchRegex.test(recipe.cuisine) ||
                    searchRegex.test(recipe.cook) ||
                    recipe.tags.includes(searchRef.current) ||
                    searchIngredients(recipe.ingredients, searchRegex)
            )
        );
    };

    return (
        <>
            <div className="container">
                <div className="margin-bottom-60px">
                    <div className="listing-search box-shadow">
                        <form className="row no-gutters">
                            {/* "col-md-4" previously */}
                            <div className="col-md-12">
                                <div className="keywords">
                                    <input
                                        className="listing-form first"
                                        type="text"
                                        placeholder="Keywords..."
                                        onChange={(e) => handleSearchChange(e)}
                                    />
                                </div>
                            </div>
                            {/* <div className="col-md-4">
                                <div className="categories dropdown">
                                    <a
                                        className="listing-form d-block text-nowrap"
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
                            </div> */}
                            {/* <div className="col-md-4">
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
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>

            {/* ######################## */}

            <div className="container margin-bottom-100px">
                <div className="row">
                    {/* <!-- item --> */}
                    {recipes.map((recipe: RecipeType, index: number) => (
                        <div
                            className="col-lg-6 margin-bottom-30px"
                            key={index}
                        >
                            <div
                                className="
                            background-white
                            thum-hover
                            box-shadow
                            hvr-float
                            full-width
                        "
                            >
                                <div className="float-md-left margin-right-30px thum-xs">
                                    <img
                                        className="width-250px"
                                        src={recipe.imgSrc}
                                        alt={recipe.name + "-alt"}
                                    />
                                </div>
                                <div className="padding-25px">
                                    <div className="rating">
                                        {recipe.rating ? (
                                            <ul>
                                                {[...Array(recipe.rating)].map(
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
                                    <h3>
                                        <Link href={`/recipe/${recipe._id}`}>
                                            <a
                                                className="
                                        d-block
                                        text-dark text-capitalize text-medium
                                        margin-tb-15px
                                    "
                                            >
                                                {recipe.name}
                                            </a>
                                        </Link>
                                    </h3>
                                    <hr />
                                    <div className="row no-gutters">
                                        <div className="col-4 text-left">
                                            <a href="#" className="text-red">
                                                <i className="far fa-heart"></i>{" "}
                                                Save
                                            </a>
                                        </div>
                                        <div className="col-8 text-right">
                                            <a href="#" className="text-grey-2">
                                                <i className="fas fs-utensils"></i>{" "}
                                                {recipe.cuisine}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    ))}
                    {/* <!-- // item --> */}
                </div>

                {/* <div className="text-center">
                    <button
                        style={{ cursor: "pointer" }}
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
                        Show More
                    </button>
                </div> */}
            </div>
        </>
    );
}
