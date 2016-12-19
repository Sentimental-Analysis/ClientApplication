import view from "./views/view";
import model from "./data/model";
import { source } from "@cycle/dom/lib";
import { ISinks, ISources } from "./data/global";
import { HTTPSource, makeHTTPDriver } from "@cycle/http/lib";
import { div, label, input, hr, h1, makeDOMDriver, VNode } from "@cycle/dom";
import { run } from "@cycle/xstream-run";
import * as tslib from "tslib";
import intent from "./actions/intent";

function main(sources: ISources): ISinks {
    const dom = sources.dom;
    const http = sources.http;
    const actions = intent(dom);
    const state = model(actions, sources.http);
    const vdom = view(state);

    return {
        dom: vdom,
        http: actions.searchTweet,
    };
}

run(main, {
    dom: makeDOMDriver("#app"),
    http: makeHTTPDriver(),
});
