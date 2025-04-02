import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <h2>Các tuần thực hành</h2>
            <Menu>
                <MenuItem title="Tuần 2" to={config.routes.week2} />
                <MenuItem title="Tuần 3" to={config.routes.week3} />
                <MenuItem title="Tuần 4" to={config.routes.week4} />
                <MenuItem title="Tuần 5" to={config.routes.week5} />
                <MenuItem title="Tuần 6" to={config.routes.week6} />
                <MenuItem title="Tuần 7" to={config.routes.dashboard} />
            </Menu>
        </div>
    );
}

export default Home;
