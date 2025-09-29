import React from 'react'
import styled from 'styled-components'

const Section = (props) => {
    const lBtnClick = () => {
        window.open(`https://www.tesla.com/${props.lnk}/design#overview`);
    }

    const rBtnClick = () => {
        window.open("https://www.tesla.com/inventory/new/ms");
    }

    return (
        <Container bgImage={props.backgroundImg}>
            <ItemText>
                <h1>{props.heading}</h1>
                <p>{props.desription}</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton onClick={lBtnClick}>{props.lBtnTxt}</LeftButton>
                <RightButton onClick={rBtnClick}>{props.rBtnTxt}</RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Container>
    )
}

export default Section

const Container = styled.div`
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 17vh;
    text-align: center;
    flex-grow: 1;
`

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    opacity: 0.9;
    margin: 8px;
    text-tansform: uppercase;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 50px;
`