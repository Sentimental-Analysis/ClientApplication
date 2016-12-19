import search from "./actions/seacrhTweet";
import searchBox from "./views/searchBox";
import { source } from "@cycle/dom/lib";
import { ISinks, ISources } from "./data/global";
import { HTTPSource, makeHTTPDriver } from "@cycle/http/lib";
import { Stream } from "xstream";
import { div, label, input, hr, h1, makeDOMDriver, VNode } from "@cycle/dom";
import { DOMSource } from "@cycle/dom/xstream-typings";
import { run } from "@cycle/xstream-run";
import debounce from "xstream/extra/debounce";
import * as tslib from "tslib";

function main(sources: ISources): ISinks {
    const dom = sources.dom;
    const http = sources.http;
    return {
        dom: searchBox(http),
        http: search(dom),
    };
}

run(main, {
    dom: makeDOMDriver("#app"),
    http: makeHTTPDriver()
});