import styled from 'styled-components';
import {device} from "../../utils/device";


const SuccessContainer = styled.section`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .grey-bg{
    width: 100%;
    height: 16.4rem;
    background-color:rgba(6, 54, 160, 0.1);
    border-radius: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tick-wrapper{
    position: absolute;
    right: -4rem;
    top: -4rem;
  }
  .image-wrapper{
    width: 24.4rem;
    height: 28rem;
    position: absolute;
    top: -7rem;
  }
  .image-wrapper img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h2{
    font-family: var(--primary-font);
    font-size: 2.6rem;
    font-weight: 800;
    line-height: 30px;
    text-align: center;
    color: #0E3FAC;
  }
  .message-wrapper{
    margin-top: 1.7rem;
    margin-bottom: 2.7rem;
    width:31.2rem;
  }
  .message{
    font-family: var(--primary-font);
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 25px;
    text-align: center;
    color: rgba(14, 16, 60, 0.5);
  }
  
  .button-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    @media ${device.tablet}{
      flex-direction: row;
    }
  }
`

export { SuccessContainer }
