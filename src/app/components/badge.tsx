import React from "react";

export function Badge({title}:{title:string}){
    return <span className={'bg-primary text-white rounded-lg p-2 text-sm'}>{title}</span>
}
