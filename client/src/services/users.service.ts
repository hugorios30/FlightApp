import { DB_API } from "./http.common";

export interface IUser {
    name: string, 
    email: string,
    password: string
  }

  class UsersDataService {
    create(data: IUser){
        return DB_API.post('/users', data)
    }

    getUser(email: string){
        return DB_API.get('/users', {data:{email: email}})
    }
}

export default new UsersDataService();