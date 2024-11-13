import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import FeedPage from "./Pages/FeedPage";
import Navbar from "./Components/Navbar";
import ProfilePage from "./Pages/ProfilePage";

function App() {
    return (
        <div className="">
            <Navbar/>
            <div className="mt-[120px] p-4 -z-10 flex flex-col items-center">
                <Routes>
                    <Route path="/" element={<FeedPage/>}/>
                    <Route path="/profile/:username" element={<ProfilePage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
