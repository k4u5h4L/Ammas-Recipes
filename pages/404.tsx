import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div className="container margin-bottom-100px">
                <div className="text-center">
                    <img src="/assets/img/404.png" alt="" />
                    <h3 className="text-center">Page Not Fount</h3>
                    <h4 className="text-center text-grey-2">
                        Ooops! The page you are looking for, couldn&apos;t be
                        found.
                    </h4>

                    <Link href="/">
                        <a className="btn btn-sm border-radius-30 margin-tb-15px text-white background-second-color  box-shadow padding-lr-25px margin-left-30px">
                            <i className="fas fa-home  margin-right-7px"></i> Go
                            Home
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}
