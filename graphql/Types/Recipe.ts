import { objectType } from "nexus";

const Ingredient = objectType({
    name: "Ingredient",
    definition(t) {
        t.string("quantity");
        t.string("item");
    },
});

const Review = objectType({
    name: "Review",
    definition(t) {
        t.string("author");
        t.string("date");
        t.int("rating");
        t.string("desc");
    },
});

export const Recipe = objectType({
    name: "Recipe",
    definition(t) {
        t.string("cuisine");
        t.string("cook");
        t.string("name");
        t.string("imgSrc");
        t.list.field("ingredients", {
            type: Ingredient,
        });
        t.list.string("method");
        t.list.field("reviews", {
            type: Review,
        });
    },
});
