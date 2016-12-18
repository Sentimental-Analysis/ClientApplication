import { Result, Score } from '../data/score';
import { Response } from '@cycle/http/lib/interfaces';
import { HTTPSource } from '@cycle/http/lib';
import Cycle from '@cycle/xstream-run';
import xs from 'xstream';
import debounce from 'xstream/extra/debounce';
import { div, label, input, hr, ul, li, a, makeDOMDriver } from '@cycle/dom';
import { makeHTTPDriver } from '@cycle/http';
import { DOMSource } from "@cycle/dom/xstream-typings";
import { PortalUrl } from "../data/consts";

function httpRequest<T>(source: HTTPSource) {
    return source
        .select("sentiment")
        .flatten()
        .map((res: Response) => {
            const body = res.body as T;
            return body;
        });
}