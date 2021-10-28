// questions 순서도 랜덤으로 할 수 있으면 랜덤으로 하기
// questions을 여러 개 만들고 그 중 몇 개만 랜덤으로 출제되도록 하기
// Prev 버튼 추가하기
// 시간 제한 조정하기
// 세로 정렬
// 시간 눈에 띄게(붉은 색으로 바꾼다거나...), 시간 글씨 예쁘게 또는 바 형태 등으로 모양 바꿔서 출력하기
// 정답 제출 후에 인코딩?을 거쳐서 해시값으로 나오게, 그리고 그 값을 넣으면 어떤 문제에 어떤 답 제출했는지 알 수 있게

Survey
.StylesManager
.applyTheme("modern");

var json = {
title: "NutWhat",
showProgressBar: "bottom",
showTimerPanel: "top",
maxTimeToFinishPage: 10,
maxTimeToFinish: 55,
firstPageIsStarted: true,
startSurveyText: "Start Quiz",
pages: [
    {
        questions: [
            {
                type: "html",
                html: "You are about to start quiz by history. <br/>You have 10 seconds for every page and 55 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "q1",
                title: "잇몸에 피가 났을 때 부족한 비타민 성분은?",
                choicesOrder: "random",
                choices: [
                    "비타민 C", "비타민 D", "비타민 E", "비타민 A"
                ],
                correctAnswer: "비타민 C"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "q2",
                title: "결핍시 구루병, 골연화증, 다공증 등이 발생할 수 있으며 뼈, 치아에 칼슘을 들러붙게 하고 혈액 중 인의 양을 일정하게 하는 기능 및 효능을 가진 비타민은?",
                choicesOrder: "random",
                choices: [
                    "비타민 C", "비타민 D", "비타민 E", "비타민 A"
                ],
                correctAnswer: "비타민 D"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "q3",
                title: "비타민에 대한 설명으로 옳지 않은 것은?",
                choicesOrder: "random",
                choices: [
                    "비타민 과다 섭취 시 문제가 될 수 있다.",
                    "비타민 A가 부족하면 주로 눈에 관련된 병이 많이 생긴다.",
                    "지용성 비타민은 많이 먹어도 몸 속에 쌓이는 경우가 적다.",
                    "비타민의 대부분 몸 속에서 만들어내지 못한다."
                ],
                correctAnswer: "지용성 비타민은 많이 먹어도 몸 속에 쌓이는 경우가 적다."
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "q4",
                title: "단백질 중 체내에서 합정되지 않으므로 식사를 통해 섭취해야하는 아미노산에 해당하는 것은?",
                choicesOrder: "random",
                choices: [
                    "리신",
                    "아르기닌",
                    "알라닌",
                    "티로신"
                ],
                correctAnswer: "리신"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                name: "q5",
                title: "성인 한 끼 식사의 권장 칼로리로 옳은 것은?",
                choicesOrder: "random",
                choices: [
                    "여성 : 100kcal 남성 : 200kcal",
                    "여성 : 300kcal 남성 : 500kcal",
                    "여성 : 700kcal 남성 : 900kcal",
                    "여성 : 1000kcal 남성 : 1200kcal"
                ],
                correctAnswer: "여성 : 700kcal 남성 : 900kcal"
            }
        ]
    }, {
        maxTimeToFinish: 15,
        questions: [
            {
                type: "radiogroup",
                name: "q6",
                title: "Who is not included in Born2cook Team?",
                choicesOrder: "random",
                choices: [
                    "hyeonpar", "seshin", "taehpark", "seungyel"
                ],
                correctAnswer: "seshin"
            }
        ]
    }
],
completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
.onComplete
.add(function (sender) {
    document
        .querySelector('#surveyResult')
        .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
});

survey.render("surveyElement");