import data from "../data/Actualites-mur-mur.json"

interface BlogsItems{
    id?: number;
    slugPage?: string;
       title?: string;
       user?: string;
       category?: string;
 
     metaData?:{ 
     title?: string;
     description?: string;
   }
       date?: string;
       comments?: number | string;
       img?: string;
    
   
       listDesc?: {
         title?: string;
         subTitle?: string;
         title1?: string;
         desc?: string;
         descWithLink?: { link?: string; desc?: string ; title1?: string; }[];
   
         subList?: {
           title?: string;
           subtitle?: string;
           desc?: string;
           descWithLink?: { link?: string; desc?: string }[];
         }[];
         subListnormal?: {
         title?: string;
 
            desc?: string;
            descWithLink?: { link?: string; desc?: string }[];
             }[];
       }[];
 };

  type allBlogsType = (typeof data.allBlogs)[number];
 
  export default async function getBlogsBySlugCategory(
    objectData: allBlogsType[],
    objectSlug: string,
    objectCategory: string,
  ) {
    let blogData : BlogsItems = {};
    await objectData?.map(async (category) => {
      await category?.blogsItems?.map((item) => {
        if (item?.slugPage === objectSlug && category?.slugCategory === objectCategory) {
          blogData  = item;
        }
      });
    });
    return blogData;
  }