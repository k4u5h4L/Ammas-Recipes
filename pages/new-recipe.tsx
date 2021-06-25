import React from "react";

import Footer from "@/components/Footer/Footer";
import NewRecipeForm from "@/components/NewRecipeForm/NewRecipeForm";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const NewRecipe = () => {
    return (
        <>
            <Breadcrumb paths={["recipe", "paneer"]} name="Recipes" />
            <NewRecipeForm />
            <Footer />
        </>
    );
};

export default NewRecipe;
