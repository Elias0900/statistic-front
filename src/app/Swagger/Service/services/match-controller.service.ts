/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { MatchDto } from '../models/match-dto';

@Injectable({
  providedIn: 'root',
})
export class MatchControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tousLesMatchs
   */
  static readonly TousLesMatchsPath = '/api/match';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tousLesMatchs()` instead.
   *
   * This method doesn't expect any request body.
   */
  tousLesMatchs$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MatchDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.TousLesMatchsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MatchDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tousLesMatchs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tousLesMatchs(params?: {
    context?: HttpContext
  }
): Observable<Array<MatchDto>> {

    return this.tousLesMatchs$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MatchDto>>) => r.body as Array<MatchDto>)
    );
  }

  /**
   * Path part for operation modifierMatch
   */
  static readonly ModifierMatchPath = '/api/match';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierMatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierMatch$Response(params: {
    context?: HttpContext
    body: MatchDto
  }
): Observable<StrictHttpResponse<MatchDto>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.ModifierMatchPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MatchDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `modifierMatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierMatch(params: {
    context?: HttpContext
    body: MatchDto
  }
): Observable<MatchDto> {

    return this.modifierMatch$Response(params).pipe(
      map((r: StrictHttpResponse<MatchDto>) => r.body as MatchDto)
    );
  }

  /**
   * Path part for operation newMatch
   */
  static readonly NewMatchPath = '/api/match';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newMatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newMatch$Response(params: {
    context?: HttpContext
    body: MatchDto
  }
): Observable<StrictHttpResponse<MatchDto>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.NewMatchPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MatchDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `newMatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newMatch(params: {
    context?: HttpContext
    body: MatchDto
  }
): Observable<MatchDto> {

    return this.newMatch$Response(params).pipe(
      map((r: StrictHttpResponse<MatchDto>) => r.body as MatchDto)
    );
  }

  /**
   * Path part for operation suppression1
   */
  static readonly Suppression1Path = '/api/match/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suppression1()` instead.
   *
   * This method doesn't expect any request body.
   */
  suppression1$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.Suppression1Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `suppression1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suppression1(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.suppression1$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
