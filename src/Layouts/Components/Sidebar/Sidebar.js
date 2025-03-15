import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar({ week }) {
    const renderMenuItems = () => {
        switch (week) {
            case 2:
                return (
                    <>
                        <MenuItem title="Bài 1" to={config.routes.t2ex1} />
                        <MenuItem title="Bài 2" to={config.routes.t2ex2} />
                        <MenuItem title="Bài 3" to={config.routes.t2ex3} />
                        <MenuItem title="Bài 4" to={config.routes.t2ex4} />
                        <MenuItem title="Bài 5" to={config.routes.t2ex5} />
                        <MenuItem title="Bài 6" to={config.routes.t2ex6} />
                        <MenuItem title="Bài 7" to={config.routes.t2ex7} />
                    </>
                );
            case 3:
                return (
                    <>
                        <MenuItem title="Bài 1" to={config.routes.t3ex1} />
                        <MenuItem title="Bài 2" to={config.routes.t3ex2} />
                    </>
                );
            case 5:
                return (
                    <>
                        <MenuItem title="Bài 1" to={config.routes.t5ex1} />
                        <MenuItem title="Bài 2" to={config.routes.t5ex2} />
                        <MenuItem title="Bài 3" to={config.routes.t5ex3} />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={cx('sidebar')}>
            <Menu>{renderMenuItems()}</Menu>
        </div>
    );
}

Sidebar.propTypes = {
    week: PropTypes.number.isRequired,
};

export default Sidebar;
