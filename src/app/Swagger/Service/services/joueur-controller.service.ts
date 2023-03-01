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

import { JoueurDto } from '../models/joueur-dto';

@Injectable({
  providedIn: 'root',
})
export class JoueurControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tousLesJoueurs
   */
  static readonly TousLesJoueursPath = '/api/joueur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tousLesJoueurs()` instead.
   *
   * This method doesn't expect any request body.
   */
  tousLesJoueurs$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<JoueurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, JoueurControllerService.TousLesJoueursPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<JoueurDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tousLesJoueurs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tousLesJoueurs(params?: {
    context?: HttpContext
  }
): Observable<Array<JoueurDto>> {

    return this.tousLesJoueurs$Response(params).pipe(
      map((r: StrictHttpResponse<Array<JoueurDto>>) => r.body as Array<JoueurDto>)
    );
  }

  /**
   * Path part for operation modifierJoueur
   */
  static readonly ModifierJoueurPath = '/api/joueur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierJoueur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierJoueur$Response(params: {
    context?: HttpContext
    body: JoueurDto
  }
): Observable<StrictHttpResponse<JoueurDto>> {

    const rb = new RequestBuilder(this.rootUrl, JoueurControllerService.ModifierJoueurPath, 'put');
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
        return r as StrictHttpResponse<JoueurDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `modifierJoueur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierJoueur(params: {
    context?: HttpContext
    body: JoueurDto
  }
): Observable<JoueurDto> {

    return this.modifierJoueur$Response(params).pipe(
      map((r: StrictHttpResponse<JoueurDto>) => r.body as JoueurDto)
    );
  }

  /**
   * Path part for operation newJoueur
   */
  static readonly NewJoueurPath = '/api/joueur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newJoueur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newJoueur$Response(params: {
    context?: HttpContext
    body: JoueurDto
  }
): Observable<StrictHttpResponse<JoueurDto>> {

    const rb = new RequestBuilder(this.rootUrl, JoueurControllerService.NewJoueurPath, 'post');
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
        return r as StrictHttpResponse<JoueurDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `newJoueur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newJoueur(params: {
    context?: HttpContext
    body: JoueurDto
  }
): Observable<JoueurDto> {

    return this.newJoueur$Response(params).pipe(
      map((r: StrictHttpResponse<JoueurDto>) => r.body as JoueurDto)
    );
  }

  /**
   * Path part for operation findById1
   */
  static readonly FindById1Path = '/api/joueur/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JoueurDto>> {

    const rb = new RequestBuilder(this.rootUrl, JoueurControllerService.FindById1Path, 'get');
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
        return r as StrictHttpResponse<JoueurDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: {
    id: number;
    context?: HttpContext
  }
): Observable<JoueurDto> {

    return this.findById1$Response(params).pipe(
      map((r: StrictHttpResponse<JoueurDto>) => r.body as JoueurDto)
    );
  }

  /**
   * Path part for operation suppression2
   */
  static readonly Suppression2Path = '/api/joueur/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suppression2()` instead.
   *
   * This method doesn't expect any request body.
   */
  suppression2$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, JoueurControllerService.Suppression2Path, 'delete');
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
   * To access the full response (for headers, for example), `suppression2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suppression2(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.suppression2$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
