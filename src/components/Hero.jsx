import '../styles/hero.scss'

const Hero = () => {
  return (
    <section className="furniture-hero">
      <div className="furniture-hero__container">

        <div className="furniture-hero__left">
          <h1>
            Crafted Comfort <br />
            For Modern Living
          </h1>
        </div>

        <div className="furniture-hero__right">
          <p>
            Discover premium furniture designed to bring elegance,
            comfort, and timeless beauty into your home. From modern
            sofas to handcrafted wooden tables — we create spaces
            you love to live in.
          </p>

          <button className="furniture-hero__btn">
            Shop Collection
          </button>
        </div>

      </div>

      <div className="furniture-hero__image">
        <img 
          src="https://images.unsplash.com/photo-1769750685213-67ee9e56ab6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Furniture"
        />
      </div>
      
    </section>
  )
}

export default Hero