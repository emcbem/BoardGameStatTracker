export const FriendsKeys = {
    friends: ["friends"] as const,
    FromUser: (userId: number) => [userId, ...FriendsKeys.friends] as const
}