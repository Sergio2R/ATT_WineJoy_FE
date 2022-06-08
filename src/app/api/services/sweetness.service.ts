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

import { Sweetness } from '../models/sweetness';

@Injectable({
  providedIn: 'root',
})
export class SweetnessService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSweetnessGetSweetnessGet
   */
  static readonly ApiSweetnessGetSweetnessGetPath = '/api/Sweetness/getSweetness';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSweetnessGetSweetnessGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSweetnessGetSweetnessGet$Plain$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Sweetness>> {

    const rb = new RequestBuilder(this.rootUrl, SweetnessService.ApiSweetnessGetSweetnessGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Sweetness>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSweetnessGetSweetnessGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSweetnessGetSweetnessGet$Plain(params?: {
    Id?: number;
  }): Observable<Sweetness> {

    return this.apiSweetnessGetSweetnessGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Sweetness>) => r.body as Sweetness)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSweetnessGetSweetnessGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSweetnessGetSweetnessGet$Json$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Sweetness>> {

    const rb = new RequestBuilder(this.rootUrl, SweetnessService.ApiSweetnessGetSweetnessGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Sweetness>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSweetnessGetSweetnessGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSweetnessGetSweetnessGet$Json(params?: {
    Id?: number;
  }): Observable<Sweetness> {

    return this.apiSweetnessGetSweetnessGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Sweetness>) => r.body as Sweetness)
    );
  }

  /**
   * Path part for operation apiSweetnessGetSweetnessListGet
   */
  static readonly ApiSweetnessGetSweetnessListGetPath = '/api/Sweetness/getSweetnessList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSweetnessGetSweetnessListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSweetnessGetSweetnessListGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Sweetness>>> {

    const rb = new RequestBuilder(this.rootUrl, SweetnessService.ApiSweetnessGetSweetnessListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Sweetness>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSweetnessGetSweetnessListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSweetnessGetSweetnessListGet$Plain(params?: {
  }): Observable<Array<Sweetness>> {

    return this.apiSweetnessGetSweetnessListGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Sweetness>>) => r.body as Array<Sweetness>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSweetnessGetSweetnessListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSweetnessGetSweetnessListGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Sweetness>>> {

    const rb = new RequestBuilder(this.rootUrl, SweetnessService.ApiSweetnessGetSweetnessListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Sweetness>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSweetnessGetSweetnessListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSweetnessGetSweetnessListGet$Json(params?: {
  }): Observable<Array<Sweetness>> {

    return this.apiSweetnessGetSweetnessListGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Sweetness>>) => r.body as Array<Sweetness>)
    );
  }

}
