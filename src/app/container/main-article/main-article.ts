export class MainArticle {
  constructor (
    private id: number,
    private title: string,
    private user: string,
    private category: string,
    private date: string,
    private pretext: string,
    private likes: number,
    private comments: number,
    private views: number,
    private imgUrl: string,
  ) {

  }

}
