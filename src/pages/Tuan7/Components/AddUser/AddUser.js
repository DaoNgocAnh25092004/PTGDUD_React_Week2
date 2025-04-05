import classNames from 'classnames/bind';

import styles from './AddUser.module.scss';
import Modal from '~/components/Modal';
import BoxInput from '~/components/BoxInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHashtag,
    faImage,
    faSignature,
} from '@fortawesome/free-solid-svg-icons';
import { useMemo, useRef, useState } from 'react';
import Image from '~/components/Image';
import { toast } from 'react-toastify';
import uploadToCloudinary from '~/Provider/UploadToCloudinary';

const cx = classNames.bind(styles);

function AddUser({ isOpen, setIsOpen, setDataParent }) {
    const [forms, setForms] = useState({
        name: '',
        company: '',
        avatar: '',
        orderValue: '',
        orderDate: '',
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);
    const avatarRef = useRef();

    const statusArray = ['In-progress', 'New', 'Completed'];

    const handleChangeInput = (e) => {
        const { value, name, type, files } = e.target;

        if (type === 'file' && files.length > 0) {
            const inputFile = files[0];
            setErrors((prev) => ({
                ...prev,
                [name]: validateInput(name, inputFile),
            }));

            inputFile.preview = URL.createObjectURL(inputFile);

            setForms((prev) => ({
                ...prev,
                [name]: inputFile,
            }));
        } else {
            setForms((prev) => ({
                ...prev,
                [name]: value.trimStart(),
            }));

            setErrors((prev) => ({
                ...prev,
                [name]: validateInput(name, value),
            }));
        }
    };

    const validateInput = (name, value) => {
        const rule = validationValues[name];

        if (!rule) return '';

        if (rule.required && !value) {
            return rule.emptyMessage;
        }

        if (rule.regex && !rule.regex.test(value)) {
            return rule.errorMessage;
        }

        // Check file type and size (Only input type is file)
        if (value instanceof File) {
            if (rule.fileType && !rule.fileType.includes(value.type)) {
                return 'Invalid file format.';
            }
            if (rule.maxSize && value.size > rule.maxSize) {
                return `File too large. Limit ${
                    rule.maxSize / (1024 * 1024)
                }MB.`;
            }
        }

        // Date validation
        if (rule.validateDateRange) {
            const inputDate = new Date(value);
            const minDate = new Date('1900-01-01');
            const maxDate = new Date();

            if (inputDate < minDate || inputDate > maxDate) {
                return 'Order Date must be between 01/01/1900 and today!';
            }
        }

        return '';
    };

    const validationValues = useMemo(
        () => ({
            name: {
                required: true,
                emptyMessage: 'Customer Name cannot be left blank!',
            },

            company: {
                required: true,
                emptyMessage: 'Company Name cannot be left blank!',
            },

            orderValue: {
                required: true,
                emptyMessage: 'Order Value cannot be left blank!',

                regex: /^[0-9]+$/,
                errorMessage: 'Order Value must be a number!',
            },

            orderDate: {
                required: true,
                emptyMessage: 'Order Date cannot be left blank!',
                validateDateRange: true,
            },

            avatar: {
                required: true,
                emptyMessage: 'Please select an image file..',
                fileType: ['image/jpeg', 'image/png', 'image/jpg'],
                maxSize: 10 * 1024 * 1024,
                errorMessage:
                    'Invalid file. Only JPEG/PNG/JPG is accepted and maximum 5MB.',
            },
        }),
        [],
    );

    const handleRadioChange = (selectedStatus) => {
        setStatus(selectedStatus);
        setErrors((prev) => ({
            ...prev,
            status: '',
        }));
    };

    const validateForm = () => {
        const errors = {};

        Object.keys(forms).forEach((field) => {
            const errorMessage = validateInput(field, forms[field]);
            if (errorMessage) {
                errors[field] = errorMessage;
            }
        });

        if (status === null) {
            errors.status = 'Status cannot be left blank!';
        }

        return errors;
    };

    const handleAddUser = async () => {
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        let avatarUrl = 'https://via.placeholder.com/150';

        if (forms.avatar instanceof File) {
            const uploadedUrl = await uploadToCloudinary(forms.avatar);
            if (uploadedUrl) {
                avatarUrl = uploadedUrl;
            } else {
                toast.error('Upload ảnh thất bại!');
                return;
            }
        }

        const newUser = {
            name: forms.name,
            company: forms.company,
            img: avatarUrl,
            orderValue: forms.orderValue,
            orderDate: forms.orderDate,
            status: status,
        };

        try {
            const response = await fetch(
                'https://67eca9a6aa794fb3222e5fbe.mockapi.io/user',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                },
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            toast.success('Cập nhật dữ liệu thành công');

            setIsOpen(false);

            const data = await response.json();

            setDataParent((prevData) => [...prevData, data]);

            // Set default values
            forms.avatar = null;
            setForms({
                name: '',
                company: '',
                avatar: '',
                orderValue: '',
                orderDate: '',
            });
            setStatus(null);
            setErrors({});
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <Modal
            className={cx('box-edit')}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <h3>Chỉnh sửa thông tin</h3>

            <div className={cx('box-avatar')}>
                {
                    // Show avatar
                    !errors.avatar && forms.avatar && (
                        <div className={cx('avatar-wrapper')}>
                            <Image
                                src={forms.avatar?.preview}
                                alt="Avatar preview"
                                className={cx('avatar-preview')}
                            />
                        </div>
                    )
                }

                <BoxInput
                    label="Avatar"
                    name="avatar"
                    ref={avatarRef}
                    type="file"
                    placeholder="Upload Avatar..."
                    icon={<FontAwesomeIcon icon={faImage} />}
                    error={errors.avatar}
                    onChange={handleChangeInput}
                />
            </div>

            <BoxInput
                label="Customer Name"
                name="name"
                placeholder="Enter Customer Name..."
                icon={<FontAwesomeIcon icon={faSignature} />}
                error={errors.name}
                value={forms.name}
                onChange={handleChangeInput}
            />

            <BoxInput
                label="Company Name"
                name="company"
                placeholder="Enter Company Name..."
                icon={<FontAwesomeIcon icon={faSignature} />}
                error={errors.company}
                value={forms.company}
                onChange={handleChangeInput}
            />

            <BoxInput
                label="Order Value"
                name="orderValue"
                placeholder="Enter Order Value..."
                icon={<FontAwesomeIcon icon={faHashtag} />}
                error={errors.orderValue}
                value={forms.orderValue}
                onChange={handleChangeInput}
            />

            <BoxInput
                label="Order Date"
                name="orderDate"
                error={errors.orderDate}
                value={forms.orderDate}
                type="date"
                onChange={handleChangeInput}
            />

            <div className={cx('box-status')}>
                <label>Status</label>
                <div className={cx('status')}>
                    {statusArray.map((item, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                id={`status-${index}`}
                                checked={item.includes(status)}
                                onChange={() => handleRadioChange(item)}
                            />
                            <label htmlFor={`status-${index}`}>{item}</label>
                        </div>
                    ))}

                    {errors.status && (
                        <p className={cx('error')}>{errors.status}</p>
                    )}
                </div>
            </div>

            <div className={cx('box-btn')}>
                <button
                    type="button"
                    className={cx('btn')}
                    onClick={handleAddUser}
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

export default AddUser;
