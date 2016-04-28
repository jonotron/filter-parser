import chrono from 'chrono-node'
import wholeMonth from 'chrono-refiner-wholemonth'

export default replaceDates

const parser = new chrono.Chrono
parser.refiners.push(wholeMonth)

function replaceDates(str) {
  let result = str

  for (let match of parser.parse(str)) {
    let start = match.start.date().toISOString()
    let end = match.end.date().toISOString()
    let dateText = `dateBetween(start, "${start}", "${end}")`
    result = result.replace(match.text, dateText)
  }

  return result
}