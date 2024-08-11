export interface OrderData {
    address: string;
    address2: string;
    barcodes: string;
    buyerIdNumber: string;
    buyerName: string;
    channel: number;
    channelIcon: string;
    channelName: string;
    client: string;
    country: string;
    courier: string;
    courierLogo: string;
    creationDate: string;
    dte: string;
    dteExist: string;
    email: string;
    hub: string;
    hubFulfillment: string;
    hubLogo: string;
    idMpago: string;
    id_mtdi: string;
    invoiceNumber: number;
    label: string;
    manifest: string;
    officialStore: string;
    orderNo: string;
    orderValidated: boolean;
    phone: string;
    products: Product[]; // Asumiendo que tienes una definición para los productos
    region: string;
    responseWms: string;
    shippingType: string;
    shipping_id: string;
    statusCourier: StatusCourier[]; // Asumiendo que tienes una definición para los estados del courier
    statusDelivery: string;
    statusDetail: string;
    statusLabel: string;
    statusManifest: string;
    statusOrder: string;
    statusPayment: string;
    statusWms: string;
    store: number;
    totalShipping: number;
    totalWithoutShipping: number;
    validatorActived: boolean;
    warehouse: string;
}

export interface Product {
    check: boolean;
    ean: string;
    ean_translated: string | null;
    isParent: boolean;
    isPromo: boolean;
    name: string;
    qty: number;
    shouldIgnoreInValidator: boolean;
    sku: string;
}

export interface StatusCourier {
    date: string;
    status: string;
}