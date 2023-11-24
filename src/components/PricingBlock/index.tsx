import { withTranslation } from "react-i18next";
import { Container } from "../../common/Input/styles";
import { PricingDiv, SubTitle, SubscribeButton, ThumbnailBlock, TitleBlock, ContentBlock, ListItem } from "./style";




const PricingBlock = () => {
    return (
        <Container>
            <PricingDiv>
                <ThumbnailBlock>
                
                </ThumbnailBlock>
                <TitleBlock>
                    
                </TitleBlock>
                <div>
                    <SubTitle>
                    </SubTitle>
                    <ContentBlock>
                        <ListItem> </ListItem>
                    </ContentBlock>
                </div>

                <SubscribeButton>Buy now!</SubscribeButton>
            </PricingDiv>
        </Container>
    )
}


export default withTranslation()(PricingBlock)