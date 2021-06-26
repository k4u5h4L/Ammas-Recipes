import React from "react";
import { GetStaticPathsContext, GetStaticProps } from "next";

import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import RecipesList from "@/components/RecipesList/RecipesList";
import Recipe from "@/models/Recipe";
import { RecipeType } from "@/types/RecipeType";

const Recipes = ({ recipes }) => {
    return (
        <>
            <Breadcrumb paths={["recipes"]} name="Recipes" />
            <RecipesList recp={JSON.parse(recipes)} />
            <Footer />
        </>
    );
};

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPathsContext
) => {
    const recipes: RecipeType[] = await Recipe.find().sort({ rating: -1 });
    // .limit(20);

    // console.log(recipes);

    return {
        props: {
            recipes: JSON.stringify(recipes),
        },
        revalidate: 10,
    };
};

export default Recipes;
