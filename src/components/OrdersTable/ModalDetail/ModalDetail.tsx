import React from 'react'
import './ModalDetail.css'
import { Modal, Button, Table } from 'react-bootstrap';
import { OrderData } from '../../../types/types';

interface ModalDetailProps {
  show: boolean;
  handleClose: () => void;
  item: OrderData | null;
}

const ModalDetail = ({ show, handleClose, item }:ModalDetailProps) => {
  console.log(item);
  return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalle de la Orden {item?.orderNo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='table__container'>
            {item ? ( // Verifica si item no es null antes de renderizar la tabla
                    <Table striped bordered hover>
                        <tbody>
                            {Object.entries(item).map(([key, value], index) => (
                                <tr key={index}>
                                    <td style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                                        {key.replace(/([A-Z])/g, ' $1')}
                                    </td>
                                    <td>
                                        {key === 'channelIcon' ? 
                                            <img src={value as string} alt={`${key} icon`} style={{ width: 50, height: 50 }} /> 
                                            : value.toString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <div>No hay detalles disponibles para mostrar.</div> // Mensaje o componente alternativo cuando no hay ítem
                )}
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
  )
}

export default ModalDetail
