import styled from "@emotion/styled";
import {Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "../../Global Css/Main.css";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const HugeTxt = styled("h2")(({ theme }) => ({
    fontWeight: "1000",
    fontSize: "2rem",
    color: "rgb(254,87,87)",
    padding: "1rem 0",
  }));
  const Para = styled("p")(({ theme }) => ({
    fontWeight: "440",
    fontSize: "1rem",
    color: "var(--text)",
    lineHeight: "1.8rem",
    padding: "1.3rem",
  }));
  const TargetedWord = styled("span")(({ theme }) => ({
    fontWeight: "500",
    fontSize: "1rem",
    color: "rgb(254,87,87)",
    lineHeight: "1.5rem",
    textDecoration: "none",
  }));
  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "rgb(19, 19, 19)", padding: "5rem 1rem 1rem 1rem" }}
    >
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
      
      <HugeTxt style={{ textAlign: "center" }}>Privacy Policy</HugeTxt>

      <HugeTxt>1. INTRODUCTION</HugeTxt>
      <Para>
        We are a social e-commerce platform that facilitates discovery and
        purchase of listed products on Our Platform via social interactions
        generated through images and videos from buyers & sellers registered on
        Our Platform. <br />
        This Privacy Policy describes how GoCrow Solutions Private Limited
        (hereinafter referred to as “Company, Us, We, Our”) collects, uses,
        shares, protects and otherwise processes your information through the
        Company's website{" "}
        <a href="https://www.sociofieds.com" style={{ textDecoration: "none" }}>
          <TargetedWord>SOCIOFIEDS</TargetedWord>
        </a>{" "}
        and Our mobile application (hereinafter collectively referred to as
        “Platform”). It is important for you to note that We do not provide any
        product/services outside of India. The personal information collected by
        Us from you shall be primarily stored and processed in India. By using
        the Platform and providing your information, you are expressly agreeing
        to be bound by the terms and conditions of this Privacy Policy and also
        the Terms of Use (hereinafter referred to as “Terms”) and agree to be
        governed by the laws of India including but not limited to the laws
        applicable to data protection and privacy.
      </Para>

      <HugeTxt>2. COLLECTION OF INFORMATION</HugeTxt>
      <Para>
        We collect personal information relating to your identity, name, email
        address, password and demographics related to when you use Our Platform
        and how you use it. The information that We may collect includes but is
        not limited to information provided to us during sign-up/registering or
        using Our Platform such as name, date of birth, address,
        telephone/mobile number, email address, occupation and any such
        information shared as proof of identity or address. We may also request
        you to share your PAN, GST number, Government issued ID/number and
        Know-Your-Customer (KYC) details for certain services including but not
        limited to credit or other payment. We might also collect certain
        sensitive personal information of yours relating to your banks account
        or credit card or debit card details or biometrics information. <br />
        The information that We may receive during your usage of Our Platform
        are as follows: <br />
        a. Usage Information - Information relating to but not limited to, how
        much you use Our Platform, the amount of time you spend on it, what
        services do you use on the Platform, etc; <br />
        b. Device Information - Information relating to but not limited to,
        hardware and software, such as the hardware model, operating system
        version, device memory, advertising identifiers, unique application
        identifiers, apps installed, unique device identifiers, device usage
        data, browser type, keyboards installed, language, battery level, and
        time zone; <br />
        c. Device phonebook; and <br />
        d. Camera, photos, and audio - this information is collected because
        many services on Our Platform require us to collect images and other
        information from your device's camera and photos. <br />
      </Para>

      <HugeTxt>3. COOKIES</HugeTxt>
      <Para>
        The Platform uses data collection devices such as “cookies” on certain
        pages of the Platform to analyze Our web page flow, measure promotional
        effectiveness and promote trust and safety. Cookies are small files
        placed on your hard drive that assist Us in providing the best of Our
        services to you. These Cookies do not contain any personal information
        of the user. Cookies help Us to provide information to you that is
        targeted to your interests. There are certain session Cookies which are
        deleted from your hard drive automatically at the end of your session on
        the Platform. You are always free to decline/delete Our Cookies if your
        browser permits, although in that case We may not be able to provide you
        with the best of Our services.
      </Para>

      <HugeTxt>4. USE OF COLLECTED INFORMATION</HugeTxt>
      <Para>
        We collect your information for the following purposes: <br />
        a. develop, operate, improve, deliver, maintain the services as offered
        by the Platform; <br />
        b. send you communications, including by email or SMS where permitted;{" "}
        <br />
        c. monitor and analyze the usage of Our Platform; <br />
        d. provide a personalized experience of Our Platform to you; <br />
        e. enhance the safety and security of Our products and services; <br />
        f. verify your identity and prevent fraud or other unauthorized or
        illegal activity; and <br />
        g. enforce, investigate and report any violation of the Terms and comply
        with the legal requirements. <br />
      </Para>

      <HugeTxt>5. HOW SECURE IS THE INFORMATION?</HugeTxt>
      <Para>
        We design Our systems with your security and privacy in mind. a. We work
        to protect the security of your personal information during transmission
        by using encryption protocols and software. b. We follow the Payment
        Card Industry Data Security Standard (PCI DSS) when handling payment
        card data. c. We maintain physical, electronic, and procedural
        safeguards in connection with the collection, storage, processing, and
        disclosure of personal customer information. Our security procedures
        mean that We may occasionally request proof of identity before We
        disclose personal information to you. d. Our devices offer security
        features to protect them against unauthorized access and loss of data.
        You can control these features and configure them based on your needs.
        Click here for more information on how to manage the security settings
        of your device. e. It is important for you to protect against
        unauthorized access to your password and to your computers, devices and
        applications. Be sure to sign off when finished using a shared computer.
      </Para>

      <HugeTxt>6. SHARING OF DATA WITH THIRD-PARTY</HugeTxt>
      <Para>
        The personal information as collected by Us might be shared as allowed
        under the applicable laws and in line with this Privacy Policy, with
        including but not limited to Our business partners, service providers,
        merchants, affiliates, associates, subsidiaries, legally recognized
        authorities, regulatory bodies, governmental authorities, financial
        institutions, internal teams, etc. The personal information shall be
        shared where applicable and, on a need-to-know basis, for the following
        purposes: <br />
        a. for the facilitation of the services as availed by you with the
        service provider and you; <br />
        b. for complying with the applicable laws as well as meeting the
        Know-Your-Customer (KYC) requirements as mandated by the regulatory
        bodies; <br />
        c. for facilitating your transactions on the Platform; <br />
        d. to respond to third-party claims that an advertisement, posting or
        other content on the Platform violates their rights; <br />
        e. for any requirement as made by the law and which makes such
        disclosure necessary to respond to subpoenas, court orders, or other
        legal process; <br />
        f. for the resolution of disputes or grievance redressal; and <br />
        g. in the event We or Our assets, merge with, or be acquired by any
        business entity, or there is an occurrence of an amalgamation,
        re-organization or restructuring of Our business, then such other
        business entity. <br />
        While your information being shared to these third parties, we shall
        ensure stricter and no less stringent privacy protection obligations on
        these third parties, as applicable. We do not accept any responsibility
        or liability for usage of your personal information by these third
        parties or their policies. <br />
      </Para>

      <HugeTxt>7. INFORMATION FROM THIRD PARTIES</HugeTxt>
      <Para>
        We may also obtain information about you from third parties such as
        partners, marketers, third-party websites, and researchers, and combine
        that information with the information we collect from or about you.
      </Para>

      <HugeTxt>8. LINKS TO OTHER SITES</HugeTxt>
      <Para>
        Our Platform links to other websites that may collect personal
        information about you. We are not responsible for the privacy practices
        or the content of those linked websites.
      </Para>
      <HugeTxt>9. OPT-OUT</HugeTxt>
      <Para>
        All the users of Our Platform are provided with an opportunity to
        opt-out of receiving non-essential (promotional, marketing-related)
        communications from Us after setting up an account on the Platform. If
        you do not wish to receive the promotional communications from Us, then
        please unsubscribe by clicking on the unsubscribe link in the email.
      </Para>

      <HugeTxt>10. ADVERTISEMENTS</HugeTxt>
      <Para>
        During your usage of the Platform, you shall find the ads being served
        to you. We use third-party advertising companies to serve ads when you
        use the Platform. These third-party companies may use information about
        you and your visit to the Platform in order to provide advertisements
        about the goods and services of interest to you.
      </Para>

      <HugeTxt>11. USAGE BY MINOR INFORMATION</HugeTxt>
      <Para>
        The Company does not sell products for purchase by minors. We sell
        children’s products for purchase by adults. If you are under the age of
        18 years, you shall use the services of the Platform with the
        involvement of a parent or guardian. We do not knowingly solicit or
        collect personal information from minors under the age of 18 years.
      </Para>

      <HugeTxt>12. DATA RETENTION</HugeTxt>
      <Para>
        We might retain your information for a period of time as provided by
        applicable laws. Your data shall be retained by Us if: <br />
        a. there is any legal obligation to retain the data; <br />
        b. there is any statutory or regulatory retention requirement by law;
        and <br />
        c. if We believe it may be necessary to prevent fraud or future abuse.{" "}
        <br />
      </Para>

      <HugeTxt>13. CHANGES TO THIS PRIVACY POLICY</HugeTxt>
      <Para>
        We request you to check Our Privacy Policy periodically for changes. We
        may update Our policy to reflect changes to Our information practices.
        We shall intimate you with any changes to the Privacy Policy by an email
        when We are required to do so by applicable law.
      </Para>

      <HugeTxt>14. GRIEVANCE OFFICER:</HugeTxt>
      <Para>
        If your complaint is not resolved even after complaining through Our
        complaint mechanism, then you can contact Our grievance officer at:{" "}
        <a
          href="mailto:rahul@sociofieds.com"
          style={{ textDecoration: "none" }}
        >
          <TargetedWord>rahul@sociofieds.com</TargetedWord>
        </a>
      </Para>

      <HugeTxt>15. CONTACT US:</HugeTxt>
      <Para>
        For any queries or complaints related to the services of the Platform,
        you contact us by writing to us on:{" "}
        <a
          href="mailto:rahul@sociofieds.com"
          style={{ textDecoration: "none" }}
        >
          <TargetedWord>contact@sociofieds.com</TargetedWord>
        </a>{" "}
      </Para>
    </Container>
  );
};

export default PrivacyPolicy;
