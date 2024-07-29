const InputEmail =({ cssStyle, inputStyle, errorStyle,  id, register, errors})=>{
    return(
        <div className={cssStyle}>
            
            <input type="email" className={inputStyle} name={id} id={id} placeholder='E-mail*' autoComplete="true" {...register(id,{
                required:{
                    value:true,
                    message:'E-mail is required'
                },
                pattern:{
                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message:"E-mail address is not valid"
                },
                maxLength:{
                    value:100,
                    message:`This field should be less than 100 characters`
                },
                })}/>
           
            {errors[id] && (<p className={errorStyle}>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputEmail