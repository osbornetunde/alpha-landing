import React from 'react';
import {Box, Text} from "@chakra-ui/react";
import Legal from '../../vectors/legal'

const TermFooter = () => {
    return (
        <Box w={'100%'} bg={'#FAFAFA'} p={'1.4rem 9rem 9.5rem'} d={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Box>
                <Legal/>
            </Box>
            <Text color={'rgba(53, 53, 66, 0.5)'} fontSize={'1.6rem'} lineHeight={'2.9rem'}>
                All Rights Reserved. Credo © 2021
            </Text>
        </Box>
    );
};

export default TermFooter;
