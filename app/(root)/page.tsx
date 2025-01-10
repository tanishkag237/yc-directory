import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";


export default async function Home({searchParams}:{
  searchParams:Promise<{query:string}>
}) {
  const query=(await searchParams).query

  const posts=[{
    _createdAt: new Date(),
    views: 100,
    title: "Startup Idea 1",
    description: "This is a description of the startup idea",
    author:{
      _id:1,
      name:"John Doe"
    },
    _id:1,
    image:"https://via.placeholder.com/150",
    category:"Tech"
  }]


  return (
   <>
   <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl !bg-yellow-300 !text-black">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "Latest Pitches"}
        </p>

        <ul className="card_grid mt-7">
        {posts?.length>0 ? 
        posts.map((post: StartupCardType, index: number)=>(
        <StartupCard key={post?._id} post={post}/>
      )):
        (<p className="no-results">No posts found</p>)}
        </ul>

      </section>
   </>
  );
}
