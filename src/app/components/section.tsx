import React, {Fragment, ReactNode} from "react";

export default function Section({title, children}: { title: string, children: ReactNode }) {
    return <div><h1 className={'text-2xl text-primary font-bold'}>{title}</h1>
        <div className={'mt-4'}>{children}</div>
    </div>
}
