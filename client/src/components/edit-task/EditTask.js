// ___React___________________________________________________________________________________________________________
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ___Redux___________________________________________________________________________________________________________
import { useSelector, useDispatch } from 'react-redux';
import { editTaskTitle, editTaskDescription } from './editTaskSlice';
import { setInitialSubtaskState, setSubtaskId } from '../add-subtask/addSubtaskSlice';
import { removeTask } from '../tasks/tasksSlice';
// ___Components______________________________________________________________________________________________________
import HideBtn from '../buttons/HideBtn';
import GroupSelect from '../form/GroupSelect';
import TaskTitleInput from '../form/TaskTitleInput';
import DescriptionInput from '../form/DescriptionInput';
import AddSubtask from '../add-subtask/AddSubtask';
import Subtasks from '../Subtasks';
import RemoveTask from '../form/RemoveTask';
import SubmitBtn from '../buttons/SubmitBtn';
// ___Helpers_________________________________________________________________________________________________________
import { generateSubtaskID } from '../../helpers/generateSubtaskID';
import { updateTODO } from '../../helpers/updateTODO';
import { deleteTODO } from '../../helpers/deleteTODO';

const EditTask = () => {

    const task = useSelector(state => state.editTask);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [removeClicked, setRemoveClicked] = useState(false);

    useEffect(() => {
        if (task.subtasks) {
            dispatch(setInitialSubtaskState());
            const id = generateSubtaskID(task.subtasks);
            dispatch(setSubtaskId(id));
        }
    }, [task.subtasks]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!removeClicked) {
            await updateTODO(task, task.id);
            navigate(-1);
        } else {
            dispatch(removeTask(task.id));
            await deleteTODO(task.id);
            navigate(-2);
        }
    }

    return ( 
        <form className='edit-task' onSubmit={ (e) => handleSubmit(e) }>
            <div className='edit-task__btn-container'>
                <HideBtn />
            </div>
            <GroupSelect mode="edit" />
            <TaskTitleInput 
                defaultValue={ task.taskTitle }
                action={ editTaskTitle } 
            />
            <DescriptionInput 
                defaultValue={ task.taskDescription } 
                action={ editTaskDescription }
            />
            <AddSubtask />
            { task.subtasks && <Subtasks subtasks={ task.subtasks } /> }
            <RemoveTask state={ removeClicked } action={ setRemoveClicked } />
            { !removeClicked && <SubmitBtn /> }
        </form>
    );
}

export default EditTask;