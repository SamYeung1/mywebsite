import React from 'react';

export function ProductCard({
                                children,
                                cardItem
                            }: {
    children?: React.ReactNode,
    cardItem: CardItem,

}) {
    return <div className={'bg-white text-primary rounded-lg shadow-sm overflow-hidden'}>
        <div className={'flex items-start'}>
            <img className={'w-32 h-32 object-cover'} src={cardItem.icon} alt={''}/>
            <div className={'flex flex-col justify-center p-4'}>
                            <span className={'text-left font-bold pb-2'}>
                                {cardItem.title}
                            </span>
                <span className={'text-left text-gray-500'}>
                               {cardItem.description}
                </span>

            </div>
        </div>
    </div>
}
