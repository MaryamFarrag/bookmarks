
export interface Repo {
    id:number;
    name: string;
    owner: {login:string};
    stargazers_count: number;
}
  
export interface CardsListProps {
repos:   Repo[];
}