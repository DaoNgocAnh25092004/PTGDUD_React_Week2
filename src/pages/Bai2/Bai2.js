import classNames from 'classnames/bind';
import { useState } from 'react';
import { evaluate } from 'mathjs';

import styles from './Bai2.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Bai2() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const handleSum = () => {
        try {
            const res = evaluate(value);
            setResult(res);
        } catch (error) {
            alert('Lỗi cú pháp!');
        }
    };

    return (
        <>
            <div>
                <input className={cx('input')} value={value} type="text" onChange={(e) => setValue(e.target.value)} />
                <Button onClick={handleSum} primary>
                    Tính tổng
                </Button>
            </div>
            <div>
                <p className={cx('result')}>Kết quả của biểu thức tổng là: {result}</p>
            </div>
        </>
    );
}

export default Bai2;
