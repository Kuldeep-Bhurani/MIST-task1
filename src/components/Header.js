import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <MenuGrp>
                <div>Model S</div>
                <div>Model X</div>
                <div>Model Y</div>
            </MenuGrp>
            <RightMenu>
                <a href='https://shop.tesla.com/'>Shop</a>
                <a href='https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https://www.tesla.com/teslaaccount/owner-xp/auth/callback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US'>Tesla Account</a>
                <MenuIconContainer>
                    <MenuIcon onClick={() => setBurgerStatus(true)} />
                </MenuIconContainer>
            </RightMenu>
            <BurgerNav status={burgerStatus}>
                <CloseCont>
                    <Close onClick={() => setBurgerStatus(false)} />
                </CloseCont>
                <li><a href="https://www.tesla.com/inventory/new/m3">Existing Inventory</a></li>
                <li><a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a></li>
                <li><a href="https://www.tesla.com/cybertruck">Cybertruck</a></li>
                <li><a href="https://www.tesla.com/roadster">Roadster</a></li>
                <li><a href="https://www.tesla.com/semi">Semi</a></li>
                <li><a href="https://www.tesla.com/charging">Charging</a></li>
                <li><a href="https://www.tesla.com/powerwall">Powerwall</a></li>
                <li><a href="https://www.tesla.com/commercial">Commercial</a></li>
                <li><a href="https://www.tesla.com/utilities">Utilities</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

const MenuGrp = styled.div`
    display: flex;
    text-transform: uppercase;
    div{
        font-weight: 600;
        padding: 0 10px;
        cursor: pointer;
    }
    `

const RightMenu = styled.div`
    display: flex;
    a{
        text-transform: uppercase;
        font-weight: 600;
        padding-right: 10px;
    }
`

const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
    }
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in-out;
`

const CloseCont = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Close = styled(CloseIcon)`
    cursor: pointer;
`