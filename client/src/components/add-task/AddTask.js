// ___React___________________________________________________________________________________________________________
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ___Redux___________________________________________________________________________________________________________
import { useSelector, useDispatch } from 'react-redux';
import { setUserIdForTask, setTaskTitle, setTaskDescription, setGroupId, setGroupTitle } from './addTaskSlice';
import { setSubtaskId } from '../add-subtask/addSubtaskSlice';
// ___Components______________________________________________________________________________________________________
import HideBtn from '../buttons/HideBtn';
import GroupSelect from '../form/GroupSelect';
import TaskTitleInput from '../form/TaskTitleInput';
import DescriptionInput from '../form/DescriptionInput';
import AddSubtask from '../add-subtask/AddSubtask';
import Subtasks from '../Subtasks';
import SubmitBtn from '../buttons/SubmitBtn';
// ___Helpers_________________________________________________________________________________________________________
import { generateSubtaskID } from '../../helpers/generateSubtaskID';
import { createTODO } from '../../helpers/createTODO';
import { getGroups } from '../../helpers/getGroups';

const AddTask = () => {

    const task = useSelector(state => state.addTask);
    const userId = useSelector(state => state.auth.id);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const id = generateSubtaskID(task.subtasks);
        dispatch(setSubtaskId(id));
    }, [task.subtasks]);

    useEffect(() => {
        dispatch(setUserIdForTask(userId));
        getGroups().then(groups => {
            const notSortedGroup = groups.find(group => group.groupTitle === "Not Sorted");
            dispatch(setGroupId(notSortedGroup.id));
            dispatch(setGroupTitle(notSortedGroup.groupTitle));
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTODO(task);
        navigate("/tasks");
    }

    return ( 
        <form 
            className="add-task"
            onSubmit={ (e) => handleSubmit(e) }
        >
            <div className='add-task__btn-container'>
                <HideBtn path="tasks" />
            </div>
            <GroupSelect mode="add" />
            <TaskTitleInput 
                defaultValue={ task.taskTitle } 
                action={ setTaskTitle }
            />
            <DescriptionInput 
                defaultValue={ task.description } 
                action={ setTaskDescription }
            />
            <AddSubtask />
            <Subtasks subtasks={ task.subtasks } />
            <SubmitBtn />
        </form>
    );
}

export default AddTask;