import React from 'react';
import Car from './Car';

export default function Databox(props){

    return(
        <div className={'main-box'}>
            <Car Owner={'Haider'} CarName={'City'}/>
            <Car Owner={'Kashif'} CarName={'Alto'}/>
            <Car Owner={'Bilal'} CarName={'Ferrari'}/>
        </div>
    );

}