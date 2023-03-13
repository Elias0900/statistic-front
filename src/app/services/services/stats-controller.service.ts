/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {StatsDto} from '../models/stats-dto';

@Injectable({
  providedIn: 'root',
})
export class StatsControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tousLesStats
   */
  static readonly TousLesStatsPath = '/api/stats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tousLesStats()` instead.
   *
   * This method doesn't expect any request body.
   */
  tousLesStats$Response(params?: {},
                        context?: HttpContext
  ): Observable<StrictHttpResponse<Array<StatsDto>>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.TousLesStatsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StatsDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tousLesStats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tousLesStats(params?: {},
               context?: HttpContext
  ): Observable<Array<StatsDto>> {

    return this.tousLesStats$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StatsDto>>) => r.body as Array<StatsDto>)
    );
  }

  /**
   * Path part for operation modifierStats
   */
  static readonly ModifierStatsPath = '/api/stats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierStats()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierStats$Response(params: {
                           id: number;
                           body: StatsDto
                         },
                         context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.ModifierStatsPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierStats$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierStats(params: {
                  id: number;
                  body: StatsDto
                },
                context?: HttpContext
  ): Observable<StatsDto> {

    return this.modifierStats$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation findByJoueurId
   */
  static readonly FindByJoueurIdPath = '/api/stats/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByJoueurId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByJoueurId$Response(params: {
                            id: number;
                          },
                          context?: HttpContext
  ): Observable<StrictHttpResponse<Array<StatsDto>>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.FindByJoueurIdPath, 'get');
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
        return r as StrictHttpResponse<Array<StatsDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByJoueurId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByJoueurId(params: {
                   id: number;
                 },
                 context?: HttpContext
  ): Observable<Array<StatsDto>> {

    return this.findByJoueurId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StatsDto>>) => r.body as Array<StatsDto>)
    );
  }

  /**
   * Path part for operation newStats
   */
  static readonly NewStatsPath = '/api/stats/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newStats()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newStats$Response(params: {
                      id: number;
                      body: StatsDto
                    },
                    context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.NewStatsPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `newStats$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newStats(params: {
             id: number;
             body: StatsDto
           },
           context?: HttpContext
  ): Observable<StatsDto> {

    return this.newStats$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation suppression
   */
  static readonly SuppressionPath = '/api/stats/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suppression()` instead.
   *
   * This method doesn't expect any request body.
   */
  suppression$Response(params: {
                         id: number;
                       },
                       context?: HttpContext
  ): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.SuppressionPath, 'delete');
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
        return (r as HttpResponse<any>).clone({body: parseFloat(String((r as HttpResponse<any>).body))}) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `suppression$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suppression(params: {
                id: number;
              },
              context?: HttpContext
  ): Observable<number> {

    return this.suppression$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation troispoints
   */
  static readonly TroispointsPath = '/api/stats/match/{eid}/troispoints/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `troispoints()` instead.
   *
   * This method doesn't expect any request body.
   */
  troispoints$Response(params: {
                         id: number;
                         eid: number;
                       },
                       context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.TroispointsPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `troispoints$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  troispoints(params: {
                id: number;
                eid: number;
              },
              context?: HttpContext
  ): Observable<StatsDto> {

    return this.troispoints$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation rebondOff
   */
  static readonly RebondOffPath = '/api/stats/match/{eid}/rebondoff/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rebondOff()` instead.
   *
   * This method doesn't expect any request body.
   */
  rebondOff$Response(params: {
                       id: number;
                       eid: number;
                     },
                     context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.RebondOffPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rebondOff$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rebondOff(params: {
              id: number;
              eid: number;
            },
            context?: HttpContext
  ): Observable<StatsDto> {

    return this.rebondOff$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation rebondDeff
   */
  static readonly RebondDeffPath = '/api/stats/match/{eid}/rebonddeff/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rebondDeff()` instead.
   *
   * This method doesn't expect any request body.
   */
  rebondDeff$Response(params: {
                        id: number;
                        eid: number;
                      },
                      context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.RebondDeffPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rebondDeff$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rebondDeff(params: {
               id: number;
               eid: number;
             },
             context?: HttpContext
  ): Observable<StatsDto> {

    return this.rebondDeff$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation tirRate
   */
  static readonly TirRatePath = '/api/stats/match/{eid}/rateproche/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tirRate()` instead.
   *
   * This method doesn't expect any request body.
   */
  tirRate$Response(params: {
                     id: number;
                     eid: number;
                   },
                   context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.TirRatePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tirRate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tirRate(params: {
            id: number;
            eid: number;
          },
          context?: HttpContext
  ): Observable<StatsDto> {

    return this.tirRate$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation rateTroispoints
   */
  static readonly RateTroispointsPath = '/api/stats/match/{eid}/rateloin/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rateTroispoints()` instead.
   *
   * This method doesn't expect any request body.
   */
  rateTroispoints$Response(params: {
                             id: number;
                             eid: number;
                           },
                           context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.RateTroispointsPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rateTroispoints$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rateTroispoints(params: {
                    id: number;
                    eid: number;
                  },
                  context?: HttpContext
  ): Observable<StatsDto> {

    return this.rateTroispoints$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation passe
   */
  static readonly PassePath = '/api/stats/match/{eid}/passe/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `passe()` instead.
   *
   * This method doesn't expect any request body.
   */
  passe$Response(params: {
                   id: number;
                   eid: number;
                 },
                 context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.PassePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `passe$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  passe(params: {
          id: number;
          eid: number;
        },
        context?: HttpContext
  ): Observable<StatsDto> {

    return this.passe$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation lfRate
   */
  static readonly LfRatePath = '/api/stats/match/{eid}/lfrate/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `lfRate()` instead.
   *
   * This method doesn't expect any request body.
   */
  lfRate$Response(params: {
                    id: number;
                    eid: number;
                  },
                  context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.LfRatePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `lfRate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  lfRate(params: {
           id: number;
           eid: number;
         },
         context?: HttpContext
  ): Observable<StatsDto> {

    return this.lfRate$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation lf
   */
  static readonly LfPath = '/api/stats/match/{eid}/lf/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `lf()` instead.
   *
   * This method doesn't expect any request body.
   */
  lf$Response(params: {
                id: number;
                eid: number;
              },
              context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.LfPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `lf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  lf(params: {
       id: number;
       eid: number;
     },
     context?: HttpContext
  ): Observable<StatsDto> {

    return this.lf$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation interceptions
   */
  static readonly InterceptionsPath = '/api/stats/match/{eid}/inter/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interceptions()` instead.
   *
   * This method doesn't expect any request body.
   */
  interceptions$Response(params: {
                           id: number;
                           eid: number;
                         },
                         context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.InterceptionsPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `interceptions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interceptions(params: {
                  id: number;
                  eid: number;
                },
                context?: HttpContext
  ): Observable<StatsDto> {

    return this.interceptions$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation faute
   */
  static readonly FautePath = '/api/stats/match/{eid}/fautes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `faute()` instead.
   *
   * This method doesn't expect any request body.
   */
  faute$Response(params: {
                   id: number;
                   eid: number;
                 },
                 context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.FautePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `faute$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  faute(params: {
          id: number;
          eid: number;
        },
        context?: HttpContext
  ): Observable<StatsDto> {

    return this.faute$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation ajoutdeuxpoints
   */
  static readonly AjoutdeuxpointsPath = '/api/stats/match/{eid}/deuxpoints/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajoutdeuxpoints()` instead.
   *
   * This method doesn't expect any request body.
   */
  ajoutdeuxpoints$Response(params: {
                             id: number;
                             eid: number;
                           },
                           context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.AjoutdeuxpointsPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajoutdeuxpoints$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ajoutdeuxpoints(params: {
                    id: number;
                    eid: number;
                  },
                  context?: HttpContext
  ): Observable<StatsDto> {

    return this.ajoutdeuxpoints$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation contres
   */
  static readonly ContresPath = '/api/stats/match/{eid}/contres/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contres()` instead.
   *
   * This method doesn't expect any request body.
   */
  contres$Response(params: {
                     id: number;
                     eid: number;
                   },
                   context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.ContresPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contres$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contres(params: {
            id: number;
            eid: number;
          },
          context?: HttpContext
  ): Observable<StatsDto> {

    return this.contres$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation bp
   */
  static readonly BpPath = '/api/stats/match/{eid}/bp/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bp()` instead.
   *
   * This method doesn't expect any request body.
   */
  bp$Response(params: {
                id: number;
                eid: number;
              },
              context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.BpPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('eid', params.eid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bp(params: {
       id: number;
       eid: number;
     },
     context?: HttpContext
  ): Observable<StatsDto> {

    return this.bp$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

  /**
   * Path part for operation findById
   */
  static readonly FindByIdPath = '/api/stats/stat/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
                      id: number;
                    },
                    context?: HttpContext
  ): Observable<StrictHttpResponse<StatsDto>> {

    const rb = new RequestBuilder(this.rootUrl, StatsControllerService.FindByIdPath, 'get');
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
        return r as StrictHttpResponse<StatsDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
             id: number;
           },
           context?: HttpContext
  ): Observable<StatsDto> {

    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatsDto>) => r.body as StatsDto)
    );
  }

}
