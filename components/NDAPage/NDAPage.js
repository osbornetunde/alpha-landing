import React, {useState} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router'
import {useForm} from "react-hook-form";
import {Box} from "@chakra-ui/react";
import {useRecoilValue} from "recoil";
import Wrapper from "../Wrapper/Wrapper";
import {NDAContainer} from "./styles";
import Down from "../../vectors/down";
import Checkbox from "../Checkbox";
import Button from "../Button";
import {developerDetails} from "../../atoms/developerDetails";
import {merchantDetails} from "../../atoms/merchantDetails";


const NDAPage = () => {
    const router = useRouter()
    const [submitting, setSubmitting] = useState();
    const { control, errors, handleSubmit, formState} = useForm({
        mode:'onChange'
    });
    const developerDetail = useRecoilValue(developerDetails);
    console.log("details for developer", developerDetail)
    const merchantDetail = useRecoilValue(merchantDetails);
    console.log("merchant for details", merchantDetail);

    const handleAgreementSubmit = async (value) => {
        // https://flow.zoho.com/727443403/flow/webhook/incoming?zapikey=1001.6a687bef98c4e1b86016b160f9595d3a.04078d305e395cbe015e408ce3a5d41a&isdebug=false
        console.log(value)
        let newValue;
        if(Object.entries(developerDetail).length > 0){
            newValue = {
                ...developerDetail,
                ndaAgree: value.agreeNda
            }
        }else if(Object.entries(merchantDetail).length > 0){
            newValue = {
                ...merchantDetail,
                ndaAgree: value.agreeNda
            }
        }


        try {
            setSubmitting(true);
            console.log("new value", newValue);
            const data = await axios.post(
                "https://hooks.zapier.com/hooks/catch/10015745/ovp59sa/",
                newValue
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
    return (
        <Wrapper>
            <div className="nda-container white-bg">
                <span className="down-arrow">
                <Down/>
            </span>
                <NDAContainer>
                        <p className="name">{`I, ${developerDetail.name || merchantDetail.name}`}</p>
                    <div style={{margin:"2rem 0"}}>
                        <p className="details">hereby agree to the terms of the<span> Non Disclosure agreement and participant agremeent shown on this page.</span></p>
<br/>
                        <br/>
                            <p className="details">[I agree]</p>
<br/>
                        <br/>
                        <br/>
                           <p className="details"> As you join the Credo Test Program, you will be able to explore our innovative product ahead of the general populace. Instructions on how you will provide feedback will be communicated by email after the test period elapses. Every tester is mandated to agree to this non-disclosure agreement.
                        </p>
                    </div>
                        <Checkbox label="I agree to be contacted by Credo about this offer as per the Credo Privacy Policy." name="agreeNda" errors={errors} control={control} defaultValue="" rules={{required:{value:true, message: "Please tick to accept agreement"}}}/>
                    <Box mt="4rem" onClick={handleSubmit(handleAgreementSubmit)}>
                        <Button width="16rem" height="6rem" text="I Agree" disabled={!formState.isValid || submitting} submitting={submitting}/>
                    </Box>
                </NDAContainer>
            </div>
        </Wrapper>
    );
};

export default NDAPage;
