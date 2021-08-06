import styled from "styled-components";
import {Box} from "@chakra-ui/react";
import {useRouter} from "next/router";
import Link from 'next/link';
import Logo from "../../vectors/logo";
import Button from "../Button";
import {device} from "../../utils/device";
import Dot from "../../vectors/dot";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.2rem 1.9rem;
  
  @media ${device.laptop}{
    padding: 1.5rem 10.1rem;
  }
`

const Header = () => {
    const router = useRouter();

    return (
        <HeaderContainer>
            <Link href={"/"}>
                <a>
                    <Logo/>
                </a>
            </Link>

            { router.pathname === "/" ? <Box as="span" onClick={() => router.push('/register')}>
                    <Button width="16.2rem" height="6.3rem" text="Join our alpha" icon={<Dot/>}/>
                </Box> :
                <Box as="span" onClick={() => router.back()}>
                    <Button width="16.2rem" height="6.3rem" text="Go back"/>
                </Box>
            }
        </HeaderContainer>
    )
};

export default Header;
