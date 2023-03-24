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
export class PdfControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation totalPdf
   */
  static readonly TotalPdfPath = '/api/pdf/total/{joueurId}/{matchId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `totalPdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalPdf$Response(params: {
    joueurId: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, PdfControllerService.TotalPdfPath, 'get');
    if (params) {
      rb.path('joueurId', params.joueurId, {});
      rb.path('matchId', params.matchId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/octet-stream',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `totalPdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  totalPdf(params: {
    joueurId: number;
    matchId: number;
  },
  context?: HttpContext

): Observable<Blob> {

    return this.totalPdf$Response(params,context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
