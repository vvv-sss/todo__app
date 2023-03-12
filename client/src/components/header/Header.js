// ___React___________________________________________________________________________________________________________
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
// ___Redux___________________________________________________________________________________________________________
import { useDispatch } from "react-redux";
import { setInitialTaskState } from '../add-task/addTaskSlice';
import { setInitialSubtaskState } from '../add-subtask/addSubtaskSlice';
import { setInitialGroupState } from '../add-group/addGroupSlice';
// ___Components______________________________________________________________________________________________________
import UserInfo from './UserInfo';
import Greeting from './Greeting';
import NavBar from './NavBar';

const Header = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { pathname } = useLocation();
    
    useEffect(() => {
        pathname === "/" && navigate("/tasks");
    }, []);

    return ( 
        <>
            <header>
                <UserInfo />
                <Greeting />
                <NavBar />
            </header>
            <main>
                { pathname === "/tasks" &&
                    <Link to="tasks/add-task" style={{ textDecoration: "none" }}>
                        <button 
                            className="add-btn"
                            onClick={ () => {
                                dispatch(setInitialTaskState());
                                dispatch(setInitialSubtaskState());
                            }}
                        >
                            Add Task
                        </button>
                    </Link>
                }
                { pathname === "/groups" &&
                    <Link to="groups/add-group" style={{ textDecoration: "none" }}>
                        <button 
                            className="add-btn"
                            onClick={ () => dispatch(setInitialGroupState()) }
                        >
                            Add Group
                        </button>
                    </Link>
                }
                <Outlet />
            </main>
        </>
        
    );
}

export default Header;