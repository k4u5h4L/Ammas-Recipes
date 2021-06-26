import React from "react";

interface PropTypes {
    cuisines: string[];
}

export default function Ingredients({ cuisines }: PropTypes) {
    return (
        <div className="pull-top-85px">
            <div className="container">
                <div className="row">
                    {cuisines.map((cuisine, index) => (
                        <div
                            key={index}
                            className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px"
                        >
                            <a
                                href="#"
                                className="
                                d-block
                                box-shadow
                                background-main-color
                                text-white
                                hvr-float
                            "
                            >
                                {/* <div className="thum">
                                <img src="assets/img/cat-1.jpg" alt="" />
                            </div> */}
                                <h4 className="text-center padding-15px">
                                    {cuisine}
                                </h4>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
