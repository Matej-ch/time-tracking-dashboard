import './DashboardUserProfile.scss'
import img from './assets/image-jeremy.png'

function DashboardUserProfile() {
    return (<article className={'user-profile'}>
        <div className={'front'}>
            <img src={img} alt="Image of Jeremy robson" width={'64'}/>
            <div className={'name'}>
                <span>Report for</span>
                <span>Jeremy Robson</span>
            </div>
        </div>
        <div className={'back'}>
            <a href="">Daily</a>
            <a href="">Weekly</a>
            <a href="">Monthly</a>
        </div>
    </article>);
}

export default DashboardUserProfile;