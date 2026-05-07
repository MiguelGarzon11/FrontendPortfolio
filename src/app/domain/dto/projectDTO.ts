export interface ProjectDTO {
    title: string,
    description: string,
    tech: string[],
    url: string,
    type: TypePlatform,
    github: string,
    tag: string
}

export enum TypePlatform {
    Android,
    IOS,
    Web,
    Back
} 