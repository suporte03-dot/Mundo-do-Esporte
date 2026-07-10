import { fanModeChips } from '../data/siteData'

function FanMode() {
  return (
    <section className="fan-mode">
      <div className="container">
        <div className="fan-mode__inner">
          <div className="fan-mode__header">
            <span className="fan-mode__label">Interativo</span>
            <h2 className="fan-mode__title">Modo Torcedor</h2>
            <p>Escolha o que você quer ver agora e vá direto ao ponto.</p>
          </div>

          <div className="fan-mode__chips">
            {fanModeChips.map((chip) => (
              <a key={chip.label} href={chip.href} className="fan-mode__chip">
                <span className="fan-mode__chip-icon" aria-hidden="true">
                  {chip.icon}
                </span>
                {chip.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FanMode
