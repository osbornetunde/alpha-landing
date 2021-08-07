import React from "react";
import styled from "styled-components";
import {device} from "../../utils/device";

const CheckboxContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 1.1rem;
  margin-top: ${props => props.margintop || "5.1rem"};
  width: 100%;

  label {
    margin-left: 0.9rem;
    color: rgba(12, 11, 49, .6);
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 20px;
    width: ${props => props.width ||
      '44.6rem'
    };
    
    @media ${device.laptop}{
      font-size: 1.3rem;
    }
  }
  input[type="checkbox"] {
    height: 1rem;
    width: 1rem;
    background: #FFFFFF;
    border: 0.3px solid #000000;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    &:checked {
      background: #000;
    }
  }
`;

const Checkbox = React.forwardRef(({ label, name, margintop, width}, ref) => {
    return (
        <CheckboxContainer margintop={margintop} width={width}>
            <input type="checkbox" ref={ref} name={name} />
            <label>{typeof label === "string" ? label : label()}</label>
        </CheckboxContainer>
    );
});

export default Checkbox;
