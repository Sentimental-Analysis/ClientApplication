import { Actions } from "./global";
import { Response, HTTPSource } from "@cycle/http";
import { Result, Score, Sentiment } from "./score";
import { EMPTY_RESULT, LOADING } from "./consts";

function model(actions: Actions, http: HTTPSource): any {
  return http.select("sentiment")
    .flatten()
    .merge(actions.queryChange.filter((query: any) => query.length === 0).map(EMPTY_RESULT))
    .map((res: Response) => {
      const body = res.body as Result<Score>;
      return body;
    })
    .startWith(EMPTY_RESULT);
}

export default model;
