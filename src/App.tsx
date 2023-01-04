import {useState} from 'react'
import './App.scss'
import DashboardUserProfile from "./DashboardUserProfile";
import DashboardItem from "./DashboardItem";

function App() {

    return (
        <main className="dashboard">
            <DashboardUserProfile/>
            <DashboardItem/>
        </main>
    )
}

export default App
