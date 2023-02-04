import {
    IsString,
    Allow,
    IsBoolean,
    IsNumber,
    IsNotEmpty,
    ArrayNotEmpty,
    IsArray,
    IsPositive,
    IsInt,
  } from 'class-validator';
import { isNotEmptyValidationOptions, isNumberValidationOptions, isStringValidationOptions } from 'src/shared/validation/validations-message';



  //validar los campos de la clase

  export class BaseCategoryDto {



    //shared validacion option para observar los mensajes de forma clara
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsNumber(isNumberValidationOptions())
    @IsPositive(isStringValidationOptions)
    readonly id: number;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(isStringValidationOptions())
    readonly description: string;

    @ArrayNotEmpty(isNotEmptyValidationOptions())
    @IsArray(IsIntValidationOptions())
    readonly images:string;





  }