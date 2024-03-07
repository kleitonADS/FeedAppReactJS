import { Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function hanndleLikeComment() {
        setLikeCount(likeCount + 1)
    }

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
                            <button onClick={handleDeleteComment} title='Deletar commentário'>
                                <Trash size={24}/>
                            </button>
                        </header>
                        <p>{content}</p>
                    </div>
                    <footer>
                        <button onClick={hanndleLikeComment}>
                            <ThumbsUp/>
                         Aplaudir <span>{likeCount}</span>
                        </button>
                        
                    </footer>
                </div>
        </div>
    )
}