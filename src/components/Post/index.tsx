import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src="https://static3.tcdn.com.br/img/img_prod/460977/carrinho_miniatura_replica_batmovel_batmobile_batman_1989_escala_1_32_dc_comics_86741_1_2d327ff0d2e74d959112a93444ca2da5.jpeg" alt='imagem do post'/>
        <p className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;