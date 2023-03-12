// ___React___________________________________________________________________________________________________________
import { Link } from 'react-router-dom';
// ___Assets__________________________________________________________________________________________________________
import ThreeDotsIcon from '../../assets/icons/three_dots_icon.png';

const EditBtn = ({ path }) => {

    return (
        <Link 
            to={ path }
            style={{ textDecoration: "none" }} 
        >
            <button className='edit-btn'>
                <span>Edit</span>
                <img src={ ThreeDotsIcon } alt='Icon with three dots sign' />
            </button>
        </Link>
    );
}

export default EditBtn;