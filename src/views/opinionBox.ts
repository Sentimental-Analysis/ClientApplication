import renderOpinionCountBox from './opinionCountBox';
import { div, h1 } from "@cycle/dom/lib";
import { opinionToWord } from "../utils/opinios";
import { Score, Sentiment } from "../data/score";

function renderOpinionBox(score: Score) {
    return div(".score", [
        div(".details", [
            div(".row.text", [
                div(".col-md-4.well.nopadding", [
                   renderOpinionCountBox("pozytywnych", score.positiveTweetsQuantity),
                ]),
                div(".col-md-4.well.nopadding", [
                    h1(`Opinia dla klucza ${score.key} to ${opinionToWord(score.sentiment)}`),
                ]),
                div(".col-md-4.well.nopadding", [
                    renderOpinionCountBox("negatywnych", score.negativeTweetsQuantity),
                ]),
            ]),
        ]),
    ]);
};

export default renderOpinionBox;
