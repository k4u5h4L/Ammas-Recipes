import React from "react";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";

export default function Verify() {
    return (
        <>
            <Breadcrumb paths={["verify"]} name="Verify Email" />

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
                        <div className="form-group label-floating">
                            <label className="control-label">
                                A verification email has been sent to the email
                                you provided. Click on the link in the email to
                                be logged in!
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
