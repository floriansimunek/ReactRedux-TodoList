/* CSS */
import styles from './Task.module.scss';

export default function Task({ task }) {
    return <p className={styles.task}>{task.text}</p>;
}
