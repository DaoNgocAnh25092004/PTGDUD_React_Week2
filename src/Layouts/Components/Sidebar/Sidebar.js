import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <Menu>
                <MenuItem title="Bài 1" to={config.routes.bai1} />
                <MenuItem title="Bài 2" to={config.routes.bai2} />
            </Menu>
        </div>
    );
}

export default Sidebar;
