import '../styles/hero.scss'

const Hero = () => {
  return (
    <section className="furniture-hero">
      <div className="furniture-hero__container">

        <div className="furniture-hero__content">
          <h1>
            Crafted Comfort <br />
            For Modern Living
          </h1>

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

        <div className="furniture-hero__image">
          <img
            src="https://images.unsplash.com/photo-1732801134112-23827e7cbd0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHdvb2QlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D"
            alt="Luxury Furniture"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero