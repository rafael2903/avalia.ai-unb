import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Omit<CreateUserDto, "id" | "email">>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
