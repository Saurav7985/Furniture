import '../styles/Hero.scss'

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
          src="https://images.unsplash.com/photo-1618220179428-22790b461013"
          alt="Luxury Furniture"
        />
      </div>
      
    </section>
  )
}

export default Hero