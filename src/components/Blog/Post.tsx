interface PostProps {
  title: string;
  pubDate: string;
  description: string;
}
const Post = ({ title, pubDate, description }: PostProps) => {
  return (
    <>
      <h2 className="text-4xl font-bold text-post-title pb-4 title" >{title}</h2>
      <p className="italic text-gray-200 text-[--date-color] text">{pubDate}</p>
      <p className="markdown text">{description}</p>
    </>
  );
};

export default Post;
