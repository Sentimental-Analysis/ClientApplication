import Cycle from '@cycle/xstream-run';
import xs from 'xstream';
import debounce from 'xstream/extra/debounce';
import { div, label, input, hr, ul, li, a, makeDOMDriver } from '@cycle/dom';
import { makeHTTPDriver } from '@cycle/http';
import { DOMSource } from "@cycle/dom/xstream-typings";
import {PortalUrl} from "../data/consts";

function search(source: DOMSource) {
    return source
            .select(".select")
            .events("input")
            .compose(debounce(500))
            .filter(query => (query as any).length)
            .map(q => ({
                url: `${PortalUrl}/Tweets/`
            }))
}