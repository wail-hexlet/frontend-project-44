import readlineSync from 'readline-sync';

export default function getUserInput(question) {
  return readlineSync.question(question);
}
