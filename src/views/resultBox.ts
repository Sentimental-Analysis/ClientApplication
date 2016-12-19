import { opinionToWord } from "../utils/opinios";
import { h1, p } from "@cycle/dom/lib";
import { Score } from "../data/score";
import { div, ul, li } from "@cycle/dom";
import { List } from "immutable";

function renderResultBox(score: Score) {
    return div([
                    h1(`Opinia dla klucza ${score.key} to ${opinionToWord(score.sentiment)}`),
                    h1(`Ilość negatywnych opini to: ${score.negativeTweetsQuantity}`),
                    h1(`Ilość pozytywnych opini to: ${score.positiveTweetsQuantity}`),
                    ul(".keywords", List.of(...score.keyWords).take(10).map(keyword =>
                        li(".keyword", [
                            p(`${keyword.key} | ${keyword.quantity}`)
                        ])
                    ).toArray())
                ]);
}

export default renderResultBox;