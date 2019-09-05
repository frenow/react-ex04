import React from 'react';
import { Item } from './item';

export function home() {
    return(
        <>
         <div>
            <h1>Amazing redux store</h1> 
            <div>
            <Item />
            </div>
          </div>
        </>
        );
}