import React from 'react';
import Link from 'next/link';
import {Menu, MenuItem, ProSidebar, SidebarContent} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {StyledTermsMenu} from "./styles";


const TermsMenu = ({ currentTabIndex }) => {

    const ConditionMenu = () => {

        return (
            <Menu iconShape="square">
                <Link href={"#intro"}>
                    <MenuItem>Introduction</MenuItem>
                </Link>
                <Link href={"#copyright"}>
                    <MenuItem>Copyright</MenuItem>
                </Link>
                <Link href={"#trademarks"}>
                    <MenuItem>Trademarks</MenuItem>
                </Link>
                <Link href={"#patents"}>
                <MenuItem>Patents</MenuItem>
                </Link>
                <Link href={"#taxes"}>
                <MenuItem>Methods of Payment & Taxes</MenuItem>
                </Link>
                <Link href={"#indemnification"}>
                <MenuItem>Indemnification</MenuItem>
                </Link>
                <Link href={"#dispute"}>
                <MenuItem>Dispute Resolution</MenuItem>
                </Link>
                <Link href={"#policies"}>
                <MenuItem>Site Policies, Modification & Severabilities</MenuItem>
                </Link>
            </Menu>
        )
    }

    const PrivacyMenu = () => {

        return (
            <Menu iconShape="square">
                <Link href={"#privacyintro"}>
                    <MenuItem>Introduction</MenuItem>
                </Link>
                <Link href={"#application"}>
                    <MenuItem>Application of Policy</MenuItem>
                </Link>
                <Link href={"#collection"}>
                    <MenuItem>Information Collection</MenuItem>
                </Link>
                <Link href={"#infouse"}>
                    <MenuItem>Information Use</MenuItem>
                </Link>
                <Link href={"#sharing"}>
                    <MenuItem>Sharing</MenuItem>
                </Link>
                <Link href={"#log"}>
                    <MenuItem>Log Data</MenuItem>
                </Link>
                <Link href={"#cookies"}>
                    <MenuItem>Cookies</MenuItem>
                </Link>
                <Link href={"#providers"}>
                    <MenuItem>Service Providers</MenuItem>
                </Link>
                <Link href={"#security"}>
                    <MenuItem>Security</MenuItem>
                </Link>
                <Link href={"#othersites"}>
                    <MenuItem>
                        Links To Other Sites
                    </MenuItem>
                </Link>
                <Link href={"#childrenprivacy"}>
                    <MenuItem>Children’s Privacy</MenuItem>
                </Link>
                <Link href={"#changespolicy"}>
                    <MenuItem>Changes To This Policy</MenuItem>
                </Link>
                <Link href={"#contact"}>
                    <MenuItem>Contact Us</MenuItem>
                </Link>
            </Menu>
        )
    }

    const BetaNDAMenu = () => {

        return (
            <Menu iconShape="square">
                <Link href={"#disclosure"}>
                    <MenuItem>Disclosure & Confidential Information</MenuItem>
                </Link>
                <Link href={"#excluded"}>
                    <MenuItem>Excluded Confidential Information</MenuItem>
                </Link>
                <Link href={"#termination"}>
                    <MenuItem>Term & Termination</MenuItem>
                </Link>
                <Link href={"#additional"}>
                    <MenuItem>Additional Action</MenuItem>
                </Link>
                <Link href={"#breach"}>
                    <MenuItem>Breach</MenuItem>
                </Link>
                <Link href={"#amendment"}>
                    <MenuItem>Amendment</MenuItem>
                </Link>
                <Link href={"#contain"}>
                    <MenuItem>Return of Material Containing Confidential Information</MenuItem>
                </Link>
                <Link href={"#enforcement"}>
                    <MenuItem>Enforcement</MenuItem>
                </Link>
                <Link href={"#headings"}>
                    <MenuItem>Headings</MenuItem>
                </Link>
                <Link href={"#warranties"}>
                    <MenuItem>
                        Representations & Warranties
                    </MenuItem>
                </Link>
                <Link href={"#obligation"}>
                    <MenuItem>No Obligation</MenuItem>
                </Link>
                <Link href={"#entire"}>
                    <MenuItem>Entire Agreement</MenuItem>
                </Link>
                <Link href={"#arbitration"}>
                    <MenuItem>Arbitration</MenuItem>
                </Link>
                <Link href={"#submission"}>
                    <MenuItem>Submission</MenuItem>
                </Link>
                <Link href={"#notices"}>
                    <MenuItem>Notices</MenuItem>
                </Link>
                <Link href={"#severablility"}>
                    <MenuItem>Severablility</MenuItem>
                </Link>
                <Link href={"#survival"}>
                    <MenuItem>Survival</MenuItem>
                </Link>
            </Menu>
        )
    }

    const PaymentServiceMenu = () => {

        return (
            <Menu iconShape="square">
                <Link href={"#paymentIntro"}>
                    <MenuItem>Introduction</MenuItem>
                </Link>
                <Link href={"#paymentdefinitions"}>
                    <MenuItem>Definitions</MenuItem>
                </Link>
                <Link href={"#effectivedate"}>
                    <MenuItem>Effective Date</MenuItem>
                </Link>
                <Link href={"#feetaxes"}>
                    <MenuItem>Fees & Taxes</MenuItem>
                </Link>
                <Link href={"#updates"}>
                    <MenuItem>Updates</MenuItem>
                </Link>
                <Link href={"#prohibited"}>
                    <MenuItem>Prohibited Activities</MenuItem>
                </Link>
                <Link href={"#restriction"}>
                    <MenuItem>Service Restrictions</MenuItem>
                </Link>
                <Link href={"#errors"}>
                    <MenuItem>Processing Errors</MenuItem>
                </Link>
                <Link href={"#datamanagement"}>
                    <MenuItem>Data Management</MenuItem>
                </Link>
                <Link href={"#useofinfo"}>
                    <MenuItem>
                        Use Of Information
                    </MenuItem>
                </Link>
                <Link href={"#reversals"}>
                    <MenuItem>Disputes, Refunds, Reversals</MenuItem>
                </Link>
                <Link href={"#responsibilities"}>
                    <MenuItem>Responsibilities & Disclosures To Customers</MenuItem>
                </Link>
                <Link href={"#recurringpay"}>
                    <MenuItem>Recurring Payments</MenuItem>
                </Link>
                <Link href={"#servicesterm"}>
                    <MenuItem>Payment  & Financial Services Terms</MenuItem>
                </Link>
                <Link href={"#survival"}>
                    <MenuItem>Survival</MenuItem>
                </Link>
                <Link href={"#signature"}>
                    <MenuItem>Electronic Business Signature</MenuItem>
                </Link>
            </Menu>
        )
    }

    const BetaParticipantMenu = () => {

        return (
            <Menu iconShape="square">
                <Link href={"#betaIntro"}>
                    <MenuItem>Introduction</MenuItem>
                </Link>
                <Link href={"#betadefinitions"}>
                    <MenuItem>Definitions</MenuItem>
                </Link>
                <Link href={"#ourobligation"}>
                    <MenuItem>Our Obligations</MenuItem>
                </Link>
                <Link href={"#yourobligations"}>
                    <MenuItem>Your Obligations</MenuItem>
                </Link>
                <Link href={"#confidentiality"}>
                    <MenuItem>Confidentiality</MenuItem>
                </Link>
                <Link href={"#proprietary"}>
                    <MenuItem>Proprietary Rights</MenuItem>
                </Link>
                <Link href={"#warranty"}>
                    <MenuItem>Disclaimer Of Warranty</MenuItem>
                </Link>
                <Link href={"#termtermination"}>
                    <MenuItem>Term & Termination</MenuItem>
                </Link>
                <Link href={"#limitation"}>
                    <MenuItem>Limitation Of Liablity</MenuItem>
                </Link>
                <Link href={"#assignment"}>
                    <MenuItem>
                        Assignment
                    </MenuItem>
                </Link>
                <Link href={"#amend"}>
                    <MenuItem>Amendments</MenuItem>
                </Link>
                <Link href={"#head"}>
                    <MenuItem>Headings</MenuItem>
                </Link>
                <Link href={"#governing"}>
                    <MenuItem>Governing Law</MenuItem>
                </Link>
                <Link href={"#arbitration"}>
                    <MenuItem>Arbitration</MenuItem>
                </Link>
                <Link href={"#survive"}>
                    <MenuItem>Survival</MenuItem>
                </Link>
            </Menu>
        )
    }

    const renderMenu = () =>{
                switch(true) {
                    case currentTabIndex === 0:
                        return <ConditionMenu/>
                    case currentTabIndex === 1:
                        return <PrivacyMenu/>
                    case currentTabIndex === 2:
                        return <BetaNDAMenu/>
                    case currentTabIndex === 3:
                        return <BetaParticipantMenu/>
                    case currentTabIndex === 4:
                        return <PaymentServiceMenu/>
                    default:
                        return <ConditionMenu/>
                }
            }



    return (
        <StyledTermsMenu>
            <ProSidebar style={{backgroundColor: "var(--sidebar-background)"}}>
                <SidebarContent>
                    {renderMenu()}
                </SidebarContent>
            </ProSidebar>
        </StyledTermsMenu>
    );
};

export default TermsMenu;
