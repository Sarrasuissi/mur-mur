import data from "../../data/Actualites-mur-mur.json";
import getBlogsBySlugCategory from "../../lib/getBlogsBySlugCategory";
// import { Metadata } from 'react-metadata';
type Props = {
    params: { slug: string[] };
  };
  export async function generateStaticParams() {
    const slugTab: { slug: string[] }[] = [];
    await data?.allBlogs.map(async (category) => {
      await category?.blogsItems?.map(async (data) => {
        slugTab.push({
          slug: [category.slugCategory, data.slugPage],
        });
      });
    });
  
     return slugTab;
  }
  export default async function CardActualites(      ) {
    let params = { slug: [] };


    const blog = await getBlogsBySlugCategory(
      data.allBlogs,
      String(params.slug[1]),
      String(params.slug[0])
      
    );
   
    return(
        <div className="w-defaultwidth m-auto bg-neutral-600 max-w-mwidth1">
          
            {/* {data.allBlogs.map((item,index)=>(
                <div className="" key={index}>
                    {item.blogsItems.map((e,i)=>(
                        <div className="" key={i}>
                            <h1 className='text-[#ff4c2e] '>{e.title}</h1>
                            <div className="flex">
                                <p>par {e.user} |</p><p>{e.date} | </p><p>{item.category} | </p><p>{e.comments} commentaires</p>
                            </div>
                            <div className="pt-7">
                     <img className='' src={`/assets/images/${e.img}` } alt={e.title} title={e.title} />
                     {e.listDesc.map((inter,index)=>(<div className="" key={index}>
                        <p>{inter.desc}</p>
                        <h2>{inter.title}</h2>
                        <h3>{inter.title1}</h3>
                     </div>
                     ))}
                        </div>
                        </div>
                    ))}
                
                </div>

            ))} */}
        return <div>{params.slug.join(' / ')}</div>;
          <h1 className='text-[#ff4c2e] '>{blog.title}</h1>
                            <div className="flex">
                                <p>par {blog.user} |</p><p>{blog.date} | </p><p>{blog.category} | </p><p>{blog.comments} commentaires</p>
                            </div>
                            <div className="pt-7">
                     <img className='' src={`/assets/images/${blog.img}` } alt={blog.title} title={blog.title} />
        </div>
         </div>
    )
  }