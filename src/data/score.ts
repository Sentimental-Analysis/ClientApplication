
export type Nullable<T> = T | null;

export interface AppState {
    result: Result<Score>;
    message: string;
}

export const enum Sentiment {
    Negative,
    Neutral,
    Positive,
}

export interface Localization {
    readonly latitude: number;
    readonly longitude: number;
}

export interface KeyWord {
    readonly key: string;
    readonly quantity: number;
}

export interface Score {
    readonly keyWords: KeyWord[];
    readonly negativeTweetsQuantity: number;
    readonly positiveTweetsQuantity: number;
    readonly sentiment: Sentiment;
    readonly localizations: Localization[];
    readonly key: string;
}

export interface Result<T> {
    readonly value: Nullable<T>;
    readonly isSuccess: boolean;
    readonly messages: Nullable<string[]>;
}
