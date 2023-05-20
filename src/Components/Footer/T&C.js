import styled from '@emotion/styled'
import {Card, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import blackSociofieds from './Images/Black Sociofieds.png'
import CardMedia from '@mui/material/CardMedia';
import React from 'react'
import '../../Global Css/Main.css'
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    const HugeTxt = styled("h2")(({theme})=>({
        fontWeight:"1000",
        fontSize:"2rem",
        color:"rgb(254,87,87)",
        padding:"1rem 0"
    }))
    const Para = styled("p")(({theme})=>({
        fontWeight:"440",
        fontSize:"1rem",
        color:"var(--text)",
        lineHeight:"1.8rem",
        padding:"1.3rem",
    }))
    const LinkTarget = styled("span")(({theme})=>({
        fontWeight:"500",
        fontSize:"1rem",
        color:"rgb(254,87,87)",
        lineHeight:"1.5rem",
        textDecoration:"none",
    }))
  return (
    <Container maxWidth={false} sx={{bgcolor:"rgb(19, 19, 19)",padding:"5rem 1rem 1rem 1rem"}}>
        <Grid container direction="column">
        <Typography
          variant="p"
          sx={{
            textAlign: "center",
            fontSize: {xs:"2rem",md:"8rem"},
          }}
        >
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "var(--backGMain)",
              fontFamily: "playlistscriptwebfont",
             
            }}
          >
            Sociofieds
          </Link>
        </Typography>
      </Grid>
            <HugeTxt style={{textAlign:"center"}}>
               Terms & Conditions
            </HugeTxt>
            <Para>
            Welcome to GoCrow Solutions Private Limited (hereinafter referred to as the “Company, Us, We, Our”). The following terms of use (hereinafter referred to as the “Terms”) govern your use of Our website<a href='https://www.sociofieds.com' style={{textDecoration:"none"}}><LinkTarget>SOCIOFIEDS</LinkTarget></a>and Our mobile application (hereinafter referred to as the “Platform”), except where we expressly state that separate terms (and not these) apply and provide information about that service.

When you create an account on Our platform, you expressly agree to our Terms. The Terms constitute an agreement between you and Us.

These Terms constitute an electronic record within the meaning of Section 2(t) of the Information Technology Act, 2000. This electronic record is generated from a computer system and does not require any physical or electronic signatures.
            </Para>
      

            <HugeTxt>
            1. YOUR ACCOUNT
            </HugeTxt>
            <Para>
           
If you use the Platform, you shall be responsible for maintaining the confidentiality of your username and password and for restricting access to your computer to prevent unauthorized access to your account. You will be solely responsible for all the activities that take place under your Username and Password. You agree that if you provide any information that is untrue, inaccurate, not correct, incomplete or against community guidelines, We shall have the right to indefinitely terminate, suspend or block access to your account and membership on Our Platform.

You agree to notify Us in case of any breach of password or any unauthorized use of your account and ensure that you exit your account at the end of each session.
            </Para>
       <HugeTxt>
       2. SERVICES OFFERED
       </HugeTxt>
       <Para>
       (A) We offer the following services (hereinafter referred to as “Services”) through Our Platform: <br />

a. Discovery of listed products via images and videos posted by buyers and sellers in the following forms:  <br />

i. Personal Feeds: <br />

Personal feeds are populated with images and videos posted by individuals or brands on the Platform once the user follows them. These may also contain suggested or sponsored posts at Our discretion which might be relevant to you.

ii. Explore Feeds: <br />

Explore feeds are populated with images and videos posted by individuals and brands on the Platform, displayed at the discretion of the Platform, regardless of whether the user follows these individuals and/or brands or not. <br />

b. You may purchase listed products on Our Platform through the checkout mechanism as provided. <br />

c. You shall at the sole discretion of the Platform be incentivized with Reward Points (hereinafter referred to as “Points”) in the following manner: <br />

i. Every time you post an image or video on the Platform containing the product bought through the Platform, you shall receive Points, which may be used for future purchases on the Platform. <br />

ii. Points may also be received for inviting more people to the Platform via referral links or otherwise, as notified by the Platform which may be used for future purchases on the Platform. <br />

iii. Every time a sale originates from the link generated from your post of the image or video of that product, you shall receive more Points for your efforts, which may either be used for future purchases on the Platform or they may be redeemed by you as an incentive bonus upon successful completion of e-KYC verification and any other requirements of the Platform. <br />

