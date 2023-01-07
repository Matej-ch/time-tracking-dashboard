import './DashboardItem.scss'
import Activity from "./timeframe";
import ellipsisSvg from "./assets/icon-ellipsis.svg"
import Card from "./card";
import {useState} from "react";

function DashboardItem({activity, frame, styleData}: { activity: Activity, frame: string, styleData: Card }) {

    const [icon, setIcon] = useState<string>('');

    import(`./assets/${styleData.icon}.svg`).then(image => {
        setIcon(image.default)
    });


    return (<article className={'activity'}>
        <div className={styleData.class + ' back'}>
            <img src={icon} alt="card icon"/>
        </div>
        <div className={'front'}>
            <div>
                <h2>{activity.title}</h2>
                <img src={ellipsisSvg} alt=""/>
            </div>
            <div>
                <p>{activity.timeframes[frame].current}hrs</p>
                <p>{frame === 'daily' ? 'Yesterday' : (frame === 'weekly' ? 'Last Week' : 'Last Month')} - {activity.timeframes[frame].previous}hrs</p>
            </div>
        </div>
    </article>);
}

export default DashboardItem;