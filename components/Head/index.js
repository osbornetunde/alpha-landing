import React from "react";
import NextHead from "next/head";

const defaultDescription =
    "Credo is Africa's first Social Payments platform. Credo is here for Smarter Payments. Follow us and stay close as we revolutionize payments.  It's Credo Central";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = (props) => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>
                {props.title ||
                "Africa's First Social Payments Platform | Credo Central"}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </NextHead>
    );
};

export default Head;
