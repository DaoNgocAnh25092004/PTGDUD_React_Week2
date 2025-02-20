import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Bai3.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDivide, faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Bai3() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [selectedValue, setSelectedValue] = useState('option1');

    const [result, setResult] = useState('');

    const handleCalculate = () => {
        const number1 = parseFloat(value1);
        const number2 = parseFloat(value2);

        switch (selectedValue) {
            case 'option1':
                setResult(number1 + number2);
                break;
            case 'option2':
                setResult(number1 - number2);
                break;
            case 'option3':
                setResult(number1 * number2);
                break;
            case 'option4':
                setResult(number1 / number2);
                break;
            default:
                break;
        }
    };

    const handleChangeRadio = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <>
            <div>
                <input className={cx('input')} value={value1} type="text" onChange={(e) => setValue1(e.target.value)} />
                <input className={cx('input')} value={value2} type="text" onChange={(e) => setValue2(e.target.value)} />
                <Button onClick={handleCalculate} primary>
                    Tính toán
                </Button>
                <br />
                <div className={cx('box-select')}>
                    <div>
                        <input type="radio" value="option1" checked={selectedValue === 'option1'} onChange={handleChangeRadio} />
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div>
                        <input type="radio" value="option2" checked={selectedValue === 'option2'} onChange={handleChangeRadio} />
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <div>
                        <input type="radio" value="option3" checked={selectedValue === 'option3'} onChange={handleChangeRadio} />
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div>
                        <input type="radio" value="option4" checked={selectedValue === 'option4'} onChange={handleChangeRadio} />
                        <FontAwesomeIcon icon={faDivide} />
                    </div>
                </div>
            </div>
            <div>
                <p className={cx('result')}>Kết quả của biểu thức tổng là: {result}</p>
            </div>
        </>
    );
}

export default Bai3;
