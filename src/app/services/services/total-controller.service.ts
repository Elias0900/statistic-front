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

import { TotalDto } from '../models/total-dto';

@Injectable({
  providedIn: 'root',
})
export class TotalControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation totalPoint
   */
  static readonly TotalPointPath = '/api/total/{id}/match/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `totalPoint()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalPoint$Response(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TotalControllerService.TotalPointPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('matchId', params.matchId, {});
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
   * To access the full response (for headers, for example), `totalPoint$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalPoint(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.totalPoint$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation troispoints1
   */
  static readonly Troispoints1Path = '/api/total/troispoints/{id}/match/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `troispoints1()` instead.
   *
   * This method doesn't expect any request body.
   */
  troispoints1$Response(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TotalControllerService.Troispoints1Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('matchId', params.matchId, {});
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
   * To access the full response (for headers, for example), `troispoints1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  troispoints1(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.troispoints1$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation rebond
   */
  static readonly RebondPath = '/api/total/rebond/{id}/match/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rebond()` instead.
   *
   * This method doesn't expect any request body.
   */
  rebond$Response(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TotalControllerService.RebondPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('matchId', params.matchId, {});
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
   * To access the full response (for headers, for example), `rebond$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rebond(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.rebond$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation pourcentageLf
   */
  static readonly PourcentageLfPath = '/api/total/pourcentagelf/{id}/match/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pourcentageLf()` instead.
   *
   * This method doesn't expect any request body.
   */
  pourcentageLf$Response(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TotalControllerService.PourcentageLfPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('matchId', params.matchId, {});
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
   * To access the full response (for headers, for example), `pourcentageLf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pourcentageLf(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.pourcentageLf$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation pourcentage
   */
  static readonly PourcentagePath = '/api/total/pourcentage/{id}/match/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pourcentage()` instead.
   *
   * This method doesn't expect any request body.
   */
  pourcentage$Response(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TotalControllerService.PourcentagePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('matchId', params.matchId, {});
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
   * To access the full response (for headers, for example), `pourcentage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pourcentage(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.pourcentage$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation passe1
   */
  static readonly Passe1Path = '/api/total/passe/{id}/match/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `passe1()` instead.
   *
   * This method doesn't expect any request body.
   */
  passe1$Response(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TotalControllerService.Passe1Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('matchId', params.matchId, {});
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
   * To access the full response (for headers, for example), `passe1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  passe1(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.passe1$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation total
   */
  static readonly TotalPath = '/api/total/joueur/{id}/match/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `total()` instead.
   *
   * This method doesn't expect any request body.
   */
  total$Response(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TotalDto>> {

    const rb = new RequestBuilder(this.rootUrl, TotalControllerService.TotalPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('matchId', params.matchId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TotalDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `total$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  total(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<TotalDto> {

    return this.total$Response(params,context).pipe(
      map((r: StrictHttpResponse<TotalDto>) => r.body as TotalDto)
    );
  }

  /**
   * Path part for operation interception
   */
  static readonly InterceptionPath = '/api/total/inter/{id}/match/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interception()` instead.
   *
   * This method doesn't expect any request body.
   */
  interception$Response(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TotalControllerService.InterceptionPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('matchId', params.matchId, {});
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
   * To access the full response (for headers, for example), `interception$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interception(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.interception$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation deuxpoints
   */
  static readonly DeuxpointsPath = '/api/total/deuxpoints/{id}/match/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deuxpoints()` instead.
   *
   * This method doesn't expect any request body.
   */
  deuxpoints$Response(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TotalControllerService.DeuxpointsPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('matchId', params.matchId, {});
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
   * To access the full response (for headers, for example), `deuxpoints$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deuxpoints(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.deuxpoints$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation contres1
   */
  static readonly Contres1Path = '/api/total/contre/{id}/match/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contres1()` instead.
   *
   * This method doesn't expect any request body.
   */
  contres1$Response(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TotalControllerService.Contres1Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('matchId', params.matchId, {});
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
   * To access the full response (for headers, for example), `contres1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contres1(params: {
    id: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.contres1$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
