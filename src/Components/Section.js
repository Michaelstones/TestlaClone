import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section(Props) {
    const{title, desc, lefttext, rightext,backImg}= Props
  return (
    <Wrapper bgimg={backImg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{desc}</p>
        </ItemText>
        </Fade>
        
        <Button>
        <Fade bottom>
            <ButtonGrp>
                <LeftButton>
                {lefttext}
                </LeftButton>
                
                {rightext && <RightButton>
                    {rightext}
                </RightButton>}
            </ButtonGrp>
        </Fade>
        <DownArrow src='./images/down-arrow.svg'/>
        </Button>
    </Wrapper>
  )
}

export default Section

const Wrapper = styled.div`
width:100vw;
height: 100vh;
background-size:cover ;
background-position:center ;
background-repeat:no-repeat ;
display: flex;
flex-direction:column ;
justify-content:space-between;
align-items:center;
background-image:${props=>`url('./images/${props.bgimg}')`} ;
`

const ItemText = styled.div`
padding-top:15vh;
/* font-size:3rem; */
text-transform:capitalize;
text-align:center;

`
const Button = styled.div`


`
const ButtonGrp =styled.div`
display: flex;
margin-bottom:1.875rem;
@media (max-width:48em){
    flex-direction:column;
}
`

const LeftButton = styled.div`
font-size: .75rem;
width: 16rem;
height: 2.5rem;
color:white;
background: rgba(23, 26, 32, 0.8);
display:flex;
justify-content:center;
align-items:center;
border-radius:6.25rem;
text-transform:uppercase;
opacity:.85;
cursor:pointer;
margin: .5rem;
`

const RightButton = styled(LeftButton)`
background-color:white ;
opacity: .65;
color:black;
`

const DownArrow = styled.img`
height: 2.5rem;
/* margin-top:1.25rem; */
animation: animateDown infinite 1.5s ;
`

