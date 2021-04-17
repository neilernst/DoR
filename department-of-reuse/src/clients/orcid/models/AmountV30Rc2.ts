/* tslint:disable */
/* eslint-disable */
/**
 * ORCID Public
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: Latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Currency,
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './';

/**
 * 
 * @export
 * @interface AmountV30Rc2
 */
export interface AmountV30Rc2 {
    /**
     * 
     * @type {string}
     * @memberof AmountV30Rc2
     */
    value?: string;
    /**
     * 
     * @type {Currency}
     * @memberof AmountV30Rc2
     */
    currencyCode: Currency;
}

export function AmountV30Rc2FromJSON(json: any): AmountV30Rc2 {
    return AmountV30Rc2FromJSONTyped(json, false);
}

export function AmountV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AmountV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'currencyCode': CurrencyFromJSON(json['currency-code']),
    };
}

export function AmountV30Rc2ToJSON(value?: AmountV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'currency-code': CurrencyToJSON(value.currencyCode),
    };
}

