import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import SingleRecipe from "@/components/SingleRecipe/SingleRecipe";
import { RecipeType } from "@/types/RecipeType";
import Recipe from "@/models/Recipe";
import dbConnect from "@/utils/dbConnect";

const NewRecipe = ({ recipe }) => {
    const re = JSON.parse(recipe);

    console.log(re);

    return (
        <>
            <Breadcrumb paths={["recipe", re.name]} name="Recipe" />
            <SingleRecipe recp={re} />
            <Footer />
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    await dbConnect();

    const res = await Recipe.find({});

    const paths = res.map((re: RecipeType) => ({
        params: { id: `${re._id}` },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    await dbConnect();

    const { id } = context.params;

    const recipe: RecipeType = await Recipe.findById(id);

    return {
        props: {
            recipe: JSON.stringify(recipe),
        },
        revalidate: 10,
    };
};

export default NewRecipe;
