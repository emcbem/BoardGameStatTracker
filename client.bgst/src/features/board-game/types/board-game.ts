export interface BoardGame {
    id: number,
    title: string,
    imageUrl: string,
    maxPlayers: number,
    minPlayers: number,
    minEstimatedPlayTimeMinutes: number,
    maxEstimatedPlayTimeMinutes: number,
    datePublished: Date
}