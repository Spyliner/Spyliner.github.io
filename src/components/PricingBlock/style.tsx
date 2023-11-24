import styled from "styled-components";

export const PricingDiv = styled('div')`
  position: absolute;
  background: #3498db;;
  width: 280px;
  top: 50%;
  left: 50%;
  margin: -117px 0 0 -140px;
  padding: 40px 0 20px;
  color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`

export const ThumbnailBlock = styled('div')`
  cursor: pointer;
  background: var(--accent_hover);
  margin: 40px 0 0;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;`


export const TitleBlock = styled('div')`
  cursor: pointer;
  background: var(--accent_hover);
  margin: 40px 0 0;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;`

export const SubTitle = styled('div')`
  background: #eee;
  padding: 10px;
  color: #666;
  font-size: 14px;
  font-weight: 700;
  text-align: center;`


export const ContentBlock = styled('ul')`
  list-style: none;
  background: #fff;
  margin: 0;
  padding: 0;
  color: #666;
  font-size: 14px;

li:nth-child(2n) {
  background: #f3f3f3;
}

}
  `


export const ListItem = styled('li')`
 padding: 10px 20px;
 `



export const CheckMark = styled('div')`


`



export const UnCheckMark = styled('div')`


`






export const SubscribeButton = styled('a')`
   display: block;
  background: red;
  max-width: 80px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px 15px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transition: 0.2s linear;
  a:hover {
  background: rgba(52, 73, 94, 0.7);
}

  
  `
