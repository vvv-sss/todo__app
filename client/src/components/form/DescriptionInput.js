// ___Redux___________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';

const DescriptionInput = ({ defaultValue, action }) => {

    const dispatch = useDispatch();

    return ( 
        <textarea 
            className="task-description-input"
            defaultValue={ defaultValue }
            placeholder='Additional description...'
            rows='5'
            onChange={ (e) => dispatch(action(e.target.value)) }
        >
        </textarea>
    );
}

export default DescriptionInput;