d. Providing consumer behavior insights to brands listed on the Platform for their listed products, at Our discretion. <br />

e. Providing an online dashboard to listed brands to keep them updated about the purchase orders by buyers on the Platform. <br />

f. The Platform may on terms and conditions to be decided in its sole discretion provide paid promotional opportunities to listed brands for highlighting their listed products on the Platform to the buyers. <br />

(B) The Platform shall have the sole discretion to decide on the percentage/number of the Points which you shall receive. It is furthermore clarified that the criteria for earning/using or otherwise in relation to the Points may change at any time solely at the discretion of the Platform. <br />
       </Para>
    <HugeTxt>
    3. PLATFORM FOR TRANSACTIONS OR COMMUNICATION
    </HugeTxt>
    <Para>
    You utilize Our Platform to meet, interact, socialize, purchase and sell and We cannot be a party to or control in any manner any transactions that take place on the Platform. You agree and acknowledge that you cannot and shall not hold Us responsible for any contractual terms, representations, warranties, non-performance and breach of contracts, or any rights, title or interest in relation to any of the products sold or otherwise advertised/shown on the Platform.
    </Para>
    <HugeTxt>
    4. ACCESS TO OUR PLATFORM
    </HugeTxt>
    <Para>
    We will do Our best to provide you with uninterrupted and error-free access and use of Our platform. However, due to any change in the internet speed or online connection issues or any other such issues, this cannot be guaranteed by Us. The Company retains the rights to temporarily block access to or suspend your accounts to allow for repairs, upgrades, maintenance, introduction of new facilities or services at any time without any prior notice.
    </Para>

    <HugeTxt>
    5. USERS CONDUCT AND RULES
    </HugeTxt>
    <Para>
    You may not use Our Platform in a manner which will cause or is likely to cause an interrupted or damaged access to the Platform. You agree that you are responsible for all the electronic communication set from your electronic device and such content shared by you shall be for lawful purposes only. You shall not use the Platform for any fraudulent purpose, including but not limited to a criminal offence. The Company reserves all rights to suspend or block your account from the Platform for any act done or undertaken or influenced by you which is against the applicable laws in India or not in line with the Terms contained herein.
    </Para>
    <HugeTxt>
    6. ELIGIBILITY TO USE OUR SERVICE
    </HugeTxt>
    <Para>
    The Services offered by Us are only for those persons, groups, organizations, or others who can form a legally binding contract under the Indian Contract Act, 1872. If you are a minor i.e., under the age of 18, you may use only a limited portion of Our Services but only under the strict guidance of your parent or guardian. If you are a minor, you will be restricted to purchase Products on Our Platform, and your parent or guardian shall transact on your behalf and observe complete liability on your behalf. We shall not be liable for any transactions of any nature on our Platform by a minor.
    </Para>
    <HugeTxt>
    7. RIGHTS GRANTED TO USERS
    </HugeTxt>
    <Para>
    The Company is the owner of the Platform and the Services offered by the Platform including but not limited to proprietary content, information, software, images, texts, graphics, audios, videos and all related intellectual property rights. We grant you a non-exclusive, revocable, non-sub-licensable license, royalty-free and non-assignable license to use Our Services and this license is only for the purpose of using Our Services in a way that our Terms and Privacy Policies allow you to. You agree and acknowledge that you will not in any way use the Services on Our platform that is strictly, expressly and impliedly unauthorized by Our Terms and you shall refrain from helping anyone in doing so.
    </Para>
    <HugeTxt>
    8. RIGHTS GRANTED TO US
    </HugeTxt>
    <Para>
    The content that you share and upload on Our Platform such as photos, videos, audios etc. which may be protected by intellectual property rights and may be under your ownership alone, but you agree to grant Us a worldwide, non-revocable, assignable, royalty-free, sublicensable, and transferrable license to use the content generated by you. This license shall be used by Us or any of Our affiliates to host, modify, use, run, distribute, copy, display, analyze, transmit, distribute, translate, or create derivative works of your content. This license will end when your content is deleted from our systems. Account deletion or deactivation does not automatically delete your content from our records and your connections will still be able to view the content generated by you. It may take many days to delete content after we begin with the account deletion process or receive a content deletion request. Even after the account is successfully deleted it may take time to delete all such content from our backups and recovery systems. We reserve the right to review, screen and delete your content at any time for any reason if We think that your content violates Our Terms and/or is against applicable law. You shall solely be held responsible and/or liable for all the content posted by you on Our Platform.
    </Para>
    <HugeTxt>
    9. PRIVACY POLICY
    </HugeTxt>
    <Para>
    The information collected from you, including your registration details, bank and payment related details are subject to OurPrivacy Policy
    </Para>
    <HugeTxt>
    10. WARRANTIES AND LIABILITIES AND PROHIBITIONS
    </HugeTxt>
    <Para>
    All Products available on the Platform are provided on “as is” and “as available” basis without any representation or warranties, express or implied except otherwise specified in writing. We do not warrant that the information provided on the platform by the third party sellers is true, accurate and/or non-misleading. You agree that We shall not be responsible in any way for the breach of any warranty provided by the seller to you and any breach of such warranty will be resolved between you and the seller and We will not be a party to such a claim, suit, arbitration or any other dispute resolving mechanism available under applicable law for the time being in force.

