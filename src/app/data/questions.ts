// src/data/questions.ts
import { Question } from "../types/Question";  // Certifique-se de que o caminho está correto

export const questions: Question[] = [
  {
    question: 'Qual ingrediente não pode faltar?',
    options: [
      'farinha',
      'corante',
      'água',
      'açúcar'
    ],
    answer:1
  },
  {
    question: 'Qual melhor metodo de cozinhar?',
    options: [
        'microondas',
        'fogao',
        'fogueira',
        'lança-chamas'
    ],
    answer:3
}
];