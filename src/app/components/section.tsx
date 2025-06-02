import React, {Fragment, ReactNode} from "react";

export default function Section({title, children, className}: {
    title: string,
    children: ReactNode,
    className?: string
}) {
    return <div className={className}>
        <h1 className={"section-title mb-8 text-secondary"}>{title}</h1>
        {children}
    </div>
}
