import colorize from 'json-colorizer'
import chalk from 'chalk'
import app from './src/app.js'

debugger
const {DAL, userInfo, veryImportantStuff} = app()

userInfo.setCurrentUser({ mail: 'eli.b@walkme.com', name: 'Eli Blitz' })
try {
  veryImportantStuff.setVeryImportantUserState()
  console.log(colorize(JSON.stringify({
    currentUser: DAL.getByPath('currentUser'),
    importantUser: DAL.getByPath('importantUser')
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
