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

import { Wine } from '../models/wine';

@Injectable({
  providedIn: 'root',
})
export class WineService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiWineGetWineGet
   */
  static readonly ApiWineGetWineGetPath = '/api/Wine/getWine';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWineGetWineGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineGetWineGet$Plain$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Wine>> {

    const rb = new RequestBuilder(this.rootUrl, WineService.ApiWineGetWineGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Wine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWineGetWineGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineGetWineGet$Plain(params?: {
    Id?: number;
  }): Observable<Wine> {

    return this.apiWineGetWineGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Wine>) => r.body as Wine)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWineGetWineGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineGetWineGet$Json$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Wine>> {

    const rb = new RequestBuilder(this.rootUrl, WineService.ApiWineGetWineGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Wine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWineGetWineGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineGetWineGet$Json(params?: {
    Id?: number;
  }): Observable<Wine> {

    return this.apiWineGetWineGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Wine>) => r.body as Wine)
    );
  }

  /**
   * Path part for operation apiWineGetWineListGet
   */
  static readonly ApiWineGetWineListGetPath = '/api/Wine/getWineList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWineGetWineListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineGetWineListGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Wine>>> {

    const rb = new RequestBuilder(this.rootUrl, WineService.ApiWineGetWineListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Wine>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWineGetWineListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineGetWineListGet$Plain(params?: {
  }): Observable<Array<Wine>> {

    return this.apiWineGetWineListGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Wine>>) => r.body as Array<Wine>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWineGetWineListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineGetWineListGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Wine>>> {

    const rb = new RequestBuilder(this.rootUrl, WineService.ApiWineGetWineListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Wine>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWineGetWineListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineGetWineListGet$Json(params?: {
  }): Observable<Array<Wine>> {

    return this.apiWineGetWineListGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Wine>>) => r.body as Array<Wine>)
    );
  }

  /**
   * Path part for operation apiWineAddWinePost
   */
  static readonly ApiWineAddWinePostPath = '/api/Wine/addWine';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWineAddWinePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWineAddWinePost$Plain$Response(params?: {
    body?: Wine
  }): Observable<StrictHttpResponse<Wine>> {

    const rb = new RequestBuilder(this.rootUrl, WineService.ApiWineAddWinePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Wine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWineAddWinePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWineAddWinePost$Plain(params?: {
    body?: Wine
  }): Observable<Wine> {

    return this.apiWineAddWinePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Wine>) => r.body as Wine)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWineAddWinePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWineAddWinePost$Json$Response(params?: {
    body?: Wine
  }): Observable<StrictHttpResponse<Wine>> {

    const rb = new RequestBuilder(this.rootUrl, WineService.ApiWineAddWinePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Wine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWineAddWinePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWineAddWinePost$Json(params?: {
    body?: Wine
  }): Observable<Wine> {

    return this.apiWineAddWinePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Wine>) => r.body as Wine)
    );
  }

  /**
   * Path part for operation apiWineUpdateWinePut
   */
  static readonly ApiWineUpdateWinePutPath = '/api/Wine/updateWine';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWineUpdateWinePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWineUpdateWinePut$Plain$Response(params?: {
    body?: Wine
  }): Observable<StrictHttpResponse<Wine>> {

    const rb = new RequestBuilder(this.rootUrl, WineService.ApiWineUpdateWinePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Wine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWineUpdateWinePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWineUpdateWinePut$Plain(params?: {
    body?: Wine
  }): Observable<Wine> {

    return this.apiWineUpdateWinePut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Wine>) => r.body as Wine)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWineUpdateWinePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWineUpdateWinePut$Json$Response(params?: {
    body?: Wine
  }): Observable<StrictHttpResponse<Wine>> {

    const rb = new RequestBuilder(this.rootUrl, WineService.ApiWineUpdateWinePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Wine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWineUpdateWinePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWineUpdateWinePut$Json(params?: {
    body?: Wine
  }): Observable<Wine> {

    return this.apiWineUpdateWinePut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Wine>) => r.body as Wine)
    );
  }

  /**
   * Path part for operation apiWineDeleteWineDelete
   */
  static readonly ApiWineDeleteWineDeletePath = '/api/Wine/deleteWine';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWineDeleteWineDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineDeleteWineDelete$Plain$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<Wine>> {

    const rb = new RequestBuilder(this.rootUrl, WineService.ApiWineDeleteWineDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Wine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWineDeleteWineDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineDeleteWineDelete$Plain(params?: {
    id?: number;
  }): Observable<Wine> {

    return this.apiWineDeleteWineDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Wine>) => r.body as Wine)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWineDeleteWineDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineDeleteWineDelete$Json$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<Wine>> {

    const rb = new RequestBuilder(this.rootUrl, WineService.ApiWineDeleteWineDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Wine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiWineDeleteWineDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWineDeleteWineDelete$Json(params?: {
    id?: number;
  }): Observable<Wine> {

    return this.apiWineDeleteWineDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Wine>) => r.body as Wine)
    );
  }

}
