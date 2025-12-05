import { useUserStore } from '../../../store/user.store';
import styles from './GameBoard.module.scss';
import { useNavigate } from 'react-router-dom';

export const GameBoardPage = () => {
  const navigator = useNavigate();

  const { getUser } = useUserStore();
  const user = getUser();
  const isHardLevel = user?.level === 'hard';

  const onSubmit = (path: string) => {
    navigator(`/${path}`);
  };

  // let board: any = [];
  // let items: any = ['Q', 'W', 'E', 'R', 'T', 'Y'];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.btn} onClick={() => onSubmit('settings')}>
          Назад
        </button>
        <button className={styles.btn} onClick={() => onSubmit('leaders')}>
          Таблица лидеров
        </button>
      </div>

      {!isHardLevel ? (
        <div className={styles.main}>
          <p>Привет, {user?.name}.</p>
          <p>Вы выбрали уровень сложности - Простой.</p>
          <p>Поле 12х12. Цель - 40 очков за наименьшее время</p>
          <p>За каждый удаленный с поля предмет, начисляется по одному очку</p>
          <p>Игра закончится, если вы наберете необходимое количество очков или больше</p>
          <button className={styles.btn}>Старт</button>
        </div>
      ) : (
        <div className={styles.main}>
          <p>Привет, {user?.name}.</p>
          <p>Вы выбрали уровень сложности - Сложный.</p>
          <p>Поле 8х8. Цель - 50 очков за наименьшее время, одним свапом</p>
          <p>Oдним свапом - если свап не привел к уничтожению рядов, то поле сбрасывается и очки обнуляются</p>
          <p>За каждый удаленный с поля предмет, начисляется по одному очку</p>
          <p>Игра закончится, если вы наберете необходимое количество очков или больше</p>
          <button className={styles.btn}>Старт</button>
        </div>
      )}

      {/* <div className={styles.gameBoard}>
        {board.map((row: any) => (
          <div key={row.x + row.y}>
            {row.map((cell: any) => (
              <div key={row.x + row.y}>{cell.item}</div>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default GameBoardPage;
