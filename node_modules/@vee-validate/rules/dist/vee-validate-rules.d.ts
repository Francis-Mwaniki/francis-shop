interface FieldValidationMetaInfo {
    field: string;
    value: unknown;
    form: Record<string, unknown>;
    rule?: {
        name: string;
        params?: Record<string, unknown> | unknown[];
    };
}
declare type ValidationRuleFunction<TValue = unknown, TParams = unknown[] | Record<string, unknown>> = (value: TValue, params: TParams, ctx: FieldValidationMetaInfo) => boolean | string | Promise<boolean | string>;
declare type SimpleValidationRuleFunction<TValue = unknown, TParams = unknown[] | Record<string, unknown>> = (value: TValue, params: TParams) => boolean | string | Promise<boolean | string>;

declare const alphaValidator: (value: unknown, params: [string] | {
    locale?: string;
}) => boolean;

declare const alphaDashValidator: (value: unknown, params: [string] | {
    locale?: string;
}) => boolean;

declare const alphaNumValidator: (value: unknown, params: [string] | {
    locale?: string;
}) => boolean;

declare const alphaSpacesValidator: (value: unknown, params: [string] | {
    locale?: string;
}) => boolean;

declare type BetweenParams = [string | number, string | number] | {
    min: number | string;
    max: number | string;
};
declare const betweenValidator: SimpleValidationRuleFunction<unknown, BetweenParams>;

declare const confirmedValidator: (value: unknown, params: [string] | {
    target: string;
}) => boolean;

declare const digitsValidator: (value: unknown, params: [string | number] | {
    length: string | number;
}) => boolean;

declare type Params = [number | string, number | string] | {
    width: string | number;
    height: string | number;
};
declare const dimensionsValidator: (files: unknown, params: Params) => true | Promise<boolean>;

declare const emailValidator: (value: unknown) => boolean;

declare const extValidator: (files: unknown, extensions: string[]) => boolean;

declare const imageValidator: (files: unknown) => boolean;

declare const integerValidator: (value: unknown) => boolean;

declare const isValidator: (value: unknown, params: [unknown] | {
    other: unknown;
}) => boolean;

declare const isNotValidator: (value: unknown, params: [unknown] | {
    other: unknown;
}) => boolean;

declare const lengthValidator: (value: unknown, params: [string | number] | {
    length: string | number;
}) => boolean;

declare const maxLengthValidator: (value: unknown, params: [string | number] | {
    length: string | number;
}) => boolean;

declare const maxValueValidator: (value: unknown, params: [string | number] | {
    max: string | number;
}) => boolean;

declare const mimesValidator: (files: unknown, mimes: string[]) => boolean;

declare const minValidator: (value: unknown, params: [string | number] | {
    length: string | number;
}) => boolean;

declare const minValueValidator: (value: unknown, params: [string | number] | {
    min: string | number;
}) => boolean;

declare const excludedValidator: (value: unknown, list: unknown[]) => boolean;

declare const numericValidator: (value: unknown) => boolean;

declare const oneOfValidator: (value: unknown, list: unknown[]) => boolean;

declare const regexValidator: (value: unknown, params: [string | RegExp] | {
    regex: RegExp | string;
}) => boolean;

declare const requiredValidator: (value: unknown) => boolean;

declare const sizeValidator: (files: unknown, params: [string | number] | {
    size: string | number;
}) => boolean;

declare const urlValidator: (value: unknown, params: [string | RegExp] | {
    pattern?: string | RegExp;
}) => boolean;

declare const all: Record<string, ValidationRuleFunction<unknown, any>>;

export { alphaValidator as alpha, alphaDashValidator as alpha_dash, alphaNumValidator as alpha_num, alphaSpacesValidator as alpha_spaces, betweenValidator as between, confirmedValidator as confirmed, all as default, digitsValidator as digits, dimensionsValidator as dimensions, emailValidator as email, extValidator as ext, imageValidator as image, integerValidator as integer, isValidator as is, isNotValidator as is_not, lengthValidator as length, maxLengthValidator as max, maxValueValidator as max_value, mimesValidator as mimes, minValidator as min, minValueValidator as min_value, excludedValidator as not_one_of, numericValidator as numeric, oneOfValidator as one_of, regexValidator as regex, requiredValidator as required, sizeValidator as size, urlValidator as url };
