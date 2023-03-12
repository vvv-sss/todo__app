// ___Components______________________________________________________________________________________________________
import RemoveBtn from "../buttons/RemoveBtn";

const RemoveTask = ({ state, action }) => {

    return ( 
        <div className="remove-task"> 
            <RemoveBtn text="Remove Task" action={ action } />
            { state &&
                <>
                    <span className="remove-task__msg">Do you really want to remove this task?</span>
                    <div className="remove-task__btn-container">
                        <button type="button" onClick={ () => action(false) }>No</button>
                        <button type="submit">Yes</button>
                    </div>
                </>
            }
        </div>
    );
}

export default RemoveTask;