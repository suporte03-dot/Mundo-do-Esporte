import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__box">
          <div className="newsletter__content">
            <span className="newsletter__label">Newsletter</span>
            <h2>Receba as melhores notícias no seu e-mail</h2>
            <p>
              Cadastre-se e fique por dentro de resultados, análises e
              curiosidades do mundo esportivo.
            </p>
          </div>

          {submitted ? (
            <p className="newsletter__success" role="status">
              ✓ Inscrição realizada com sucesso! Obrigado por se cadastrar.
            </p>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="E-mail para newsletter"
              />
              <button type="submit" className="btn btn--accent">
                Inscrever-se
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
