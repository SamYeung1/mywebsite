"use client"
import React, {useEffect, useState} from "react";
import {ProductCard} from "@/app/components/product-card";

let cards: CardItem[] = [
    {icon: '/cover.jpg', description: 'AAA', title: 'Wherever App'}
];
export default function MyProjectPage() {
    return <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        {cards.map((card: CardItem, index: number) => (
            <ProductCard key={`production-card_${index}`} cardItem={card}/>))}
    </div>
}
