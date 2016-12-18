import { Sentiment } from '../data/score';
export function opinionToWord(sent: Sentiment) : "Neutralny" | "Pozytwyny" | "Negatywny" {
    switch(sent){
        case Sentiment.Neutral:
            return "Neutralny";
        case Sentiment.Negative:
            return "Negatywny";
        case Sentiment.Positive:
            return "Pozytwyny";
    }
}