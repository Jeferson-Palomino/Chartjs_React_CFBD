function Post(props: any) {
  return (
    <article className="bg-black border-4 border-black text-white p-4 rounded-xl hover:bg-white hover:text-black hover:border-black hover:border-4 post">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </article>
  );
}

export default Post;
