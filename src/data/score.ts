
export type Nullable<T> = T | null;

export const enum Sentiment {
    Negative,
    Neutral,
    Positive
}

export interface Score {
    readonly keyWords: string[];
    readonly negativeTweetsQuantity: number;
    readonly positiveTweetsQuantity: number;
    readonly sentiment: Sentiment;
}

export interface Result<T> {
    readonly value: Nullable<T>;
    readonly isSuccess: boolean;
    readonly messages: Nullable<string[]>;
}