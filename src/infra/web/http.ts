export interface HttpResponse<B> {
  statusCode: number;
  body: B;
}

export interface HttpRequest<B> {
  body: B;
}
