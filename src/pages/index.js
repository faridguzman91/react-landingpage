import React, { useState } from 'react'
import Sidebar from '../components/SideBar'
import NavBar from '../components/NavBar'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
        </>
    )
}

export default Home
