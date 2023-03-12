// ___Redux__________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';
import { initializeState } from '../tasks/tasksSlice';
// ___Assets_________________________________________________________________________________________________________
import CrossIcon from '../../assets/icons/cross_icon.png';
// ___Helpers________________________________________________________________________________________________________
import { deleteTODO } from '../../helpers/deleteTODO';
import { getTODOs } from '../../helpers/getTODOs';

const RemoveTaskBtn = ({ id }) => {

    const dispatch = useDispatch();

    const handleClick = async () => {
        await deleteTODO(id);
        getTODOs().then(data => dispatch(initializeState(data)));
    }

    return ( 
        <button 
            className='remove-task-btn'
            onClick={ handleClick }
        >
            <span>Remove</span>
            <img src={ CrossIcon } alt='Icon with cross sign'/>
        </button>
    );
}

export default RemoveTaskBtn;