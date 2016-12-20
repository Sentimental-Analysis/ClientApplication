import renderOpinionCountBox from "./opinionCountBox";
import { div, h2 } from "@cycle/dom/lib";
import { opinionToWord } from "../utils/opinios";
import { Score, Sentiment } from "../data/score";

function renderOpinionBox(score: Score) {
    return div(".score", [
        div(".details", [
            div(".row.text", [
                div(".col-md-4.well.nopadding.scoreBox", [
                   renderOpinionCountBox("pozytywnych", score.positiveTweetsQuantity),
                ]),
                div(".col-md-4.well.nopadding.scoreBox", [
                    h2(`${opinionToWord(score.sentiment)}`),
                ]),
                div(".col-md-4.well.nopadding.scoreBox", [
                    renderOpinionCountBox("negatywnych", score.negativeTweetsQuantity),
                ]),
            ]),
        ]),
    ]);
};

export default renderOpinionBox;
