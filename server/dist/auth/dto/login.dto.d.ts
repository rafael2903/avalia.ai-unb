interface IdLoginDto {
    id: string;
    password: string;
}
interface EmailLoginDto {
    email: string;
    password: string;
}
export type LoginDto = IdLoginDto | EmailLoginDto;
export {};
