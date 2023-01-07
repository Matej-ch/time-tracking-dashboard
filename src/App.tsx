import {useState} from 'react'
import './App.scss'
import DashboardUserProfile from "./DashboardUserProfile";
import DashboardItem from "./DashboardItem";

import myData from './assets/userData/data.json';

function App() {

    const handleDateChange = (timeframe: string) => {
        console.log(timeframe)
    }

    return (
        <main className="dashboard">
            <DashboardUserProfile handleDateChange={handleDateChange}/>
            {myData.map((timeframe, index) => {
                return <DashboardItem data={timeframe} key={index}/>
            })}

        </main>
    )
}

export default App
