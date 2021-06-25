import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";

export default function Login() {
    const [session] = useSession();
    const [emailData, setEmailData] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleEmailChange = (e: any) => {
        setEmailData(e.target.value);
        console.log(emailData);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setLoading(true);

        signIn("email", {
            email: emailData,
            callbackUrl: `/login/verify/`,
            redirect: true,
        });
    };

    return (
        <>
            <Breadcrumb paths={["login"]} />

            <div className="container margin-bottom-100px">
                <div
                    id="log-in"
                    className="site-form log-in-form box-shadow border-radius-10"
                >
                    <div className="form-output">
                        <form>
                            <div className="form-group label-floating">
                                <label className="control-label">
                                    Your Email
                                </label>
                                <input
                                    className="form-control"
                                    placeholder=""
                                    type="email"
                                />
                            </div>

                            {/* <div className="remember">
                                <div className="checkbox">
                                    <label>
                                        <input
                                            name="optionsCheckboxes"
                                            type="checkbox"
                                        />
                                        Remember Me
                                    </label>
                                </div>
                                <a href="#" className="forgot">
                                    Forgot my Password
                                </a>
                            </div> */}

                            <a
                                href="dashboard-home.html"
                                className="btn btn-md btn-primary full-width"
                            >
                                Login
                            </a>

                            {/* <div className="or"></div>

                            <a
                                href="#"
                                className="
                                btn btn-md
                                bg-facebook
                                full-width
                                btn-icon-left
                            "
                            >
                                <i
                                    className="fab fa-facebook margin-right-8px"
                                    aria-hidden="true"
                                ></i>
                                Login with Facebook
                            </a>

                            <a
                                href="#"
                                className="
                                btn btn-md
                                bg-twitter
                                full-width
                                btn-icon-left
                            "
                            >
                                <i
                                    className="fab fa-twitter margin-right-8px"
                                    aria-hidden="true"
                                ></i>
                                Login with Twitter
                            </a>

                            <p>
                                Don&apos;t you have an account?
                                <a href="page-sign-up.html">Register Now!</a>
                            </p> */}
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
