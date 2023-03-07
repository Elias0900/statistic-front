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


@Injectable({
  providedIn: 'root',
})
export class MoyenneControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation troispoints2
   */
  static readonly Troispoints2Path = '/api/moyenne/trois/{joueurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `troispoints2()` instead.
   *
   * This method doesn't expect any request body.
   */
  troispoints2$Response(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MoyenneControllerService.Troispoints2Path, 'get');
    if (params) {
      rb.path('joueurId', params.joueurId, {});
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
   * To access the full response (for headers, for example), `troispoints2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  troispoints2(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.troispoints2$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation tir
   */
  static readonly TirPath = '/api/moyenne/shoot/{joueurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tir()` instead.
   *
   * This method doesn't expect any request body.
   */
  tir$Response(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MoyenneControllerService.TirPath, 'get');
    if (params) {
      rb.path('joueurId', params.joueurId, {});
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
   * To access the full response (for headers, for example), `tir$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tir(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.tir$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation rebond1
   */
  static readonly Rebond1Path = '/api/moyenne/rebond/{joueurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rebond1()` instead.
   *
   * This method doesn't expect any request body.
   */
  rebond1$Response(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MoyenneControllerService.Rebond1Path, 'get');
    if (params) {
      rb.path('joueurId', params.joueurId, {});
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
   * To access the full response (for headers, for example), `rebond1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rebond1(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.rebond1$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation avgPoint
   */
  static readonly AvgPointPath = '/api/moyenne/points/{joueurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `avgPoint()` instead.
   *
   * This method doesn't expect any request body.
   */
  avgPoint$Response(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MoyenneControllerService.AvgPointPath, 'get');
    if (params) {
      rb.path('joueurId', params.joueurId, {});
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
   * To access the full response (for headers, for example), `avgPoint$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  avgPoint(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.avgPoint$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation passe2
   */
  static readonly Passe2Path = '/api/moyenne/passe/{joueurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `passe2()` instead.
   *
   * This method doesn't expect any request body.
   */
  passe2$Response(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MoyenneControllerService.Passe2Path, 'get');
    if (params) {
      rb.path('joueurId', params.joueurId, {});
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
   * To access the full response (for headers, for example), `passe2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  passe2(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.passe2$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation lf1
   */
  static readonly Lf1Path = '/api/moyenne/lf/{joueurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `lf1()` instead.
   *
   * This method doesn't expect any request body.
   */
  lf1$Response(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MoyenneControllerService.Lf1Path, 'get');
    if (params) {
      rb.path('joueurId', params.joueurId, {});
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
   * To access the full response (for headers, for example), `lf1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  lf1(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.lf1$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation inter
   */
  static readonly InterPath = '/api/moyenne/inter/{joueurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `inter()` instead.
   *
   * This method doesn't expect any request body.
   */
  inter$Response(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MoyenneControllerService.InterPath, 'get');
    if (params) {
      rb.path('joueurId', params.joueurId, {});
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
   * To access the full response (for headers, for example), `inter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  inter(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.inter$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation deuxpts
   */
  static readonly DeuxptsPath = '/api/moyenne/deux/{joueurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deuxpts()` instead.
   *
   * This method doesn't expect any request body.
   */
  deuxpts$Response(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MoyenneControllerService.DeuxptsPath, 'get');
    if (params) {
      rb.path('joueurId', params.joueurId, {});
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
   * To access the full response (for headers, for example), `deuxpts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deuxpts(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.deuxpts$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation contre
   */
  static readonly ContrePath = '/api/moyenne/contre/{joueurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contre()` instead.
   *
   * This method doesn't expect any request body.
   */
  contre$Response(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, MoyenneControllerService.ContrePath, 'get');
    if (params) {
      rb.path('joueurId', params.joueurId, {});
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
   * To access the full response (for headers, for example), `contre$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contre(params: {
    joueurId: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.contre$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
