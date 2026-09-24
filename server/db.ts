import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What month is Earth day in',
        answer: 'April', // this is my birthday
    },
    {
        points: 200,
        question:
            'Which composer composed fur elise?',
        imgSrc: "/beethoven.png", // beethoven picture
        answer: 'beethoven', // I played piano as a kid (moonlight sonata) was my favorite piece
    },
    {
        points: 300,
        question:
            'Which country is this (Hint: Lord of the Rings)?',
        imgSrc: "/newzealand.png", // new zealand picture
        answer: 'New Zealand', // my family went here in new zealand a few years ago
    },
    {
        points: 400,
        question: 'Which college has this as its mascot?',
        imgSrc: "https://stanforddaily.com/wp-content/uploads/2014/12/maryland-logo.jpg", // turtle picture
        answer: 'university of Maryland', // I am from maryland and have been to many sporting events here
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'What is the most popular sport in the world?',
            imgSrc: '/soccerfield.png',
            answer: 'soccer', // I play soccer at HM.
        },
        {
            points: 200,
            question:
                'What is my favorite class? (after CS of course)',
            imgSrc: 'https://cdn.theatlantic.com/thumbor/vdmIsSsIP0jWO1PldrrXwYRU1Yo=/0x104:1102x724/720x405/media/img/mt/2015/03/RossBetsy_1/original.jpg', // us history picture
            answer: 'History', // I like history and cs... idk what else to say here
        },
        {
            points: 300,
            question: 'What is my favorite day of the week?',
            imgSrc: '/snl.png', // snl picture
            answer: 'Saturday', // self explanitory
        {
            points: 400,
            question:
                'Who is this?',
            imgSrc:
                "https://www.regencychess.co.uk/blog/wp-content/uploads/Magnus-Carlsen-2.webp", // magnus carlsen picture
            answer: 'Magnus Carlsen', // I like to play chess, Magnus carlsen is the best chess player of all time.
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'When is the next leap year?',
        imgSrc:
            "https://t4.ftcdn.net/jpg/12/78/66/47/360_F_1278664775_tW7QUm1nWdWvo8aMpWFVCrzUj075ZUcI.jpg", // graduation hat picture
        answer: '2028', // I am graduating in 2028.
    },
    {
        points: 200,
        question:
            'What musical instrument was sold in an auction for $144,500?',
        imgSrc: 'https://t3.ftcdn.net/jpg/00/87/58/44/360_F_87584445_ZmgbO9P17348IFEU5sorviDx5n4HmL1C.jpg', // band picture
        answer: 'saxophone', // I play saxophone in band
    },
    {
        points: 300,
        question: 'Which programming language was developed by Dennis Ritchie in 1972?',
        imgSrc: '/c.png', // C hello world picture
        answer: 'c', // I want to learn C after java
    },
    {
        points: 400,
        question:
            'What is the most visited country in the world?',
        imgSrc:
            "https://images.wsj.net/im-970824?width=1280&size=1", // france soccer team picture
        answer: 'France', // I want to learn french after spanish
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