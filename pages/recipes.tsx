import React from "react";

import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import RecipesList from "@/components/RecipesList/RecipesList";

const Recipes = () => {
    return (
        <>
            <Breadcrumb paths={["recipes"]} name="Recipes" />
            <RecipesList />
            <Footer />
        </>
    );
};

export default Recipes;
