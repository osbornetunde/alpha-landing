import React from 'react';
import {StyledTermsContent} from "./styles";

const PaymentService = () => {
    return (
        <StyledTermsContent>
            <div className="header-container">
                <h6>Payment Service Agreement</h6>
                <p>Last Updated Aug 4, 2021</p>
            </div>
            <div className="content">
                <p className="details">A Payment Service Agreement between <span style={{fontWeight: 700}}>CREDO</span> (hereinafter referred to as <span style={{fontWeight: 700}}>“Credo”</span>) and <span style={{fontWeight: 700}}>The Merchant</span>, being an Individual or Business Owner who has signed up to use Credo’s payment services.</p>
                <br />
                <p className="details" id={'paymentIntro'}>For this Agreement, <span style={{fontWeight: 700}}>Credo</span> and <span style={{fontWeight: 700}}>The Merchant</span> are hereinafter, jointly referred to as <span style={{fontWeight: 700}}>“Parties”</span> and individually as <span style={{fontWeight: 700}}>“Credo”</span> or <span style={{fontWeight: 700}}>“The Merchant”</span> as it pertains.</p>
                This Agreement will be binding upon The Merchant when:
                <ul style={{listStyleType:'lower-roman'}}>
                    <li style={{marginBottom:'1rem'}}> The Merchant or any person acting on behalf of The Merchant accepts the terms of this Agreement by clicking “I Accept”, checkbox indicating acceptance, or otherwise affirmatively accepting the terms of this Agreement;</li>
                    <li style={{marginBottom:'1rem'}}>The Merchant’s integration with, registration with, or submission of any transaction to Credo; or</li>
                    <li style={{marginBottom:'1rem'}}>The Merchant’s use or attempted use of any Credo Service. If The Merchant does not agree to any terms and conditions contained herein, The Merchant must not accept this Agreement and must not use the Services.</li>
                </ul>
                <p className="title">WHEREAS </p>
                <ul style={{listStyleType:'upper-alpha', fontWeight:'bold'}}>
                    <li style={{marginBottom:'1rem'}}>Disclosing Party desires to engage the Receiving Party in the participation of the Beta Phase of its product launch.</li>
                    <li style={{marginBottom:'1rem'}}>For the purpose of the Project, Disclosing party has disclosed and will be required to disclose certain information of a proprietary, secret and confidential nature, which disclosure will be regulated by the terms detailed in this Agreement.</li>
                    <li style={{marginBottom:'1rem'}}>In consideration of the mutual promises, obligations and covenants contained in this Agreement and for the purpose of preventing unauthorized disclosure of the confidential information contained in this Agreement as defined below, the parties hereby agree as follows:</li>
                </ul>
                <ul style={{listStyleType:'decimal'}}>
                    <li>
                        <p className="title" id={'paymentdefinitions'}>DEFINITIONS</p>
                        <p className="details">In this Agreement, unless inconsistent with or otherwise indicated by the context: </p>
                        <p className="title">“Account”</p>
                        <p className="details">means the account that Credo will establish for the Merchant once this Agreement becomes effective.</p>
                        <p className="title">“Agreement”</p>
                        <p className="details">means this Payment Services Agreement, including all other agreements, and documents incorporated herein.</p>
                        <p className="title">“Association”</p>
                        <p className="details">means Visa, MasterCard, and any debit network or financial service card organizations.</p>
                        <p className="title">“Bank Account”</p>
                        <p className="details">means the bank account that Merchant specifies to receive its Payouts. </p>
                        <p className="title">“Business Day”</p>
                        <p className="details">means a day where banks are generally open in Nigeria and the Merchant's country of domicile. </p>
                        <p className="title">“Chargeback”</p>
                        <p className="details">means a challenge to a payment that a buyer files directly with his or her credit or debit card issuer. </p>
                        <p className="title">“Customer”</p>
                        <p className="details">means the customer of the Merchant</p>
                        <p className="title">“Customer Data”</p>
                        <p className="details">means all information that Customer provides in the course of making a payment to Merchant, including Card Information, Transaction Data and/or security-related information (including Security Codes, full track data, PINs, and PIN blocks) used to authenticate cardholders and/or authorize transactions.</p>
                        <p className="title">"Data Compromise"</p>
                        <p className="details">means the unauthorized access, disclosure, modification, transmission, and/or use of the Customer Data by a third party and/or the loss, theft, degradation, destruction, dissemination, distribution, erasure, copy, and/or corruption of the Customer Data in any manner. </p>
                        <p className="title">"Payment Processing Services"</p>
                        <p className="details">means Payment Facilitator Services and/or Gateway Services and/or Third Party Agent service. </p>
                        <p className="title">“Gateway Services”</p>
                        <p className="details">means the gateway services offered by Credo which provide Merchants with the software and connectivity required to allow real-time secure data transmission for processing of payment transactions on a website or mobile application. </p>
                        <p className="title">“Intellectual Property”</p>
                        <p className="details">means all of the following owned by a party: (a) registered and unregistered trademarks and service marks and trade names, and the goodwill associated therewith; (b) patents, patentable inventions, computer programs, and software; (c) databases; (d) trade secrets and the right to limit the use or disclosure thereof; (e) copyrights in all works, including software programs; and (f) domain names.</p>
                        <p className="title">"Intellectual Property Rights”</p>
                        <p className="details">means the rights owned by a party in its Intellectual Property. </p>
                        <p className="title">“Merchant”</p>
                        <p className="details">means the entity and/or individual who enters into this Agreement, as indicated in the onboarding.</p>
                        <p className="title">"Merchant's Bank Account"</p>
                        <p className="details">means the bank account that Merchant specifies in onboarding to receive its Payouts.</p>
                        <p className="title">“Payment Facilitator Services”</p>
                        <p className="details">means the facilitation of payment processing services offered by Credo which provides Merchants with the ability to accept credit cards, debit cards, mobile money, bank transfers, and other payment methods on a website, mobile wallet, or mobile application. These services include a bank-sponsored merchant account, fraud protection tools, recurring billing functionality, payment card encrypted storage (tokenization), foreign currency acceptance, and other software, and services, and technology as described from time to time on the Credo Website.</p>
                        <p className="title">“Payout”</p>
                        <p className="details">means the amount due to Merchant from Merchant Transactions minus Credo's fees and any Refunds, Chargebacks, Reversals, or other amounts due to Credo. </p>
                        <p className="title">“Personal Information”</p>
                        <p className="details">means information relating to an identifiable person, including information relating to race, gender, sex, marital status, nationality, ethnic or social origin, color, age, physical or mental health, religion, belief, disability, language, birth, education, identity number, telephone number, email, postal or street address, biometric information and financial, criminal or employment history as well as correspondence that is implicitly or explicitly of a private or confidential nature or further correspondence that would reveal the contents of the original correspondence. </p>
                        <p className="title">“Reversal”</p>
                        <p className="details">means any payment that Credo reverses to Merchant's Customer.  </p>
                        <p className="title">“Refund”</p>
                        <p className="details">means a refund issued by Merchant through the Credo Control Panel or Merchant API access.  </p>
                        <p className="title">“Restricted Activities”</p>
                        <p className="details">means any activity specified as restricted which may be amended from time to time by Credo.</p>
                        <p className="title">“Software”</p>
                        <p className="details">means the use of Credo’s API by a merchant for Payment Services. </p>
                        <p className="title">“Transaction”</p>
                        <p className="details">means a transfer of funds between Merchant and a third party related to the sale of goods and/or services</p>
                    </li>
                    <li>
                        <p className="title" id={'effectivedate'}>EFFECTIVE DATE</p>
                        <p className="details">This Agreement becomes effective upon the Merchant's acceptance of this Payment Services Agreement by checking the "I Accept" box on the Credo Service Platform. </p>
                    </li>
                    <li>
                        <p className="title" id={'feetaxes'}>FEES AND TAXES</p>
                        <p className="details">
                            The Merchant agrees to pay the applicable fees as identified as Credo Platform fee for use of the Payment Services. All Fees are charged at the time a transaction is processed and are deducted from the transferred or collected funds. Credo shall have the right to increase fees as necessary to offset any direct or indirect increase to Credo in the costs of providing Services; including, but not limited to, of increases due to changes in rules, regulations, operating procedures of Credo, or any additional requirements imposed by any federal or state governmental agency or regulatory authority, or due to any increase in communication costs or shipping costs. All fees, charges, and payments collected or paid through the Payment Services are denominated in Naira.
                            <br/>
                            Transaction fees are exclusive of all taxes. The Merchant shall pay all taxes related to this Agreement and the Services provided hereunder and will reimburse Credo for any taxes paid by Credo in connection with this Agreement or any of the Services.  The Merchant bears the ultimate responsibility for the proper payment of taxes applicable to the Customer’s sale of its products or services.
                        </p>
                    </li>
                    <li>
                        <p className="title" id={'updates'}>UPDATES</p>
                        <p className="details">Credo in its sole discretion may make changes and updates periodically without notice to The Merchant. These updates and releases may include, additional features, removal of existing features, functionality modifications, security updates, compliance modifications, modifications to the API and integration methods, changes to the user interface, content enhancements, and/or other modifications. The Merchant is expected to update to the latest version of the API or developer framework where necessary. Credo will have no liability for any losses, damages, Service failures, settlement issues, improper data routing, improper transaction approval, improper transaction rejection, or other errors or failures resulting from the failure of The Merchants to update its hardware, software, procedures, or other operations in accordance with the latest version of the API or developer framework, and The Merchant assumes all such risk and liability.</p>
                    </li>
                    <li>
                        <p className="title" id={'prohibited'}>PROHIBITED ACTIVITIES</p>
                        <p className="details">The Merchant shall not:</p>
                        <ul style={{listStyleType: 'lower-roman'}}>
                            <li style={{marginBottom:'1rem'}}>engage in, license, sell, display, advertise, deliver, or promote any adult, or obscene products or services.</li>
                            <li style={{marginBottom:'1rem'}}>engage in, license, sell, display, advertise, deliver, or promote harmful content such as viruses, bots, or other software or products that are designed or intended to damage, disrupt, infiltrate, interfere with, or breach any system, program, data, software, or hardware;</li>
                            <li style={{marginBottom:'1rem'}}>engage in infringement of patents, copyrights, trademarks, trade secrets, or other intellectual property rights of any third party; </li>
                            <li style={{marginBottom:'1rem'}}>discriminate against any individual or group of individuals falling within a protected class; </li>
                            <li style={{marginBottom:'1rem'}}>violate any applicable law or card brand rule, including but not limited to the illegal import or export any data, product, or service, engaging in unfair, deceptive, or abusive acts or practices, or violating any consumer protection laws.</li>
                        </ul>
                    </li>
                    <li>
                        <p className="title" id={'restriction'}>SERVICE RESTRICTIONS</p>
                        <p className="details">The Merchant shall not use Credo Services:</p>
                        <ul style={{listStyleType: 'lower-roman'}}>
                            <li style={{marginBottom:'1rem'}}>in a harmful, abusive, obscene, deceptive, fraudulent, illegal, tortious, infringing, threatening, or unethical manner; </li>
                            <li style={{marginBottom:'1rem'}}>in connection with the sale, transfer, or other transaction involving illegal product or service, including but not limited to illegal gambling, or prohibited substances;</li>
                            <li style={{marginBottom:'1rem'}}>in connection with the sale or distribution of any product, media, or substance which The Merchant is not appropriately licensed or authorized to sell or distribute. The Merchant’s use of the Services shall be restricted to what is specified and accepted by Credo as at onboarding. The Merchant shall not use the Services on behalf of any third party.  </li>
                        </ul>
                        <p className="details">Any attempt by The Merchant to use the Services on behalf of a third party may result in additional fees, charges, fines, or legal action.</p>
                    </li>
                    <li>
                        <p className="title" id={'errors'}>PROCESSING ERRORS</p>
                        <p className="details">
                            Credo will attempt to fix discovered processing errors. If an error results in the receipt of more funds than entitled to The Merchant, Credo may recover the extra funds. Credo will only correct transactions that are processed incorrectly if notified of such an error. The Merchant’s failure to notify a processing error within thirty (30) days of when it first appears in the transaction history will be deemed a waiver of any right to amounts owed.
                        </p>
                    </li>
                    <li>
                        <p className="title" id={'datamanagement'}>DATA MANAGEMENT</p>
                        <p className="details">
                            The Merchant is solely responsible for the security of all payment information, transaction data, confidential information, and personally identifiable information. Credo will not be responsible for the security and safety of data and any unauthorized access or use of such data, including without limitation while such data is held, hosted, stored, accessible through, or transmitted through The Merchant’s, or any third party’s systems and servers. The Merchant agrees to provide notice to its customers that discloses (and include in Company’s privacy policy) how and why transaction data, payment data, and other personally identifiable data is collected and used in accordance with applicable law, including the uses governed by this Agreement.
                        <br/>
                            The Merchant agrees not to use, disclose, sell, or disseminate any card, cardholder, or other transaction information obtained in connection with a transaction except for purposes of completing or settlement of the transaction, or to resolve chargebacks, retrievals, or similar issues involving the transaction, unless otherwise required by court order, governmental agency request or subpoena, or applicable law. The merchant represents and warrants that it has adopted all security measures and taken all precautions necessary to ensure that all transaction data, cardholder data, and personally identifiable data are adequately protected from access, breach, intrusion, or compromise by any unauthorized person or entity.
                            <br/>
                            The Merchant assumes all risk associated with, the transport of data, including without limitation any delays, interruptions, vulnerabilities, losses, or other issues.  Credo will have no liability with regard to, and merchant assumes all risk associated with the unauthorized interception or modification of data or the access, compromise, or use of data by third parties. In the event that The Merchant’s systems are breached or an unauthorized person has gained access to such systems, credentials, or any confidential, personal, or transaction data, the merchant shall promptly:
                        </p>
                        <ul style={{listStyleType:'lower-alpha'}}>
                            <li style={{marginBottom:'1rem'}}>notify Credo in writing and by e-mail of such occurrence; </li>
                            <li style={{marginBottom:'1rem'}}>notify any affected parties as required under any applicable laws or industry guidelines; </li>
                            <li style={{marginBottom:'1rem'}}>take all actions and precautions necessary to prevent any continuous or additional breach; and </li>
                            <li style={{marginBottom:'1rem'}}>commence all remedial efforts and other actions required under the applicable laws, regulations, or card brand rules.</li>
                        </ul>
                    </li>
                    <li>
                        <p className="title" id={'useofinfo'}>USE OF INFORMATION</p>
                        <p className="details">
                            Credo will review the information submitted by The Merchant during sign-up for the Payment Services. Credo is authorized by the Merchant to request identity verifying information provided about the Merchant. Credo may periodically obtain additional reports to determine whether the merchant continues to meet the requirements for a Credo Account. Credo is hereby permitted to share information with the merchant’s bank or other financial institutions, or as otherwise specified in our Privacy Policy. Credo or its processor and/or acquiring bank may conclude that the merchant will not be permitted to use the Payment Services.
                        <br/>
                            Credo may request additional information at any time, Credo may also ask for permission to inspect The Merchant’s business location. Credo has the right to suspend or terminate a Credo account if any of these requests are refused.
                        </p>
                    </li>
                    <li>
                        <p className="title" id={'reversals'}>DISPUTES, REFUNDS AND REVERSALS</p>
                        <p className="details">The Merchant authorizes Credo, its affiliates, Payment Method Providers and Payment Method Acquirers to receive and settle any payment processing proceeds owed through the Payment Processing Services. The Merchant also authorizes Credo and Credo’s Payments Company as agents for the limited purpose of directing, receiving, holding and settling proceeds.</p>
                        <br/>
                        <p className="details">The Merchant may only submit Charges through the Payment Processing Services that are authorized by Customers. </p>
                        <p className="details">Except where Credo and a Merchant have otherwise agreed, The Merchant is expected to maintain a direct relationship with customers and are responsible for: </p>
                        <ul style={{listStyleType:'lower-roman', marginLeft:'1rem'}}>
                            <li style={{marginBottom:'1rem'}}>acquiring appropriate consent to submit Charges through the Payment Processing Services on their behalf; </li>
                            <li style={{marginBottom:'1rem'}}>providing confirmation or receipts to Customers for each Charge; </li>
                            <li style={{marginBottom:'1rem'}}>verifying Customers’ identities; and </li>
                            <li style={{marginBottom:'1rem'}}>determining a Customer’s eligibility and authority to complete Transactions. However, authorized Transactions may be subject to a Dispute. Credo is not responsible for or liable to The merchant for authorized and completed Charges that are later the subject of a Dispute, Refund, or Reversal, are submitted without authorization or in error, or violate any Laws.</li>
                        </ul>
                        <p className="details">The merchant is by default responsible to Credo for all Disputes, Refunds, Reversals, Returns, or Fines regardless of the reason or timing. Credo may decline to act upon a Refund instruction, or delay execution of the instruction, if: </p>
                        <ul style={{listStyleType:'lower-roman'}}>
                            <li>Merchant is the subject of Bankruptcy Proceedings; or </li>
                            <li>where we otherwise believe that there is a risk that The merchant will not meet liabilities under this Agreement (including with respect to the Charge that is the subject of the Refund instruction).</li>
                        </ul>
                        <p className="details">The merchant has the ability to challenge a Dispute by submitting evidence through the Dashboard. Credo may request additional information to provide to Payment Method Providers and Payment Method Acquirers to assist the merchant in contesting q Dispute, but cannot guarantee that the challenge will be successful. Payment Method Providers and Payment Method Acquirers may deny the challenge for any reason they deem appropriate. Where a challenge is entirely or partially successful, merchant’s account will be credited with the funds associated with the Charge that is the subject of the Dispute (or a portion thereof). You may not submit a new Charge which duplicates a Transaction that is subject to a Dispute.
                        <br/>
                            The Merchant remains liable for all losses incurred when lost or stolen payment credentials or accounts are used to purchase products or services. Credo does not and will not insure The Merchant against losses caused by fraud under any circumstances. For instance, if a fraudster makes a purchase pretending to be a legitimate buyer, The Merchant will be responsible for any resulting costs, including Disputes.
                            <br/>
                            A Reversal for a Charge may be issued if the Charge is made without the account owner’s authorization or in connection with a Restricted Business, violates the applicable Payment Method Rules, or for other applicable reasons. If a Reversal is issued, we will provide a Notice and a description of the cause of the Reversal.
                            <br/>
                            All disputes must be made in good faith and in writing within thirty (30) days of the billing statement date. Fees billed shall be deemed accepted where written objections are not lodged within such a thirty (30) day period.
                        </p>
                    </li>
                    <li>
                        <p className="title" id={'responsibilities'}>RESPONSIBILITIES AND DICLOSURES TO CUSTOMERS</p>
                        <p className="details">Customers are to understand the purpose, amount, and conditions of Charges submitted by The Merchant. When using the Payment Processing Services Merchant agrees to: (i) accurately communicate, and not misrepresent, the nature of the Transaction, and the amount of the Charge in the appropriate currency prior to submission; </p>
                        <ul style={{listStyleType: 'lower-roman'}}>
                            <li style={{marginBottom:'1rem'}}>provide a receipt that accurately describes each Transaction to Customers; </li>
                            <li style={{marginBottom:'1rem'}}>provide Customers with legitimate contact information in the event that the product or service is not provided as described; </li>
                            <li style={{marginBottom:'1rem'}}>not use Services to sell products or services in a manner that is unfair or deceptive, exposes Customers to unreasonable risks, or does not disclose material terms of purchase in advance; and  </li>
                            <li style={{marginBottom:'1rem'}}>Inform Customers that Credo and its affiliates are the payment partner. The merchant also agrees to maintain and make available to Customers a fair and neutral return, refund, cancellation, or adjustment policy, and clearly explain the process by which Customers can receive a Refund. </li>
                        </ul>
                    </li>
                    <li>
                        <p className="title" id={'recurringpay'}>RECURRING PAYMENTS</p>
                        <p className="details">The Payment Processing Services may include functionality that enables The Merchant to receive recurring or subscription payments from Customers, and to issue invoices to Customers. If Merchant uses the Payment Processing Services to submit recurring or subscription Charges, The merchant agrees to comply with applicable Laws and Payment Method Rules, including clearly informing Customers in advance of submitting the initial Charge that they will be charged on an ongoing basis and explaining the method for unsubscribing or canceling recurring billing or subscription. If Merchant chooses to use the Payment Processing Services to issue invoices to Customers, the merchant attains responsibility to ensure that the form and content of the invoices comply with applicable Laws, and are sufficient to achieve applicable legal or tax effects.</p>
                    </li>
                    <li>
                        <p className="title" id={'servicesterm'}>PAYMENT TERMS AND FINANCIAL SERVICES TERMS</p>
                        <p className="details">Credo may add or remove Payment Method Providers and Payment Method Acquirers at any time. The merchant’s continuing use of the Payment Processing Services constitutes consent and agreement to such additions, removals, and amendments.</p>
                    </li>
                    <li>
                        <p className="title" id={'survival'}>SURVIVAL</p>
                        <p className="details">The provisions of this Agreement relating to any fees or other amounts owed, payment of interest on unpaid fees, confidentiality, warranties, limitation of liability, indemnification, governing law, severability, headings, and this paragraph shall survive termination or expiration of this Agreement. </p>
                    </li>
                    <li>
                        <p className="title" id={'signature'}>ELECTRONIC BUSINESS SIGNATURE</p>
                        <p className="details">The Merchant consents to do business electronically, which means that Company agrees that all Credo agreements and Policies, including amendments thereto and documents referenced therein, as well as any notices, instructions, or any other communications regarding transactions and Company’s agreements with Credo may be presented, delivered, stored, retrieved, and transmitted electronically.
                        <br/>
                            The Merchant must provide Credo notice of any change in its electronic mailing address. Company’s electronic signature, including without limitation clicking “Agree”, “Accept”, or action of similar meaning or significance shall be the legal equivalent of the merchant’s manual signature. The person signing on behalf of Company (including without limitation clicking “Agree”, “Accept”, or action of similar meaning or significance) represents and warrants to Credo that his, her, or its actions are authorized by The Merchant and that such person has all required power and authority to bind The merchant to this Agreement. Such individual or entity also agrees that the electronic signatures provided online will be binding upon The Merchant, and will not be construed by a court of law to have any less effect than a standard ink or paper signature. The merchant agrees to the capability of opening, reading, printing, downloading, and/or saving this Agreement prior to acceptance of this Agreement; and the opportunity to consult with appropriate professionals prior to electronically signing this Agreement.
                        </p>
                    </li>
                </ul>
            </div>

        </StyledTermsContent>
    );
};

export default PaymentService;
