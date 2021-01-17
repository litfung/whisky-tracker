import {
  IsEmpty,
  IsEnum,
  IsIn,
  IsNumber,
  IsString,
  ValidateNested
} from 'class-validator';
import { ObjectID } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from '../../shared/dto/location.dto';

const validCategories = ['Islay', 'Speyside', 'Highland'];

export class DistilleryDto {
  @IsEmpty()
  @ApiProperty({ name: '_id', type: ObjectID })
  _id: ObjectID | string;

  @ApiProperty({ name: 'name', type: String })
  @IsString()
  name: string;

  @ApiProperty({ name: 'location', type: LocationDto })
  @ValidateNested()
  location: LocationDto;

  @ApiProperty({ name: 'category', type: String })
  @IsIn(validCategories)
  @IsString()
  category: string;

  @IsNumber()
  @ApiProperty({ name: 'foundedYear', type: Number })
  foundedYear: number;
}
