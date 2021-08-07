import React from 'react';
import { useRouter} from "next/router";
import { useWindowSize } from 'react-use';
import Wrapper from "../Wrapper/Wrapper";
import {SuccessContainer} from "./styles";
import {Heading} from "@chakra-ui/layout";
import Button, {BookTourButton} from "../Button";
import Tick from "../../vectors/tick";
import Down from "../../vectors/down";
import {Box} from "@chakra-ui/react";

const SuccessPage = () => {
    const router = useRouter();
    const { width } = useWindowSize();
    console.log("width", width);
    return (
        <Wrapper>
            <div className="success-container white-bg">
                <span className="down-arrow">
                <Down/>
            </span>
                <SuccessContainer>
                    <div className="grey-bg">
                        <div className="image-wrapper">
                            <img src="billy.png" alt="success" />
                        </div>
                        <span className="tick-wrapper">
                            <Tick/>
                        </span>
                    </div>
                    <Heading as="h2" mt="3.3rem">Yay!</Heading>
                    <div className="message-wrapper">
                        <p className="message">Thank you for requesting to join
                            our alpha program we will reach out to you when the next cohort starts</p>
                    </div>
                    <div className="button-wrapper">
                        <Box as="span" onClick={() => router.push('/')}>
                            <Button width={width < 768 ? "24rem" : "17.9rem"} height="6.9rem" text="Ok take me back"/>
                        </Box>
                        {/*<BookTourButton onClick={() => router.push("/schedule")}>Can’t Wait, Book a Tour</BookTourButton>*/}
                    </div>
                </SuccessContainer>
            </div>
        </Wrapper>
    );
};

export default SuccessPage;
