// ___React___________________________________________________________________________________________________________
import { useEffect, useState } from 'react';
// ___Redux___________________________________________________________________________________________________________
import { useSelector, useDispatch } from 'react-redux';
import { setGroupId, setGroupTitle } from '../add-task/addTaskSlice';
import { editGroupId, editGroupTitle } from '../edit-task/editTaskSlice';
// ___Helpers_________________________________________________________________________________________________________
import { getGroups } from '../../helpers/getGroups';

const GroupSelect = ({ mode }) => {

    const [groups, setGroups] = useState(null);
    
    const dispatch = useDispatch();

    useEffect( () => {
        getGroups().then(data => {
            const groups = data.filter(group => group.groupTitle !== "Not Sorted")
            setGroups(groups)
        });
    }, []);

    let actionForId;
    let actionForTitle;

    if (mode === "add") {
        actionForId = setGroupId;
        actionForTitle = setGroupTitle;
    } else {
        actionForId = editGroupId;
        actionForTitle = editGroupTitle;
    }

    return ( 
        <select className='group-select' >
            <option>Assign To Group</option>
            { groups && groups.length > 0 && 
                groups.map(group => {
                    return (
                        <option 
                            key={ group.id }
                            onClick={ () => {
                                dispatch(actionForId(group.id));
                                dispatch(actionForTitle(group.groupTitle));
                            }} 
                        >
                            { group.groupTitle }
                        </option>
                    )
                })
            }
            { groups && groups.length === 0 &&
                <option>You have no groups yet!</option>
            }
        </select>
    );
}

export default GroupSelect;