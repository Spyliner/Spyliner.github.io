import { withTranslation } from "react-i18next";
import { PricingDiv, SubTitle, SubscribeButton, ThumbnailBlock, TitleBlock, ContentBlock, ListItem, Checkmark, Crossmark } from "./style";
import { Slide } from "react-awesome-reveal";
import { Row , Col} from "antd";
import {  MiddleBlockSection } from "../MiddleBlock/styles";

interface PricingProps { 
    title: string; 
    data: any; 
    id: string; 
}

function createPricingElements(data: any) { 
    let elements = []
    for (let i = 0; i <= data.length-1; i++) {
        elements.push(createPricingElement(data[i]))
    }
    return elements
}

function createPricingElement(data: any) { 
    return (
        <PricingDiv> 
            <ThumbnailBlock>
                <img src={data.logo}></img>
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
            {generateSelectButton(data.price)}
        </PricingDiv>
    )
}

function generateSelectButton(price: any) { 
    if (price === "$0/Month") return 
    return <SubscribeButton>Select</SubscribeButton>
}

function generateCheckmark(data:Array<string>) { 
    let checkmarks: any = []
    for (let i = 0; i <= data.length - 1; i++) { 
        checkmarks.push(<ListItem> <Checkmark> </Checkmark> { data[i]}</ListItem>)
    }
    return checkmarks
}

function generateCrossmark(data: Array<string>) { 
    let crossmarks: any = []
    for (let i = 0; i <= data.length - 1; i++) {
        crossmarks.push(<ListItem> <Crossmark> </Crossmark> {data[i]}</ListItem>)
    }
    return crossmarks
}


const PricingBlock = ({ title, data, id }: PricingProps) => {
    return (
        <MiddleBlockSection >
            <Slide direction="left" style={{ width: "100%", display: "block" }} >
                <div style={{ width: "100%", display: "block" }} id={id} > 
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