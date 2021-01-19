import colorize from 'json-colorizer'
import chalk from 'chalk'
import app from './src/app.js'

const {getByPath, userInfo, veryImportantStuff, setVeryImportantUserState} = app()

userInfo.setCurrentUser({ mail: 'assaf.gannon@walkme.com', name: 'Assaf Gannon' })
try {
    setVeryImportantUserState()
    console.log(colorize(JSON.stringify({
        currentUser: getByPath('currentUser'),
        importantUser: getByPath('importantUser')
    }, null, 4), {
        colors: {
            STRING_KEY: 'yellow',
            STRING_LITERAL: 'green',
        }
    }))
} catch(ERROR) {
    console.log(chalk.hex('#ff0000')('#'.repeat(45)))
    console.log(colorize({ERROR}, {
        colors: {
            STRING_KEY: '#FF0000',
        }
    }))
    console.log(chalk.hex('#ff0000')('#'.repeat(45)))
}
