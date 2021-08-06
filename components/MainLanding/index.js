import React from 'react';
import Wrapper from "../Wrapper/Wrapper";
import {ImageContainer} from "./styles";

const MainLanding = () => {
    return (
        <Wrapper padding={"2.9rem 10rem 0"}>
            <ImageContainer>
                <img src='/bg.png' alt="dashboard"/>
            </ImageContainer>
        </Wrapper>
    );
};

export default MainLanding;
