import { IUser } from '../Models/InterfaceUser';

export class RoleValidator {

    isCliente(user: IUser): Boolean {
        return user.role === 'CLIENTE';
    }

    isAdmin(user: IUser): Boolean {
        return user.role === 'ADMIN';
    }

}