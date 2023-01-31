import {
    IsString,
    Allow,
    IsBoolean,
    IsNumber,
    IsNotEmpty,
  } from 'class-validator';

  import {
    isBooleanValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
  } from '@shared/validation';
  
  export class BaseProductDto {

    //@Allow()
    //readonly enrollment: EnrollmentEntity;

    //@Allow()
    //readonly projectPlan: ProjectPlanEntity;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(isStringValidationOptions())
    readonly title: string;

  /*   @IsNotEmpty(isNotEmptyValidationOptions())
    @IsBoolean(isBooleanValidationOptions())
    readonly approved: boolean; */

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsNumber()
    readonly price: number;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(isStringValidationOptions())
    readonly description: string;

  }