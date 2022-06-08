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

import { Clasification } from '../models/clasification';

@Injectable({
  providedIn: 'root',
})
export class ClasificationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiClasificationGetClasificationGet
   */
  static readonly ApiClasificationGetClasificationGetPath = '/api/Clasification/getClasification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClasificationGetClasificationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClasificationGetClasificationGet$Plain$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Clasification>> {

    const rb = new RequestBuilder(this.rootUrl, ClasificationService.ApiClasificationGetClasificationGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Clasification>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClasificationGetClasificationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClasificationGetClasificationGet$Plain(params?: {
    Id?: number;
  }): Observable<Clasification> {

    return this.apiClasificationGetClasificationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Clasification>) => r.body as Clasification)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClasificationGetClasificationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClasificationGetClasificationGet$Json$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Clasification>> {

    const rb = new RequestBuilder(this.rootUrl, ClasificationService.ApiClasificationGetClasificationGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Clasification>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClasificationGetClasificationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClasificationGetClasificationGet$Json(params?: {
    Id?: number;
  }): Observable<Clasification> {

    return this.apiClasificationGetClasificationGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Clasification>) => r.body as Clasification)
    );
  }

  /**
   * Path part for operation apiClasificationGetClasificationsGet
   */
  static readonly ApiClasificationGetClasificationsGetPath = '/api/Clasification/getClasifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClasificationGetClasificationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClasificationGetClasificationsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Clasification>>> {

    const rb = new RequestBuilder(this.rootUrl, ClasificationService.ApiClasificationGetClasificationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Clasification>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClasificationGetClasificationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClasificationGetClasificationsGet$Plain(params?: {
  }): Observable<Array<Clasification>> {

    return this.apiClasificationGetClasificationsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Clasification>>) => r.body as Array<Clasification>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClasificationGetClasificationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClasificationGetClasificationsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Clasification>>> {

    const rb = new RequestBuilder(this.rootUrl, ClasificationService.ApiClasificationGetClasificationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Clasification>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClasificationGetClasificationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClasificationGetClasificationsGet$Json(params?: {
  }): Observable<Array<Clasification>> {

    return this.apiClasificationGetClasificationsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Clasification>>) => r.body as Array<Clasification>)
    );
  }

}
