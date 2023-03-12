// ___Redux___________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';
import { completeTask } from '../tasks/tasksSlice';
import { removeTodoFromGroupView } from '../edit-group/editGroupSlice';
// ___Assets__________________________________________________________________________________________________________
import CheckIcon from '../../assets/icons/check_icon.png';
// ___Helpers_________________________________________________________________________________________________________
import { updateTODO } from '../../helpers/updateTODO';

const CompleteBtn = ({ id }) => {

    const dispatch = useDispatch();
    
    const handleClick = () => {
        const body = { "isCompleted": true };
        dispatch(completeTask(id));
        dispatch(removeTodoFromGroupView(id));
        updateTODO(body, id);
    }

    return ( 
        <button 
            className='complete-btn'
            onClick={ handleClick }
        >
            <span>Complete</span>
            <img src={ CheckIcon } alt='Icon with check sign'/>
        </button>
    );
}

export default CompleteBtn;