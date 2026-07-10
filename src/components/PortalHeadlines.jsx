import { mainHeadline, secondaryHeadlines } from '../data/siteData'

function PortalHeadlines({ onReadMore }) {
  return (
    <section id="inicio" className="portal">
      <div className="container">
        <div className="portal__grid">
          <article className="portal__main card">
            <button
              type="button"
              className="portal__main-btn"
              onClick={() => onReadMore(mainHeadline)}
            >
              <div className="portal__image-wrap">
                <img src={mainHeadline.image} alt="" className="portal__img" />
                <div className="portal__overlay" />
                <span className="portal__tag">{mainHeadline.tag}</span>
              </div>
              <div className="portal__main-body">
                <div className="portal__meta">
                  <span className="portal__category">{mainHeadline.category}</span>
                  <time>{mainHeadline.date}</time>
                  <span>{mainHeadline.readTime}</span>
                </div>
                <h2 className="portal__title">{mainHeadline.title}</h2>
                <p className="portal__excerpt">{mainHeadline.excerpt}</p>
                <span className="portal__link">Ler mais →</span>
              </div>
            </button>
          </article>

          <div className="portal__side">
            {secondaryHeadlines.map((news) => (
              <article key={news.id} className="portal__side-card card">
                <button
                  type="button"
                  className="portal__side-btn"
                  onClick={() => onReadMore(news)}
                >
                  <div className="portal__side-image">
                    <img src={news.image} alt="" className="portal__img" />
                    <div className="portal__overlay portal__overlay--side" />
                    <span className="portal__side-icon" aria-hidden="true">
                      {news.icon}
                    </span>
                  </div>
                  <div className="portal__side-body">
                    <span className="portal__category">{news.category}</span>
                    <h3>{news.title}</h3>
                    <div className="portal__side-meta">
                      <time>{news.date}</time>
                      <span>{news.readTime}</span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortalHeadlines
