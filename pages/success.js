import React from 'react';
import Main from "../layouts/Main";
import dynamic from "next/dynamic";
// import SuccessPage from "../components/SuccessPage/SuccessPage";
const SuccessPage = dynamic(() => import("../components/SuccessPage/SuccessPage"), { ssr: false })
const Success = () => {
    return (
        <Main>
            <SuccessPage/>
        </Main>
    );
};

export default Success;
