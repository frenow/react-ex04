import React from "react";
import { Item } from './Item';

export const Cart = () => (
    <><h1>Carrinho</h1>
    <button>Remover</button>
    </>
    );



    //configuracao dos componentes que disparam actions
    import { addTodo } from‘../actions'; constmapStateToProps= ({ todoApp }) => ({ todos: todoApp }) exportdefault connect(   mapStateToProps,   { addTodo } )(Component)