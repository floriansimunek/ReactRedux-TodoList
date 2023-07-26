/* IMPORTS */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleTask } from '@/store/todosSlice';

/* CSS */
import styles from './Task.module.scss';

export default function Task({ task }) {
    const dispatch = useDispatch();
    const [isDone, setIsDone] = useState(false);

    const handleChange = (id) => {
        dispatch(toggleTask(id));
        setIsDone((done) => !done);
    };

    const taskDone = isDone ? styles.taskDone : '';

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
