export type User = UserProfile | null;

interface UserProfile {
    apellido: string,
    id_usuario: number,
    imagen: string
    nivel: string,
    nombre: string
}

export interface PurchaseState {
    authenitcated: boolean,
    userProfile: User
}

export type Purchase = PurchaseDetail | null;

interface PurchaseDetail {
    apellido: string,
    id_usuario: number,
    imagen: string
    nivel: string,
    nombre: string
}

export interface PurchaseState {
    page: number,
    offset: number,
    purchaseDetail: Purchase
}    