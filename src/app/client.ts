export interface Client {
    name: string
    lastName: string
    age: number
    birthDate: Date
}

export interface ClientListResults {
    clients: Client[]
}

export interface ClientStats {
    average: number
    standardDeviation: number
}