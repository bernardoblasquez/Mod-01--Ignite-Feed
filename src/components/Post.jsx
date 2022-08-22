import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
   return(
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/4926167?v=4"  alt="" />
               <div className={styles.authorInfo}>
                  <strong>Bernardo Blasquez</strong>
                  <span>Front-end Developer</span>
               </div>
            </div>
            <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">publicado a 1h</time>
         </header>

         <div className={styles.content}>
            <p>Fala pessoal</p>
            <p>
               Finalmente finalizei meu novo site/portfólio. Foi um baita desafio 
               criar todo o design e codar na unha, mas consegui
            </p>
            <p>Acesse e deixe seu feedback <a href="#">devonlane.design</a></p>
         </div>

         <form className={styles.commentForm}>
            <strong>Deixe um comentário</strong>
            <textarea placeholder="Deixe seu comentário"></textarea>

            <footer>
               <button type="submit">Publicar</button>
            </footer>
         </form>

         <div className={styles.commentList}>
            <Comment />
         </div>
         
      </article>
   )
}