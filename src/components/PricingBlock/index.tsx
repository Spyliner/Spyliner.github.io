import { withTranslation } from "react-i18next";
import { PricingDiv, SubTitle, SubscribeButton, ThumbnailBlock, TitleBlock, ContentBlock, ListItem, Checkmark, Crossmark } from "./style";
import { Slide } from "react-awesome-reveal";
import { Row , Col} from "antd";
import { ContentWrapper } from "../ContentBlock/RightContentBlock/styles";
import { Content, MiddleBlockSection } from "../MiddleBlock/styles";




const PricingBlock = () => {
    return (
        <MiddleBlockSection>
            <Slide direction="up">
                <Row justify="center" align="middle">
                    <ContentWrapper>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <Content>
                                <PricingDiv>
                                    <ThumbnailBlock>
                                    </ThumbnailBlock>
                                    <TitleBlock>
                                        Pro
                                    </TitleBlock>
                                    <div>
                                        <SubTitle>
                                            65$/Month</SubTitle>
                                        <ContentBlock>

                                            <ListItem> <Checkmark> </Checkmark> testsetesttest</ListItem>
                                            <ListItem> <Crossmark> </Crossmark> testsetesttest</ListItem>
                                        </ContentBlock>
                                    </div>

                                    <SubscribeButton>Subscribe</SubscribeButton>
                                </PricingDiv>
                            </Content>
                        </Col>
                    </ContentWrapper>
                </Row>
            </Slide>
        </MiddleBlockSection>
    )
}


export default withTranslation()(PricingBlock)