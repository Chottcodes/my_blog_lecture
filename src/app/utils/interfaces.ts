export interface IBlogItems {
    id: number
    userId: number
    publisherName: string
    date: string
    title:string
    image:string
    description: string
    catergory:string
    isPublished: boolean
    isDeleted: boolean
}
//This will be used for our Login & Create acc fetch
export interface IUserInfo {
    username:string
    password:string
}

//This will be used to fetch our User Data id & name
export interface IUserData {
    id: number
    username: string
}
//interface for getting our token
export interface IToken {
    token: string
}
