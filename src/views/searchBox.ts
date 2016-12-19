import { span } from "@cycle/dom/lib";
import { Result, Score, Sentiment } from "../data/score";
import { div,  hr, input} from "@cycle/dom";
import { Response } from "@cycle/http/lib/interfaces";
import { HTTPSource } from "@cycle/http/lib";
import renderResultBox from "./resultBox";

function searchBox(source: HTTPSource) {
    return source
        .select("sentiment")
        .flatten()
        .map((res: Response) => {
            const body = res.body as Result<Score>;
            return body;
        })
        .startWith({
            isSuccess: false,
            messages: [],
            value: {
                keyWords: [],
                negativeTweetsQuantity: 0,
                positiveTweetsQuantity: 0,
                sentiment: Sentiment.Neutral,
            },
        } as Result<Score>)
        .map((result: Result<Score>) =>
            div(".container", [
                div(".row", [
                    div(".col-lg-12.nopadding", [
                        div(".input-group.input-group-lg", [
                            input("#tweet .tweet.input-lg.form-control", { attrs: { type: "text" } }),
                            span(".input-group-btn", [
                                input(".tweet .btn.btn-default.btn-lg", { attrs: { type: "submit" } }),
                            ]),
                        ]),
                    ]),
                ]),
                hr(),
                !result.isSuccess ? null : renderResultBox(result.value),
            ]),
    );
}

export default searchBox;
