import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
import { Exclude, Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  MinLength
} from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsEmpty()
  @Type(() => String)
  public _id: ObjectID;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  @Exclude({ toPlainOnly: true })
  public password: string;

  @ApiProperty()
  @IsEmpty()
  public lastLogIn: Date;

  @ApiProperty()
  @IsEmpty()
  public currentWhiskies: ObjectID[];

  @ApiProperty()
  @IsEmpty()
  public favourites: ObjectID[];

  @ApiProperty()
  @IsEmpty()
  public wishlist: ObjectID[];
}
