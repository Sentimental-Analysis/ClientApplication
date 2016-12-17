import { Stream } from 'xstream';
import { div, label, input, hr, h1, makeDOMDriver, VNode } from "@cycle/dom";
import { DOMSource } from "@cycle/dom/xstream-typings";
import { run } from "@cycle/xstream-run";
import * as tslib from "tslib";
import devounce from "xstream/index/debounce";

interface ISources {
    dom: DOMSource;
}

interface ISinks {
    dom: Stream<VNode>;
}

function main(sources: ISources): ISinks {
    const dom = sources.dom;

    const searchRequest = dom.select(".field").events("input").compose()

    const sinks: ISinks = {
        dom: dom.select(".field").events("input")
            .map((ev: Event) => (ev.target as HTMLInputElement).value)
            .startWith("")
            .map((name: string) =>
                div("#root", [
                    label("Name:"),
                    input(".field", { attrs: { type: "text", value: name } }),
                    hr(),
                    h1(name ? `Hello, ${name}!` : "Hello! Please enter your name..."),
                ])
            )
    };
    return sinks;
}

run(main, {
    dom: makeDOMDriver("#app")
});