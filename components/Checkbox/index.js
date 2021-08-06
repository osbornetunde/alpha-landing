import React from 'react';
import {Controller} from 'react-hook-form';
import {Box, Checkbox as ChakraCheckbox} from '@chakra-ui/react';
import {ErrorMessage} from '../Input';


const Checkbox = ({ control, name, rules, defaultValue, label, errors, width}) => {
    const newWidth = width ? width : "30rem"
    return (
        <Box w="100%" mt={5}>
            <Controller
                name={name}
                control={control}
                render={({ onChange, onBlur, value, name, ref }) => {
                    return (
                        <ChakraCheckbox
                            size="lg"
                            color="var(--primary-color)"
                            iconColor="var(--primary-white)"
                            iconSize="2rem"
                            onBlur={onBlur}
                            onChange={(e) => onChange(e.target.checked)}
                            checked={value}
                            ref={ref}
                        >
                            <Box  fontSize="1.5rem" lineHeight="20px" fontWeight="400" ml="1rem" color="rgba(0, 0, 0, 0.5)" w={["20rem",`${newWidth}`]}>{label}</Box>
                        </ChakraCheckbox>
                    );
                }}
                defaultValue={defaultValue}
                rules={rules}
            />
            <ErrorMessage errors={errors} name={name} />
        </Box>
    )
};

export default Checkbox;

//{
//  "env": {
//    "development": {
//      "plugins": [
//        [
//          "babel-plugin-styled-components",
//          { "ssr": true, "displayName": true, "preprocess": false }
//        ]
//      ],
//      "presets": ["next/babel"]
//    },
//    "production": {
//      "plugins": [
//        [
//          "babel-plugin-styled-components",
//          { "ssr": true, "displayName": true, "preprocess": false }
//        ]
//      ],
//      "presets": ["next/babel"]
//    }
//  },
//  "plugins": [
//    [
//      "babel-plugin-styled-components",
//      { "ssr": true, "displayName": true, "preprocess": false }
//    ]
//  ]
//}
