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
    CompletionDateV20,
    CompletionDateV20FromJSON,
    CompletionDateV20FromJSONTyped,
    CompletionDateV20ToJSON,
    DeactivationDateV20,
    DeactivationDateV20FromJSON,
    DeactivationDateV20FromJSONTyped,
    DeactivationDateV20ToJSON,
    LastModifiedDateV20,
    LastModifiedDateV20FromJSON,
    LastModifiedDateV20FromJSONTyped,
    LastModifiedDateV20ToJSON,
    SourceV20,
    SourceV20FromJSON,
    SourceV20FromJSONTyped,
    SourceV20ToJSON,
    SubmissionDateV20,
    SubmissionDateV20FromJSON,
    SubmissionDateV20FromJSONTyped,
    SubmissionDateV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface HistoryV20
 */
export interface HistoryV20 {
    /**
     * 
     * @type {string}
     * @memberof HistoryV20
     */
    creationMethod?: HistoryV20CreationMethodEnum;
    /**
     * 
     * @type {CompletionDateV20}
     * @memberof HistoryV20
     */
    completionDate?: CompletionDateV20;
    /**
     * 
     * @type {SubmissionDateV20}
     * @memberof HistoryV20
     */
    submissionDate?: SubmissionDateV20;
    /**
     * 
     * @type {LastModifiedDateV20}
     * @memberof HistoryV20
     */
    lastModifiedDate?: LastModifiedDateV20;
    /**
     * 
     * @type {boolean}
     * @memberof HistoryV20
     */
    claimed?: boolean;
    /**
     * 
     * @type {SourceV20}
     * @memberof HistoryV20
     */
    source?: SourceV20;
    /**
     * 
     * @type {DeactivationDateV20}
     * @memberof HistoryV20
     */
    deactivationDate?: DeactivationDateV20;
    /**
     * 
     * @type {boolean}
     * @memberof HistoryV20
     */
    verifiedEmail?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HistoryV20
     */
    verifiedPrimaryEmail?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum HistoryV20CreationMethodEnum {
    Api = 'API',
    Direct = 'DIRECT',
    MemberReferred = 'MEMBER_REFERRED',
    Website = 'WEBSITE',
    IntegrationTest = 'INTEGRATION_TEST'
}

export function HistoryV20FromJSON(json: any): HistoryV20 {
    return HistoryV20FromJSONTyped(json, false);
}

export function HistoryV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'creationMethod': !exists(json, 'creation-method') ? undefined : json['creation-method'],
        'completionDate': !exists(json, 'completion-date') ? undefined : CompletionDateV20FromJSON(json['completion-date']),
        'submissionDate': !exists(json, 'submission-date') ? undefined : SubmissionDateV20FromJSON(json['submission-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV20FromJSON(json['last-modified-date']),
        'claimed': !exists(json, 'claimed') ? undefined : json['claimed'],
        'source': !exists(json, 'source') ? undefined : SourceV20FromJSON(json['source']),
        'deactivationDate': !exists(json, 'deactivation-date') ? undefined : DeactivationDateV20FromJSON(json['deactivation-date']),
        'verifiedEmail': !exists(json, 'verified-email') ? undefined : json['verified-email'],
        'verifiedPrimaryEmail': !exists(json, 'verified-primary-email') ? undefined : json['verified-primary-email'],
    };
}

export function HistoryV20ToJSON(value?: HistoryV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'creation-method': value.creationMethod,
        'completion-date': CompletionDateV20ToJSON(value.completionDate),
        'submission-date': SubmissionDateV20ToJSON(value.submissionDate),
        'last-modified-date': LastModifiedDateV20ToJSON(value.lastModifiedDate),
        'claimed': value.claimed,
        'source': SourceV20ToJSON(value.source),
        'deactivation-date': DeactivationDateV20ToJSON(value.deactivationDate),
        'verified-email': value.verifiedEmail,
        'verified-primary-email': value.verifiedPrimaryEmail,
    };
}

