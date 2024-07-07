import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import './p.css'

export const Form = () => {

  
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name required"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).required(),
    confirmPass:yup.string().oneOf([yup.ref("password"),null],"Password Don't Match").required(),
  })
  const {register, handleSubmit , formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = (data) => {
    console.log(data)
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")}/>
      <p>{errors.fullName?.message}</p>
      <input type="email" placeholder="Email..." {...register("email")}/>
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")}/>
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password..." {...register("password")}/>
      <p>{errors.password?.message}</p>
      <input type="password" placeholder="Confirm Passwod..." {...register("confirmPass")}/>
      <p>{errors.confirmPass?.message}</p>
      <input type="submit"/>
    </form>
  )
}