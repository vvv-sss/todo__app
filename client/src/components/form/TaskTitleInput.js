// ___Redux___________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';
// ___Assets__________________________________________________________________________________________________________
import EditIcon from '../../assets/icons/edit_icon.png';

const TaskTitleInput = ({ defaultValue, action }) => {

    const dispatch = useDispatch();

    return ( 
        <div className='task-title-input'>
            <img src={ EditIcon } alt='Edit icon with pencil' id='edit-icon' />
            <input 
                type='text' 
                placeholder='Name of task'
                defaultValue={ defaultValue }  
                onChange={ (e) => dispatch(action(e.target.value)) }
                required
            />
        </div>
    );
}

export default TaskTitleInput;