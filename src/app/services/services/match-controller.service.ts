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
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<MatchDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.TousLesMatchsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MatchDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tousLesMatchs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tousLesMatchs(params?: {
  },
  context?: HttpContext

): Observable<Array<MatchDto>> {

    return this.tousLesMatchs$Response(params,context).pipe(
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
    body: MatchDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MatchDto>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.ModifierMatchPath, 'put');
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
        return r as StrictHttpResponse<MatchDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierMatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierMatch(params: {
    body: MatchDto
  },
  context?: HttpContext

): Observable<MatchDto> {

    return this.modifierMatch$Response(params,context).pipe(
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
    body: MatchDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MatchDto>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.NewMatchPath, 'post');
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
        return r as StrictHttpResponse<MatchDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `newMatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newMatch(params: {
    body: MatchDto
  },
  context?: HttpContext

): Observable<MatchDto> {

    return this.newMatch$Response(params,context).pipe(
      map((r: StrictHttpResponse<MatchDto>) => r.body as MatchDto)
    );
  }

  /**
   * Path part for operation ext3
   */
  static readonly Ext3Path = '/api/match/scoreext3pts/{id}/joueur/{jid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ext3()` instead.
   *
   * This method doesn't expect any request body.
   */
  ext3$Response(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.Ext3Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('jid', params.jid, {});
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
   * To access the full response (for headers, for example), `ext3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ext3(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.ext3$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation exterieur
   */
  static readonly ExterieurPath = '/api/match/scoreext2pts/{id}/joueur/{jid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exterieur()` instead.
   *
   * This method doesn't expect any request body.
   */
  exterieur$Response(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.ExterieurPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('jid', params.jid, {});
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
   * To access the full response (for headers, for example), `exterieur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exterieur(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.exterieur$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation extLf
   */
  static readonly ExtLfPath = '/api/match/scoreext1pts/{id}/joueur/{jid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `extLf()` instead.
   *
   * This method doesn't expect any request body.
   */
  extLf$Response(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.ExtLfPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('jid', params.jid, {});
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
   * To access the full response (for headers, for example), `extLf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  extLf(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.extLf$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation domicile3
   */
  static readonly Domicile3Path = '/api/match/scoredomicile3pts/{id}/joueur/{jid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `domicile3()` instead.
   *
   * This method doesn't expect any request body.
   */
  domicile3$Response(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.Domicile3Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('jid', params.jid, {});
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
   * To access the full response (for headers, for example), `domicile3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  domicile3(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.domicile3$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation domicile
   */
  static readonly DomicilePath = '/api/match/scoredomicile2pts/{id}/joueur/{jid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `domicile()` instead.
   *
   * This method doesn't expect any request body.
   */
  domicile$Response(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.DomicilePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('jid', params.jid, {});
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
   * To access the full response (for headers, for example), `domicile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  domicile(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.domicile$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation domicileLf
   */
  static readonly DomicileLfPath = '/api/match/scoredomicile1pts/{id}/joueur/{jid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `domicileLf()` instead.
   *
   * This method doesn't expect any request body.
   */
  domicileLf$Response(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.DomicileLfPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('jid', params.jid, {});
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
   * To access the full response (for headers, for example), `domicileLf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  domicileLf(params: {
    id: number;
    jid: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.domicileLf$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
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
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MatchControllerService.Suppression1Path, 'delete');
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
   * To access the full response (for headers, for example), `suppression1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suppression1(params: {
    id: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.suppression1$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
