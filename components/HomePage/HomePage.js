import React from 'react';
//import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import { Heading,Box } from '@chakra-ui/react';
import DeveloperForm from "../Form/DeveloperForm";
import MerchantForm from "../Form/MerchantForm";
import Down from "../../vectors/down";
import Wrapper from "../Wrapper/Wrapper";

const HomePage = () => {
    return (
       <Wrapper>
           <div className="form-wrapper white-bg">
                <span className="arrow">
                    <Down/>
                </span>
                <Box>
                    <Box textAlign={'center'}>
                        <Heading as='h1' size='xl' color="#0E3FAC" fontSize={{base:'1.9rem', md:'2.5rem'}} isTruncated>
                            Sign Up
                        </Heading>
                    </Box>
                    <Box><DeveloperForm/></Box>
                </Box>
                {/* <Tabs>
                    <TabList justifyContent="center" border="none">
                        <Tab color="rgba(12, 11, 49, 0.3)" fontSize={{base:'1.9rem', md:'2.5rem'}} _selected={{ color: "#0E3FAC", fontWeight: 800 }} >Sign Up</Tab>
                         <Tab color="rgba(12, 11, 49, 0.3)" fontSize={{base:'1.9rem', md:'2.5rem'}} _selected={{ color: "#0E3FAC", bg: "rgba(6, 54, 158, 0.1)", fontWeight: 800 }} >Merchant</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <DeveloperForm/>
                        </TabPanel>
                         <TabPanel>
                            <MerchantForm/>
                        </TabPanel>
                    </TabPanels>
                </Tabs> */}
           </div>
        </Wrapper>
    );
};

export default HomePage;
