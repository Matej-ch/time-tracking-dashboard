import {useState} from 'react'
import './App.scss'
import DashboardUserProfile from "./DashboardUserProfile";
import DashboardItem from "./DashboardItem";

import styleData from './assets/data/classes.json';
import myData from './assets/data/data.json';

function App() {

    const [frame, setFrame] = useState<string>('weekly');

    const handleDateChange = (timeframe: string) => {
        setFrame(timeframe);
    }

    return (
        <main className="dashboard">
            <DashboardUserProfile handleDateChange={handleDateChange}/>
            {myData.map((activity, index) => {
                return <DashboardItem activity={activity}
                                      key={index}
                                      frame={frame}
                                      styleData={styleData.find(element => element.id === activity.title)}/>
            })}

        </main>
    )
}

export default App
