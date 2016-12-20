import { h1 } from "@cycle/dom/lib";

function renderOpinionCountBox(opinion: "pozytywnych" | "negatywnych", quantity: number) {
    return h1(`Ilość ${opinion} opini to: ${quantity}`);
}

export default renderOpinionCountBox;
