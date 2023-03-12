// ___Components______________________________________________________________________________________________________
import ShowBtn from '../buttons/ShowBtn';
import CompleteBtn from '../buttons/CompleteBtn';
import RemoveTaskBtn from '../buttons/removeTaskBtn';

const TaskCard = ({ task }) => {

    return ( 
        <li key={ task.id } className='task-card' >
            <div className='task-card__btn-container'>
                <ShowBtn path="tasks" id={ task.id } />
                { task.isCompleted ? <RemoveTaskBtn id={ task.id } /> : <CompleteBtn id={ task.id } /> }
            </div>
            <h3>{ task.groupTitle }</h3>
            <h4>{ task.taskTitle }</h4>
        </li>
    );
}

export default TaskCard;