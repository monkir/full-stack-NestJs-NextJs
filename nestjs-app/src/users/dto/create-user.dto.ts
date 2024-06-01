import { IsEmail, IsNotEmpty, Length, max } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @Length(5, 50)
    name:string;

    profile: createProfileDto;
}

export class createProfileDto{
    @IsNotEmpty()
    @Length(5, 50)
    bio: string;
}

// export class CreateUserReqDto extends CreateUserDto {
//     profile: createProfileDto;
// }
