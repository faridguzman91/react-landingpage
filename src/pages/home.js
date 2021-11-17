import React, { useState } from 'react'
import Sidebar from '../components/SideBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'


//set sidebar navbar toggle states
//default state toggle is 


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return ( <
        >
        <
        Sidebar isOpen = { isOpen }
        toggle = { toggle }
        /> <
        NavBar toggle = { toggle }
        /> <
        HeroSection / >
        <
        Services / >
        <
        InfoSection {...homeObjOne }
        /> <
        InfoSection {...homeObjTwo }
        /> <
        InfoSection {...homeObjThree }
        /> <
        Footer / >
        <
        />
    )
}

export default Home