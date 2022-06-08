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

import { Aroma } from '../models/aroma';

@Injectable({
  providedIn: 'root',
})
export class AromaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAromaGetAromaGet
   */
  static readonly ApiAromaGetAromaGetPath = '/api/Aroma/getAroma';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAromaGetAromaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAromaGetAromaGet$Plain$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Aroma>> {

    const rb = new RequestBuilder(this.rootUrl, AromaService.ApiAromaGetAromaGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Aroma>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAromaGetAromaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAromaGetAromaGet$Plain(params?: {
    Id?: number;
  }): Observable<Aroma> {

    return this.apiAromaGetAromaGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Aroma>) => r.body as Aroma)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAromaGetAromaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAromaGetAromaGet$Json$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Aroma>> {

    const rb = new RequestBuilder(this.rootUrl, AromaService.ApiAromaGetAromaGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Aroma>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAromaGetAromaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAromaGetAromaGet$Json(params?: {
    Id?: number;
  }): Observable<Aroma> {

    return this.apiAromaGetAromaGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Aroma>) => r.body as Aroma)
    );
  }

  /**
   * Path part for operation apiAromaGetAromaListGet
   */
  static readonly ApiAromaGetAromaListGetPath = '/api/Aroma/getAromaList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAromaGetAromaListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAromaGetAromaListGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Aroma>>> {

    const rb = new RequestBuilder(this.rootUrl, AromaService.ApiAromaGetAromaListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Aroma>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAromaGetAromaListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAromaGetAromaListGet$Plain(params?: {
  }): Observable<Array<Aroma>> {

    return this.apiAromaGetAromaListGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Aroma>>) => r.body as Array<Aroma>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAromaGetAromaListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAromaGetAromaListGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Aroma>>> {

    const rb = new RequestBuilder(this.rootUrl, AromaService.ApiAromaGetAromaListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Aroma>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAromaGetAromaListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAromaGetAromaListGet$Json(params?: {
  }): Observable<Array<Aroma>> {

    return this.apiAromaGetAromaListGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Aroma>>) => r.body as Array<Aroma>)
    );
  }

}
