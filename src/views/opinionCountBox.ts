import { h2 } from "@cycle/dom/lib";

function renderOpinionCountBox(opinion: "pozytywnych" | "negatywnych", quantity: number) {
    return h2(`Ilość ${opinion} opinii: ${quantity}`);
}

export default renderOpinionCountBox;
