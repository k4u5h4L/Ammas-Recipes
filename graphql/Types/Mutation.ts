import { stringArg, nonNull, mutationType } from "nexus";
import { AuthenticationError, ApolloError } from "apollo-server-micro";
import xss from "xss";

import dbConnect from "@/utils/dbConnect";
import Recipe from "@/models/Recipe";
import { Ingredient, RecipeType } from "@/types/index";

export const Mutation = mutationType({
    definition(t) {
        t.field("createRecipe", {
            type: "Recipe",
            args: {
                data: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (_root, { data }: { data: string }, ctx) => {
                if (ctx.session) {
                    await dbConnect();
                    // console.log("data", JSON.parse(data));

                    try {
                        let recipe: RecipeType = JSON.parse(data);
                        recipe.cook =
                            ctx.session.user.name ||
                            ctx.session.user.email.split("@")[0];

                        recipe.method = recipe.method
                            .map((m: string) => m.trim())
                            .filter((m: string) => m != "");

                        recipe.ingredients = recipe.ingredients
                            .map((ing: Ingredient) => ({
                                item: ing.item.trim(),
                                quantity: ing.item.trim(),
                            }))
                            .filter(
                                (ing: Ingredient) =>
                                    ing.item != "" && ing.quantity != ""
                            );

                        const r = await new Recipe(recipe);
                        r.save();

                        return recipe;
                    } catch (err: any) {
                        console.error(err);

                        throw new ApolloError(
                            "An error occured while creating a recipe"
                        );
                    }
                } else {
                    throw new AuthenticationError("User is not logged in.");
                }
            },
        });
    },
});
