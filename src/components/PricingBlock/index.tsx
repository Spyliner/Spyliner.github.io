import { withTranslation } from "react-i18next";
import { PricingDiv, SubTitle, SubscribeButton, ThumbnailBlock, TitleBlock, ContentBlock, ListItem, Checkmark, Crossmark } from "./style";
import { Slide } from "react-awesome-reveal";
import { Row , Col} from "antd";
import {  MiddleBlockSection } from "../MiddleBlock/styles";




const PricingBlock = () => {
    return (
        <MiddleBlockSection>
            <Slide direction="up" style={{ width: "100%" }}>
                <Row justify="center" align="middle" style={{ width: "100%", justifyContent: "space-evenly" }} >
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


                </Row>
            </Slide>
        </MiddleBlockSection>
    )
}


export default withTranslation()(PricingBlock)