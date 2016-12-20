import { Actions } from "./global";
import { Response, HTTPSource } from "@cycle/http";
import { AppState, Result, Score, Sentiment } from "./score";
import { EMPTY_RESULT, LOADING } from "./consts";

function model(actions: Actions, http: HTTPSource): any {
  return http
    .select("sentiment")
    .flatten()
    .map((res: Response) => {
      const body = res.body as Result<Score>;
      if (body && body.isSuccess) {
        return { message: "Ok", result: body } as AppState;
      }
      return EMPTY_RESULT;
    })
    .startWith(LOADING);
}

export default model;
