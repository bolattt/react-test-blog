### react inline style

```
 <a href="/create"
    style={{
        color: "white",
        backgroundColor: "#f1356d",
        borderRadius: "8px",
    }} 
>
          New Blog
 </a>
```

### centering nav and div

Give max-width to divs and set margin 0 auto

### component return starts with ()

``` 
  return (
    <div className="content">
      <h1>Home</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );

```

### Changing state in parent component from child 
If the child component wants to change the state that is in the parent component, 
we define the function in the parent and pass the  function as props to the child component. That function calls the setState function. 

### install json server 
npx json-server --watch db/data.json --port 8000

### flow 
when the page first loads, useEffect will fetch data 
when data is ready, change the state 
when state is change, dom is re rendered. 

### loader 

When page first loads, loading state starts as true. 
After useEffect fetch the data, set loading to false. 
Changing the state re renders the dom.

### error handling 

Catch block inside fetch will catch network error. 
But to catch errors that are sent back from server, 
we need to check `res.ok` and throw error manually to be able to catch in catch block.

### custom hooks 

Externalized Reuseable logic. It's cleaner and easier to modify. 
File names for Customs Hooks in react need to start with 'use'. Otherwise, it won't work. 

### React Router 

For typical websites, when we browse around the pages, a brand new request is sent to the server. The server will respond and send back a new html page. 

For react website, we only make initial request to the server. Server sends back html and compiled javascript file which controls our react applictaion. From this point on, react and react router takes over the control of the application. 

Initially it's a blank html page. Then reacts injects content using the components. 
When we visit different pages, react router intercepts the request and responds. 

in the app.js top level 
`import { BrowserRouter as Router, Route, Switch } from 'react-router-dom`

Router Swich Routes 


### Router Link 

In nav component

`import { Link } from 'react-router-dom`

Use `<Link to='/create'></Link>` instead of `<a href=''>`. Otherwise, our page will still send a request to server. 

### useEffect cleanup function 

If we visit the home page and quick change to another page, fetch on home page will be still running and try to update the state even though we are now on another pgage. 
To stop fetch, we can use useEffect clean up function.  

create abort controller, and assosicte fetch with it
``` 
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal}  

      })

      .catch((err) => {
        if(err.name === 'AbortError') { 
            console.log(err.message)
        }else{ 
            setIsPending(false)
            setError(err.message);
        }
      
    });

    return () => abortCont.abort()
  
```

If we stop the fetch, fetch throws an error. 

### Route Parameters 

`import { useParams } from "react-router-dom" `

` const { id } = useParams(); `

` return <h1> Blog Details {id } </h1> `

### controlled inputs  (form)

Inputs are controlled by state and setState. 




