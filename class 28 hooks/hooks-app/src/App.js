import { useRef } from "react"

function App() {

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    console.log(name, email, message)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={nameRef}/>
      <input type="text" placeholder="Enter your email" ref={emailRef}/>
      <textarea placeholder="Enter your message" ref={messageRef}/>
      <button type="submit">Submit</button>
    </form>

  )

}

export default App