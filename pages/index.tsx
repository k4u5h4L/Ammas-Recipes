import React from "react";
// import { gql, useQuery } from "@apollo/client";

import Banner from "@/components/Home/Banner/Banner";
import Ingredients from "@/components/Home/Ingredients/Ingredients";
import Recipes from "@/components/Home/Recipes/Recipes";
import Gallery from "@/components/Home/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";
import { GetStaticProps, GetStaticPropsContext } from "next";
import dbConnect from "@/utils/dbConnect";
import { RecipeType } from "@/types/RecipeType";
import Recipe from "@/models/Recipe";

// const GET_RECIPES = gql`
//     query GetRecipes($start: Int!, $num: Int!) {
//         GetLatestRecipes(start: $start, num: $num) {
//             cuisine
//             cook
//             name
//             imgSrc
//             ingredients {
//                 quantity
//                 item
//             }
//             method
//             tags
//         }
//     }
// `;

const Index = ({ recps, cuisines }) => {
    // const { loading, error, data } = useQuery(GET_RECIPES, {
    //     variables: { start: 0, num: 8 },
    // });

    // // if (loading) {
    // //     <h1>loading...</h1>;
    // // }

    // const onlyUnique = (value: string, index: number, self: string[]) => {
    //     return self.indexOf(value) === index;
    // };

    return (
        <>
            <Banner />
            {/* {data ? (
                <>
                    <Ingredients
                        cuisines={data.GetLatestRecipes.map(
                            (recipe: RecipeType) => recipe.cuisine
                        ).filter(onlyUnique)}
                    />
                    <Recipes recipes={data.GetLatestRecipes} />
                </>
            ) : (
                <h2>Loading...</h2>
            )} */}
            <Ingredients cuisines={cuisines} />
            <Recipes recipes={recps} />
            <Gallery />
            <Footer />
        </>
    );
};

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    await dbConnect();

    const onlyUnique = (value: string, index: number, self: string[]) => {
        return self.indexOf(value) === index;
    };

    const recipes: RecipeType[] = await Recipe.find()
        .sort({ timestamps: 1 })
        .skip(0)
        .limit(8);

    const cuisines: string[] = recipes
        .map((recipe) => recipe.cuisine)
        .filter(onlyUnique)
        .slice(0, 7);

    // console.log(recipes);

    return {
        props: {
            recps: recipes,
            cuisines: cuisines,
        },
        revalidate: 30,
    };
};

export default Index;
