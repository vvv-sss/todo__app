// ___React___________________________________________________________________________________________________________
import { Link } from 'react-router-dom';
// ___Assets__________________________________________________________________________________________________________
import ArrowDownIcon from '../../assets/icons/arrow_down_icon.png';

const ShowBtn = ({ path, id }) => {

    return ( 
        <Link to={ `/${path}/${id.toString()}` } style={{ textDecoration: "none" }} >
            <button className='show-btn' >
                <img src={ ArrowDownIcon } alt='Icon with arrow down'/>
                <span>Show</span>
            </button>
        </Link>
    );
}

export default ShowBtn;