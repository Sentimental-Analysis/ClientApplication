import { div, h1, li, p, span, ul } from '@cycle/dom/lib';
import { KeyWord } from "../data/score";
import { List } from "immutable";

function renderKeyWordBox(keyWords: KeyWord[]) {
    return div([
        h1("Słowa kluczowe:"),
        ul(".list-group", List.of(...keyWords).take(10).map((keyword: KeyWord) =>
            li(".list-group-item", [
                keyword.key,
                span(".badge", [
                    keyword.quantity,
                ]),
            ]),
        ).toArray()),
    ]);
}

export default renderKeyWordBox;
