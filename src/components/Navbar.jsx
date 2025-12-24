export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>InternReady</h2>
      <div style={styles.links}>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <button style={styles.btn}>Contact</button>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 8%',
    background: '#111827',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  logo: {
    color: '#4f46e5'
  },
  links: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  },
  btn: {
    background: '#4f46e5',
    color: 'white'
  }
}
