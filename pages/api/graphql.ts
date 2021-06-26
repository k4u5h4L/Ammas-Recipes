import { ApolloServer /* , AuthenticationError */ } from "apollo-server-micro";
import { getSession } from "next-auth/client";
import dbConnect from "@/utils/dbConnect";
import { schema } from "@/graphql/schema";

const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
        await dbConnect();

        // get user's session
        const session = await getSession({ req });
        // console.log("USER SESSION", session); // <-- userSession is ALWAYS null

        // if (!userSession) {
        //     throw new AuthenticationError("User is not logged in.");
        // }

        // return { db, dataloaders, userSession };
        return { session };
    },
    playground: {
        settings: {
            //   "editor.theme": "light",
            "request.credentials": "same-origin",
        },
    },
});
const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
