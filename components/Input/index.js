import React from 'react';
import styled from 'styled-components';
import {Text} from '@chakra-ui/react';
import {device} from "../../utils/device";


const InputContainer = styled.input`
  border: none;
  padding: 1rem 2rem 0.3rem;
  background: #F6F7F9;
  display: block;
  width: 100%;
  max-width: 100%;
  line-height: 1.8rem;
  font-size: ${(props) => props.fontsize};
  outline: none;
  color: #0C0B31;
  font-family: Pangram, sans-serif;
  overflow-wrap: break-word;
  border-radius: 10px;
  height:7rem;
  margin-top: 2.3rem;

  :focus,
  :hover {
    color: var(--primary-color);
  }

  @media ${device.tablet} {
    padding: 1rem 2rem 0.3rem;
  }
  @media ${device.laptop} {
    padding: 0rem 2rem 0.3rem;
  }

  &::placeholder {
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
    color: #0C0B31;
    opacity: 0.7;
  }
`;

export const ErrorMessage = ({ errors, name }) =>
    errors[name] ? (
        <Text color="red" fontSize="1rem" pt="0.5rem">
            {errors[name].message}
        </Text>
    ) : null;

const Input = React.forwardRef(
    (
        { type, placeholder, name, width, errors, fontsize,...rest },
        ref
    ) => {
        return (
            <>
                <InputContainer
                    placeholder={placeholder}
                    name={name}
                    ref={ref}
                    type={type}
                    {...rest}
                    width={width}
                    fontsize={fontsize}
                />
                <ErrorMessage errors={errors} name={name} />
            </>
        );
    }
);

export { Input }
