import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800%7CPoppins:100,200,300i,300,400,700,400i,500%7CDancing+Script:700"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="/assets/css/animate.css" />
                    <link
                        href="/assets/css/owl.carousel.css"
                        rel="stylesheet"
                    />
                    <link href="/assets/css/owl.theme.css" rel="stylesheet" />
                    <link
                        rel="stylesheet"
                        href="/assets/css/bootstrap.min.css"
                    />
                    <link rel="stylesheet" href="/assets/css/hover-min.css" />
                    <link
                        rel="stylesheet"
                        href="/assets/css/flag-icon.min.css"
                    />
                    <link rel="stylesheet" href="/assets/css/style.css" />
                    <link rel="stylesheet" href="/assets/css/colors/main.css" />
                    <link
                        rel="stylesheet"
                        href="/assets/css/elegant_icon.css"
                    />
                    {/* <link rel="stylesheet" href="/assets/css/rating.css" /> */}
                    <link
                        rel="stylesheet"
                        href="/assets/css/fontawesome-all.min.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="/assets/js/jquery-3.2.1.min.js"></script>
                    <script src="/assets/js/sticky-sidebar.js"></script>
                    <script src="/assets/js/YouTubePopUp.jquery.js"></script>
                    <script src="/assets/js/owl.carousel.min.js"></script>
                    <script src="/assets/js/imagesloaded.min.js"></script>
                    <script src="/assets/js/masonry.min.js"></script>
                    <script src="/assets/js/wow.min.js"></script>
                    <script src="/assets/js/custom.js"></script>
                    <script src="/assets/js/popper.min.js"></script>
                    <script src="/assets/js/bootstrap.min.js"></script>
                </body>
            </Html>
        );
    }
}
