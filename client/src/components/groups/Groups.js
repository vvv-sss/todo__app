// ___React___________________________________________________________________________________________________________
import { useEffect } from "react";
// ___Redux___________________________________________________________________________________________________________
import { useDispatch, useSelector } from "react-redux";
import { initializeGroupState } from './groupsSlice';
// ___Components______________________________________________________________________________________________________
import GroupCard from "./GroupCard";
// ___Helpers_________________________________________________________________________________________________________
import { getGroups } from '../../helpers/getGroups';

const Groups = () => {

    const dispatch = useDispatch();

    const groups = useSelector(state => state.groups);

    useEffect( () => {
        getGroups().then(data => dispatch(initializeGroupState(data)));
    }, []);

    return ( 
        <section className="groups">
            { groups.length === 0 && <h4 className='no-groups'>You have no active groups yet!</h4> }
            { groups.length > 0 && (
                    <ul className="groups-list">
                        { groups.map( (group) => <GroupCard key={ group.id } group={ group } /> ) }
                    </ul> 
                ) 
            }
        </section>
    );
}

export default Groups;