It is hereby clarified that it shall be the seller and/or courier partner and not Us who shall be responsible or liable for the delivery of the Products as may be ordered by you and therefore, We shall not be liable for any wear and tear, damage, misplacement, missing product and/or any other liability whatsoever arising out of or from the delivery or non-delivery of the Product.

Further, you warrant that you shall:  <br/>

a. not do anything expressly or impliedly which shall violate applicable law and regulations for the time being in force;  <br/>

b. the content and material you supply does not breach any applicable agreement and will not cause injury and/or harm to any person or entity;  <br/>

c. not make any false or malicious statements against the Services provided on the Platform;  <br/>

d. not introduce any trojans, viruses, any other malicious software, any bots or scrape the Platform for any information and not post, copy, submit, upload, distribute, or otherwise transmit or make available any software or other computer files that contain a virus or other harmful component, or otherwise disrupt or damage the Platforms and/or Services or any connected network, or otherwise interfere with any person or entity's use or enjoyment of the Platforms and/or the Services and you further agree not to hack into or introduce malicious software of any kind onto the Platforms;  <br/>

e. not try to gain unauthorized access to, or interfere with, or damage, or disrupt the server on which the details connected to the Services are stored, or any other server, computer, or database connected to the Services; and  <br/>

f. you will not engage in any form of antisocial, disruptive, or destructive acts, including “flaming,” “spamming,” “flooding,” “trolling,”, “phishing” and “griefing” as those terms are commonly understood and used on the internet.  <br/>

You are prohibited to post any information or content that:  <br/>

a. is libelous, defamatory, abusive, threatening, harassing, hateful, and offensive or otherwise violates any law or right of any third-party;  <br/>

b. belongs to another person and to which you do not have any right;  <br/>

c. is harmful, harassing, blasphemous, defamatory, obscene, pornographic, pedophilic, invasive of another's privacy, hateful, relating to or encouraging money laundering or gambling, or otherwise harmful in any manner whatsoever;  <br/>

d. is harmful to any minor;  <br/>

e. infringes any Intellectual Property Rights in any way; and  <br/>

f. violates any applicable laws for the time being in force.  <br/>
    </Para>
    <HugeTxt>
    11. INDEMNITY
    </HugeTxt>
    <Para>
    You agree to indemnify and hold the Company, its owner, licensee, affiliates, subsidiaries, respective officers, agents, directors and employees, harmless from any claim, demand, cost, liability or actions including attorney’s fees, made by any third party or any penalty imposed due to or arising out of your breach of the Terms, Privacy Policy or any other policies or any violation of applicable laws, rules, regulations or any rights (including infringement of any intellectual property rights) of any third party.
    </Para>
    <HugeTxt>
    12. LIMITATION OF LIABILITY
    </HugeTxt>
    <Para>
    To the maximum extent permitted by law, the Company and its members, shareholders, subsidiaries, directors, employees, associates, affiliates, agents, licensors and suppliers will not be responsible and liable for any indirect, incidental, special, consequential, punitive, or multiple damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:

a. unauthorized access to or alteration to the user’s transmission or data;

b. the use or the inability to use the products or Services; and

