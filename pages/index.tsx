import React from "react";

import Banner from "@/components/Home/Banner/Banner";
import Ingredients from "@/components/Home/Ingredients/Ingredients";
import Recipes from "@/components/Home/Recipes/Recipes";
import Gallery from "@/components/Home/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";
import { GetStaticProps, GetStaticPropsContext } from "next";
import dbConnect from "@/utils/dbConnect";
import { RecipeType } from "@/types/RecipeType";
import Recipe from "@/models/Recipe";

const Index = ({ recps, cuisines }) => {
    return (
        <>
            <Banner />
            <Ingredients cuisines={cuisines} />
            <Recipes recipes={JSON.parse(recps)} />
            <Gallery />
            <Footer />
        </>
    );
};

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    await dbConnect();

    const recipes: RecipeType[] = await Recipe.find().sort({ timestamps: 1 });

    const cuisines: string[] = recipes.map((recipe) => recipe.cuisine);

    // console.log(recipes);

    return {
        props: {
            recps: JSON.stringify(recipes.slice(0, 9)),
            cuisines: cuisines,
        },
        revalidate: 30,
    };
};

export default Index;
