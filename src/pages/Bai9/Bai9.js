import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Bai9.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Bai9() {
    const [money, setMoney] = useState(100);
    const [rate, setRate] = useState(10);
    const [goal, setGoal] = useState(200);
    const [results, setResults] = useState([]);

    const calculateInvestment = () => {
        let year = new Date().getFullYear();
        let currentMoney = money;
        let data = [];

        while (currentMoney < goal) {
            let endYearMoney = currentMoney * (1 + rate / 100);
            data.push({
                year,
                money: currentMoney.toFixed(0),
                rate,
                endYear: endYearMoney.toFixed(0),
            });
            currentMoney = endYearMoney;
            year++;
        }

        setResults(data);
    };

    return (
        <div className={cx('container')}>
            <h2>Investment Calculator</h2>
            <div className={cx('box-input')}>
                <label className={cx('label')}>Input Your Invest Money</label>
                <input
                    className={cx('input')}
                    type="number"
                    value={money}
                    onChange={(e) => setMoney(Number(e.target.value))}
                />
            </div>
            <div className={cx('box-input')}>
                <label className={cx('label')}>Input Rate</label>
                <input
                    className={cx('input')}
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                />
            </div>
            <div className={cx('box-input')}>
                <label className={cx('label')}>Input Your Goal</label>
                <input
                    className={cx('input')}
                    type="number"
                    value={goal}
                    onChange={(e) => setGoal(Number(e.target.value))}
                />
            </div>
            <Button
                primary
                className={cx('button')}
                onClick={calculateInvestment}
            >
                Calculate
            </Button>
            <table
                border="1"
                className={cx('table')}
                style={{ margin: '20px auto' }}
            >
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Money</th>
                        <th>Rate</th>
                        <th>End Year</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((row, index) => (
                        <tr key={index}>
                            <td>{row.year}</td>
                            <td>{row.money}</td>
                            <td>{row.rate}</td>
                            <td>{row.endYear}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Bai9;
