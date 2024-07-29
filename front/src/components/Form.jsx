import { useForm } from "react-hook-form";
import InputEmail from "./inputs/InputEmail";
import InputText from "./inputs/InputText";
import InputPhone from "./inputs/InputPhone";
import { sendMessage } from "../services/callDB";
import { useState } from "react";
import InputSelect from "./inputs/InputSelect";

const Form =()=>{
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const [registerStatus, setRegisterStatus] = useState(null);
      const [termsUse, setTermsUse] = useState(true);

      const handleTerms =()=>{
        setTermsUse(!termsUse)
      }

      const onSubmit = handleSubmit(async(message)=>{                
        try {
          const res = await sendMessage(message);      
          if(res.status.data === 201){
            setRegisterStatus('Register complete')
            reset()            
          }
        }catch(error){
            console.log(error);
            setRegisterStatus('Something went wrong, try again please')
        }
      })
    
      return(
        <form onSubmit={onSubmit} className="form">
          <div className="form__wrap">   
            <div className="form__text">
              <p>Lorem ipsum dolor sit amet</p>
              <h2 className="form__text--title">#consectetur<span>adipiscing</span></h2>
            </div>      
            <InputText cssStyle="form__input--wrap"  inputStyle="form__input" errorStyle="form__error" placeholder="Name*" id="name" register={register} errors={errors}/>
            <InputText cssStyle="form__input--wrap"  inputStyle="form__input" errorStyle="form__error" placeholder="Last Name*" id="last_name" register={register} errors={errors}/>
            <InputEmail cssStyle="form__input--wrap"  inputStyle="form__input" errorStyle="form__error" id="email" register={register} errors={errors}/>        
            <InputPhone cssStyle="form__input--wrap"  inputStyle="form__input" errorStyle="form__error" id="phone" register={register} errors={errors}/>
            {registerStatus && <p className=''>{registerStatus}</p>}
            <div className="form__submitContainer">
              <InputSelect labelStyle="form__checkbox"  id="terms" handleTerms={handleTerms}/>
              <input type="submit" disabled={termsUse} value='Register' className="form__submit"/>
            </div>
          </div>
      </form>
    )
}
export default Form