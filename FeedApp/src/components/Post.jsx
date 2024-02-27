import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src="https://avatars.githubusercontent.com/u/16235503?v=4" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Kleiton Souza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time 
                    title='11 de feb às 15:30h' 
                    dateTime='20224-02-21 15:13:30'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala developers </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt libero harum quae molestiae dicta enim fugiat aut ratione aperiam in, esse voluptatibus nulla tempora soluta nemo, dolorem tempore ullam.,/</p>
                <p>
                    <a href="#">link project</a>{' '}
                    
                </p>
                <p>
                    <a href="#">#ReactJS </a>
                    <a href="#">#RocketSeat </a>
                    <a href="#">#Javascript </a>

                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}