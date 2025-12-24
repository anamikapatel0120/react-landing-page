export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.text}>
        <h1 style={styles.heading}>
          Build. Learn. <span style={styles.highlight}>Get Hired.</span>
        </h1>

        <p style={styles.subtext}>
          Hi, I’m <strong>Anamika</strong> — a passionate web Developer
          building modern, responsive web applications for internship and
          real-world impact.
        </p>

        <div style={styles.actions}>
          <button
            style={styles.primary}
            onClick={() =>
              window.open('https://github.com/anamikapatel0120', '_blank')
            }
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'none'
              e.target.style.boxShadow = 'none'
            }}
          >
            View GitHub
          </button>

          <button
            style={styles.secondary}
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            onMouseEnter={e => {
              e.target.style.background = 'white'
              e.target.style.color = '#4f46e5'
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent'
              e.target.style.color = 'white'
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    textAlign: 'center',
    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    color: 'white',
    padding: '80px 8%'
  },

  text: {
    maxWidth: '700px',
    margin: '0 auto'
  },

  heading: {
    fontSize: '3rem',
    fontWeight: '700'
  },

  highlight: {
    color: '#e0e7ff'
  },

  subtext: {
    marginTop: '20px',
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: '#eef2ff'
  },

  actions: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  },

  primary: {
    background: 'white',
    color: '#4f46e5',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },

  secondary: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    transition: 'all 0.3s ease'
  }
}
