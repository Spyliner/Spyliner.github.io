import styled from "styled-components";



export const PricingDiv = styled('div')`
  background: #FFFFF;;
  width: 280px;
  top: 50%;
  left: 50%;

  padding: 40px 10px 20px;
  color: #18216d;
  box-shadow: 0 0 5px rgb(24, 33, 109);
  border-radius:5px; 
  
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



export const Checkmark = styled('div')`
 position:relative;
  display:inline-block;
  &:after{
    content: '';
    display: block;
    width: 6px;
    height: 10px;
    border: solid #090;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
  margin-right: 10px;
  text-align: center;
`



export const Crossmark = styled('div')`
   position:relative;
  display:inline-block;
  &:after{
    content: '';
    display: block;
    width: 6px;
    height: 10px;
    border: solid red;
    border-width: 0 3px 0px 0;
    transform: rotate(45deg);
  } 
  &:before{
    position:absolute;
    top:3px; 
    content: '';
    display: block;
    width: 6px;
    height: 10px;
    border: solid red;
    border-width: 0 3px 0px 0;
    transform: rotate(-45deg);
  }


  margin-right: 10px;
  text-align: center;

`






export const SubscribeButton = styled('a')`
   display: block;
  background: rgb(24, 33, 109);
  max-width: 120px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px 15px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transition: 0.2s linear;
    border-radius:5px; 
  :hover {
      color: rgb(255, 255, 255);
    background-color: rgb(255, 130, 92);
}

  `
