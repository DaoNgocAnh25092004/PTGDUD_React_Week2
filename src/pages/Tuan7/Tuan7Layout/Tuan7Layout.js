import classNames from 'classnames/bind';
import styles from './Tuan7Layout.module.scss';
import Header from '../Components/Header';
import Sidebar from '../Components/SideBar';
import Content from '../Components/Content';
import Overview from '../Components/Overview/Overview';
import Footer from '../Components/Footer';

const cx = classNames.bind(styles);

function Tuan7Layout({ children }) {
    return (
        <>
            <div className={cx('container')}>
                <Header />
                <Sidebar />
                <Overview />
                <Content children={children} />
                <Footer />
            </div>
        </>
    );
}

export default Tuan7Layout;
