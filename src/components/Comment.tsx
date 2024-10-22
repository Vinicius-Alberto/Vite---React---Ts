import {Trash, ThumbsUp } from '@phosphor-icons/react';
import styles from "./Comment.module.css"
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }:CommentProps){
    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function likeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }
    
    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src= "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCMqiEWkLEHDa9XvjoTBPb-M73OZ5sR_7TEoEOXHn7LB7E1gDf"
                alt=""       
            />

            <div className = {styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Jane Doe</strong>
                            <time title="" dateTime="2022-05-11 08:13:30">Cerca de 1h atras</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentario">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={likeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}