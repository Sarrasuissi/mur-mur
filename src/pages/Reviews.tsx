import React from 'react'
import dataAvis from "../data/avis.json";

import AllBlogs from '../components/AllBlogs/AllBlogs';
import FormReviews from '../components/FormReviews/FormReviews';

function page() {
  return (
    <div>
        <div className="w-defaultwidth m-auto lg:max-w-mwidth2 max-w-[800px]">
        <div className="grid lg:grid-cols-3 lg:gap-14">
            <div className="col-span-2 mt-10 flex">
                <FormReviews/>
            </div>
            <div className="col-span-1">
            <AllBlogs data={dataAvis.avis} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default page