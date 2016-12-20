import { AppState, Sentiment } from './score';
export const PortalUrl = "http://138.91.185.214";

export const EMPTY_RESULT: AppState = {
    message: "Brak Danych",
    result: {
        isSuccess: false,
        messages: [],
        value: {
            keyWords: [],
            negativeTweetsQuantity: 0,
            positiveTweetsQuantity: 0,
            sentiment: Sentiment.Neutral,
            key: "",
        },
    },
};

export const LOADING: AppState = {
    message: "Proszę Czekać...",
    result: {
        isSuccess: false,
        messages: [],
        value: {
            keyWords: [],
            negativeTweetsQuantity: 0,
            positiveTweetsQuantity: 0,
            sentiment: Sentiment.Neutral,
            key: "",
        },
    },
};


