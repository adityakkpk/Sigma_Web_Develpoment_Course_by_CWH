export default function Page({ params }) {
    
    // throw new Error("Error h");

    // fetch your blog post by its slug
    let languages = ["py","js","cpp","c","cs"]

    if(languages.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    }else {
        return <div>Post not found</div>
    }

  return <div>My Post: {params.slug}</div>;
}
