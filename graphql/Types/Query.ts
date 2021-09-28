import { queryType, stringArg, intArg } from "nexus";
import { AuthenticationError } from "apollo-server-micro";
import xss from "xss";

import { Recipe as CookRecipe } from "./index";
import dbConnect from "@/utils/dbConnect";
import Recipe from "@/models/Recipe";
import { RecipeType } from "@/types/index";

export const Query = queryType({
    definition(t) {
        t.list.field("SearchRecipe", {
            type: CookRecipe,
            description: "Search a recipe using a query string",
            args: { query: stringArg(), start: intArg(), num: intArg() },
            resolve: async (
                _root,
                {
                    query,
                    start,
                    num,
                }: { query: string; start: number; num: number },
                ctx
            ) => {
                await dbConnect();

                const searchRegex: RegExp = new RegExp(xss(query), "gim");

                // const obj: RecipeType = {
                //     ingredients: [
                //         { quantity: "10 ts", item: "sugar" },
                //         { quantity: "2 ts", item: "oil" },
                //         { quantity: "11 ts", item: "chocolate" },
                //     ],
                //     cook: "Me",
                //     cuisine: "Continental",
                //     name: "Cake",
                //     imgSrc: "/assets/img/recipe-single.jpg",
                //     method: [
                //         "take some oil",
                //         "stir them well",
                //         "heat for 13 mins",
                //     ],
                //     reviews: [
                //         {
                //             author: "Someone",
                //             date: new Date().toDateString(),
                //             rating: 5,
                //             desc: "Excellent recipe",
                //         },
                //     ],
                // };

                // const r = await new Recipe(obj);
                // r.save();

                // prettier-ignore
                const recipes: RecipeType[] = await Recipe.find({
                    $or: [
                        { "cuisine": searchRegex },
                        { "name": searchRegex },
                        { "cook": searchRegex },
                        { "ingredients.item": searchRegex },
                    ],
                }).sort({rating: -1}).skip(start).limit(num);

                if (!recipes) {
                    console.log("does not exist");
                }

                return recipes;
            },
        });

        t.list.field("GetLatestRecipes", {
            type: CookRecipe,
            description: "Get all recipes sorted by latest first.",
            args: { start: intArg(), num: intArg() },
            resolve: async (
                _root,
                { start, num }: { start: number; num: number },
                ctx
            ) => {
                await dbConnect();

                // prettier-ignore
                const recipes: RecipeType[] = await Recipe.find({}).sort({ timestamps: 1 }).skip(start).limit(num);

                if (!recipes) {
                    console.log("does not exist");
                }

                // console.log(recipes);

                return recipes;
            },
        });
    },
});
