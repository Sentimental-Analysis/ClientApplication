import { HTTPSource } from '@cycle/http/lib';
import { Stream } from 'xstream';
import { VNode } from "@cycle/dom";
import { DOMSource } from "@cycle/dom/xstream-typings";

export interface ISources {
    dom: DOMSource;
    http: HTTPSource;
}

export interface ISinks {
    dom: Stream<VNode>;
}