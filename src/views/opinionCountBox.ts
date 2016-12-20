import { div, h1, h2 } from '@cycle/dom/lib';

function renderOpinionCountBox(opinion: "pozytywnych" | "negatywnych", quantity: number) {
    return div([
        h1(`Ilość ${opinion}:`),
        h1(`${quantity}`),
    ]);
}

export default renderOpinionCountBox;
