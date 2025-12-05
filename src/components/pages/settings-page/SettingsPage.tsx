import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styles from './SettingsPage.module.scss';
import { useUserStore } from '../../../store/user.store';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigator = useNavigate();

  const [username, setUsername] = useState('');
  const { addUser } = useUserStore();

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setUsername(value);
  };

  const disabledSubmit = !username.trim();

  const onSubmit = (level: 'eazy' | 'hard') => {
    addUser({ id: Date.now(), name: username, level });
    navigator('/game-board');
  };

  return (
    <div className={styles.container}>
      <div className={styles.settingsCard}>
        <h1>Три в ряд</h1>

        <input
          type="text"
          className={styles.input}
          placeholder="Введите имя"
          value={username}
          onChange={onChangeUsername}
        />

        <p>Выберете уровень сложности</p>
        <button className={styles.btn} onClick={() => onSubmit('eazy')} disabled={disabledSubmit}>
          <div>Простой</div>
        </button>

        <button className={styles.btn} onClick={() => onSubmit('hard')} disabled={disabledSubmit}>
          <div>Сложный</div>
        </button>

        <p>Простой режим - поле 12х12. Цель 40 очков</p>
        <p>Сложный режим - поле 8х8. Цель 50 очков</p>
      </div>
    </div>
  );
};

export default SettingsPage;
