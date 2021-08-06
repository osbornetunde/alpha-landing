import React, {useEffect, useState} from 'react';
import { Link as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import {Grid, GridItem, Link, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {StyledTerms} from "./styles";
import TermsMenu from "./termsMenu";
import TermsContent from "./termsContent";
import TermFooter from "./termFooter";
import LogoBlue from "../../vectors/logoBlue";
import PrivacyPolicy from "./privacyPolicy";
import BetaNda from "./betaNDA";
import BetaParticipant from "./betaParticipant";
import PaymentService from "./paymentService";


const TermsPage = () => {
    const router = useRouter()

    const [ currentTabIndex, setCurrentTabIndex ] = useState(0)
    useEffect(() => {
        if(router.asPath){
            setCurrentTabIndex(router.asPath.split('#')[1])
        }
    },[router.asPath])


    return (
        <StyledTerms>
            <Grid
                h="calc(100vh - 6rem)"
                templateRows="1fr"
                templateColumns="29rem 1fr"
                gap={4}
            >
                <GridItem style={{height: 'calc(100vh - 6rem)', background:'var(--sidebar-background)'}}>
                    <Grid
                        h="calc(100vh - 6rem)"
                        templateRows="8.1rem 1fr"
                        templateColumns="1fr"
                    >
                        <GridItem p={'3.9rem 4.5rem 1rem'}>
                            <Link as={NextLink} href={"/"}>
                            <LogoBlue/>
                            </Link>
                        </GridItem>
                        <GridItem>
                            <TermsMenu currentTabIndex={currentTabIndex}/>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem style={{height: 'calc(100vh - 6rem)', padding: '4.2rem 8.1rem 0 6.5rem'}}>
                    <Tabs onChange={(index) => setCurrentTabIndex(index)} isLazy>
                        <TabList>
                            <Tab
                                color={'rgba(53, 53, 66, 0.5)'}
                                fontSize='1.5rem'
                                _selected={{color: '#353542', fontWeight: 'bold', borderColor:'#353542'}}
                                pr={'4.4rem'}
                            >
                                Terms & Conditions
                            </Tab>
                            <Tab
                                color={'rgba(53, 53, 66, 0.5)'}
                                fontSize='1.5rem'
                                _selected={{color: '#353542', fontWeight: 'bold', borderColor:'#353542'}}
                                pr={'4.4rem'}
                            >
                                Privacy Policy
                            </Tab>
                            <Tab
                                color={'rgba(53, 53, 66, 0.5)'}
                                fontSize='1.5rem'
                                _selected={{color: '#353542', fontWeight: 'bold', borderColor:'#353542'}}
                                pr={'4.4rem'}
                            >
                                Beta NDA
                            </Tab>
                            <Tab
                                color={'rgba(53, 53, 66, 0.5)'}
                                fontSize='1.5rem'
                                _selected={{color: '#353542', fontWeight: 'bold', borderColor:'#353542'}}
                                pr={'4.4rem'}
                            >
                                Participant Agreement
                            </Tab>
                            <Tab
                                color={'rgba(53, 53, 66, 0.5)'}
                                fontSize='1.5rem'
                                _selected={{color: '#353542', fontWeight: 'bold', borderColor:'#353542'}}
                                pr={'4.4rem'}
                            >
                                Payment Service Agreement
                            </Tab>
                        </TabList>
                        <TabPanels h={'calc(100vh - 3rem)'}>
                            <TabPanel h={'100%'}>
                                <TermsContent/>
                            </TabPanel>
                            <TabPanel h={'100%'}>
                                <PrivacyPolicy/>
                            </TabPanel>
                            <TabPanel h={'100%'}>
                                <BetaNda/>
                            </TabPanel>
                            <TabPanel h={'100%'}>
                                <BetaParticipant/>
                            </TabPanel>
                            <TabPanel h={'100%'}>
                                <PaymentService/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </GridItem>
            </Grid>
            <TermFooter/>
        </StyledTerms>
    );
};

export default TermsPage;
