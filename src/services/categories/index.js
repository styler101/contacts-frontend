import HttpClient from "../utils/HttpClient";

class CategoryService{
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
  }

   getAllCategories(){
    return this.httpClient.get('/categories');
  }
}


export default new CategoryService()
