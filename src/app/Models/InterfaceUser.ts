export type Roles = 'CLIENTE' | 'ADMIN';

export interface IUser{
displayName?:string,
emailVerified?:boolean,    
email?:string,
uid?:string,
phoneNumber?:string,
direction?:string,
photoURL?:string,
password?:string,
role?:Roles
}