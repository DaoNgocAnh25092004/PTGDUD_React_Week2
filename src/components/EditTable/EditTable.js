import classNames from 'classnames/bind';

import styles from './EditTable.module.scss';
import Modal from '../Modal';

const cx = classNames.bind(styles);

function EditTable({ isOpen, setIsOpen }) {
    return (
        <Modal
            className={cx('box-edit')}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <p>Hiển thị modal</p>
        </Modal>
    );
}

export default EditTable;
