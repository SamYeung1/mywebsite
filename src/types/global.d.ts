export declare global{
    interface NavItem {
        url:string,
        icon?:string,
        name:string
    }
    interface CardItem{
        title:string,
        icon:string,
        description:string
    }
    interface Experience{
        title:string,
        date:string,
        description:string,
        skills:string[]
    }
    interface Skill{
        category:{
            title:string
        },
        skills:string[]
    }
    interface APIResponse<T>{
        result:T
    }

}
