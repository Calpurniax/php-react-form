import Form from './components/Form'
import './App.scss'
import form_img from './assets/img-formulario.jpg'

function App() { 

  return (
    <main className='main'>
      <section className='sectionForm'>
        <div className='form__img'><img src={form_img} alt="doctor using her phone" /></div>       
        <Form/>
        </section>
    </main>
  )
}

export default App
