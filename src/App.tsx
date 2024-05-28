import {DataTableDemo} from "@/components/NewLeaderboard.tsx";

function App() {

    return (
        <div className="flex flex-col items-center w-full min-h-[90vh] bg-white">
            <h1 className="scroll-m-20 mt-10 text-4xl font-extrabold tracking-tight lg:text-5xl gradient-text">
                Leaderboard
            </h1>
            <DataTableDemo/>
        </div>

    )
}

export default App
