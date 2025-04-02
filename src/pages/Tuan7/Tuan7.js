import classNames from 'classnames/bind';

import styles from './Tuan7.module.scss';

const cx = classNames.bind(styles);

function Tuan7() {
    return (
        <div className={cx('container')}>
            <header className={cx('header')}></header>
            <div className={cx('menu')}></div>
            <div className={cx('content')}></div>
            <footer className={cx('footer')}></footer>
        </div>
    );
}

export default Tuan7;
