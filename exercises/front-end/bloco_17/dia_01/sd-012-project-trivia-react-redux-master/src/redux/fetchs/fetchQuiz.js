import { fetchingQuiz, getQuiz } from '../actions';

const decodeResults = (questions) => {
  const decoded = questions
    .map(({
      category,
      type,
      difficulty,
      question,
      correct_answer: correct,
      incorrect_answers: incorrects,
    }) => ({
      category: atob(category),
      type: atob(type),
      difficulty: atob(difficulty),
      question: atob(question),
      correct_answer: atob(correct),
      incorrect_answers: incorrects.map((incorrect) => atob(incorrect)),
    }));
  return decoded;
};

const fetchQuiz = ({ token, amount, id, difficulty, type }) => {
  const types = { 'multiple choice': 'multiple', 'true/false': 'boolean' };
  const typeSelected = type === 'any type' ? '' : `&type=${types[type]}`;
  const diffSelected = difficulty === 'any difficulty' ? '' : `&difficulty=${difficulty}`;
  console.log(amount);
  const URL = `https://opentdb.com/api.php?category=${id}${diffSelected}${typeSelected}&amount=${amount}&token=${token}&encode=base64`;
  console.log(URL);
  return async (dispatch) => {
    dispatch(fetchingQuiz());
    const response = await fetch(URL);
    const { results } = await response.json();
    console.log(results);
    dispatch(getQuiz(decodeResults(results)));
  };
};

export default fetchQuiz;
