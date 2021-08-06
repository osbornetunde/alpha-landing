import styled from 'styled-components';
import {device} from "../../utils/device";


const WrapperContainer = styled.main`
  padding: 8.4rem 1.9rem 5.5rem;

  @media ${device.laptop} {
    padding: ${props => props.padding || "4.8rem 10.1rem 0"};
    display: flex;
    justify-content: space-between;
    column-gap: 2rem;
  }

  @media ${device.laptopL} {
    padding: ${props => props.padding || "4.8rem 10.1rem 0"};
  }

  @media screen and (min-height: 950px) and (min-width: 1280px) {
    padding: ${props => props.padding || "4.8rem 7.1rem 0"};
  }

  @media ${device.desktop} {
    padding: ${props => props.padding || "4.8rem 15rem 0"};
  }

  .title-container {
    display: ${props => props.padding ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;

    @media ${device.laptop} {
      width: 51.6rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: ${props => props.padding ? 'flex-start' : 'center'};
      padding-top: ${props => props.padding ? '3rem' : '0'};
    }

    .box {
      width: 25.4rem;
      height: .8rem;
      background-color: #00E2FF;
      border-image: linear-gradient(to top, #000 50%, rgba(0, 0, 0, 0) 50%); /* to top - at 50% transparent */
      border-image-slice: 1;
      transform: rotate(-1.11deg);
      margin-bottom: 5.5rem;

      @media ${device.laptop} {
        width: 48.2rem;
        height: .6rem;
      }
    }
  }

  .title {
    font-family: var(---primary-font);
    letter-spacing: -0.02em;
    color: var(--primary-white);
    width: 33rem;
    font-size: 5.4rem;
    font-weight: 900;
    line-height: 55px;
    letter-spacing: -0.02em;
    text-align: center;


    @media ${device.laptop} {
      width: 56rem;
      font-size: 6.7rem;
      font-weight: 800;
      line-height: 65px;
      text-align: left;
    }

    @media ${device.desktop} {
      width: 56rem;
    }
  }

  .down-arrow {
    position: absolute;
    left: -8rem;
    top: 15rem;
  }

  .sub-title {
    font-family: var(--primary-font);
    font-size: 2.1rem;
    font-weight: 500;
    line-height: 38px;
    text-align: center;
    color: var(--primary-white);
    width: 31.8rem;
    margin-bottom: 2.9rem;

    @media ${device.laptop} {
      text-align: left;
      margin-bottom: 0;
      width: 45rem;
    }
  }

  .white-bg {
    background: var(--primary-white);
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    position: relative;
  }

  .form-wrapper {
    width: 100%;
    height: 54.3rem;
    padding: 3.1rem 3.5rem 3.9rem 2rem;

    @media ${device.laptop} {
      width: 64.8rem;
      height: 55.1rem;
      padding: 3.8rem;
    }

    @media ${device.desktop} {
      width: 64.8rem;
    }
  }

  .success-container {
    width: 100%;
    height: auto;
    padding: 3.5rem 3.7rem 4.5rem;
    margin-right: 5rem;

    @media ${device.laptop} {
      width: 52.8rem;
    }
  }

  .nda-container {
    width: 100%;
    height: auto;
    padding: 3.2rem 3.7rem 2.7rem 4rem;

    @media ${device.laptop} {
      padding: 3.2rem 3.7rem 2.7rem 6.4rem;
      width: 50.5rem;
    }
  }

  .arrow {
    position: absolute;
    top: -7rem;
    left: 0;

    @media ${device.tablet} {
      left: 15rem;
    }
    @media ${device.laptop} {
      left: 10rem;
    }
  }

  .CalendarDay__selected {
    background: var(--primary-color) !important;
  }

  .button-wrapper {
    max-width: 26.6rem;
    max-height: 7.9rem;
    margin-top: 2.1rem;
    width: 100%;
    height: 100%;
  }

  .button {
    width: 95%;
    height: 100%;
    font-size: 2.3rem;
    font-weight: 800;
    line-height: 5.3rem;
    letter-spacing: -0.02em;
  }

  .join-button {
    margin-right: 2.5rem;
    background: linear-gradient(216.58deg, #EBF5FF 0%, #BFCAE7 100%);
    border-radius: 10px;
    font-family: var(--primary-font);
    color: var(--primary-color);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .join-button:hover .button_arrow{
    transform: translateX(10px);
    transition: transform 200ms;
  }

  .bell {
    position: absolute;
    left: 0;
    top: 20%;
    width: 5rem;
    height: 5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .more-button {
    width: 95%;
    background-color: rgba(226, 236, 250, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    color: var(--primary-white);
    
    &:hover{
      border: 1px solid rgba(255, 255, 255);
      transition: border 500ms ease-out;
    }
  }

`

export { WrapperContainer}
