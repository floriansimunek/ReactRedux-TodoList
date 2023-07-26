/* IMPORTS */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '@/store/todosSlice';

/* CSS */
import styles from './TasksForm.module.scss';

export default function TasksForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(text));
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.tasksForm}>
            <input
                type="text"
                placeholder="Add a task"
                className={styles.tasksForm__input}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    );
}
