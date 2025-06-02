export declare global {

    interface ContentItem {
        icon: string,
        title: string,
        description: string
    }

    interface NavItem {
        url: string,
        icon?: string,
        name: string
    }

    interface CardItem {
        id: string
        title: string,
        icon: string,
        description: string,
        contentItems: ContentItem[],
        createdAt: Date
    }

    interface Experience {
        title: string,
        date: string,
        description: string,
        skills: string[],
        url: string
    }

    interface Skill {
        category: {
            title: string
        },
        skills: string[]
    }

    interface APIResponse<T> {
        result: T
    }
    type ImageItemProp = {
        imageUrl: string;
        title: string;
    }
}
