import React from 'react';
import './ModalDetail.css';
import { Modal, Button, Table } from 'react-bootstrap';
import { OrderData, Product } from '../../../types/types';

interface ModalDetailProps {
  show: boolean;
  handleClose: () => void;
  item: OrderData | null;
}

const ModalDetail = ({ show, handleClose, item }: ModalDetailProps) => {
  const renderComplexValue = (value: any) => {
    if (Array.isArray(value)) {
      return value.map((val, idx) => (
        <div key={idx}>
          {typeof val === 'object' ? renderObjectTable(val) : val && val.toString()}
        </div>
      ));
    } else if (typeof value === 'object' && value !== null) {
      return renderObjectTable(value);
    }
    return value?.toString();
  };

  const renderObjectTable = (obj: any) => (
    <Table size="sm" bordered>
      <tbody>
        {Object.entries(obj).map(([key, val], idx) => (
          <tr key={idx}>
            <td>{key}</td>
            <td>{typeof val === 'object' ? renderComplexValue(val) : val && val.toString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Detalle de la Orden {item?.orderNo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {item ? (
          <Table striped bordered hover size="sm">
            <tbody>
              {Object.entries(item).map(([key, value], index) => (
                <tr key={index}>
                  <td style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                    {key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')}
                  </td>
                  <td>
                    {key === 'channelIcon' || key === 'courierLogo' ? 
                      <img src={value as string} alt="icon" style={{ width: 50, height: 50 }} />
                      : renderComplexValue(value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : <div>No hay detalles disponibles para mostrar.</div>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDetail;
