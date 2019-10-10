"use strict";
{
    C3.Plugins.LoLv2.Acts = {
        LoadProgress(loadProgress)
        {
            this.LoLApi('loadingProgress',
            {
                progress: loadProgress
            });
        },

        CompleteGame()
        {
            this.LoLApi('complete',
            {});
        },

        Progress(progress, maxProgress, score)
        {
            this.LoLApi('progress',
            {
                currentProgress: progress,
                maximumProgress: maxProgress,
                score: score
            });
        },

        AnswerQuestion(answerId)
        {
            this.LoLApi('answer',
            {
                questionId: this.currentQuestion.questionId,
                alternativeId: answerId
            });

            this.currentQuestionIndex++;
            if (this.currentQuestionIndex >= this.rawQuestions.length)
            {
                this.currentQuestionIndex = 0;
            }
            this.currentQuestion = this.rawQuestions[this.currentQuestionIndex];
        },

        SpeakQuestions(questionId)
        {
            LoLApi('speakQuestion',
            {
                questionId: questionId
            });
        },

        SpeakAnswers(answerId)
        {
            this.LoLApi('speakAlternative',
            {
                alternativeId: answerId
            });
        },

        SpeakQuestionAndAnswers(questionId)
        {
            this.LoLApi('speakQuestionAndAlternatives',
            {
                questionId: questionId
            });
        },

        SpeakText(textKey)
        {
            this.LoLApi('speakText',
            {
                key: textKey
            });
        },

        PlaySound(background, looping, filename)
        {
            this.LoLApi('playSound',
            {
                file: filename,
                looping: looping,
                backround: background
            });
        },

        StopSound(filename)
        {
            this.LoLApi('stopSound',
            {
                file: filename
            });
        },

        ConfigureSound(fade, background, foreground)
        {
            this.LoLApi('configureSound',
            {
                foreground: foreground,
                background: background,
                fade: fade
            });
        },

        GameIsReady(resolution = "1024x576", aspectRatio = "16:9")
        {
            this.LoLApi('gameIsReady',
            {
                aspectRatio: aspectRatio,
                resolution: resolution
            });
        }
    };
}