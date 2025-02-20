import classNames from "classnames/bind";
import { useState } from "react";
import { evaluate } from "mathjs";


import styles from './Bai1.module.scss'
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Bai1() {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        const jobsLocalStorage = JSON.parse(localStorage.getItem('job'));

        return jobsLocalStorage ?? [];
    });

    //Xử lý khi thêm
    const handleAdd = () => {
        try {
            const result = evaluate(job);
            if (!isNaN(result)) {
                setJobs((prev) => {
                    const newJobs = [...prev, `${job} = ${result}`];
                    saveJobs(newJobs);
                    return newJobs;
                });
            } else {
                alert('Biểu thức không hợp lệ!');
            }
        } catch {
            alert('Lỗi cú pháp! Vui lòng nhập biểu thức hợp lệ.');
        }
        setJob('');
    };

    //Lưu vào localStorage
    const saveJobs = (newJobs) => {
        let jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem('job', jsonJobs);
    };

    //Xóa tất cả
    const handlClearALL = () => {
        localStorage.clear('jobs');
        setJobs([]);
    };

    // Xóa mỗi phần tử
    const handleRemoveItem = (id) => {
        const newJobs = [...jobs];
        newJobs.splice(id, 1);
        saveJobs(newJobs);
        setJobs(newJobs);
    };

    return (
        <div style={{ padding: 20 }}>
            <input
                className={cx('input')}
                value={job}
                type="text"
                onChange={(e) => setJob(e.target.value)}
            />
            <Button
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                primary
                onClick={handleAdd}
            >
                Add
            </Button>
            <Button
                leftIcon={<FontAwesomeIcon icon={faTrash} />}
                className={cx('btn-delete')}
                primary
                onClick={handlClearALL}
            >
                Clear All
            </Button>
            <ul className={cx('list')}>
                {jobs.map((job, index) => {
                    return (
                        <div key={index} style={{ display: 'flex', gap: 10 }}>
                            <li>{job}</li>
                            <button
                                className={cx('btn-delete-item')}
                                onClick={() => handleRemoveItem(index)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    )}
                )}
            </ul>
            </div>
    )
}

export default Bai1;
