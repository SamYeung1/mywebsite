import React from 'react';

export function ProductCard({
                                children,
                                cardItem
                            }: {
    children?: React.ReactNode,
    cardItem: CardItem,

}) {
    return <div className={'bg-white text-primary rounded-lg shadow overflow-hidden'}>

            <img className={'w-full object-cover h-64'} src={cardItem.icon} alt={''}/>
            <div className={'flex flex-col p-4'}>
                            <span className={'text-2xl font-bold pb-2'}>
                                {cardItem.title}
                            </span>
                <span className={'font-normal text-gray-400 truncate'}>
                               {cardItem.description}
                </span>
            </div>
    </div>
}
