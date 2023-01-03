import React from 'react'

type Props = {
    title: string,
    content: string,
    commentsQty: number,
    tags: string[];

    category: Category
}

export enum Category {
    JS = "Javascript",
    TS = "Typescript",
    PY = "Python"
}

const Destructuring = ({ title, content, commentsQty, tags, category}: Props) => {
    return (
        <>
            <hr />
            <h4>{title}</h4>
            <p>{content}</p>
            <p>Quantidade de comentarios :{commentsQty}</p>
            {
                tags.map((tag, i) => {
                    return <span>#{tag} <br /></span>
                })
            }
            <h4>Categoria: {category} </h4>
        </>
    )
}

export default Destructuring