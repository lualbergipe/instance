import {useEffect, useState} from 'react'
import { getOrdersApi } from '../api/orders'
import OrdersTable from '../components/OrdersTable/OrdersTable'
import { OrderData } from '../types/types'
import Loader from '../components/Loader/Loader'
export const Orders = () => {
  const [ordersApi, setOrderApi] = useState<OrderData[]>([]);
  useEffect(() => {
ordenes()
  }, [])
  const ordenes  = async () => {
    const orders = await getOrdersApi()
    setOrderApi(orders.message.orders)
  }
  return (
    <div>
      <h2>orders page</h2>
     {
        ordersApi.length > 0 ?
        <OrdersTable data={ordersApi}/> :
        <div className="d-flex justify-content-center flex-column align-items-center">
        <Loader/>
        <span>Cargando...</span>
        </div>
     }
     
    </div>
  )
}

