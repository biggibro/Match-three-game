import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styles from './SettingsPage.module.scss';

const SettingsPage = () => {
  const [username, setUsername] = useState('');

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setUsername(value);
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
        <button className={styles.btn}>
          <div>Простой</div>
        </button>

        <button className={styles.btn}>
          <div>Сложный</div>
        </button>

        <p>Простой режим - поле 12х12. Цель 40 очков</p>
        <p>Сложный режим - поле 8х8. Цель 50 очков. "Одним свапом"</p>
      </div>
    </div>
  );
};

export default SettingsPage;
