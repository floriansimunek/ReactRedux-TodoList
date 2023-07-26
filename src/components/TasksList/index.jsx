/* IMPORTS */
import { useSelector } from 'react-redux';
import todosSlice from '@/store/todosSlice';
import Task from '@components/Task';

/* CSS */
import styles from './TasksList.module.scss';

export default function TasksList() {
    const tasks = useSelector((state) => state[todosSlice.name]);

    return (
        <ul className={styles.tasksList}>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}
