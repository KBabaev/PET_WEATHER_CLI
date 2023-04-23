import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error)
}

export const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message)
}

export const printHelp = () => {
    console.log(
        dedent(`${chalk.bgYellow(' HELP ')}
        'Без параметров - вывод погоды'
        '-s [CITY] для установки города'
        '-h для вывода помощи'
        '-s [API_KEY] для сохранения токена'
        `))
}