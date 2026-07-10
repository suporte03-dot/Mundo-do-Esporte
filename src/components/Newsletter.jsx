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
    <section id="newsletter" className="newsletter">
      <div className="container">
        <div className="newsletter__box">
          <div className="newsletter__glow" aria-hidden="true" />
          <div className="newsletter__content">
            <span className="newsletter__label">Newsletter</span>
            <h2>Receba os principais destaques do esporte</h2>
            <p>
              Toda semana, as manchetes, curiosidades e eventos mais
              importantes direto no seu e-mail. Grátis e sem spam.
            </p>
          </div>

          {submitted ? (
            <p className="newsletter__success" role="status">
              ✓ Cadastro realizado! Em breve você receberá nossos destaques.
            </p>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Digite seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="E-mail para newsletter"
              />
              <button type="submit" className="btn btn--accent">
                Quero receber
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
