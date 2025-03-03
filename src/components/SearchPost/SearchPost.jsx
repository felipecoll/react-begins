import { useState, useEffect } from "react"


const SearchPost = () => {

    const [query, setQuery] = useState('')
    const [posts, setPost] = useState([])

    useEffect(() => {
              fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
                .then(response => response.json())
                .then(data => setPost(data))
                .catch(error => console.error(error))
            }, [query])
        
  return (
    <div>
        <h1>Listado de post</h1>

        <input type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
        />
        <ul>
            {
            posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))
            }
        </ul>


    </div>
  )
}

export default SearchPost