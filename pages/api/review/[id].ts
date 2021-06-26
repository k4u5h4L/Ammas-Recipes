import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import mongoose from "mongoose";

import dbConnect from "@/utils/dbConnect";
import Recipe from "@/models/Recipe";
import { RecipeType, ReviewType } from "@/types/RecipeType";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            await dbConnect();

            const session = await getSession({ req });

            const { id } = req.query;

            if (!session) {
                res.status(404).json({
                    message:
                        "You need to be authenticated to perform this action",
                });
                return;
            }
            let review: ReviewType = req.body;

            review.author =
                session.user.name || session.user.email.split("@")[0];

            let recipe: RecipeType = await Recipe.findById(id);

            const allRatings: number[] = [
                ...recipe.reviews.map((review: ReviewType) => review.rating),
                review.rating,
            ];

            const avgRating: number = parseInt(
                (
                    allRatings.reduce(
                        (accumulator, currentValue) =>
                            accumulator + currentValue
                    ) / allRatings.length
                ).toFixed(0)
            );
            // console.log(avgRating);
            // review.author = review.author.split("@")[0];
            recipe.reviews.push(review);
            recipe.rating = avgRating;

            Recipe.findOneAndUpdate(
                { _id: mongoose.Types.ObjectId(`${id}`) },
                { ...recipe }
            ).then((res) => console.log(res));

            res.status(200).json({ message: "Review saved" });
        } catch (err: any) {
            res.status(500).json({ message: "POST data is incorrect" });
        }
    } else {
        res.status(404).json({ message: "route or method is incorrect" });
    }
};
