import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import styles from './EditTable.module.scss';
import Modal from '../Modal';
import Image from '../Image';
import images from '~/assets/images';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function EditTable({ isOpen, setIsOpen, rowData, setDataParent }) {
    const [data, setData] = useState({});
    const [editField, setEditField] = useState(null);
    const [editedData, setEditedData] = useState(data);

    const date = new Date(data.orderDate);
    const formattedDate = date.toLocaleDateString('en-GB').replace(/\//g, '/');

    useEffect(() => {
        setData(rowData);
    }, [rowData]);

    const handleBoxClick = (field) => {
        setEditField(field);
    };

    const handleChange = (e, field) => {
        setEditedData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleTempSave = (field) => {
        setData((prev) => {
            const newData = { ...prev, [field]: editedData[field] };
            setEditField('');
            return newData;
        });
    };

    const handleSave = async () => {
        try {
            const response = await fetch(
                `https://67eca9a6aa794fb3222e5fbe.mockapi.io/user/${data.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(editedData),
                },
            );

            if (!response.ok) {
                throw new Error('Failed to update data');
            }

            const updatedData = await response.json();

            toast.success('Cập nhật dữ liệu thành công');

            setData(updatedData);

            setDataParent((prevData) =>
                prevData.map((item) =>
                    item.id === updatedData.id ? updatedData : item,
                ),
            );

            setIsOpen(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Modal
            className={cx('box-edit')}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <h3>Chỉnh sửa thông tin</h3>

            {/* Avatar */}
            <div
                className={cx('box-info')}
                onClick={() => handleBoxClick('img')}
            >
                <div>
                    <p>Avatar</p>
                    {editField === 'img' ? (
                        <input
                            type="file"
                            className={cx('input-file')}
                            value={editedData.img}
                            onChange={(e) => handleChange(e, 'img')}
                        />
                    ) : (
                        <p className={cx('img')}>
                            <Image
                                src={data.img || images.noImage}
                                alt={data.name || 'no img'}
                            />
                        </p>
                    )}
                </div>
                {editField === 'img' ? (
                    <FontAwesomeIcon
                        className={cx('icon-save')}
                        icon={faPenToSquare}
                        onClick={() => handleTempSave('img')}
                    />
                ) : (
                    <FontAwesomeIcon icon={faPencil} />
                )}
            </div>

            {/* Customer Name */}
            <div
                className={cx('box-info')}
                onClick={() => handleBoxClick('name')}
            >
                <div>
                    <p>Customer Name</p>
                    {editField === 'name' ? (
                        <input
                            className={cx('input')}
                            type="text"
                            value={editedData.name}
                            onChange={(e) => handleChange(e, 'name')}
                        />
                    ) : (
                        <p>{data.name}</p>
                    )}
                </div>

                {editField === 'name' ? (
                    <FontAwesomeIcon
                        className={cx('icon-save')}
                        icon={faPenToSquare}
                        onClick={() => handleTempSave('name')}
                    />
                ) : (
                    <FontAwesomeIcon icon={faPencil} />
                )}
            </div>

            {/* Company */}
            <div
                className={cx('box-info')}
                onClick={() => handleBoxClick('company')}
            >
                <div>
                    <p>Company</p>
                    {editField === 'company' ? (
                        <input
                            className={cx('input')}
                            type="text"
                            value={editedData.company}
                            onChange={(e) => handleChange(e, 'company')}
                        />
                    ) : (
                        <p>{data.company}</p>
                    )}
                </div>
                {editField === 'company' ? (
                    <FontAwesomeIcon
                        className={cx('icon-save')}
                        icon={faPenToSquare}
                        onClick={() => handleTempSave('company')}
                    />
                ) : (
                    <FontAwesomeIcon icon={faPencil} />
                )}
            </div>

            {/* Order Value */}
            <div
                className={cx('box-info')}
                onClick={() => handleBoxClick('orderValue')}
            >
                <div>
                    <p>Order Value</p>
                    {editField === 'orderValue' ? (
                        <input
                            className={cx('input')}
                            type="number"
                            value={editedData.orderValue}
                            onChange={(e) => handleChange(e, 'orderValue')}
                        />
                    ) : (
                        <p>{data.orderValue}</p>
                    )}
                </div>

                {editField === 'orderValue' ? (
                    <FontAwesomeIcon
                        className={cx('icon-save')}
                        icon={faPenToSquare}
                        onClick={() => handleTempSave('orderValue')}
                    />
                ) : (
                    <FontAwesomeIcon icon={faPencil} />
                )}
            </div>

            {/* Order Date */}
            <div
                className={cx('box-info')}
                onClick={() => handleBoxClick('orderDate')}
            >
                <div>
                    <p>Order Date</p>
                    {editField === 'orderDate' ? (
                        <input
                            type="date"
                            value={editedData.orderDate}
                            onChange={(e) => handleChange(e, 'orderDate')}
                        />
                    ) : (
                        <p>{formattedDate}</p>
                    )}
                </div>
                {editField === 'orderDate' ? (
                    <FontAwesomeIcon
                        className={cx('icon-save')}
                        icon={faPenToSquare}
                        onClick={() => handleTempSave('orderDate')}
                    />
                ) : (
                    <FontAwesomeIcon icon={faPencil} />
                )}
            </div>

            {/* Status */}
            <div
                className={cx('box-info')}
                onClick={() => handleBoxClick('status')}
            >
                <div>
                    <p>Status</p>
                    {editField === 'status' ? (
                        <select
                            className={cx('select')}
                            value={editedData.status}
                            onChange={(e) => handleChange(e, 'status')}
                        >
                            <option value="New">New</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    ) : (
                        <p>{data.status}</p>
                    )}
                </div>
                {editField === 'status' ? (
                    <FontAwesomeIcon
                        className={cx('icon-save')}
                        icon={faPenToSquare}
                        onClick={() => handleTempSave('status')}
                    />
                ) : (
                    <FontAwesomeIcon icon={faPencil} />
                )}
            </div>

            <div className={cx('box-btn')}>
                <button
                    type="button"
                    className={cx('btn')}
                    onClick={handleSave}
                >
                    <strong>Chỉnh sửa</strong>
                    <div className={cx('container-stars')}>
                        <div className={cx('stars')}></div>
                    </div>

                    <div className={cx('glow')}>
                        <div className={cx('circle')}></div>
                        <div className={cx('circle')}></div>
                    </div>
                </button>
            </div>
        </Modal>
    );
}

export default EditTable;
