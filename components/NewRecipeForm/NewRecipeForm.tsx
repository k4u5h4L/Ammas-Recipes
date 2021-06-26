import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

import { RecipeType } from "@/types/RecipeType";

const ADD_RECIPE = gql`
    mutation AddRecipe($data: String!) {
        createRecipe(data: $data) {
            name
            cuisine
        }
    }
`;

export default function NewRecipe() {
    const router = useRouter();
    const [ing, setIng] = useState([1]);
    const [methods, setMethods] = useState([1]);

    const [addRecipe] = useMutation(ADD_RECIPE);

    const r: RecipeType = {
        ingredients: [
            {
                item: "",
                quantity: "",
            },
        ],
        cuisine: "Indian",
        tags: [],
        name: "",
        imgSrc: "",
        method: [""],
        cook: "",
        reviews: [],
    };
    const recipeRef = useRef(r);
    const tagsRef = useRef("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // console.log(recipeRef.current);

        recipeRef.current.tags = tagsRef.current.split(/,\s*/gim);

        addRecipe({ variables: { data: JSON.stringify(recipeRef.current) } });

        // console.log("data submitted");

        router.push("/recipes");
    };
    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="margin-tb-45px full-width">
                    <h4
                        className="
                        padding-lr-30px padding-tb-20px
                        background-white
                        box-shadow
                        border-radius-10
                    "
                    >
                        <i
                            className="
                            far
                            fa-list-alt
                            margin-right-10px
                            text-main-color
                        "
                        ></i>
                        Basic Informations
                    </h4>
                    <div
                        className="
                        padding-30px padding-bottom-30px
                        background-white
                        border-radius-10
                    "
                    >
                        <div className="form-group margin-bottom-20px">
                            <label>
                                <i className="far fa-list-alt margin-right-10px"></i>
                                Recipe Name
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="ListingTitle"
                                onChange={(e) => {
                                    recipeRef.current.name = e.target.value;
                                }}
                                placeholder="Listing Title"
                            />
                        </div>
                        <div className="form-group margin-bottom-20px">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>
                                        <i
                                            className="
                                                far
                                                fa-folder-open
                                                margin-right-10px
                                            "
                                        ></i>
                                        Category/Cuisine
                                    </label>
                                    <select className="form-control form-control-sm">
                                        <option
                                            onClick={(e) => {
                                                recipeRef.current.cuisine =
                                                    "Indian";
                                            }}
                                        >
                                            Indian
                                        </option>
                                        <option
                                            onClick={(e) => {
                                                recipeRef.current.cuisine =
                                                    "Continental";
                                            }}
                                        >
                                            Continental
                                        </option>
                                        <option
                                            onClick={(e) => {
                                                recipeRef.current.cuisine =
                                                    "Italian";
                                            }}
                                        >
                                            Italian
                                        </option>
                                        <option
                                            onClick={(e) => {
                                                recipeRef.current.cuisine =
                                                    "Chinese";
                                            }}
                                        >
                                            Chinese
                                        </option>
                                        <option
                                            onClick={(e) => {
                                                recipeRef.current.cuisine =
                                                    "American";
                                            }}
                                        >
                                            American
                                        </option>
                                        <option
                                            onClick={(e) => {
                                                recipeRef.current.cuisine =
                                                    "Japanese";
                                            }}
                                        >
                                            Japanese
                                        </option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group margin-bottom-20px">
                                        <label>
                                            <i
                                                className="
                                                    far
                                                    fa-flag
                                                    margin-right-10px
                                                "
                                            ></i>
                                            Keywords (separated by a comma
                                            &apos;&apos;,&apos;&apos;)
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="ListingKeywords"
                                            placeholder="Keywords"
                                            onChange={(e) => {
                                                tagsRef.current =
                                                    e.target.value;
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="margin-bottom-45px full-width">
                    <h4
                        className="
                        padding-lr-30px padding-tb-20px
                        background-white
                        box-shadow
                        border-radius-10
                    "
                    >
                        <i
                            className="
                            far
                            fa-list-alt
                            margin-right-10px
                            text-main-color
                        "
                        ></i>
                        Description
                    </h4>
                    <div
                        className="
                        padding-30px padding-bottom-30px
                        background-white
                        border-radius-10
                    "
                    >
                        <h5>
                            Ingredients{" "}
                            <i
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setIng((prevVal) => [...prevVal, 1]);
                                    recipeRef.current.ingredients.push({
                                        item: "",
                                        quantity: "",
                                    });
                                }}
                                className="fas fa-plus margin-right-10px"
                            ></i>
                        </h5>
                        <div className="margin-bottom-20px">
                            {/* <textarea
                            className="form-control"
                            placeholder="Ingredients"
                            id="exampleTextarea"
                            rows={4}
                        ></textarea> */}
                            {ing.map((i, index) => (
                                <div className="row" key={index}>
                                    <div className="col-md-6 margin-bottom-20px">
                                        <label>
                                            {/* <i className="fas fa-plus margin-right-10px"></i> */}
                                            Quantity
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="eg. 2 teaspoon"
                                            onChange={(e) => {
                                                recipeRef.current.ingredients[
                                                    index
                                                ].quantity = e.target.value;
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6 margin-bottom-20px">
                                        <label>
                                            {/* <i className="far fa-images margin-right-10px"></i> */}
                                            Ingredient
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="eg. sugar"
                                            onChange={(e) => {
                                                recipeRef.current.ingredients[
                                                    index
                                                ].item = e.target.value;
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="margin-bottom-20px">
                        <textarea
                            className="form-control"
                            placeholder="Method"
                            id="exampleTextarea"
                            rows={4}
                        ></textarea>
                    </div> */}
                        <h5>
                            Methods{" "}
                            <i
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setMethods((prevVal) => [...prevVal, 1]);
                                    recipeRef.current.method.push("");
                                }}
                                className="fas fa-plus margin-right-10px"
                            ></i>
                        </h5>
                        <div className="margin-bottom-20px">
                            {/* <textarea
                            className="form-control"
                            placeholder="Ingredients"
                            id="exampleTextarea"
                            rows={4}
                        ></textarea> */}
                            {/* ################################ */}
                            {methods.map((i, index: number) => (
                                <div
                                    key={index}
                                    className="form-group margin-bottom-20px"
                                >
                                    <label>
                                        {/* <i className="far fa-list-alt margin-right-10px"></i> */}
                                        {index + 1}.
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="ListingTitle"
                                        onChange={(e) => {
                                            recipeRef.current.method[index] =
                                                e.target.value;
                                        }}
                                        placeholder="Listing Title"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* ################################ */}
                        <div className="row">
                            {/* <div className="col-md-6 margin-bottom-20px">
                                <label>
                                    <i className="fas fa-video margin-right-10px"></i>
                                    Video URL
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="http://www."
                                />
                            </div> */}
                            <div className="col-md-6 margin-bottom-20px">
                                <label>
                                    <i className="far fa-images margin-right-10px"></i>
                                    Image URL (optional)
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        recipeRef.current.imgSrc =
                                            e.target.value;
                                    }}
                                    className="form-control form-control-sm"
                                    placeholder="http://www."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    style={{ cursor: "pointer" }}
                    className="
                    btn btn-lg
                    border-2
                    ba-1
                    text-white
                    margin-bottom-80px
                    btn-block
                    border-radius-15
                    padding-15px
                    box-shadow
                "
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
}
