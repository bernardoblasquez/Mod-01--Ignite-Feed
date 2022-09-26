import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(props){

   const handleDeleteComments = () => {
      props.onDeleteComment(props.content)
   }

   return(
      <div className={styles.comment}>
         <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/4926167?v=4" alt="" />

         <div className={styles.commentBox}>   
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Diego Fernandes</strong>
                     <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">cerca de 1h atrás</time>
                  </div>      
                  <button onClick={handleDeleteComments} title="Deletar comentário">
                     <Trash size={24} />
                  </button>
               </header>
               <p>{props.content}</p>
            </div>
            
            <footer>
               <button>
                  <ThumbsUp />
                  Aplaudir <span>20</span>
               </button>
            </footer>
            </div>
      </div>
   )
}