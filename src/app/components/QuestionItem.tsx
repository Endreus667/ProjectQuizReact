import { useState } from "react";
import { Question } from "../types/Question";
type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [check, setCheck] = useState<boolean>(false)

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(key);
            setCheck(true)
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);
                setCheck(false)
            }, 2000);

        }
    }
   
    return (
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question} </div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`flex justify-between border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300
                       
                        ${selectedAnswer !== null ? 'cursor-pointer' : 'hover:opacity-60'}
                        ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-green-300'}
                        ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-300'}
                        `}
                    >
                        {item}
                        {check && selectedAnswer === key && <div className="text-green-500"> ✔ </div>}
                       
                    </div>
                   
                ))}
            </div>
           
        </div>
    )
}