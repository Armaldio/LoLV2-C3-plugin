"use strict";
{
    C3.Plugins.LoLv2.Exps = {
        GetLanguageValue(key)
        {
            return "" + this.langData.lang[key];
        },

        RawQuestions()
        {
            return JSON.stringify(this.rawQuestions)
        },

        QuestionId()
        {
            return "" + this.currentQuestion.questionId
        },

        Stem()
        {
            return this.currentQuestion.stem
        },

        StemBeforeImage()
        {
            const expValue =
                (this.currentQuestion && this.currentQuestion.before) ? this.currentQuestion.before : "";

            return expValue
        },

        StemAfterImages()
        {
            const expValue =
                (this.currentQuestion && this.currentQuestion.after) ? this.currentQuestion.after : "";

            return expValue
        },

        ImageURL()
        {
            const expValue =
                (this.currentQuestion && this.currentQuestion.imageURL) ? this.currentQuestion.imageURL : "";

            return expValue;
        },

        Alternative1Id()
        {
            return "" + this.currentQuestion.alternatives[0].alternativeId
        },

        Alternative1Text()
        {
            return this.currentQuestion.alternatives[0].text
        },

        Alternative2Id()
        {
            return "" + this.currentQuestion.alternatives[1].alternativeId
        },

        Alternative2Text()
        {
            return this.currentQuestion.alternatives[1].text
        },

        Alternative3Id()
        {
            return "" + this.currentQuestion.alternatives[2].alternativeId
        },

        Alternative3Text()
        {
            return this.currentQuestion.alternatives[2].text
        },

        Alternative4Id()
        {
            return "" + this.currentQuestion.alternatives[3].alternativeId
        },

        Alternative4Text()
        {
            return this.currentQuestion.alternatives[3].text
        },

        CorrectAlternativeId()
        {
            return "" + this.currentQuestion.correctAlternativeId
        }
    };
}