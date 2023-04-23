#!/usr/bin/env node
import {getArgs} from "./helpers/args.js";
import {printError, printHelp, printSuccess} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

const saveCity = async (city) => {
    if (!city.length) {
        printError('Not found city')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('City have saved')
    } catch (e) {
        printError(e.message)
    }
}

const saveToken = async (token) => {
    if (!token.length) {
        printError('Not found token')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token have saved')
    } catch (e) {
        printError(e.message)
    }
}

const getForcast = async () => {
    try {
        const weather = await getWeather('Moscow')
        console.log(weather)
    } catch (error) {
        if (error?.response?.status === 404) {
            printError('Не верно указан город')
        } else if (error?.response?.status === 401) {
            printError('Не верный токен')
        } else {
            printError(error.message)
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp(args.h)
    }
    if (args.s) {
        saveCity(args.s)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getForcast()
}

initCLI()

