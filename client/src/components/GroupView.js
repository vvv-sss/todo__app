// ___React___________________________________________________________________________________________________________
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// ___Redux___________________________________________________________________________________________________________
import { useDispatch, useSelector } from "react-redux";
import { setGroupStateForEdit } from './edit-group/editGroupSlice';
// ___Components______________________________________________________________________________________________________
import HideBtn from "./buttons/HideBtn";
import EditBtn from "./buttons/EditBtn";
import TaskCard from "./tasks/TaskCard";
// ___Helpers_________________________________________________________________________________________________________
import { retrieveGroup } from "../helpers/retrieveGroup";

const GroupView = () => {

    const group = useSelector(state => state.editGroup);
    const activeTasks = useSelector(state => state.tasks.filter(task => {
        return task.groupId === group.id && task.isCompleted === false;
    }));
    
    const dispatch = useDispatch();
    
    const { id } = useParams();

    useEffect(() => {
        retrieveGroup(id).then(data => {
            dispatch(setGroupStateForEdit(data));
        });
    }, []);

    return group.id && ( 
        <section className="group-view">
            <div className="group-view-container">
                <div className="group-view-container__btns">
                    <HideBtn path="groups" />
                    <EditBtn path={ `/groups/${group.id.toString()}/edit-group` } />
                </div>
                <h3>{ group.groupTitle }</h3>
                <p>{ group.groupDescription }</p>
            </div>
            <ul className="tasks-list">
                {
                    activeTasks.map( (task) => <TaskCard key={ task.id } task={ task } /> )
                }
            </ul>
        </section>
    );
}

export default GroupView;