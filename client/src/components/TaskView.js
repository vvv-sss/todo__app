// ___React___________________________________________________________________________________________________________
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// ___Redux___________________________________________________________________________________________________________
import { useSelector, useDispatch } from 'react-redux';
import { completeTask } from './tasks/tasksSlice';
import { setTaskStateForEdit } from './edit-task/editTaskSlice';
// ___Components______________________________________________________________________________________________________
import HideBtn from './buttons/HideBtn';
import EditBtn from './buttons/EditBtn';
import Subtasks from './Subtasks';
// ___Helpers_________________________________________________________________________________________________________
import { retrieveTODO } from "../helpers/retrieveTODO";
import { updateTODO } from "../helpers/updateTODO";
import { formatDate } from "../helpers/formatDate";
// ___Assets__________________________________________________________________________________________________________
import CheckIcon from '../assets/icons/check_icon.png';

const TaskView = () => {

    const task = useSelector(state => state.editTask);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const { id } = useParams();

    useEffect(() => {
        retrieveTODO(id).then(data => dispatch(setTaskStateForEdit(data)));
    }, []); 

    const handleSetDoneClick = async () => {
        const body = { "isCompleted": true };
        dispatch(completeTask(task.id));
        await updateTODO(body, id);
        navigate("/tasks");
    }

    return task.id && ( 
        <section className="task-view">

            <div className='task-view__btn-container'>
                <HideBtn />
                <EditBtn path={ `/tasks/${task.id.toString()}/edit-task` } />
            </div>

            <h3>{ task.groupTitle }</h3>
            <h4>{ task.taskTitle }</h4>

            { task.taskDescription && <span className="task-view__span">Additional Description</span> }
            <p>{ task.taskDescription }</p> 

            <Subtasks subtasks={ task.subtasks } />

            <span className="task-view__span">Date Created</span>
            <p>{ formatDate(task.createdAt) }</p>

            <button 
                className='task-view__set-done-btn'
                onClick={ handleSetDoneClick }
            >
                <img src={ CheckIcon } alt='Icon with check sign'/>
                <span className='task-view__set-done-btn__text'>Set As Done</span>
            </button>

        </section>
    );
}

export default TaskView;