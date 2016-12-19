import {Actions} from "./global";
import {Response, HTTPSource} from "@cycle/http";
import {Result, Score, Sentiment} from "./score";
import {LOADING} from "./consts";
/**
 * Created by dominik.kotecki on 19-12-2016.
 */


function model(actions : Actions, http: HTTPSource): null {
    return http.select("sentiment")
        .flatten()
        .map((res: Response) => {
            const body = res.body as Result<Score>;
            return body;
        })
        .startWith(LOADING);
}