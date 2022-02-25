import React, { useState } from "react";
//imports useState
import Home from "./Tabs/Home";
//imports Home.js from the Tabs folder
import Contact from "./Tabs/Contact";
//imports Contact.js from the Tabs folder
import About from "./Tabs/About";
//imports About.js from the Tabs folder
import GoogleLoginTab from "./Tabs/GoogleLoginTab"
function TabManager() {
    const [activeTab, setActiveTab] = useState(<Home />);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    //creates variables using useState, makes home default and isLoggedIn is false

  

    const handleHome = () => {
        setActiveTab(<Home />)
    }
    
    const handleContact = () => {
        setActiveTab(<Contact />)
    }
    const handleAbout = () => {
        setActiveTab(<About />)
    }
    const handleGoogleLogin = () => {
        setActiveTab(<GoogleLoginTab />)
    }
    
    
    //are used when something is clicked

    if (isLoggedIn) {
        return (
            <div>
                <header>
                    <ul>
                        <li><a href="home" onClick={handleHome}>Home</a></li>
                        <li><a href="#contact" onClick={handleContact}>Contact Us</a></li>
                        <li><a href="#about" onClick={handleAbout}>About Us</a></li>
                        <li><a href="#googlelogintab" onClick={handleGoogleLogin}>Login With Google</a></li>

                    </ul>
                </header>
                <body>
                    {activeTab}
                </body>
            </div>
        )
    }
    //gives user access to certain tabs if loggedIn

    else {
        return (
            <div>
                <header>
                    <ul>
                        <li><a href="home" onClick={handleHome}>Home</a></li>
                        <li><a href="#contact" onClick={handleContact}>Contact Us</a></li>
                        <li><a href="#about" onClick={handleAbout}>About Us</a></li>
                        <li><a href="#googlelogintab" onClick={handleGoogleLogin}>Login With Google</a></li>

                    </ul>
                    {/*HTML for the navbar*/}
                </header>
                <body>
                    {activeTab}
                    {/*The actual tab*/}
                </body>
            </div>
        )
    }
}

export default TabManager