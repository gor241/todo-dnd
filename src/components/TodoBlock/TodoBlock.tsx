import React from 'react';
import styles from './TodoBlock.module.css';
import basketIcon from './basket.svg';
import updateIcon from './update.svg';

export default function TodoBlock() {
    return (
        <div className={styles.blockContainer}>
            <div className={styles.blockButtons}>
                <button className={styles.buttonBlock}>
                    <img
                        className={styles.imgBlock}
                        src={basketIcon}
                        alt="Корзина"
                    />
                </button>
                <button className={styles.buttonBlock}>
                    <img
                        className={styles.imgBlock}
                        src={updateIcon}
                        alt="Иконка обновления"
                    />
                </button>
            </div>
            {/* Доделать модуль развёртывания тудушек */}
        </div>
    );
}
