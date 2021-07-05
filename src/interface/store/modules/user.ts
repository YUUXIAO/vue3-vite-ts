export interface userInfo{
    nickName: string,
	age: number
}

export default interface userState{
    isLogin: boolean,
	userInfo: userInfo
}