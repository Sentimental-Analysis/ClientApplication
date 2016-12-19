import { Result, Score } from "../data/score";
import { div, hr } from "@cycle/dom/lib";
import inputField from "./inputField";
import renderResultBox from "./resultBox";

function view(state: any) {
    return state.map((result: Result<Score>) =>
        div(".container", [
            inputField(),
            hr(),
            !result.isSuccess ? null : renderResultBox(result.value),
        ]),
    );
}

export default view;
