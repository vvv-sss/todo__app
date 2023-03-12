// ___React___________________________________________________________________________________________________________
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// ___Redux___________________________________________________________________________________________________________
import { useSelector } from 'react-redux';

const NavBar = () => {

    const [taskCount, setTaskCount] = useState(0);
    const [groupCount, setGroupCount] = useState(0);

    // Setting the number of active tasks for header
    const tasks = useSelector(state => state.tasks);
    const activeTasks = useSelector(state => state.tasks.filter(task => task.isCompleted ===  false));

    useEffect(() => setTaskCount(activeTasks.length), [tasks]);

    // Setting the number of active groups for header 
    const groups = useSelector(state => state.groups);

    useEffect(() => setGroupCount(groups.length), [groups]);

    return ( 
        <nav className="navbar">
            <NavLink to="tasks" className="navbar__tasks">
                <div className="navbar__count">
                    <span>{ taskCount }</span>
                </div>
                <h2 className="nav-tasks">Tasks</h2>
            </NavLink>
            <NavLink to="groups" className="navbar__groups">
                <h2 className="nav-groups">Groups</h2>
                <div className="navbar__count">
                    <span>{ groupCount }</span>
                </div>
            </NavLink>
        </nav>
    );
}

export default NavBar;