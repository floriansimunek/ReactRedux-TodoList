/* IMPORTS */
import { useSelector } from 'react-redux';
import todosSlice from '@/store/todosSlice';
import Task from '@components/Task';

/* CSS */
import styles from './TasksList.module.scss';

export default function TasksList() {
    const tasks = useSelector((state) => state[todosSlice.name]);

    return (
        <>
            <ul className={styles.tasksList}>
                <h1>Undone Tasks</h1>
                {tasks.map((task) => (
                    <li key={task.id}>{!task.done && <Task task={task} />}</li>
                ))}
            </ul>
            <ul className={styles.tasksList}>
                <h1>Done Tasks</h1>
                {tasks.map((task) => (
                    <li key={task.id}>{task.done && <Task task={task} />}</li>
                ))}
            </ul>
        </>
    );
}
