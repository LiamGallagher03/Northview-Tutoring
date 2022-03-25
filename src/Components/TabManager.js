import React, { useState } from "react";
import Home from "./Tabs/Home";
import Contact from "./Tabs/Contact";
import Profile from "./Tabs/Profile";
import GoogleLoginTab from "./Tabs/GoogleLoginTab";
import Form from "./Tabs/Form";

function TabManager() {
    const [activeTab, setActiveTab] = useState(<Home />);

    const handleHome = () => {
        setActiveTab(<Home />)
    }
    const handleContact = () => {
        setActiveTab(<Contact />)
    }
    const handleProfile = () => {
        setActiveTab(<Profile />)
    }
    const handleGoogleLogin = () => {
        setActiveTab(<GoogleLoginTab />)
    }
    const handleForm = () => {
        setActiveTab(<Form />)
    }

    return (
        <div id="navbar">
            <ul>
                <li><a href="" onClick={handleHome}>Home</a></li>
                <li><a href="#form" onClick={handleForm}>Form</a></li>
                <li><a href="#profile" onClick={handleProfile}>Profile</a></li>
                <li><a href="#google" onClick={handleGoogleLogin}>Login With Google</a></li>
                <li><a href="#contact" onClick={handleContact}>Contact Us</a></li>
            </ul>
            {/*HTML for the navbar*/}

            <body>
                {activeTab}
                {/*The actual tab*/}
            </body>
        </div>
    )
}

export default TabManager