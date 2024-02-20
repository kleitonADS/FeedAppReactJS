import styles from './Header.module.css';
import logoIgnite from '../assets/logo-Ignite.svg'
 

 export function Header(){
    return(
        <header className={styles.header}>
            <img src={logoIgnite} alt="Logotipo do Ignite" />
        </header>
    )
}