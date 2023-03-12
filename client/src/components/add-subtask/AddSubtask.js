// ___React___________________________________________________________________________________________________________
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// ___Redux___________________________________________________________________________________________________________
import { useDispatch, useSelector } from 'react-redux';
import { setSubtaskTitle } from './addSubtaskSlice';
import { addSubtaskFromAddForm } from '../add-task/addTaskSlice';
import { addSubtaskFromEditForm } from '../edit-task/editTaskSlice';
// ___Assets__________________________________________________________________________________________________________
import CheckboxIcon from '../../assets/icons/checkbox_icon.png';

const AddSubtask = () => {

    const [addCheckbox, setAddCheckbox] = useState(false);

    const { pathname } = useLocation();
    
    const subtask = useSelector(state => state.addSubtask);
    
    const dispatch = useDispatch();

    const handleAddSubtaskClick = () => {
        pathname.includes("/add-task") && dispatch(addSubtaskFromAddForm(subtask));
        pathname.includes("/edit-task") && dispatch(addSubtaskFromEditForm(subtask));
        setAddCheckbox(false);
    }

    return ( 
        <div className="add-subtask">
            <button 
                type='button' 
                className='add-checkbox-btn' 
                onClick={ () => setAddCheckbox(true) }
            >
                Add Checkbox
            </button>
            { addCheckbox &&
                <div className='add-checkbox-title-container'>
                    <input 
                        type='text' 
                        placeholder='Subtask Title' 
                        onChange={ (e) => dispatch(setSubtaskTitle(e.target.value)) }
                    />
                    <button 
                        type='button' 
                        className='add-checkbox-title-btn'
                        onClick={ () =>  handleAddSubtaskClick() }
                    >
                        <img src={ CheckboxIcon } alt="Icon with check sign" />
                    </button>
                </div>
            }
        </div>
    );
}

export default AddSubtask;