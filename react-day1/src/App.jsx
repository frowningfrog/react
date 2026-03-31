import './App.css';
import Header from './components/Header';
import Post from './components/Post';

function App() {

  const posts = [
    {
      username: "async_await_dev",
      favoriteColor: "royalblue",
      body: "Spent way too long debugging a null pointer… turns out it was a typo.",
      likes: 42
    },
    {
      username: "refactor_king",
      favoriteColor: "slategray",
      body: "Refactored my API layer today. Way less duplication now.",
      likes: 18
    },
    {
      username: "stack_overflowed",
      favoriteColor: "forestgreen",
      body: "Coding after a workout hits different. Brain feels sharper.",
      likes: 27
    },
    {
      username: "mvp_shipper",
      favoriteColor: "darkorange",
      body: "Built a quick MVP this weekend. Amazing how fast you can move with the right stack.",
      likes: 35
    },
    {
      username: "tailwind_tweaker",
      favoriteColor: "hotpink",
      body: "Tweaked my Tailwind config for better spacing scales. UI feels cleaner.",
      likes: 21
    },
    {
      username: "query_optimizer",
      favoriteColor: "teal",
      body: "Finally optimized that slow query. Indexes are magic.",
      likes: 30
    },
    {
      username: "early_commit",
      favoriteColor: "goldenrod",
      body: "5am coding session = zero distractions and peak productivity.",
      likes: 12
    },
    {
      username: "mono_repo_guy",
      favoriteColor: "crimson",
      body: "Switched to a monorepo setup. Not sure how I feel yet.",
      likes: 39
    },
    {
      username: "feature_sprinter",
      favoriteColor: "mediumpurple",
      body: "Shipped a feature in one day that I thought would take a week.",
      likes: 25
    },
    {
      username: "clean_code_dev",
      favoriteColor: "black",
      body: "Deleted 300 lines of code today. Best feeling ever.",
      likes: 16
    }
  ];

  return (
    <div>
      <Header />
      {posts.map((post) => (
        <Post
          key={post.username}
          username={post.username}
          favoriteColor={post.favoriteColor}
          body={post.body}
        />
      ))}
    </div>
  )
}

export default App
