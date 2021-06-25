import React from "react";

export default function Gallery() {
    return (
        <div className="instgram-feed">
            <div className="row no-gutters">
                <div className="col-md-2 col-6">
                    <a href="#">
                        <img src="assets/img/instgram-1.jpg" />
                    </a>
                </div>
                <div className="col-md-2 col-6">
                    <a href="#">
                        <img src="assets/img/instgram-2.jpg" />
                    </a>
                </div>
                <div className="col-md-2 col-6">
                    <a href="#">
                        <img src="assets/img/instgram-3.jpg" />
                    </a>
                </div>
                <div className="col-md-2 col-6">
                    <a href="#">
                        <img src="assets/img/instgram-4.jpg" />
                    </a>
                </div>
                <div className="col-md-2 col-6">
                    <a href="#">
                        <img src="assets/img/instgram-5.jpg" />
                    </a>
                </div>
                <div className="col-md-2 col-6">
                    <a href="#">
                        <img src="assets/img/instgram-6.jpg" />
                    </a>
                </div>
            </div>
        </div>
    );
}
