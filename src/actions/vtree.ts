import { h1 } from '@cycle/dom/lib';
import { Result, Score, Sentiment } from '../data/score';
import { Response } from '@cycle/http/lib/interfaces';
import { HTTPSource } from '@cycle/http/lib';
import Cycle from '@cycle/xstream-run';
import xs from 'xstream';
import debounce from 'xstream/extra/debounce';
import { div, label, input, hr, ul, li, a, makeDOMDriver } from '@cycle/dom';
import { makeHTTPDriver } from '@cycle/http';
import { DOMSource } from "@cycle/dom/xstream-typings";
import { PortalUrl } from "../data/consts";

function form(source: HTTPSource) {
    return source
        .select("sentiment")
        .flatten()
        .map((res: Response) => {
            const body = res.body as Result<Score>;
            return body;
        })
        .startWith({ isSuccess: false, messages: [], value: { keyWords: [], negativeTweetsQuantity: 0, positiveTweetsQuantity: 0, sentiment: Sentiment.Neutral } } as Result<Score>)
        .filter((res: Result<Score>) => res.isSuccess)
        .select((result: Result<Score>) => 
            div([
                label(".label", "Search"), 
                input(".field", { type: "text" }), 
                hr(),
                h1("result", result.value.sentiment )
            ])
            );
}