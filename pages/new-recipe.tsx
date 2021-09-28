import React from "react";
import { GetServerSideProps } from "next";

import Footer from "@/components/Footer/Footer";
import NewRecipeForm from "@/components/NewRecipeForm/NewRecipeForm";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { getSession } from "next-auth/client";

const NewRecipe = ({ user }) => {
    return (
        <>
            <Breadcrumb paths={["recipe", "new"]} name="Recipes" />
            <NewRecipeForm user={user} />
            <Footer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (!session) {
        console.log("user is not logged in");

        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: {
            user: session.user,
        },
    };
};

export default NewRecipe;
