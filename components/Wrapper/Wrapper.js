import React from 'react';
import {useRouter} from 'next/router'
import {WrapperContainer} from "./styles";
import {Box} from "@chakra-ui/react";
import ButtonArrow from "../../vectors/buttonArrow";

const Wrapper = ({padding,children}) => {
    const router = useRouter();
    return (
        <WrapperContainer padding={padding}>
            <div className="title-container">
                <h1 className="title">Maximizing Revenue with Online Payments.</h1>
                <div className="box"/>
                <p className="sub-title">With Credo you can now make and receive payments on your favourite social platform.</p>
                {router.pathname === '/' &&
                <Box d="flex" w="100%">
                    <div className="button-wrapper">
                        <button className="button join-button">
                            <Box as="span" className="bell" >
                               <img src="/bell.png" alt="bell"/>
                            </Box>
                            <Box as="span" ml="2rem" onClick={() => router.push('/register')}>Register</Box>
                            <Box as="span" ml="1rem" className="button_arrow">
                                <ButtonArrow/>
                            </Box>
                        </button>
                    </div>
                    <div className="button-wrapper">
                        <button className="button more-button">
                            Tell me more
                        </button>
                    </div>
                </Box>}
            </div>
            {children}
        </WrapperContainer>
    );
};

export default Wrapper;
