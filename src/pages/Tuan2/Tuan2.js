import classNames from 'classnames/bind';
import styles from './Tuan2.module.scss';

const cx = classNames.bind(styles);

const cards = [
    { index: 0, color: '142, 249, 252' },
    { index: 1, color: '142, 252, 204' },
    { index: 2, color: '142, 252, 157' },
    { index: 3, color: '215, 252, 142' },
    { index: 4, color: '252, 252, 142' },
    { index: 5, color: '252, 208, 142' },
    { index: 6, color: '252, 142, 142' },
    { index: 7, color: '252, 142, 239' },
    { index: 8, color: '204, 142, 252' },
    { index: 9, color: '142, 202, 252' },
];

function Tuan2() {
    return (
        <div className={cx('container')}>
            <h2 className={cx('h2-animation')}>
                Chọn một trong những bài thanh bên phải?
            </h2>
            <div className={cx('wrapper')}>
                <div
                    className={cx('inner')}
                    style={{ '--quantity': cards.length }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.index}
                            className={cx('card')}
                            style={{
                                '--index': card.index,
                                '--color-card': card.color,
                            }}
                        >
                            <div className={cx('img')}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tuan2;
