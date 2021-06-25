import React from "react";

import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import SingleRecipe from "@/components/SingleRecipe/SingleRecipe";

const NewRecipe = () => {
    return (
        <>
            <Breadcrumb paths={["recipe", "paneer"]} name="Recipe" />
            <SingleRecipe />
            <Footer />
        </>
    );
};

export default NewRecipe;
