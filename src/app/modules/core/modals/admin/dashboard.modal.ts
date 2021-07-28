

export interface SampleListDetails
{
    first_name:string;
    id:number;
    last_name:string;
    avatar:string;
    email:number;
}

export interface SampleList
{

    data:SampleListDetails[],
    page:number;
    per_page:number;
    total:number;
    total_pages:number;   
}