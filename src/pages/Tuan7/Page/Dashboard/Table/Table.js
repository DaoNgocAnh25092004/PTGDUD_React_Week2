import React, { useState, useEffect } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';

import './Table.css';
import EditTable from '~/components/EditTable';

DataTable.use(DT);

function Table({ data, setData }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState({});

    const columns = [
        {
            title: `<div style="text-align: center; border: none;">
                        <input type="checkbox" />
                    </div>`,
            data: null,
            render: () =>
                `<div style="text-align: center;">
                    <input type="checkbox" />
                </div>`,
        },
        {
            title: 'CUSTOMER NAME',
            data: null,
            render: (data, type, row) =>
                `<div style="display: flex; align-items: center;">
                    <img
                        src="${row.img}"
                        alt="Avatar"
                        style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;"
                    />
                    <span>${row.name}</span>
                </div>`,
        },
        { title: 'Company', data: 'company' },
        {
            title: 'Order Value',
            data: 'orderValue',
            render: (data) => `$${data.toLocaleString()}`,
        },
        {
            title: 'Order Date',
            data: 'orderDate',
            render: (data) => {
                const date = new Date(data);
                const formattedDate = date
                    .toLocaleDateString('en-GB')
                    .replace(/\//g, '/');
                return `<span style="color: #a8a6a6;">${formattedDate}</span>`;
            },
        },
        {
            title: 'Status',
            data: 'status',
            render: (data) => {
                let statusClass = '';
                if (data === 'New') statusClass = 'status-new';
                else if (data === 'In-progress')
                    statusClass = 'status-in-progress';
                else if (data === 'Completed') statusClass = 'status-completed';

                return `<span class="${statusClass}">${data}</span>`;
            },
        },
        {
            title: '',
            data: null,
            render: (data, type, row) => {
                return `<div class="edit-icon" 
                            style="cursor: pointer; transition: transform 0.2s;" 
                            onclick="handleEditClick(${row.id})">
                           <svg  fill="#a8a6a6" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 306.637 306.637" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896 l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"></path> <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095 L265.13,75.602L231.035,41.507z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                        </div>`;
            },
        },
    ];

    const handleEditClick = (rowId) => {
        const rowData = data.filter((row) => {
            return Number(row.id) === rowId;
        });
        setSelectedRow(rowData[0]);
        setModalOpen(true);
    };

    useEffect(
        () => {
            window.handleEditClick = handleEditClick;
        },
        // eslint-disable-next-line
        [data],
    );

    return (
        <>
            <DataTable
                data={data}
                columns={columns}
                options={{
                    paging: true,
                    searching: false,
                    ordering: false,
                    lengthChange: false,
                    info: true,
                    pageLength: 3,
                    language: {
                        info: '_TOTAL_ results',
                    },
                }}
            />

            <EditTable
                isOpen={isModalOpen}
                setIsOpen={setModalOpen}
                rowData={selectedRow}
                setDataParent={setData}
            />
        </>
    );
}

export default Table;
