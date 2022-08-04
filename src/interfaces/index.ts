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