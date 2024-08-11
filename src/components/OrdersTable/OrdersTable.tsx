import React, { useState, useEffect, ChangeEvent } from 'react'
import Table from 'react-bootstrap/Table';

import './OrdersTable.css'
import ModalDetail from './ModalDetail/ModalDetail';
import { OrderData } from '../../types/types';
import Filters from './Filters/Filters';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


interface SimpleTableProps {
    data: OrderData[];
    itemsPerPage?: number;
}
const OrdersTable = ({ data, itemsPerPage = 10 }:SimpleTableProps) => {    
    const [currentPage, setCurrentPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [dataFilter, setDataFilter] = useState<OrderData[]>([]);
    const [selectedItem, setSelectedItem] = useState<OrderData | null>(null);
    const [inputValue, setInputValue] = useState('');
    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        setDataFilter(data);
    }, [data]); 
    const pages = Math.ceil(dataFilter.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = dataFilter.slice(startIndex, endIndex);

    const nextPage = () => setCurrentPage(prev => (prev + 1 < pages ? prev + 1 : prev));
    const prevPage = () => setCurrentPage(prev => (prev - 1 >= 0 ? prev - 1 : prev));

    const modalOpen = (item: any) => {
        setSelectedItem(item);
        setShowModal(true)
    }
    const filterData = (filtro:string, type: string) => {
        if(type === 'channel'){
            const filter = data.filter((item) => item?.channelName === filtro)
            setDataFilter(filter)
        }else if(type === 'order'){
            const filter = data.filter((item) => item?.orderNo === filtro)
            setDataFilter(filter)
        }
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(value);        
        filterData(value, 'order');
    };
    const cleanFilter = () => {
        setInputValue('')
        setDataFilter(data)
    }
    return (
        <div>
            <Filters inputValue={inputValue} handleInputChange={handleInputChange} filterData={filterData} cleanFilter={cleanFilter} data={data} />
            <div className="table-container">
                <Table striped className="table-responsive">
                    <thead>
                        <tr>
                            <th>Order No</th>
                            <th>Canal de venta</th>
                            <th>Icono Canal</th>
                            <th>Cliente</th>
                            <th>Total Without Shipping</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item: any, index: any) => (
                            <tr key={index}>
                                <td>{item?.orderNo}</td>
                                <td>{item?.channelName}</td>
                                <td><img src={item?.channelIcon} alt="Channel Icon" style={{ width: 30, height: 30 }} /></td>
                                <td>{item?.client}</td>
                                <td>${item?.totalWithoutShipping.toFixed(2)}</td>
                                <td><button className='btn_detalle' onClick={() => modalOpen(item)}>Detalle</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div>
                <button className="btn__pagination" onClick={prevPage} disabled={currentPage === 0}><GrFormPrevious/></button>
                <span> Page {currentPage + 1} of {pages} </span>
                <button className="btn__pagination" onClick={nextPage} disabled={currentPage === pages - 1}><MdOutlineNavigateNext/></button>
            </div>
            {showModal && <ModalDetail show={showModal} handleClose={handleCloseModal} item={selectedItem} />}
        </div>
    );
}

export default OrdersTable
