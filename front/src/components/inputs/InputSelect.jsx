const InputSelect =({ handleTerms, labelStyle, id })=>{
    return(
        <div className="form__checkbox--wrap">           
            <input type="checkbox" onChange={handleTerms} name={id} id={id}  />
            <label htmlFor={id} className={labelStyle}><span>I am of age</span> and I have read and accept the <span>Terms of use</span> and the <span>Privacy Policy</span> of the website</label>            
        </div>
    )
}
export default InputSelect