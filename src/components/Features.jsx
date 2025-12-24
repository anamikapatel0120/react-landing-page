const features = [
  {
    title: 'Responsive Design',
    desc: 'Optimized for mobile, tablet, and desktop screens.'
  },
  {
    title: 'Clean Code',
    desc: 'Reusable React components with best practices.'
  },
  {
    title: 'Fast Performance',
    desc: 'Built using Vite for blazing fast builds.'
  }
]

export default function Features() {
  return (
    <section id="features">
      <h2>Why Choose Me?</h2>
      <div style={styles.grid}>
        {features.map((f, i) => (
          <div key={i} style={styles.card}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px'
  },
  card: {
    background: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    transition: '0.3s'
  }
}
