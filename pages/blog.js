function Blog(props) {
  console.log(props);
  const { data } = props;
  console.log(data);

  return (
    <ul>
      {
        data.map(({id, body, title}) => {
          return (
            <li key={id}>
              <h3>{title}</h3>
              <div>{body}</div>
            </li>
          )
        })
      }
    </ul>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const resData = await res.json();

  if(!resData) {
    return {
      notFound: true
      // redirect: {
      //   destination: "/", 
      //   permanent: false
      // }
    }
  }

  const data = Array.prototype.slice.call(resData, 0, 3);

  return {
    props: {data}
  }
}

export default Blog;