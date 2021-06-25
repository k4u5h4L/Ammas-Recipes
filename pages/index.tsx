import React from "react";

import Banner from "@/components/Home/Banner/Banner";
import Ingredients from "@/components/Home/Ingredients/Ingredients";
import Recipes from "@/components/Home/Recipes/Recipes";
import Gallery from "@/components/Home/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";

const Index = () => {
    return (
        <>
            <Banner />
            <Ingredients />
            <Recipes />
            <Gallery />
            <Footer />
        </>
    );
};

export default Index;
