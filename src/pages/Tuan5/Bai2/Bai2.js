import { useReducer } from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';

import styles from './Bai2.module.scss';

const cx = classNames.bind(styles);

const initialState = 0;

const INCREASE = 'increase';
const DECREASE = 'decrease';

function reducer(state, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}

function Bai2() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className={cx('container')}>
            <div>
                <h2>Giá trị: {count}</h2>
                <Button primary onClick={() => dispatch({ type: INCREASE })}>
                    Tăng
                </Button>
                <Button primary onClick={() => dispatch({ type: DECREASE })}>
                    Giảm
                </Button>
            </div>
        </div>
    );
}

export default Bai2;
