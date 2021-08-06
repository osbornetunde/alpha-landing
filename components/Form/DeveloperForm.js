import React, {useState} from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {Link as NextLink} from 'next/link'
import {useRouter} from 'next/router'
import {useRecoilState} from "recoil";
import {Box, Link, Text} from "@chakra-ui/react";
import {Input} from "../Input";
import {JoinButton} from "../Button";
import {StyledForm} from "./style";
import Checkbox from "../Input/checkbox";
import {developerDetails} from "../../atoms/developerDetails";


const DeveloperForm = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false)
    const [developerDetail, setDeveloperDetail] = useRecoilState(developerDetails);
    const formDefault = developerDetail ? { ...developerDetail } : {};
    const { register, errors, handleSubmit, formState } = useForm({
        mode:'onChange',
        defaultValues: formDefault
    });
    const handleFormSubmission = async (values) => {
        const modifiedValue = {
            ...values,
            tag: 'Developer'
        }
        setDeveloperDetail(modifiedValue)
        // https://flow.zoho.com/727443403/flow/webhook/incoming?zapikey=1001.6a687bef98c4e1b86016b160f9595d3a.04078d305e395cbe015e408ce3a5d41a&isdebug=false
        try {
            setSubmitting(true);
            const data = await axios.create({ transformRequest: [(data, _headers) => JSON.stringify(data)] })
                .post(
                    "https://hooks.zapier.com/hooks/catch/10683539/bud00ju",
                modifiedValue
            );
            console.log("response",data)
            if (data.status === 200) {
                setSubmitting(false);
                router.push('/success')
            }
        } catch (err) {
            setSubmitting(false);
        }
    }

    const renderPolicy = () => <Text>I agree to the <Link as={NextLink} href='/terms#2' textDecoration={'none'} color="var(--primary-color)" fontWeight={700}>Credo Alpha Participant</Link> and <Link as={NextLink} href='/terms' color="var(--primary-color)" fontWeight={700}>Non-Disclosure Policies.</Link></Text>

    return (
        <StyledForm onSubmit={handleSubmit(handleFormSubmission)}>
            <Input name="name" ref={register({ required: { value: true, message: 'Name is required' }})} errors={errors} placeholder="Name" type="text" fontsize="1.9rem"/>
            <Input name="email" ref={register({ required: { value: true, message: 'email is required' } })} errors={errors} placeholder="Email Address" type="email" fontsize="1.9rem"/>
            <Box w={'100%'}>
                <Text mt={'2.8rem'} mb={'1.5rem'} fontSize={'1.2rem'} fontWeight={400} lineHeight={'2.7rem'} color={'rgba(53, 53, 66, 0.8)'} width={'49.3rem'}>To participate in our Alpha Test Program, you will be required to keep things on the <br/><Box as={'span'} fontWeight={'700'}>hush-hush</Box> for a while.</Text>
            </Box>
            <Box w="100%" >
                <Checkbox name="agree" ref={register({ required: { value: true, message: 'please tick to agree' }})} errors={errors} label={() => renderPolicy()} margintop={'0'} width={'100%'}/>
            </Box>
            <Box w="100%">
                <Checkbox name="agreeNewsletter" ref={register({ required: { value: true, message: 'please tick to agree' }})} errors={errors} label="I agree to receive Credo news and updates." margintop={'0'}/>
            </Box>
            <JoinButton disabled={!formState.isValid} margintop={'2rem'} submitting={submitting}/>
        </StyledForm>
    );
};

export default DeveloperForm;
