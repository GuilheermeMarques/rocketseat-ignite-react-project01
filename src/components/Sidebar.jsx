import { PencilLine } from "phosphor-react";

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <asides className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1618389041494-8fab89c3f22b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://github.com/GuilheermeMarques.png' />

                <strong>Guilherme Marques</strong>
                <span>Web Developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </asides>
    );
}