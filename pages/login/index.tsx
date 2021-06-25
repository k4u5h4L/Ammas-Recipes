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
            callbackUrl: `/`,
            redirect: true,
        });
    };

    return (
        <>
            <Breadcrumb paths={["login"]} name="Login" />

            <div className="container margin-bottom-100px">
                {/* <p>
                    {" "}
                    A verification email will be sent to your email. Click on
                    the link to be logged in
                </p> */}
                <div
                    id="log-in"
                    className="site-form log-in-form box-shadow border-radius-10"
                >
                    <div className="form-output">
                        {!session ? (
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="form-group label-floating">
                                    <label className="control-label">
                                        Your Email
                                    </label>
                                    <input
                                        className="form-control"
                                        placeholder=""
                                        type="email"
                                        onChange={(e) => handleEmailChange(e)}
                                    />
                                </div>

                                {loading ? (
                                    <div className="remember">
                                        <div className="checkbox">
                                            <Image
                                                src="/loading.gif"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                    </div>
                                ) : null}

                                <button
                                    className="btn btn-md btn-primary full-width"
                                    type="submit"
                                >
                                    Login
                                </button>

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
                        ) : (
                            <div className="form-group label-floating">
                                <label className="control-label">
                                    Not{" "}
                                    <b>
                                        {session.user.name ||
                                            session.user.email}
                                        ? Then logout and login again!
                                    </b>
                                </label>

                                <button
                                    className="btn btn-md btn-primary full-width"
                                    type="button"
                                    onClick={() => signOut()}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
