export interface Ingredient {
    quantity: string;
    item: string;
}

export interface ReviewType {
    author: string;
    date: string;
    rating: number;
    desc: string;
}

export interface RecipeType {
    _id?: string;
    ingredients: Ingredient[];
    cuisine: string;
    name: string;
    imgSrc?: string;
    method: string[];
    cook: string;
    reviews: ReviewType[];
}
