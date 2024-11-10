export const BoardGameKeys = {
    BoardGames: ["BoardGames"] as const,
    Top50: () => ["Top50", ...BoardGameKeys.BoardGames] as const
}