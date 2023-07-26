/* DEPENDENCIES */
import { useSelector } from 'react-redux';
import todosSlice from '@/store/todosSlice';

/* CSS */
import styles from './TasksHeader.module.scss';

export default function TasksHeader() {
    const tasks = useSelector((state) => state[todosSlice.name]);
    const undoneTasks = tasks.filter((t) => t.done === false);

    return (
        <header className={styles.tasksHeader}>
            <h1>React Redux - Todo List</h1>
            <p>Undone tasks : {undoneTasks.length}</p>
        </header>
    );
}
