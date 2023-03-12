// ___Assets__________________________________________________________________________________________________________
import CheckIcon from '../../assets/icons/check_icon.png';

const SubmitBtn = () => {

    return ( 
        <button 
            type='submit' 
            className='submit-btn'
        >
            <img src={ CheckIcon } alt='Icon with check sign'/>
            <span className='submit-btn__text'>Submit</span>
        </button>
    );
}

export default SubmitBtn;