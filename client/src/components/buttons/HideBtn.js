// ___React___________________________________________________________________________________________________________
import { useNavigate } from 'react-router-dom';
// ___Assets__________________________________________________________________________________________________________
import ArrowUpIcon from '../../assets/icons/arrow_up_icon.png';

const HideBtn = () => {

    const navigate = useNavigate();

    return ( 
        <button type='button' className='hide-btn' onClick={ () => navigate(-1) }>
            <img src={ ArrowUpIcon } alt='Icon with arrow up'/>
            <span>Hide</span>
        </button>
    );
}

export default HideBtn;