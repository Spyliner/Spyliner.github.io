import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import {
  FooterSection,
  Title,
  Para,
  Large,
} from "./styles";


const Footer = ({ t }: any) => {
  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
          
            <Large to="/">{t("Copyright © 2024 Spyliner. All Rights Reserved.")}</Large>
              <Para>
              </Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Privacy Policy")}
              </Large>
            </Col>
         
          </Row>
       
        </Container>
      </FooterSection>
      
    </>
  );
};

export default withTranslation()(Footer);
