export type User = UserProfile | null;

interface UserProfile {
    apellido: string,
    id_usuario: number,
    imagen: string
    nivel: string,
    nombre: string
}

export interface UserState {
    authenitcated: boolean,
    userProfile: User
}

export type Purchases = Array<PurchaseDetail>;

export interface PurchaseDetail {
    id_compra: number | string,
    titulo: string,
    precio: {
        total: number,
        moneda: string
    },
    cantidad: number,
    fecha: string,
    imagen: string,
    vendedor: {
        id: number,
        nickname: string
    },
    id_transaccion: number,
    id_envio: number
}

export interface PurchaseState {
    pagination: Pagination,
    user_purchases: Purchases
}

export interface Pagination {
    total: number,
    limit: number,
    offset: number,
    page: number
}