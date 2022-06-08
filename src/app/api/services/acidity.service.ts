/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Acidity } from '../models/acidity';

@Injectable({
  providedIn: 'root',
})
export class AcidityService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAcidityGetAcidityGet
   */
  static readonly ApiAcidityGetAcidityGetPath = '/api/Acidity/getAcidity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAcidityGetAcidityGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcidityGetAcidityGet$Plain$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Acidity>> {

    const rb = new RequestBuilder(this.rootUrl, AcidityService.ApiAcidityGetAcidityGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Acidity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAcidityGetAcidityGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcidityGetAcidityGet$Plain(params?: {
    Id?: number;
  }): Observable<Acidity> {

    return this.apiAcidityGetAcidityGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Acidity>) => r.body as Acidity)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAcidityGetAcidityGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcidityGetAcidityGet$Json$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Acidity>> {

    const rb = new RequestBuilder(this.rootUrl, AcidityService.ApiAcidityGetAcidityGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Acidity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAcidityGetAcidityGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcidityGetAcidityGet$Json(params?: {
    Id?: number;
  }): Observable<Acidity> {

    return this.apiAcidityGetAcidityGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Acidity>) => r.body as Acidity)
    );
  }

  /**
   * Path part for operation apiAcidityGetAcidityListGet
   */
  static readonly ApiAcidityGetAcidityListGetPath = '/api/Acidity/getAcidityList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAcidityGetAcidityListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcidityGetAcidityListGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Acidity>>> {

    const rb = new RequestBuilder(this.rootUrl, AcidityService.ApiAcidityGetAcidityListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Acidity>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAcidityGetAcidityListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcidityGetAcidityListGet$Plain(params?: {
  }): Observable<Array<Acidity>> {

    return this.apiAcidityGetAcidityListGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Acidity>>) => r.body as Array<Acidity>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAcidityGetAcidityListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcidityGetAcidityListGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Acidity>>> {

    const rb = new RequestBuilder(this.rootUrl, AcidityService.ApiAcidityGetAcidityListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Acidity>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAcidityGetAcidityListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcidityGetAcidityListGet$Json(params?: {
  }): Observable<Array<Acidity>> {

    return this.apiAcidityGetAcidityListGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Acidity>>) => r.body as Array<Acidity>)
    );
  }

}
