// ___Redux___________________________________________________________________________________________________________
import { useSelector } from 'react-redux';
// ___Components______________________________________________________________________________________________________
import ShowBtn from '../buttons/ShowBtn';

const GroupCard = ({ group }) => {

    const activeTasks = useSelector(state => {
        return state.tasks.filter(task => task.groupId === group.id && task.isCompleted === false);
    });

    return ( 
        <li key={ group.id } className='group-card'>
            <div className='group-card__btn-container'>
                <ShowBtn path="groups" id={ group.id } />
            </div>
            <p>{ activeTasks.length } Active Tasks</p>
            <h3>{ group.groupTitle }</h3>
        </li>
    );
}

export default GroupCard;