import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getALLTodos} from "../Services/actions/todosAction";


export default function Todos() {

  const {todos,isLoading,error}=  useSelector((state) => state);

  const dispacth = useDispatch();

  useEffect(()=>{
    dispacth(getALLTodos());
  },[]);
  


  return (
    <div>
       <h2>Todos App</h2> 
      {isLoading  && <h3>Loading.... </h3> }
      {error  && <h3>{error.message} </h3> }
      <section>
        {todos &&  todos.map( (todo)=>{
            return (
                <article>
                    <h4>{todo.id}</h4>
                    <h4>{todo.title}</h4>

                </article>
            )
        })
        }
         </section>
    </div>
  )
}
