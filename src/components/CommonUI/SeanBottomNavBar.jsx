import React, {useState} from "react";
import workoutsIcon from "../../assets/workoutsIcon.svg";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import nutritionIcon from "../../assets/nutritionIcon.svg";


function BottomNavBar () {
    // Define activePage and setActivePage
    const [activePage, setActivePage] = useState("");

    return (
        // the default className is "bottom-nav-icon", depending on whichever one is clicked the "Active" class gets added, if not selected the nothing happens
        <nav className="bottom-nav">
            <hr />
            <ul>
                <li><img className={`bottom-nav-icon ${activePage === 'exercise' ? 'active' : ''}`}
                onClick={() => setActivePage('exercise')}
                src={workoutsIcon} alt="a barbell icon"/></li>
                <li><img className={`bottom-nav-icon ${activePage === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActivePage('dashboard')}
                src={dashboardIcon} alt="a dashboard icon" /></li>
                <li><img className={`bottom-nav-icon ${activePage === 'nutrition' ? 'active' : ''}`}
                onClick={() => setActivePage('nutrition')}
                src={nutritionIcon} alt="a nutrition icon" /></li>
            </ul>   
            {/* <p>Current active page: {activePage}</p> */}
        </nav>
    )
}

export default BottomNavBar;