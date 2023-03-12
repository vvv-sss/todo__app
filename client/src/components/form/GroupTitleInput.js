// ___React___________________________________________________________________________________________________________
import { useLocation } from 'react-router-dom';
// ___Redux___________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';
// ___Assets__________________________________________________________________________________________________________
import EditIcon from '../../assets/icons/edit_icon.png';

const GroupTitleInput = ({ defaultValue, action }) => {

    const dispatch = useDispatch();

    const { pathname } = useLocation();

    return ( 
        <div className='group-title-input'>
            <img src={ EditIcon } alt='Edit icon with pencil' />
            <input 
                type='text' 
                placeholder='Name of group'
                defaultValue={ defaultValue } 
                onChange={ (e) => dispatch(action(e.target.value)) }
                required={ pathname.includes("/add-group") ? true : false }
            />
        </div>
    );
}

export default GroupTitleInput;