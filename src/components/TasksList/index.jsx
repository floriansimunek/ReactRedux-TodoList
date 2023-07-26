/* IMPORTS */
import { useSelector } from 'react-redux';
import todosSlice from '@/store/todosSlice';

/* CSS */
import styles from './TasksList.module.scss';

export default function TasksList() {
    const tasks = useSelector((state) => state[todosSlice.name]);

    return (
        <ul className={styles.tasksList}>
            {tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
            ))}
        </ul>
    );
}
