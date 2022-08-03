export type User = UserProfile | null;

interface UserProfile {
    userId: 'id',
    name: 'Jhon',
    nickName: 'Dark Knight',
    email: 'jdoe@fakemail.com'
}

export interface UserState {
    authenitcated: boolean,
    userProfile: User
}