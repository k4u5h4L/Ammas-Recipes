import React from "react";

export default function Breadcrumb({ paths }: { paths: string[] }) {
    return (
        <div id="page-title" className="padding-tb-30px gradient-white">
            <div className="container text-left">
                <ol className="breadcrumb opacity-5">
                    {paths.map((path: string, index: number) => (
                        <li key={index}>{path}</li>
                    ))}
                </ol>
                <h1 className="font-weight-300">Recipes</h1>
            </div>
        </div>
    );
}
