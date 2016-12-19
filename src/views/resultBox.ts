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
            h1(`Ilość negatywnych opini to: ${score.negativeTweetsQuantity}`),
            h1(`Ilość pozytywnych opini to: ${score.positiveTweetsQuantity}`),
            ul(".keywords", List.of(...score.keyWords).take(10).map((keyword: KeyWord) =>
                li(".keyword", [
                    p(`${keyword.key} | ${keyword.quantity}`),
                ]),
            ).toArray()),
        ]);
    }
    return h1(message);
}

export default renderResultBox;
