import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import SingleRecipe from "@/components/SingleRecipe/SingleRecipe";
import { RecipeType } from "@/types/RecipeType";
import Recipe from "@/models/Recipe";
import dbConnect from "@/utils/dbConnect";

const NewRecipe = ({ rec }) => {
    const router = useRouter();
    // console.log(re);

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    const recipe = JSON.parse(rec);

    return (
        <>
            <Breadcrumb paths={["recipe", recipe.name]} name="Recipe" />
            <SingleRecipe recp={recipe} />
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
    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    await dbConnect();

    const { id } = context.params;

    let recipe: RecipeType;

    try {
        recipe = await Recipe.findById(id);
    } catch (err: any) {
        return {
            notFound: true,
        };
    }

    if (!recipe) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            rec: JSON.stringify(recipe),
        },
        revalidate: 5,
    };
};

export default NewRecipe;
