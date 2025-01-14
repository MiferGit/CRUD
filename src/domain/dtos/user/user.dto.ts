import validator from 'validator';  // Asegúrate de tener esta dependencia instalada con `npm install validator`
import { Role } from '../../../data';

export class CreateUserDTO {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
        public readonly role: Role
    ) {}

    // Método estático para crear el DTO, realizando validaciones
    static create(object: { [key: string]: any }): [string?, CreateUserDTO?] {
        const { name, email, password, role } = object;

        // Validación del nombre
        if (!name) return ['El nombre no existe ☠️', undefined];
        if (typeof name !== 'string') return ['El nombre debe ser un string', undefined];
        if (name.length <= 5) return ['El nombre debe tener más de 5 caracteres', undefined];

        // Validación del correo electrónico
        if (!email) return ['El correo no existe', undefined];
        // if (typeof email !== 'string') return ['El correo debe ser un string', undefined];
        // if (!validator.isEmail(email)) return ['El correo electrónico no tiene un formato válido', undefined];

        // Validación del password
        if (!password) return ['El nombre no existe ☠️', undefined];
        if (password.length <= 5) return ['El password debe tener más de 5 caracteres', undefined];

        // Validación del password
        if (!role) return ['El nombre no existe ☠️', undefined];
        if (role.length <= 5) return ['El nombre debe tener más de 5 caracteres', undefined];

        // Si todas las validaciones pasaron, retornamos el DTO creado
        return [undefined, new CreateUserDTO(name, email, password, role)];
    }
}