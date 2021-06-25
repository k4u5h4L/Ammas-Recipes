import { queryType, stringArg } from "nexus";
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
            args: { query: stringArg() },
            resolve: async (_root, { query }: { query: string }, ctx) => {
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
                });

                if (!recipes) {
                    console.log("does not exist");
                }

                return recipes;
            },
        });
    },
});
