// React______________________________________________________________________________________________________________
import { useEffect, useState } from 'react';
// ___Redux___________________________________________________________________________________________________________
import { useSelector } from 'react-redux';
// ___Helpers_________________________________________________________________________________________________________
import { getTimeOfDay } from '../../helpers/getTimeOfDay';
import { getDayOfWeek } from '../../helpers/getDayOfWeek';
import { getDate } from '../../helpers/getDate';

const Greeting = () => {

    const tasks = useSelector(state => state.tasks);
    const activeTasks = useSelector(state => state.tasks.filter(task => task.isCompleted ===  false));

    const [timeOfDay, setTimeOfDay] = useState(null);
    const [dayOfWeek, setDayOfWeek] = useState(null);
    const [date, setDate] = useState(null);
    const [progress, setProgress] = useState('100%')

    // Setting greeting, day of the week and date for header
    useEffect(() => {
        setTimeOfDay(getTimeOfDay());
        setDayOfWeek(getDayOfWeek());
        setDate(getDate());
    }, [])

    // Calculation of percentage of completed tasks
    useEffect(() => {
        if (activeTasks.length > 0) {
            const num = Math.round((1 - activeTasks.length / tasks.length) * 100);
            setProgress(`${num}%`);
        }
    }, [tasks])

    return ( 
        <section className='greeting'>
            <h1>Good { timeOfDay }</h1>
            <div className='greeting__info'>
                <div className='greeting__info__date'>
                    <h5>Today's { dayOfWeek }</h5>
                    <span>{ date }</span>
                </div>
                <div className='greeting__info__done-tasks'>
                    <h5>{ progress } Done</h5>
                    <span>Completed tasks</span>
                </div>
            </div>
        </section>
    );
}

export default Greeting;