import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';

import Image from '~/components/Image';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartPie,
    faCode,
    faLayerGroup,
    faMessage,
    faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <>
            <div className={cx('sidebar')}>
                <div className={cx('logo')}>
                    <Image src={images.logo7} alt="Logo" />
                </div>

                <Menu>
                    <MenuItem
                        title="Dashboard"
                        to={config.routes.dashboard}
                        icon={<FontAwesomeIcon icon={faLayerGroup} />}
                    />

                    <MenuItem
                        title="Project"
                        to={config.routes.project}
                        icon={<FontAwesomeIcon icon={faFolder} />}
                    />

                    <MenuItem
                        title="Teams"
                        to={config.routes.teams}
                        icon={<FontAwesomeIcon icon={faPeopleGroup} />}
                    />

                    <MenuItem
                        title="Analytics"
                        to={config.routes.analytics}
                        icon={<FontAwesomeIcon icon={faChartPie} />}
                    />

                    <MenuItem
                        title="Messages"
                        to={config.routes.messages}
                        icon={<FontAwesomeIcon icon={faMessage} />}
                    />

                    <MenuItem
                        title="Integrations"
                        to={config.routes.integrations}
                        icon={<FontAwesomeIcon icon={faCode} />}
                    />
                </Menu>

                <div className={cx('box-info')}>
                    <Image
                        src={images.group}
                        alt="Avatar"
                        className={cx('avatar')}
                    />

                    <button>Try now</button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
