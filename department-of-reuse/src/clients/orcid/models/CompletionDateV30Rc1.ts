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
/**
 * 
 * @export
 * @interface CompletionDateV30Rc1
 */
export interface CompletionDateV30Rc1 {
    /**
     * 
     * @type {Date}
     * @memberof CompletionDateV30Rc1
     */
    readonly value?: Date;
}

export function CompletionDateV30Rc1FromJSON(json: any): CompletionDateV30Rc1 {
    return CompletionDateV30Rc1FromJSONTyped(json, false);
}

export function CompletionDateV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): CompletionDateV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : (new Date(json['value'])),
    };
}

export function CompletionDateV30Rc1ToJSON(value?: CompletionDateV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

