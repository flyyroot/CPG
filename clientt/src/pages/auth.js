import React from 'react'
import * as z from 'zod'
import {useForm} from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
const user = z.object({
    username: z.string({required_error:"Username harus diisi"}).max(15,{message:'maksimal username yaitu 15 karakter'}).min(5,{message:'minimal karakter username yaitu 5 karakter'}),
    email : z.string().email({message:'type harus email'}),
    no_telp:z.number().int(),
    timeStamps:z.date().default(()=>{return new Date()}),
    password: z.string().max(15,{message:'maksimal karakter password yaitu 15 karakter'}).min(5,{message:'minimal karakter password yaitu 5 karakter'}),
    konfirmasiPassword : z.string().max(15,{message:'maksimal karakter password yaitu 15 karakter'}).min(5,{message:'minimal karakter password yaitu 5 karakter'})
})
.refine(data=>data.konfirmasiPassword === data.password,{
    message:'Password tidak sama',
    path:['konfirmasiPassword']
})
export default function Auth(){
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver:zodResolver(user)
    })     
    const hasilSubmit = (data)=> {console.log(data)};
    return(
        <div className="auth-grid">
            <div className="signUp">
                <form onSubmit={handleSubmit(hasilSubmit)}>
                    <div className='form-group'>
                        <label name="username">username</label>
                        <input className='form-control' name="username" placeholder="Masukkan username" {...register('username',{required:true})}/>
                        {errors.username?.message && <p>{errors.username?.message}</p>}
                    </div>
                    <div className='form-group'>
                        <label name="email">email</label>
                        <input className='form-control' name="email" placeholder="Masukkan email" {...register('email',{required:true})}/>
                        {errors.email?.message} && <p>{errors.username?.message}</p>
                    </div>
                    <div className='form-group'>
                        <label name="no_telp">no_telp</label>
                        <input className='form-control' name="no_telp" placeholder="Masukkan no_telp" {...register('no_telp',{required:true, valueAsNumber:true})}/>
                        {errors.no_telp?.message && <p>{errors.no_telp?.message}</p>}
                    </div>
                    <div className='form-group'>
                        <label name="password">password</label>
                        <input className='form-control' name="password" placeholder="Masukkan password" {...register('password',{required:true})}/>
                        {errors.password?.message && <p>{errors.password?.message}</p>}
                    </div>
                    <div className='form-group'>
                        <label name="konfirmasiPassword">konfirmasiPassword</label>
                        <input className='form-control' name="konfirmasiPassword" placeholder="Masukkan konfirmasiPassword" {...register('konfirmasiPassword',{required:true})}/>
                        {errors.konfirmasiPassword?.message && <p>{errors.konfirmasiPassword?.message}</p>}
                    </div>
                    <button type="submit">Sign Up</button>
                    
                </form>
            </div>

        </div>
    )
}



