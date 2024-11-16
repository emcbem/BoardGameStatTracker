import { useUserContext } from "../../authentication/hooks/useUserContext"
import { LoginPage } from "../../authentication/ui/LoginPage";
import { BoardGameCard } from "../../board-game/ui/BoardGameCard";


export const ViewCollection = () => {
    const user = useUserContext();

    if(!user.user)
    {
        return <LoginPage></LoginPage>
    }

    return (
        <div className="max-w-5xl mx-auto my-10 px-4">
            <h1 className="text-4xl font-bold text-darkness-800 text-center mb-8">
                Your Board Game Collection
            </h1>
            <p className="text-darkness-600 text-center mb-12">
                Explore all your collected games in one place!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                {user.user.collectionItems.map((item, index) => (
                    <div key={index} className="transition-transform transform hover:scale-105">
                        <BoardGameCard boardGame={item.boardGame} />
                    </div>
                ))}
            </div>
        </div>
    );
}
