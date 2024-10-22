import {PencilLine} from '@phosphor-icons/react';


import styles from "./Sidebar.module.css";
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover}
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        
        <div className={styles.profile}>
            <Avatar src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCMqiEWkLEHDa9XvjoTBPb-M73OZ5sR_7TEoEOXHn7LB7E1gDf" />

            <strong>Vinicius</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
        </footer>
        </aside>
    );
}