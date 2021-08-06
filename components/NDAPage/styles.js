import styled from 'styled-components';

const NDAContainer = styled.section`
  display: flex;
  flex-direction: column; 
  align-items: center;
    .name{
      font-family: var(--primary-font);
      font-size: 26px;
      font-style: normal;
      font-weight: 800;
      line-height: 29px;
      align-self: flex-start;
      margin-bottom: 3rem;
      color:rgba(37, 37, 37, 0.8);
    }
  .details{
    font-family: var(--primary-color);
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: left;
    color:rgba(53, 53, 66, 0.5);
  }
  
`

export { NDAContainer }