c. any content posted, transmitted, exchanged, or received by or on behalf of any user or other person on or through the Platform.
    </Para>
    <HugeTxt>
    13. GOVERNING LAWS
    </HugeTxt>
    <Para>
    These Terms are governed by and to be interpreted in accordance with laws of India. You agree, in the event of any dispute arising in relation to these Terms or any dispute arising in relation to the Platform, whether in contract or tort or otherwise, to submit to the jurisdiction of the courts located at Faridabad, Haryana, India for the resolution of all such disputes.
    </Para>
    <HugeTxt>
    14. INTELLECTUAL PROPERTY
    </HugeTxt>
    <Para>
    The Platform is owned and operated by the Company and the products are sold by the respective sellers. All material on the Platform, including images, illustrations, audio clips, and video clips, are protected by copyrights, trademarks, and other intellectual property rights. Material on the Platform is solely for your personal and non-commercial use. You must not copy, reproduce, republish, upload, post, transmit or distribute such material in any way, including by email or other electronic means and whether directly or indirectly and you must not assist any other person to do so. Without the prior written consent of the owner, modification of the materials, use of the materials on any other networked computer environment or use of the materials for any purpose other than personal, non-commercial use is a violation of the copyrights, trademarks and other proprietary rights, and is prohibited.
    </Para>
    <HugeTxt>
    15. DISCLAIMER
    </HugeTxt>
    <Para>
    You acknowledge and undertake that you are accessing the services on the platform and transacting at your own risk and are using your best and prudent judgment before entering into any transactions through the Platform including posting on the Platform. You further acknowledge and undertake that you will use the Platform to order Products only for your personal use and not for business purposes. We shall neither be liable nor responsible for any actions or inactions of sellers nor any breach of conditions, representations or warranties by the sellers or manufacturers of the Products and hereby expressly disclaim and any all responsibility and liability in that regard. We shall not mediate or resolve any dispute or disagreement between you and the sellers or manufacturers of the Products.

We expressly disclaim any and all liabilities in this regard. We further expressly disclaim any warranties or representations (express or implied) in respect of quality, suitability, accuracy, reliability, completeness, timeliness, performance, safety, merchantability, fitness for a particular purpose, or legality of the products listed or displayed or transacted or the content (including product or pricing information and/or specifications) on the Platform. While we have taken precautions to avoid inaccuracies in content, this platform, all content, information (including the price of products), software, products, services and related graphics are provided as is, without warranty of any kind. At no time shall any right, title or interest in the products sold through or displayed on the Platform vest with Us, nor shall We have any obligations or liabilities in respect of any transactions on the Platform.
    </Para>
    <HugeTxt>
    16. WAIVER:
    </HugeTxt>
    <Para>
    No provision in these Terms will be deemed waived and no breach excused, unless such waiver or consent is in writing and signed by Us. Any consent by Us to, or waiver of your breach, whether expressed or implied, will not constitute consent to, waiver of, or excuse for any other different or subsequent breach.
    </Para>
    <HugeTxt>
    17. SEVERABILITY:
    </HugeTxt>
    <Para>
    If any provision of these Terms is held by a court of competent jurisdiction to be unenforceable under applicable law, then such provision will be excluded from these Terms and the remainder of these Terms will be interpreted as if such provision were so excluded and will be enforceable in accordance with its terms; provided however that, in such event, these Terms will be interpreted so as to give effect, to the greatest extent consistent with and permitted by applicable law, to the meaning and intention of the excluded provision as determined by such court of competent jurisdiction.
    </Para>
    <HugeTxt>
    18. AMENDMENT TO THE TERMS:
    </HugeTxt>
    <Para>
    These Terms are subject to amendments and modifications and may be updated from time to time, without any advance notice. You are requested to regularly review the Terms as available on the Platform. Your relationship with the Platform will be governed by the most current version of these Terms, as published on the Platform.
    </Para>
    <HugeTxt>
    19. FORCE MAJEURE:
    </HugeTxt>
    <Para>
    We will not be responsible for any business loss (including but not limited to loss of profits, revenue, contracts, anticipated savings, data, goodwill or wasted expenditure), or any other indirect or consequential loss that is not reasonably foreseeable to both you and Us when you commenced using the Platform. We will not be held responsible for any delay or failure to comply with its obligations if the delay or failure arises from any cause which is beyond Our control.
    </Para>
    <HugeTxt>
    20. GRIEVANCE OFFICER:
    </HugeTxt>
    <Para>
    If your complaint is not resolved even after complaining through Our complaint mechanism, then you can contact Our grievance officer at: <a href="mailto:rahul@sociofieds.com" style={{textDecoration:"none"}}><LinkTarget>rahul@sociofieds.com</LinkTarget></a>  
    </Para>

    </Container>
  )
}

export default TermsCondition