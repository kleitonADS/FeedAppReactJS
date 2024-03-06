import { Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

export function Comment({content}) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/16235503?v=4"/>
                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}> 
                                <strong>Kleiton Azevedo</strong>
                                <time 
                                    title='11 de Maio às 08:13h'
                                    dateTime='20233-02-25'>
                                    Cerca de 1 hr atrás
                                </time>
                            </div>
                            <button title='Deletar commentário'>
                                <Trash size={24}/>
                            </button>
                        </header>
                        <p>{content}</p>
                    </div>
                    <footer>
                        <button>
                            <ThumbsUp/>
                         Aplaudir <span>20</span>
                        </button>
                        
                    </footer>
                </div>
        </div>
    )
}