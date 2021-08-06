import React from "react";
import { useRouter } from "next/router";
import styled, {createGlobalStyle} from "styled-components";
import Head from "../components/Head";
import Header from "../components/Header";


const GlobalStyle = createGlobalStyle`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #0644CC;
    --primary-white: #ffffff;
    --primary-grey: #EEEEEE;
    --primary-font: Pangram, sans-serif;
    --sidebar-background: linear-gradient(0deg, #F7F9FC, #F7F9FC);
    --primary-black: rgba(53, 53, 66, 0.8);
    --font-light: Pangram-Light, sans-serif;
  }

  html {
    width: 100%;
    font-size: 62.5%;
  }

  html, body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    font-family: var(--primary-font);
    width: 100%;
    background: var(--primary-color) !important;
    background-image: url('/bg.svg') !important;
    background-size: 100%;
    background-position: 0% 0%;
  }

  ::-webkit-scrollbar {
    width: .5rem;
  }

  ::-webkit-resizer {
    width: .1em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 2rem;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: var(--primary-font);
  }

  
`;

const MainContainer = styled.main`
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background-position: 0% 0%;
  background-size: 100%;
  height: 100vh;
`;

const Main = ({ children }) => {
    const router = useRouter()

    return (
        <MainContainer>
            <Head />
            <GlobalStyle />
            {router.pathname !== '/terms' && <Header/>}
            {children}
        </MainContainer>
    );
};

export default Main
