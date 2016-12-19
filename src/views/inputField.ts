import { div, input, span } from "@cycle/dom/lib";

function inputField() {
    return div(".row", [
        div(".col-lg-12.nopadding", [
            div(".input-group.input-group-lg", [
                input("#tweet .tweet.input-lg.form-control", { attrs: { type: "text" } }),
                span(".input-group-btn", [
                    input(".tweet .btn.btn-default.btn-lg", { attrs: { type: "submit" } }),
                ]),
            ]),
        ]),
    ]);
};

export default inputField;
