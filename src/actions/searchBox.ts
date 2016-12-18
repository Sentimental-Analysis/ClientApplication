import { opinionToWord } from '../utils/opinios';
import { h1, p } from '@cycle/dom/lib';
import { KeyWord, Result, Score, Sentiment } from '../data/score';
import { Response } from '@cycle/http/lib/interfaces';
import { HTTPSource } from '@cycle/http/lib';
import Cycle from '@cycle/xstream-run';
import xs from 'xstream';
import debounce from 'xstream/extra/debounce';
import { div, label, input, hr, ul, li, a, makeDOMDriver } from '@cycle/dom';
import { makeHTTPDriver } from '@cycle/http';
import { DOMSource } from "@cycle/dom/xstream-typings";
import { PortalUrl } from "../data/consts";
import {List} from 'immutable';

function searchBox(source: HTTPSource) {
    const a = List.of([1,2,3]).map(x =>x )
    return source
        .select("sentiment")
        .flatten()
        .map((res: Response) => {
            const body = res.body as Result<Score>;
            return body;
        })
        .startWith({ isSuccess: false, messages: [], value: { keyWords: [], negativeTweetsQuantity: 0, positiveTweetsQuantity: 0, sentiment: Sentiment.Neutral } } as Result<Score>)
        .map((result: Result<Score>) =>
            div([
                label(".label", "Search"),
                input('.field', { attrs: { type: 'text' } }),
                hr(),
                !result.isSuccess ? null : div([
                    h1(`Opinia dla klucza ${result.value.key} to ${opinionToWord(result.value.sentiment)}`),
                    h1(`Ilość negatywnych opini to: ${result.value.negativeTweetsQuantity}`),
                    h1(`Ilość pozytywnych opini to: ${result.value.positiveTweetsQuantity}`),
                    ul('.keywords', List.of(...result.value.keyWords).take(10).map(keyword =>
                        li('.keyword', [
                            p(`${keyword.key} | ${keyword.quantity}`)
                        ])
                    ).toArray())
                ])
            ])
        );
}

export default searchBox;