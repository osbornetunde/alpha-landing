import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ExternalLink = styled.a`
   transition: all 0.15s ease-out;
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    color: var(--primary-color);
    font-weight: 700;
`;

export { StyledForm,ExternalLink }
