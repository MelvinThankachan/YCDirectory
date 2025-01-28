import SearchForm from "../../components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  console.log("query: ", query);
  const posts = [
    {
      _createdAt: "yesterday",
      views: 100,
      _id: "1",
      description: "This is description",
      author: { _id: 1 },
      image: "https://picsum.photos/",
      category: "Robots",
      title: "We"
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid"></ul>
      </section>
    </>
  );
};

export default Home;
