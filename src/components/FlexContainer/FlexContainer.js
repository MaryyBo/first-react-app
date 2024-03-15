import React from 'react';

const FlexContainer = (props) => {

    const { children, flexDirection, justifyContent, alignItems } = props
    return (
        <article style={{ display: 'flex', flexDirection: flexDirection, justifyContent: justifyContent, alignContent: alignItems }}>
            {children}
        </article>
    );
}

export default FlexContainer;

/*Створити компоненту FlexContainer, яка відображає всі передані їй елементи як флекс-дітей.
При цьому flex-direction, align-items, justify-content мають передаватись цій компоненті як пропси


Всередині Арр

<FlexContainer flexDirection="row" justifyContent="center" alignItems="stretch">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</FlexContainer>
*/

//  style={{ display: 'flex', flexDirection, justifyContent, alignItems }}> можна скоротити

