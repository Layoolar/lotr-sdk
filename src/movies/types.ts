export declare type Movie = {
    _id: string
    name: string
    runtimeInMinutes: number
    budgetInMillions: number
    boxOfficeRevenueInMillions: number
    academyAwardNominations: number
    academyAwardWins: number
    rottenTomatoesScore: number
}

export declare type MoviesList = {
    docs: Movie[]
    total: 8
    limit: 1000
    offset: 0
    page: 1
    pages: 1
}