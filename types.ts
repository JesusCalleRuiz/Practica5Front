export type PeliculaProps = {
    name: string;
    brand: string;
    staticImageUrl: string;
    description: string;
    iso: number;
    formatThirtyFive:boolean;
    formatOneTwenty:boolean;
    color:boolean;
    process:string;
    keyFeatures:KeyFeatures[]
    dataAdded:string;
    __v:number;

  };

  export type KeyFeatures = {
    _id:string;
    feature:string;
  }