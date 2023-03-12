// ___React___________________________________________________________________________________________________________
import { useEffect, useRef, useState } from 'react';
// ___Redux___________________________________________________________________________________________________________
import { useSelector, useDispatch } from 'react-redux';
import { initializeState } from './tasksSlice';
import { initializeGroupState } from '../groups/groupsSlice';
// ___Components______________________________________________________________________________________________________
import TaskCard from './TaskCard';
// ___Helpers_________________________________________________________________________________________________________
import { getTODOs } from '../../helpers/getTODOs';
import { getGroups } from '../../helpers/getGroups';
import { createGroup } from '../../helpers/createGroup';

const Tasks = () => {

    const dispatch = useDispatch();

    const [activeTasksDisplayed, setActiveTasksDisplayed] = useState(true);

    const activeTasks = useSelector(state => state.tasks.filter(task => task.isCompleted ===  false));
    const completedTasks = useSelector(state => state.tasks.filter(task => task.isCompleted ===  true));
    const userId = useSelector(state => state.auth.id);

    useEffect( () => {
        getTODOs(userId).then(data => dispatch(initializeState(data)));
    }, []);

    // Creating of initial Not Sorted group for task which will be not assigned to any group
    const [isInitialGroupCreated, setIsInitialGroupCreated] = useState(true);

    useEffect( () => {
        getGroups().then(groups => {
            const notSortedGroup = groups.find(group => group.groupTitle === "Not Sorted");
            if (notSortedGroup === undefined) { setIsInitialGroupCreated(false) }
            dispatch(initializeGroupState(groups));
        });
    }, []);

    useEffect(() => {
        const body = {
            "groupTitle": "Not Sorted",
            "groupDescription": "This group contains all tasks which are not assigned to any group"
        }
        if (!isInitialGroupCreated) {
            createGroup(body).then(() => setIsInitialGroupCreated(true));
        }
    }, [isInitialGroupCreated]);

    const activeTasksBtn = useRef();
    const doneTasksBtn = useRef();

    const handleBtnClick = (e) => {
        activeTasksBtn.current.classList.remove("tasks-list__btn-active");
        doneTasksBtn.current.classList.remove("tasks-list__btn-active");
        e.target.classList.add("tasks-list__btn-active");
        e.target.innerText === "Active" ? setActiveTasksDisplayed(true) : setActiveTasksDisplayed(false);
    }

    return (
        <section className='tasks'>
            <div className='tasks-list__btn-container'>
                <button 
                    onClick={ (e) => handleBtnClick(e) } 
                    className="tasks-list__btn-active" 
                    ref={ activeTasksBtn }
                >
                    Active
                </button>
                <button 
                    onClick={ (e) => handleBtnClick(e) } 
                    ref={ doneTasksBtn } 
                >
                    Done
                </button>
            </div>
            { activeTasks.length === 0 && activeTasksDisplayed && 
                <h4 className='no-tasks'>You have no active tasks yet!</h4> 
            }
            <ul className="tasks-list">
                { activeTasksDisplayed ? activeTasks.map( (task) => <TaskCard key={ task.id } task={ task } /> )
                    : completedTasks.map( (task) => <TaskCard key={ task.id } task={ task } /> )
                }
            </ul>
        </section>
    )
}

export default Tasks;