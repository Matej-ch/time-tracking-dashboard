import './DashboardUserProfile.scss'
import img from './assets/image-jeremy.png'

function DashboardUserProfile({handleDateChange}: { handleDateChange: Function }) {
    return (<article className={'user-profile'}>
        <div className={'front'}>
            <img src={img} alt="Image of Jeremy robson" width={'64'}/>
            <div className={'name'}>
                <span>Report for</span>
                <h1>Jeremy Robson</h1>
            </div>
        </div>
        <div className={'back'}>
            <a href="#" onClick={() => handleDateChange('daily')}>Daily</a>
            <a href="#" onClick={() => handleDateChange('weekly')}>Weekly</a>
            <a href="#" onClick={() => handleDateChange('monthly')}>Monthly</a>
        </div>
    </article>);
}

export default DashboardUserProfile;