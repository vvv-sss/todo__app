// ___Components______________________________________________________________________________________________________
import RemoveBtn from "../buttons/RemoveBtn";

const RemoveGroup = ({ state, action }) => {
    return ( 
        <div className="remove-group">
            <RemoveBtn text="Remove Group" action={ action } />
            { state && 
                <>
                    <span className="remove-group__msg">You have 8 active tasks in this group.</span> 
                    <span className="remove-group__msg">Do you really want to remove the group and its active tasks?</span>
                    <div className="remove-group__btn-container">
                        <button type="button" onClick={ () => action(false) }>No</button>
                        <button type="submit">Yes</button>
                    </div>
                </>
            }
        </div>
    );
}

export default RemoveGroup;