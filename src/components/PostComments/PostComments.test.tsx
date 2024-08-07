import { screen, render, fireEvent } from '@testing-library/react'
import PostComment from '.';

// função auxiliar para inserir comentários
function inserirComentario(text: string) {
    const textarea = screen.getByTestId('txt-comment')
    const button = screen.getByTestId('btn-comment')

    fireEvent.change(textarea, { target: { value: text} });
    fireEvent.click(button)
}

//Casos de teste
describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    //Inseri dois comentarios e verifica se foram inseridos na tela
    it('Deve inserir dois comentários', () => {
        render(<PostComment/>);

        //Insere os comentarios na tela
        inserirComentario('Inserindo o primeiro comentario')
        inserirComentario('Inserindo o segundo comentario')

        //Verifica se foram inseridos dois comentarios na tela
        const comments = screen.getAllByTestId('comment')
        expect(comments).toHaveLength(2)
    });
}); 