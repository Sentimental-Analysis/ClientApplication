import renderKeyWordBox from "./keywordsBox";
import renderOpinionBox from "./opinionBox";
import { opinionToWord } from "../utils/opinios";
import { h1, p } from "@cycle/dom/lib";
import { AppState, KeyWord, Result, Score } from "../data/score";
import { div, ul, li } from "@cycle/dom";
import { List } from "immutable";

function renderResultBox({message, result}: AppState) {
    if (result.isSuccess) {
        const score = result.value;
        return div([
            renderOpinionBox(score),
            renderKeyWordBox(score.keyWords),
        ]);
    }
    return h1(message);
}

export default renderResultBox;
