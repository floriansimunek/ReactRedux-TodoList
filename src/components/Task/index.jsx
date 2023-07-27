/* IMPORTS */
import { useDispatch } from 'react-redux';
import { toggleTask } from '@/store/todosSlice';

/* CSS */
import styles from './Task.module.scss';

export default function Task({ task }) {
    const dispatch = useDispatch();

    const handleChange = (id) => {
        dispatch(toggleTask(id));
    };

    const taskDone = task.done ?? styles.taskDone;

    return (
        <div className={`${styles.task} ${taskDone}`}>
            <div className={styles.task__left}>
                <input
                    type="checkbox"
                    name="toggleTask"
                    id="toggleTask"
                    checked={task.done}
                    onChange={() => handleChange(task.id)}
                />
                <p>{task.text}</p>
            </div>
        </div>
    );
}
