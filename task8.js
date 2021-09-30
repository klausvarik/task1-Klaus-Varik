const movieData = require('./moviedata.json')

movieData.map(movie => {
    movie.Year = +movie.Year
    movie.imdbRating = +movie.imdbRating
    movie.imdbVotes = +(movie.imdbVotes.replace(/,/g, ''))
    movie.Actors = movie.Actors.split(', ')
})



//console.log('movie', movieData)
//FUNCTIONS

function findBestRating(array) {
    return array.reduce((previousValue, currentValue) => {
        if (previousValue.imdbRating > currentValue.imdbRating) {
            return previousValue
        } else {
            return currentValue
        }
    })
}

function getRatingText(movie, startingText){
    let string = startingText + ' is '
    string += movie.Title
    string += ', directed by '
    string += movie.Director
    string += ' and was released in '
    string += movie.Released + '.'

    return string
}

function findMostRated(array) {
    return array.reduce((previousValue, currentValue) => {
        if (previousValue.imdbVotes > currentValue.imdbVotes) {
            return previousValue
        } else {
            return currentValue
        }
    })
}

console.log('Ex 1')

const moviesBetween = movieData.filter(movie => {
    if(movie.Year > 1962 && movie.Year < 1972) {
        return movie
    }
})

//console.log('moviesBetween', moviesBetween)

const bestRating = moviesBetween.reduce((previousValue, currentValue) => {
    if (previousValue.imdbRating > currentValue.imdbRating) {
        return previousValue
    } else {
        return currentValue
    }
})

//console.log ('bestRating', bestRating)

const mostRated = moviesBetween.reduce((previousValue, currentValue) => {
    if (previousValue.imdbRating > currentValue.imdbRating) {
        return previousValue
    } else {
        return currentValue
    }
})

//console.log ('mostRated', mostRated)

const bestRatingString = getRatingText(bestRating, 'Best rated movie')
const mostRatedString = getRatingText(mostRated, 'Most rated movie')

console.log(bestRatingString)
console.log(mostRatedString)

console.log('Ex 2')

const includeDrama = movieData.filter(movie => {
    if(movie.Genre.includes('Drama')){
        return movie
    }
})

//console.log ('includeDrama', includeDrama)

const bestRatingDrama = findBestRating(includeDrama)
const mostRatedDrama = findMostRated(includeDrama)

//console.log('bestRatingDrama', bestRatingDrama)
//console.log('mostRatedDrama', mostRatedDrama)

const bestRatingDramaString = getRatingText(bestRatingDrama, 'Best rated drama')
const mostRatedDramaString = getRatingText(mostRatedDrama, 'Most rated drama')

console.log(bestRatingDramaString)
console.log(mostRatedDramaString)

console.log('Ex 3')

const ratedR = movieData.filter(movie => {
    if(movie.Rated === 'R'){
        return movie
    }
})

//console.log('ratedR', ratedR)

const ratedRTitles = ratedR.map(movie => {
    return movie.Title
})

//console.log('ratedRTitles', ratedRTitles)

let ratedRString = 'Movies that are rated R are: '
ratedRString += ratedRTitles.join(', ') + '.'

//console.log(ratedRString)

let actors = []
ratedR.map(movie => {
    movie.Actors.map(actor => {
        actors.push(actor)
    })
})

//console.log('actors', actors)

let uniqueActors = [...new Set(actors)];

//console.log('uniqueActors', uniqueActors)

let actorString = 'Actors that played in those movies: '
actorString += uniqueActors.join(', ') +'.'

console.log(actorString)