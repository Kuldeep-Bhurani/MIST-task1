import React from 'react'
import Section from './Section'

const Home = () => {
    return (
        <div>
            <Section heading="Tesla Model S" desription="Order Online for Touchless Delivery" lBtnTxt="Custom Order" rBtnTxt="Existing Inventory" lnk="models" backgroundImg="model-s.jpg" />
            <Section heading="Tesla Model X" desription="Order Online for Touchless Delivery" lBtnTxt="Custom Order" rBtnTxt="Existing Inventory" lnk="modelx" backgroundImg="model-x.jpg" />
            <Section heading="Tesla Model Y" desription="Order Online for Touchless Delivery" lBtnTxt="Custom Order" rBtnTxt="Existing Inventory" lnk="modely" backgroundImg="model-y.jpg" />
        </div>
    )
}

export default Home