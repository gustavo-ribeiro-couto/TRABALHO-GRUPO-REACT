import React from "react";
import axios from 'axios';


//import { useNavigate } from "react-router-dom";

import Header from "../../Components/Header2";
import "./add.css";

//import { useNavigate  } from 'react-router-dom'; ta fazendo dar errado
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";




const validationPost = yup.object().shape({
    title: yup.string().required("O título do filme é obrigatório").max(50, "O título precisa ter menos de 50 caracteres"),
    year: yup.string().required("O ano de lançamento é obrigatório").max(4, "Formato AAAA").min(4, "Formato AAAA"),
    director: yup.string().required("O nome do diretor é obrigatório").max(20, "O nome precisa ter menos de 20 caracteres"),
    review: yup.string().required("Review obrigatória, gostou ou não do filme?").max(500, "A review precisa ter menosde 500 caracteres")
    
});

function Add() {

 // let navegation = useNavigate () //Faz voltar pra pagina inicial se tiver tudo certo 

  const {register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });  //pra validação, vem do hook form


           // ta errado isso aqui!
  const addPost = data => axios.post("https://jsonplaceholder.typicode.com/posts", data).then(() => {
    console.log("Deu tudo certo")
    //navegation.push("/")
}).catch(() => {
    console.log("DEU ERRADO")
})


  return (
    <div>
      <Header />
      <main>
        <div className="card-post">
          <h1>Assisti hoje</h1>

          <div className="line-post"></div>

          <div className="card-body-post">
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Título</label>
                <input type="text" name="title" {...register("title")} />
                <p className="error-message">{errors.title?.message}</p>
              </div>
              <div className="fields">
                <label>Diretor</label>
                <input type="text" name="director" {...register("director")} />
                <p className="error-message">{errors.director?.message}</p>
              </div>
              <div className="fields">
                <label>Ano de lançamento</label>
                <input type="number" name="year" {...register("year")} />
                <p className="error-message">{errors.year?.message}</p>
              </div>
              <div className="fields">
                <label>Review</label>
                <textarea type="number" name="review" {...register("review")} />
                <p className="error-message">{errors.review?.message}</p>
              </div>
              <div className="btn-post">
                <button type="submit">Adicionar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Add;
