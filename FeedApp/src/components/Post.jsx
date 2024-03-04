import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, publishedAt, content}){
    const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'" ,{locale:ptBR,})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {  locale:ptBR, addSuffix:true,
        
    })

      return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl} 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time 
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}>
                        
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {/* <p>Fala developers </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt libero harum quae molestiae dicta enim fugiat aut ratione aperiam in, esse voluptatibus nulla tempora soluta nemo, dolorem tempore ullam.,/</p>
                <p>
                    <a href="#">link project</a>{' '}
                    
                </p>
                <p>
                    <a href="#">#ReactJS </a>
                    <a href="#">#RocketSeat </a>
                    <a href="#">#Javascript </a>

                </p> */}

                {content.map(line =>{

                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }else if (line.type === 'link'){
                        return <p><a href='#'>{line.content}</a></p>
                    }

                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}