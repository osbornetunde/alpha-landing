import React from 'react';
import styled, { css } from 'styled-components'
import Arrow from "../../vectors/arrow";
import {Box, Spinner} from "@chakra-ui/react";
import {device} from "../../utils/device";


const ButtonContainer = styled.button`
  background: #2C5ECA;
  height: ${({height}) => height};
  width: ${({width}) => width};
  color: var(--primary-white);
  border-radius: 10px;
  font-family: var(--primary-font);
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 53px;
  letter-spacing: 0.02em;
  border: 1px solid  #0E3FAC;
  position: relative;
  ${props => props.disabled ? css`
  opacity: 0.5;
  ` : ''};
  
  .dot{
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`

const JoinButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-white);
  background: #2C5ECA;
  //padding: 2.5rem 7.1rem;
  border-radius: 10px;
  height: 7.5rem;
  width: 20.5rem;
  line-height: 21px;
  font-size: 2.1rem;
  margin-top: ${props => props.margintop || '4.1rem'};
  ${props => props?.disabled ? css`
  opacity: 0.5;
  ` : ''};
  
  @media ${device.laptop}{
    width: 26.5rem;
  }
  
  @media ${device.desktop}{
    width: 29.9rem;
  }
`

const BookTourContainer = styled.button`
  height: 6.9rem;
  width: 24rem;
  border-radius: 10px;
  color: #0636A0;
  background: var(--primary-white);
  border: 1px solid #0E3FAC;
  margin-top: 1rem;
  font-family: var(--primary-font);
  font-weight: 800;
  font-size: 1.6rem;
  ${props => props?.disabled ? css`
  opacity: 0.5;
  ` : ''};
  
  @media ${device.tablet}{
    margin-left: 2rem;
    margin-top: 0;
  }
`

const Button = ({width, height, text, disabled, submitting, icon}) => {
    return (
        <ButtonContainer width={width} height={height} disabled={disabled}>
            {icon && <Box as="span" className="dot">{icon}</Box>}
            { submitting ?
                <Spinner
                    mt="1rem"
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="white"
                    size="xl"
        />: `${text}`}
        </ButtonContainer>
    )
};

export const JoinButton = ({ disabled, margintop, submitting }) => {
    return (
        <JoinButtonContainer disabled={disabled} margintop={margintop}>
            { submitting ?
                    <Spinner
                        mt="1rem"
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="white"
                        size="xl"
                    /> :
                    <>
                        Join the Alpha
                        <Arrow/>
                    </>
            }
        </JoinButtonContainer>

    )
}

export const BookTourButton = ({disabled, onClick}) => {
    return(
        <BookTourContainer disabled={disabled} onClick={onClick}>
            Can’t Wait, Book a Tour
        </BookTourContainer>
    )
}

export default Button ;
