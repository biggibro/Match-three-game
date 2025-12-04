import { createBrowserRouter } from 'react-router-dom';
import SettingsPage from '../components/pages/settings-page/SettingsPage';
import GameBoardPage from '../components/pages/game-board-page/GameBoard';
import LeaderBoardPage from '../components/pages/leader-board-page/LeaderBoardPage';

export const router = createBrowserRouter([
  { path: '/', element: <SettingsPage /> },
  { path: '/settings', element: <SettingsPage /> },
  { path: '/game-board', element: <GameBoardPage /> },
  { path: '/leaders', element: <LeaderBoardPage /> },
]);
