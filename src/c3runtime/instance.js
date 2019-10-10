"use strict";
{
    C3.Plugins.LoLv2.Instance = class LolV2Instance extends C3.SDKInstanceBase
    {
        constructor(inst, properties)
        {
            super(inst);

            console.log(inst)

            const dummyAlternatives = [
            {
                text: 'blu<b>e</b>',
                alternativeId: '1'},
            {
                text: 'gr<i>e</i>en',
                alternativeId: '2'},
            {
                text: 'r<b>e</b>d',
                alternativeId: '3'},
            {
                text: 'c<b><i>ya</i></b>n',
                alternativeId: '4'}
            ];

            const dummyQuestion = {
                questionId: '1',
                stem: 'What <b>is</b> <i>your</i> favorite color?[IMAGE]<b>Seriously</b>?',
                before: 'What <b>is</b> <i>your</i> favorite color?',
                after: '<b>Seriously</b>?',
                correctAlternativeId: '1',
                alternatives: dummyAlternatives,
                imageURL: null
            };

            this.splitStems = (questions) => {
                for (var ctr = 0; ctr < questions.length; ctr++)
                {
                    const question = questions[ctr];

                    const pattern = /([^\[\]]*)?(\[\S*\])?([^\[\]]*)?/;
                    const matches = pattern.exec(question.stem);

                    question.before = (matches[1]) ? matches[1] : "";
                    question.after = (matches[3]) ? matches[3] : "";
                }
            }

            this.propagateQuestions = (rawQuestions) => {
                this.rawQuestions = rawQuestions;
                splitStems(rawQuestions);

                if (rawQuestions.length === 0)
                {
                    rawQuestions.push(dummyQuestion);
                }
                this.currentQuestionIndex = 0;
                this.currentQuestion = rawQuestions[0];
            }

            this.LoLApi = async(messageName, payloadObj) => {
                console.log('posting to dom', messageName, payloadObj)
                console.log(this.PostToDOM);
                const resp = await this.PostToDOMAsync('*',
                {
                    message: messageName,
                    payload: JSON.stringify(payloadObj)
                });
                console.log('resp', resp);
            }

            this.langData = {
                lang: {}
            }

            this.rawQuestions = [];
            this.rawQuestions.push(dummyQuestion);

            this.currentQuestionIndex = 0;
            this.currentQuestion = dummyQuestion;

            this.AddDOMMessageHandler("message", (msg) => {
                console.log('message received', msg)

                const
                {
                    messageName,
                    payload
                } = msg.data;

                if (msg.data.messageName == "language")
                {
                    this.langData.lang = JSON.parse(msg.data.payload);
                    this.Trigger(C3.Plugins.LoLv2.Cnds.OnLanguage)
                }

                if (msg.data.messageName == "questions")
                {

                    var tq = JSON.parse(msg.data.payload);

                    this.propagateQuestions(tq.questions);

                    this.Trigger(C3.Plugins.LoLv2.Cnds.OnQuestions)
                }

                if (msg.data.messageName == "pause")
                {
                    this.Trigger(C3.Plugins.LoLv2.Cnds.OnPause)
                }

                if (msg.data.messageName == "resume")
                {
                    this.Trigger(C3.Plugins.LoLv2.Cnds.OnResume)
                }
            });


            if (properties)
            {}
        }

        Release()
        {
            super.Release();
        }

        SaveToJson()
        {
            return {
                // data to be saved for savegames
            };
        }

        LoadFromJson(o)
        {
            // load state for savegames
        }

        GetDebuggerProperties()
        {
            return [
            {
                title: "LolV2",
                properties: [
                    //{name: ".current-animation",	value: this._currentAnimation.GetName(),	onedit: v => this.CallAction(Acts.SetAnim, v, 0) },
                ]
            }];
        }
    };
}