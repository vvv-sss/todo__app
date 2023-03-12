// ___React___________________________________________________________________________________________________________
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// ___Redux___________________________________________________________________________________________________________
import { useDispatch, useSelector } from 'react-redux';
import { removeSubtaskFromAddForm } from './add-task/addTaskSlice';
import { removeSubtaskFromEditForm, updateSubtask } from './edit-task/editTaskSlice';
// ___Helpers_________________________________________________________________________________________________________
import { updateTODO } from "../helpers/updateTODO";

const Subtasks = ({ subtasks }) => {

    const [isCheckboxChanged, setIsCheckboxChanged] = useState(false);

    const subtasksToUpdate = useSelector(state => state.editTask.subtasks);
    
    const taskId = useSelector(state => state.editTask.id);

    const dispatch = useDispatch();

    const { pathname } = useLocation();

    const handleRemoveSubtaskClick = (id) => {
        pathname.includes("/add-task") && dispatch(removeSubtaskFromAddForm(id));
        pathname.includes("/edit-task") && dispatch(removeSubtaskFromEditForm(id));
    }

    const handleChange = (id) => {
        dispatch(updateSubtask(id));
        setIsCheckboxChanged(true);
    }

    useEffect(() => {
        const body = { "subtasks": subtasksToUpdate }
        isCheckboxChanged && updateTODO(body, taskId).then(() => setIsCheckboxChanged(false));
    }, [isCheckboxChanged]);
    
    return ( 
        <ul className="subtasks">
            { subtasks.length > 0 && 
                <span className="subtasks__span">Associated Subtasks</span>
            }
            { subtasks.map((subtask) => {
                return (
                    <li key={ subtask.id } >
                        <label className="checkbox">
                            <input 
                                type="checkbox" 
                                defaultChecked={ subtask.isChecked } 
                                onChange={ () => handleChange(subtask.id) }
                            />
                            { subtask.subtaskTitle }
                            { pathname.includes("/add-task") | pathname.includes("/edit-task") &&
                                <button 
                                    type='button' 
                                    className="remove-subtask"
                                    onClick={ () => handleRemoveSubtaskClick(subtask.id) }
                                >
                                    Remove
                                </button>
                            }
                        </label>
                    </li>
                    )
                }) 
            }
        </ul>
    );
}

export default Subtasks;