import {useEffect, useState, ChangeEvent} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { OrderData } from '../../../types/types';
import './Filters.css'
import { FaFilter, FaFilterCircleXmark } from "react-icons/fa6"


interface FiltersProps {
    inputValue: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    filterData: (value: string, type: string) => void; 
    cleanFilter: () => void; 
    data: OrderData[]; 
}

const Filters = ({inputValue, handleInputChange, filterData, cleanFilter, data}:FiltersProps) => {
  const [channels, setChannels] = useState<string[]>([]);

  useEffect(() => {
    chanelFilter()
  }, [data])

  const chanelFilter = () =>{
    const uniqueChannels = new Set(data.map(item => item?.channelName));
        setChannels(Array.from(uniqueChannels));
  }
  return (
    <div className='container__filters'>
<FaFilter/>
      <input
            type="text"
            name="order"
            placeholder="Buscar No de orden"
            value={inputValue}  
            onChange={handleInputChange} 
            className="cont_form_input"
        />
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                   Canal de venta
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {channels.map((channel:string) => (
                        <Dropdown.Item key={channel} onClick={() => filterData(channel, 'channel')}>
                            {channel}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
                </Dropdown>
                <button type="button" className="btn_limpiar" onClick={() => cleanFilter()}>
                   <FaFilterCircleXmark/> Limpiar
                </button>
    </div>
  )
}

export default Filters
