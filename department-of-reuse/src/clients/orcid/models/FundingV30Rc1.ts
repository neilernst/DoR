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
    AmountV30Rc1,
    AmountV30Rc1FromJSON,
    AmountV30Rc1FromJSONTyped,
    AmountV30Rc1ToJSON,
    CreatedDateV30Rc1,
    CreatedDateV30Rc1FromJSON,
    CreatedDateV30Rc1FromJSONTyped,
    CreatedDateV30Rc1ToJSON,
    ExternalIDsV30Rc1,
    ExternalIDsV30Rc1FromJSON,
    ExternalIDsV30Rc1FromJSONTyped,
    ExternalIDsV30Rc1ToJSON,
    FundingContributorsV30Rc1,
    FundingContributorsV30Rc1FromJSON,
    FundingContributorsV30Rc1FromJSONTyped,
    FundingContributorsV30Rc1ToJSON,
    FundingTitleV30Rc1,
    FundingTitleV30Rc1FromJSON,
    FundingTitleV30Rc1FromJSONTyped,
    FundingTitleV30Rc1ToJSON,
    FuzzyDateV30Rc1,
    FuzzyDateV30Rc1FromJSON,
    FuzzyDateV30Rc1FromJSONTyped,
    FuzzyDateV30Rc1ToJSON,
    LastModifiedDateV30Rc1,
    LastModifiedDateV30Rc1FromJSON,
    LastModifiedDateV30Rc1FromJSONTyped,
    LastModifiedDateV30Rc1ToJSON,
    OrganizationDefinedFundingSubTypeV30Rc1,
    OrganizationDefinedFundingSubTypeV30Rc1FromJSON,
    OrganizationDefinedFundingSubTypeV30Rc1FromJSONTyped,
    OrganizationDefinedFundingSubTypeV30Rc1ToJSON,
    OrganizationV30Rc1,
    OrganizationV30Rc1FromJSON,
    OrganizationV30Rc1FromJSONTyped,
    OrganizationV30Rc1ToJSON,
    SourceV30Rc1,
    SourceV30Rc1FromJSON,
    SourceV30Rc1FromJSONTyped,
    SourceV30Rc1ToJSON,
    UrlV30Rc1,
    UrlV30Rc1FromJSON,
    UrlV30Rc1FromJSONTyped,
    UrlV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface FundingV30Rc1
 */
export interface FundingV30Rc1 {
    /**
     * 
     * @type {CreatedDateV30Rc1}
     * @memberof FundingV30Rc1
     */
    createdDate?: CreatedDateV30Rc1;
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof FundingV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {SourceV30Rc1}
     * @memberof FundingV30Rc1
     */
    source?: SourceV30Rc1;
    /**
     * 
     * @type {number}
     * @memberof FundingV30Rc1
     */
    putCode?: number;
    /**
     * 
     * @type {string}
     * @memberof FundingV30Rc1
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof FundingV30Rc1
     */
    type: FundingV30Rc1TypeEnum;
    /**
     * 
     * @type {OrganizationDefinedFundingSubTypeV30Rc1}
     * @memberof FundingV30Rc1
     */
    organizationDefinedType?: OrganizationDefinedFundingSubTypeV30Rc1;
    /**
     * 
     * @type {FundingTitleV30Rc1}
     * @memberof FundingV30Rc1
     */
    title: FundingTitleV30Rc1;
    /**
     * 
     * @type {string}
     * @memberof FundingV30Rc1
     */
    shortDescription?: string;
    /**
     * 
     * @type {AmountV30Rc1}
     * @memberof FundingV30Rc1
     */
    amount?: AmountV30Rc1;
    /**
     * 
     * @type {UrlV30Rc1}
     * @memberof FundingV30Rc1
     */
    url?: UrlV30Rc1;
    /**
     * 
     * @type {FuzzyDateV30Rc1}
     * @memberof FundingV30Rc1
     */
    startDate?: FuzzyDateV30Rc1;
    /**
     * 
     * @type {FuzzyDateV30Rc1}
     * @memberof FundingV30Rc1
     */
    endDate?: FuzzyDateV30Rc1;
    /**
     * 
     * @type {ExternalIDsV30Rc1}
     * @memberof FundingV30Rc1
     */
    externalIds?: ExternalIDsV30Rc1;
    /**
     * 
     * @type {FundingContributorsV30Rc1}
     * @memberof FundingV30Rc1
     */
    contributors?: FundingContributorsV30Rc1;
    /**
     * 
     * @type {OrganizationV30Rc1}
     * @memberof FundingV30Rc1
     */
    organization: OrganizationV30Rc1;
    /**
     * 
     * @type {string}
     * @memberof FundingV30Rc1
     */
    visibility?: FundingV30Rc1VisibilityEnum;
}

/**
* @export
* @enum {string}
*/
export enum FundingV30Rc1TypeEnum {
    Grant = 'GRANT',
    Contract = 'CONTRACT',
    Award = 'AWARD',
    SalaryAward = 'SALARY_AWARD'
}/**
* @export
* @enum {string}
*/
export enum FundingV30Rc1VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function FundingV30Rc1FromJSON(json: any): FundingV30Rc1 {
    return FundingV30Rc1FromJSONTyped(json, false);
}

export function FundingV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30Rc1FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30Rc1FromJSON(json['source']),
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'type': json['type'],
        'organizationDefinedType': !exists(json, 'organization-defined-type') ? undefined : OrganizationDefinedFundingSubTypeV30Rc1FromJSON(json['organization-defined-type']),
        'title': FundingTitleV30Rc1FromJSON(json['title']),
        'shortDescription': !exists(json, 'short-description') ? undefined : json['short-description'],
        'amount': !exists(json, 'amount') ? undefined : AmountV30Rc1FromJSON(json['amount']),
        'url': !exists(json, 'url') ? undefined : UrlV30Rc1FromJSON(json['url']),
        'startDate': !exists(json, 'start-date') ? undefined : FuzzyDateV30Rc1FromJSON(json['start-date']),
        'endDate': !exists(json, 'end-date') ? undefined : FuzzyDateV30Rc1FromJSON(json['end-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30Rc1FromJSON(json['external-ids']),
        'contributors': !exists(json, 'contributors') ? undefined : FundingContributorsV30Rc1FromJSON(json['contributors']),
        'organization': OrganizationV30Rc1FromJSON(json['organization']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
    };
}

export function FundingV30Rc1ToJSON(value?: FundingV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV30Rc1ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30Rc1ToJSON(value.lastModifiedDate),
        'source': SourceV30Rc1ToJSON(value.source),
        'put-code': value.putCode,
        'path': value.path,
        'type': value.type,
        'organization-defined-type': OrganizationDefinedFundingSubTypeV30Rc1ToJSON(value.organizationDefinedType),
        'title': FundingTitleV30Rc1ToJSON(value.title),
        'short-description': value.shortDescription,
        'amount': AmountV30Rc1ToJSON(value.amount),
        'url': UrlV30Rc1ToJSON(value.url),
        'start-date': FuzzyDateV30Rc1ToJSON(value.startDate),
        'end-date': FuzzyDateV30Rc1ToJSON(value.endDate),
        'external-ids': ExternalIDsV30Rc1ToJSON(value.externalIds),
        'contributors': FundingContributorsV30Rc1ToJSON(value.contributors),
        'organization': OrganizationV30Rc1ToJSON(value.organization),
        'visibility': value.visibility,
    };
}

