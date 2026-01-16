import LeaderBoardCRUDUseCase from '@/useCases/leaderBoardCRUDUseCase'
import Game from './_components/Game'

export default async function Home() {
	const leaderboardUseCase = new LeaderBoardCRUDUseCase()
	const leaderboard = await leaderboardUseCase.readLeaderBoard()

	console.log('LEADERBOARD:', leaderboard)

	return <Game />
}
