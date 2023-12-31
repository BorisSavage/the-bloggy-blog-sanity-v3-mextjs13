import PostThumbnailElement from "./PostThumbnailElement";

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-x-10 gap-y-16 px-10 pb-24 pt-10 sm:grid-cols-2">
        {posts.map((post, index) => {
          return (
            <PostThumbnailElement
              isFirst={index === 0}
              key={post._id}
              post={post}
              route={`/post/${post?.slug?.current}`}
            />
          );
        })}
      </div>
    </div>
  );
}
