import { useReducer, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Bai3.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const initialState = {
    tasks: [],
};

const ADD_TASK = 'add_task';
const REMOVE_TASK = 'remove_task';

// Reducer xử lý các hành động
function reducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            return { tasks: [...state.tasks, action.payload] };
        case REMOVE_TASK:
            return {
                tasks: state.tasks.filter(
                    (_, index) => index !== action.payload,
                ),
            };
        default:
            return state;
    }
}

function Bai3() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef(null);

    const handleAddTask = () => {
        const task = inputRef.current.value.trim();
        if (task) {
            dispatch({ type: ADD_TASK, payload: task });
            inputRef.current.value = '';
        }
    };

    return (
        <div>
            <h1 className={cx('title')}>Quản lý công việc</h1>
            <input
                className={cx('input')}
                ref={inputRef}
                type="text"
                placeholder="Nhập công việc..."
            />
            <Button primary onClick={handleAddTask}>
                Thêm
            </Button>
            <ul className={cx('list-task')}>
                {state.tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() =>
                                dispatch({
                                    type: REMOVE_TASK,
                                    payload: index,
                                })
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bai3;
