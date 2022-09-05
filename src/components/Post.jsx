import { format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, content, publishedAt}) {
   /* DATE FNS JS
      const options = { 
            day:'2-digit',
            month:'long',
            hour: '2-digit', minute: '2-digit'
      };
      const publishedFormattedDate = Intl.DateTimeFormat('pt-BR', options).format(publishedAt);
   */
  // Date FNS package
   const publishedFormattedDate = format(publishedAt, "dd 'de' LLLL 'às' H:mm'h'",{
      locale:ptBR
   })

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true
   })

   return(
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <Avatar src={author.avatarUrl} />
               <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
               </div>
            </div>
            <time title={publishedFormattedDate} dateTime="2022-05-11 08:13:30">
               {publishedDateRelativeToNow.toString()}
            </time>
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