import { h1 } from "@cycle/dom/lib";
import { opinionToWord } from "../utils/opinios";
import { Score, Sentiment } from "../data/score";

function renderOpinionBox(score: Score) {
    return h1(`Opinia dla klucza ${score.key} to ${opinionToWord(score.sentiment)}`);
};

export default renderOpinionBox;
