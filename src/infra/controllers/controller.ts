import { HttpRequest, HttpResponse } from "../web/http";

export interface Controller<Req, Res> {
  execute(request: HttpRequest<Req>): Promise<HttpResponse<Res>>;
}
