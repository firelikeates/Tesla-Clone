import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Header from './Header'
import "../CSS/HomePage.css"
import Section from './Section.js'
import ModelS from "../Assets/model-s.jpg"
import Model3 from "../Assets/model-3.jpg"
import ModelX from "../Assets/model-x.jpg"
import ModelY from "../Assets/model-y.jpg"
import SolarPanel from "../Assets/solar-panel.jpg"
import SolarRoof from "../Assets/solar-roof.jpg"
import arrow_down from "../Assets/down-arrow.svg"

const HomePage = () => {
    return (
        < main >
            <Header />
            <Section svg={arrow_down} id="ModelS" className="model_s" img={ModelS} title={"Model S"} desc={"Leasing starting at $349/mo"} />
            <Section id="Model3" img={Model3} title={"Model 3"} />
            <Section id="ModelX" img={ModelX} title={"Model X"} />
            <Section id="ModelY" img={ModelY} title={"Model Y"} />
            <Section id="SolarPanels" img={SolarPanel} title={"Solar Panels"} />
            <Section id="SolarRoof" img={SolarRoof} title={"Solar Roofs"} />
        </main >
    )
}

export default HomePage 
