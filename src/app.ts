import inquirer from 'inquirer';

const chosenNumbers: number[] = [];
const randomNumbers: number[] = [];

const startApp = async (): Promise<void> => {
  do {
    const result = await inquirer.prompt([
      {
        name: 'number',
        type: 'input',
        message: 'enter a number from 1 to 49',
      },
    ]);

    if (validateInput(result.number)) {
      chosenNumbers.push(Math.floor(parseInt(result.number)));
    } else {
      console.log('number must be unique and from 1 to 49');
    }
  } while (chosenNumbers.length < 6);
  do {
    const number: number = Math.floor(Math.random() * 49 + 1);
    if (validateRandomNumber(number)) {
      randomNumbers.push(number);
    }
  } while (randomNumbers.length < 6);

  printResult();
};

const validateInput = (text: string): boolean => {
  const textConvert = parseInt(text);
  if (
    textConvert > 0 && textConvert < 50 && !chosenNumbers.includes(textConvert) ) {
    return true;
  } else
  return false;
};

const validateRandomNumber = (number: number): boolean => {
  if (number > 0 && number < 50 && !randomNumbers.includes(number)) {
    return true;
  } else 
  return false;
};

const countSameNumbers = (): number => {
  let count = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    if (chosenNumbers.includes(randomNumbers[i])) {
      count++;
    }
  }
  return count;
};

const printResult = (): void => {
  const wylosowane = randomNumbers.toString();
  console.log('yours numbers '+randomNumbers.sort((a,b)=> a > b ? 1:-1));
  console.log('drawn numbers '+chosenNumbers.sort((a,b)=> a > b ? 1:-1));
  console.log(`You have ${countSameNumbers()} correct numbers`);
};

startApp();
