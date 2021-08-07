import React from 'react';
import {StyledTermsContent} from "./styles";
import {Link} from "@chakra-ui/react";

const PrivacyPolicy = () => {
    return (
        <StyledTermsContent>
            <div className="header-container">
                <h6>Our Privacy Policy</h6>
                <p>Last Updated Aug 4, 2021</p>
            </div>
            <div className="content">
                <p className="details" id={'privacyintro'}>
                    The Credo app is built as a Commercial app. This Service is provided by Credo and is intended for use As Is.
                    <br/>
                    <br/>
                    We know that you care about how your personal information is shared/used. This page is to inform visitors regarding our policies on the collection, use, and disclosure of Personal Information for anyone intending to use our Service.
                    <br/>
                    <br/>
                    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                    <br/>
                    <br/>
                    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible in the Credo App, unless otherwise defined in this Privacy Policy.
                    <br/>
                    <br/>
                    We take the privilege of accessing your information very highly. The privacy of our Users is important to us as entrusted. We are also diligent to ensure that there is strict compliance to applicable data protection laws, regulations, rules, and principles.
                </p>
                <p className="title" id={'application'}>APPLICATION OF THE PRIVACY POLICY</p>
                <p className="details">We use the term "personal information" to describe information that can be associated with a specific person and can be used to identify that person.
                    <br/>
                    <br/>
                    This privacy policy applies to all information we collect through our Services from current and former Credo users, including you. “Services” means any products, services, content, features, technologies, or functions, and all related websites, applications, and services offered to you by Credo. This policy only applies to the Service and does not apply to the practices of any other Credo service.
                    <br/>
                    <br/>
                    This policy also describes how we use Personal Data, with whom we share it, your rights and choices, and how you can contact us about our privacy practices. This policy does not apply to third-party websites, products, or services, even if they link to our Services or Sites, and you should consider the privacy practices of those third parties carefully.
                </p>
                <p className="title" id={'collection'}>INFORMATION COLLECTION</p>
                <p className="details">For a better experience, while using our Service, we may require you to provide us with certain personal information for identification, including but not limited to your full name, home address, email address, mobile number, and password. We will also require a business name, business address, business type, business website, TIN, and other business owner’s names. Other information we would require include your date of birth, social media handles, BVN, valid identification, profile picture, support details, bank account number, and bank name. The information collected is based on the specific business type of the user.
                <br/>
                    <br/>
                    We will also require your customer’s name, address, phone number, email, and credit card details (except if you are paying via credo wallet) when they want to make payment for your product and place an order.
                    <br/>
                    <br/>
                    Required information is identified by an asterisk (*).
                    <br/>
                    <br/>
                    </p>
                    <p className={'details'}>These are generally categorized into:</p>
                    <ul style={{marginLeft: '2rem', listStyleType:'none'}}>
                        <li>
                            <p className={'title'}> Identity and Contact Information:</p> These include but are not limited to: Your full name(s), business address, email address, telephone number, your government-issued form of identification, bank verification number (BVN), date of birth. This data is to enable us to verify your identity and to reach you as deemed necessary in business operations.
                        </li>
                        <li><p className={'title'}>Identification documents and data:</p> These include but are not limited to any Government-issued identity card, a photograph as applicable, and other necessary registration information to confirm eligibility by regulation for the use of our services.</li>
                        <li><p className={'title'}>Log information:</p> Our servers will automatically record information from your interaction with our channels, including log information, location, and device data, links clicked, length of stay on the site, UDI (Unique Device Identifier), etc. </li>
                        <li><p className={'title'}>Financial Data:</p> We will also require financial information such as your account details and necessary transaction details to effect a payment transaction. </li>
                        <li><p className={'title'}>Transactional Data:</p> This is information relating to a payment generated from you as a merchant or as a customer using our products or services.</li>
                        <li><p className={'title'}>Customer Service Records:</p> Upon every contact between us, conversations will be recorded for tracking and reconciliation purposes.</li>
                        <li><p className={'title'}>Geolocation Information:</p> Information that identifies your location obtained through GPS, Wi-Fi, or cell site triangulation. We will collect this data for fraud and risk purposes. In addition, some of our Services may ask you for permission to share your current location within your device settings to enhance the Service.</li>
                    </ul>
                <br/>
                <br/>
                <p className="details" >We may collect additional information from or about you in other ways not specifically outlined above. For example, we may collect information when you contact our Customer Support Team or store results when you respond to a survey.
                    We may also obtain information about you from third parties for functions such as identity verification, fraud prevention, and such required services.</p>
                <p className={'title'} id={'infouse'}>HOW WE USE YOUR INFORMATION</p>
                <br/>
                <p className={'details'}>We use your information for the following purposes:</p>
                <br/>
                <ul>
                    <li>to serve application content to you.</li>
                    <li>to activate your account.</li>
                    <li>to handle orders, deliver products, process payments, and refunds.</li>
                    <li>to communicate with you about your orders.</li>
                    <li>to administer and maintain your account with us.</li>
                    <li>if you contact us, we may keep a record of that correspondence and your contact details.</li>
                    <li>for our statistical or survey purposes to improve this application and its services to you.</li>
                    <li>for risk profiling for our application.</li>
                    <li>to prevent or detect fraud or abuses of our site and enable third parties to carry out technical, logistical, or other necessary functions on our behalf.</li>
                    <li>if you consent, to notify you of products or special offers that may be of interest to you. The information that we request will be retained by us and used as described in this privacy policy.</li>
                </ul>
                <br/>
                <p className={'details'}> The app does use third-party services that may collect information used to identify you.</p>
                <br/>
                <br/>
                <p style={{fontWeight: 'bold'}}>Links to the privacy policy of third party service providers used by the Credo app</p>
                <ul style={{marginTop:'2rem', marginBottom:'2rem', color:'#0765FF'}}>
                    <li><Link href={'https://policies.google.com/privacy'} color={'#0765FF'} isExternal>Google Play Services</Link> </li>
                    <li><Link href={'https://firebase.google.com/policies/analytics'} color={'#0765FF'} isExternal>Google Analytics for Firebase </Link></li>
                    <li><Link href={'https://www.facebook.com/about/privacy/update/printable'} color={'#0765FF'} isExternal>Facebook</Link> </li>
                </ul>
                <p className={'title'} id={'sharing'}>HOW WE SHARE INFORMATION WITH OTHER PARTIES</p>
                <p className={'details'}>Credo will not share your personal information with third parties for their promotional or marketing purposes.</p>
                <br/>
                <p className={'details'}>We may share your personal information with:</p>
                <br/>
                <ul>
                    <li style={{marginBottom:'1rem'}}>
                        <p><span style={{fontWeight:'bold'}}>Credo affiliates and subsidiaries</span>, to provide our Services and for internal administration purposes.
                        If your personal information could be used contrary to this policy, you will receive prior notice and the opportunity to communicate preferences you may have.</p>
                    </li>
                    <li style={{marginBottom:'1rem'}}>
                        <span style={{fontWeight:'bold'}}>Law enforcement, government officials, or other third parties</span> if Credo is compelled to do so by a subpoena, court order, or similar legal procedure, when it is necessary to comply with the law, or where the disclosure of personal information is reasonably necessary to prevent physical harm or financial loss, to report suspected illegal activity, or to investigate violations of the Credo User Agreement, or as otherwise required by law.
                    </li>
                    <li style={{marginBottom:'1rem'}}>
                        <span style={{fontWeight:'bold'}}>Third-party service providers</span> who assist us in providing services to you or who provide fraud detection or similar services on our behalf. Examples of third parties to whom we may disclose Personal Data for this purpose are banks and payment method providers.
                    </li>
                    <li style={{marginBottom:'1rem'}}>
                        <span style={{fontWeight:'bold'}}> The other Credo user</span> participating in the transaction and, depending on the privacy setting of each Credo account transaction.
                    </li>
                    <li style={{marginBottom:'1rem'}}>
                        <span style={{fontWeight:'bold'}}>Service providers that provide services on our behalfs</span>, such as identity verification services, website hosting, data analysis, information technology, and related infrastructure, customer service, email delivery, and auditing services. Our contracts dictate that these service providers only use your information in connection with the services they perform for us and not for their benefit.
                    </li>
                    <li style={{marginBottom:'1rem'}}>
                        <span style={{fontWeight:'bold'}}>Other third parties</span> with your consent or at your direction to do so, including if you authorize an account connection with a third-party account or platform.
                    </li>
                </ul>
                <br/>
                <p className={'details'}>
                    If you connect your Credo account to other financial accounts, directly or through a third-party service provider, we may have access to your account balance and transactional information, such as purchases and funds transfers. If you choose to create an account connection, we may receive information from the third party about you and your use of the third-party’s service. For example, if you connect your Credo account to a social media account, we will receive personal information from the social media provider via the account connection. We will use all such information that we receive from a third-party via an account connection in a manner consistent with this privacy policy.
                </p>
                <br/>
                <p className="details">Information that we share with a third-party based on an account connection will be used and disclosed following the third-party’s privacy practices. Before authorizing an account connection, you should review the privacy notice of any third-party that will gain access to your personal information as part of the account connection. For example, personal information that Credo shares with a third-party account such as a social media account may, in turn, be shared with certain other parties, including the general public, depending on the account’s or platform’s privacy practices.</p>
                <br/>
                <p className="details">Credo will not send your personal information to third-party social networks unless you have specifically provided authorization. In such cases, information is no longer under the control of Credo and is subject to the terms of use and privacy policies of such third parties.</p>

                <p className={'title'} id={'log'}>LOG DATA</p>
                <p className={'details'}>We want to inform you that whenever you use our Service, in the case of an error in the app, we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p>
                <p className={'title'} id={'cookies'}>COOKIES</p>
                <p className="details">
                    Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                <br/>
                    This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                </p>
                <p className={'title'} id={'providers'}>SERVICE PROVIDERS</p>
                <p className={'details'}>We may employ third-party companies and individuals for the following reasons:</p>
                <br/>
                <ul>
                    <li>
                        to facilitate our Service;</li>
                    <li>to provide the Service on our behalf;</li>
                       <li> to perform Service-related services; or</li>
                    <li>to assist us in analyzing how our Service is used.</li>

                </ul>
                <br/>
                <p className={'details'}>We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
                <br/>
                <p className={'details'}>Such service providers include Financial Institutions, </p>
                <p className={'title'} id={'security'}>SECURITY</p>
                <p className={'details'}>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                <p className={'title'} id={'othersites'}>LINKS TO OTHER SITES</p>
                <p className={'details'}>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                <p className={'title'} id={'childrenprivacy'}>CHILDREN’S PRIVACY</p>
                <p className={'details'}>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.</p>
                <p className={'title'} id={'changespolicy'}>CHANGES TO THIS PRIVACY POLICY</p>
                <p className={'details'}>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes, noting the date of the last modification. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                <br/>
                <p className={'details'}>This policy is effective as of 2021-08-04</p>
                <p className={'title'} id={'contact'}>CONTACT US</p>
                <p className={'details'}>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at  <span style={{color: 'var(--primary-color)'}}>hello@credocentral.com.</span></p>
            </div>
        </StyledTermsContent>
    );
};

export default PrivacyPolicy;
