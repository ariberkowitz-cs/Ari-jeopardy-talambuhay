import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What month was I born in?',
        answer: 'April',
    },
    {
        points: 200,
        question:
            'What instrument did I play as a kid?',
        imgSrc: "https://cdn.britannica.com/34/4034-050-91EE1BCF/Flag-Myanmar.jpg",
        answer: 'piano',
    },
    {
        points: 300,
        question:
            'Which country is this (Hint: Lord of the Rings)?',
        answer: 'New Zealand',
    },
    {
        points: 400,
        question: 'Which state am I from?',
        answer: 'Maryland',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'What school sports team do I play on?',
            imgSrc: '/soccerfield.png',
            answer: 'soccer',
        },
        {
            points: 200,
            question:
                'What is my favorite class? (after CS of course)',
            imgSrc: 'https://cdn.theatlantic.com/thumbor/vdmIsSsIP0jWO1PldrrXwYRU1Yo=/0x104:1102x724/720x405/media/img/mt/2015/03/RossBetsy_1/original.jpg',
            answer: 'History',
        },
        {
            points: 300,
            question: 'What is my favorite day of the week?',
            imgSrc: '/snl.png',
            answer: 'Saturday',
        },
        {
            points: 400,
            question:
                'Who is this?',
            imgSrc:
                "https://www.regencychess.co.uk/blog/wp-content/uploads/Magnus-Carlsen-2.webp",
            answer: 'Magnus Carlsen',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What year will I graduate?',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: '2028',
    },
    {
        points: 200,
        question:
            'What instrument will I play this year in band?',
        imgSrc: 'https://www.aforkstale.com/wp-content/uploads/how-to-make-homemade-tahini-1200-x-1200.jpg',
        answer: 'saxophone',
    },
    {
        points: 300,
        question: 'Which programming language do I want to learn after Java?',
        imgSrc: '/programming_language.png',
        answer: 'c',
    },
    {
        points: 400,
        question:
            'What language do I want to learn after spanish?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'French',
    }
]);


const categories = [
    {
        title: `Ari's Past`,
        questions: pastQuestions
    },
    {
        title: `Ari's Present`,
        questions: presentQuestions
    },
    {
        title: "Ari's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}