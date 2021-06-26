import mongoose from "mongoose";

/* RecipeSchema will correspond to a collection in your MongoDB database. */
const RecipeSchema = new mongoose.Schema(
    {
        cuisine: {
            type: String,
        },
        ingredients: {
            type: Array,
        },
        method: {
            type: Array,
        },
        rating: {
            type: Number,
        },
        tags: {
            type: Array,
        },
        cook: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        reviews: {
            type: Array,
        },
        imgSrc: {
            type: String,
        },
    },
    { timestamps: true }
);

export { RecipeSchema };

export default mongoose.models.Recipe || mongoose.model("Recipe", RecipeSchema);
