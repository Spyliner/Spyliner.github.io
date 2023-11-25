import { withTranslation } from "react-i18next";
import { PricingDiv, SubTitle, SubscribeButton, ThumbnailBlock, TitleBlock, ContentBlock, ListItem, Checkmark, Crossmark } from "./style";
import { Slide } from "react-awesome-reveal";
import { Row , Col} from "antd";
import {  MiddleBlockSection } from "../MiddleBlock/styles";

interface PricingProps { 
    title: string; 
    data: any; 
}

function createPricingElements(data: any) { 
    let elements = []
    for (let i = 0; i <= data.length-1; i++) {
        elements.push(createPricingElement(data[0]))
    }
    return elements
}

function createPricingElement(data:any) { 
    return (
        <PricingDiv>
            <ThumbnailBlock>
                {data.logo}
            </ThumbnailBlock>
            <TitleBlock>
                {data.pricingTitle}
            </TitleBlock>
            <div>
                <SubTitle>
                    {data.price}</SubTitle>
                <ContentBlock>
                    {generateCheckmark(data.checkedList)}
                    {generateCrossmark(data.crossList)}
                </ContentBlock>
            </div>
            <SubscribeButton>Subscribe</SubscribeButton>
        </PricingDiv>
    )
}


function generateCheckmark(data:Array<string>) { 
    let checkmarks: any = []
    for (let i = 0; i <= data.length - 1; i++) { 
        checkmarks.push(<ListItem> <Checkmark> </Checkmark> { data[0]}</ListItem>)
    }
    return checkmarks
}

function generateCrossmark(data: Array<string>) { 
    let crossmarks: any = []
    for (let i = 0; i <= data.length - 1; i++) {
        crossmarks.push(<ListItem> <Crossmark> </Crossmark> {data[0]}</ListItem>)
    }
    return crossmarks
}


const PricingBlock = ({ title, data }: PricingProps) => {
    return (
        <MiddleBlockSection>
            <Slide direction="up" style={{ width: "100%", display: "block" }}>
                <div style={{ width: "100%", display: "block" }} > 
                <h6>{title}</h6>
                    <Row justify="center" align="middle" style={{ width: "100%", justifyContent: "space-evenly", padding: "20px" }} >
                    {createPricingElements(data)}
                    </Row>
                </div>
            </Slide>
        </MiddleBlockSection>
    )
}


export default withTranslation()(PricingBlock)