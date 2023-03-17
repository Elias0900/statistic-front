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

import { EquipeDto } from '../models/equipe-dto';

@Injectable({
  providedIn: 'root',
})
export class EquipeControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAll
   */
  static readonly GetAllPath = '/api/equipe';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<EquipeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, EquipeControllerService.GetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EquipeDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll(params?: {
  },
  context?: HttpContext

): Observable<Array<EquipeDto>> {

    return this.getAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<EquipeDto>>) => r.body as Array<EquipeDto>)
    );
  }

  /**
   * Path part for operation modifierJoueur1
   */
  static readonly ModifierJoueur1Path = '/api/equipe';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierJoueur1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierJoueur1$Response(params: {
    body: EquipeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EquipeDto>> {

    const rb = new RequestBuilder(this.rootUrl, EquipeControllerService.ModifierJoueur1Path, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EquipeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierJoueur1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierJoueur1(params: {
    body: EquipeDto
  },
  context?: HttpContext

): Observable<EquipeDto> {

    return this.modifierJoueur1$Response(params,context).pipe(
      map((r: StrictHttpResponse<EquipeDto>) => r.body as EquipeDto)
    );
  }

  /**
   * Path part for operation nouvelEquipe
   */
  static readonly NouvelEquipePath = '/api/equipe';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nouvelEquipe()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  nouvelEquipe$Response(params: {
    body: EquipeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EquipeDto>> {

    const rb = new RequestBuilder(this.rootUrl, EquipeControllerService.NouvelEquipePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EquipeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nouvelEquipe$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  nouvelEquipe(params: {
    body: EquipeDto
  },
  context?: HttpContext

): Observable<EquipeDto> {

    return this.nouvelEquipe$Response(params,context).pipe(
      map((r: StrictHttpResponse<EquipeDto>) => r.body as EquipeDto)
    );
  }

  /**
   * Path part for operation getById
   */
  static readonly GetByIdPath = '/api/equipe/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EquipeDto>> {

    const rb = new RequestBuilder(this.rootUrl, EquipeControllerService.GetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EquipeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById(params: {
    id: number;
  },
  context?: HttpContext

): Observable<EquipeDto> {

    return this.getById$Response(params,context).pipe(
      map((r: StrictHttpResponse<EquipeDto>) => r.body as EquipeDto)
    );
  }

  /**
   * Path part for operation suppression3
   */
  static readonly Suppression3Path = '/api/equipe/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suppression3()` instead.
   *
   * This method doesn't expect any request body.
   */
  suppression3$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, EquipeControllerService.Suppression3Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `suppression3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suppression3(params: {
    id: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.suppression3$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation extByMatchId
   */
  static readonly ExtByMatchIdPath = '/api/equipe/ext/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `extByMatchId()` instead.
   *
   * This method doesn't expect any request body.
   */
  extByMatchId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EquipeDto>> {

    const rb = new RequestBuilder(this.rootUrl, EquipeControllerService.ExtByMatchIdPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EquipeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `extByMatchId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  extByMatchId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<EquipeDto> {

    return this.extByMatchId$Response(params,context).pipe(
      map((r: StrictHttpResponse<EquipeDto>) => r.body as EquipeDto)
    );
  }

  /**
   * Path part for operation domByMatchId
   */
  static readonly DomByMatchIdPath = '/api/equipe/dom/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `domByMatchId()` instead.
   *
   * This method doesn't expect any request body.
   */
  domByMatchId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EquipeDto>> {

    const rb = new RequestBuilder(this.rootUrl, EquipeControllerService.DomByMatchIdPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EquipeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `domByMatchId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  domByMatchId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<EquipeDto> {

    return this.domByMatchId$Response(params,context).pipe(
      map((r: StrictHttpResponse<EquipeDto>) => r.body as EquipeDto)
    );
  }

}
