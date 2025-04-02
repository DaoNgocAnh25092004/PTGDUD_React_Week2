import classNames from 'classnames/bind';

import styles from './Tuan7.module.scss';
import Header from './Component/Header';
import Content from './Component/Content';

const cx = classNames.bind(styles);

function Tuan7() {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('menu')}></div>
            <Content />
            <footer className={cx('footer')}></footer>
        </div>
    );
}

export default Tuan7;
