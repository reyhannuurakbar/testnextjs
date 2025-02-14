import Image from "next/image";
import Script from "next/script";
{/*import Link from "next/link";*/}
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <a href="/" className="logo d-flex align-items-center">
            <h1 className="sitename">DevFolio</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li className="dropdown"><a href="#">{ "Dropdown" } <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown"><a href="#">{ "Deep Dropdown" } <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

        </div>
      </header>

      <main className="main">

        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">

          <Image src="assets/img/hero-img.jpg" alt="" data-aos="fade-in" />

          <div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <h2>I am Morgan Freeman</h2>
            <p><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
          </div>

        </section>{/* Hero Section */}

        {/* About Section */}
        <section id="about" className="about section">

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">
              <div className="col-md-6">

                <div className="row justify-content-between gy-4">
                  <div className="col-lg-5">
                    <Image src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-7 about-info">
                    <p><strong>Name: </strong> { "Morgan Freeman" } </p>
                    <p><strong>Profile: </strong> { "full stack developer" }</p>
                    <p><strong>Email: </strong> { "contact@example.com" }</p>
                    <p><strong>Phone: </strong> { "(617) 557-0089" }</p>
                  </div>
                </div>

                <div className="skills-content skills-animation">

                  <h5>Skills</h5>

                  <div className="progress">
                    <span className="skill">{ "HTML" } <i className="val">100%</i>" }
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>{/* End Skills Item */}

                  <div className="progress">
                    <span className="skill">{ "CSS" } <i className="val">90%</i>" }
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>{/* End Skills Item */}

                  <div className="progress">
                    <span className="skill">{ "JavaScript" } <i className="val">75%</i>" }
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>{/* End Skills Item */}

                  <div className="progress">
                    <span className="skill">{ "Photoshop" } <i className="val">55%</i>" }
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>{/* End Skills Item */}

                </div>
              </div>

              <div className="col-md-6">
                <div className="about-me">
                  <h4>About me</h4>
                  <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                    imperdiet et, porttitor
                    at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                    porttitor accumsan tincidunt.
                  </p>
                  <p>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                    porttitor volutpat. Vestibulum
                    ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                  </p>
                  <p>
                    Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                    Nulla porttitor accumsan
                    tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </section>{/* About Section */}

        {/* Resume Section */}
        <section id="resume" className="resume section">

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}

          <div className="container">

            <div className="row">

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Sumary</h3>

                <div className="resume-item pb-0">
                  <h4>Brandon Johnson</h4>
                  <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>{/* Edn Resume Item */}

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Master of Fine Arts &amp; Graphic Design</h4>
                  <h5>2015 - 2016</h5>
                  <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                  <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                </div>{/* Edn Resume Item */}

                <div className="resume-item">
                  <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                  <h5>2010 - 2014</h5>
                  <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                  <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                </div>{/* Edn Resume Item */}

              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Senior graphic design specialist</h4>
                  <h5>2019 - Present</h5>
                  <p><em>Experion, New York, NY </em></p>
                  <ul>
                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul>
                </div>{/* Edn Resume Item */}

                <div className="resume-item">
                  <h4>Graphic design specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p><em>Stepping Stone Advertising, New York, NY</em></p>
                  <ul>
                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                  </ul>
                </div>{/* Edn Resume Item */}

              </div>

            </div>

          </div>

        </section>{/* Resume Section */}

        {/* Services Section*/}
        <section id="services" className="services section">

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item  position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Nesciunt Mete</h3>
                  </a>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                </div>
              </div>{/* End Service Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Eosle Commodi</h3>
                  </a>
                  <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                </div>
              </div>{/* End Service Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Ledo Markt</h3>
                  </a>
                  <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                </div>
              </div>{/* End Service Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Asperiores Commodit</h3>
                  </a>
                  <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>{/* End Service Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Velit Doloremque</h3>
                  </a>
                  <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>{/* End Service Item */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Dolori Architecto</h3>
                  </a>
                  <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>{/* End Service Item */}

            </div>

          </div>

        </section>{/* /Services Section */}

        {/* Stats Section */}
        <section id="stats" className="stats section accent-background">

          <Image src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in" />

          <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" className="purecounter">232" }
                  <p>Clients</p>
                </div>
              </div>{/* End Stats Item */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" className="purecounter">521" }
                  <p>Projects</p>
                </div>
              </div>{/* End Stats Item */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="0" className="purecounter">1453" }
                  <p>Hours Of Support</p>
                </div>
              </div>{/* End Stats Item */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" className="purecounter">32" }
                  <p>Awards</p>
                </div>
              </div>{/* End Stats Item */}

            </div>

          </div>

        </section>{/* Stats Section */}

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}

          <div className="container">

            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

              <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-branding">Branding</li>
                <li data-filter=".filter-books">Books</li>
              </ul>{/* End Portfolio Filters */}

              <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <Image src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <Image src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Product 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <Image src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Branding 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <Image src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Books 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <Image src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <Image src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Product 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <Image src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Branding 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <Image src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Books 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <Image src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <Image src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Product 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <Image src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Branding 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <Image src="assets/img/portfolio/books-3.jpg" className="Image-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Books 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>{/* End Portfolio Item */}

              </div>{/* End Portfolio Container */}

            </div>

          </div>

        </section>{/* /Portfolio Section */}

        {/* Pricing Section */}
        <section id="pricing" className="pricing section">

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Pricing</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4 gx-lg-5">

              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>Portrait Photography</h3>
                  <h4>$160.00</h4>
                </div>
              </div>{/* End Pricing Item */}

              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>Fashion Photography</h3>
                  <h4>$300.00</h4>
                </div>
              </div>{/* End Pricing Item */}

              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>Sports Photography</h3>
                  <h4>$200.00</h4>
                </div>
              </div>{/* End Pricing Item */}

              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>Still Life Photography</h3>
                  <h4>$120.00</h4>
                </div>
              </div>{/* End Pricing Item */}

              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>Wedding Photography</h3>
                  <h4>$500.00</h4>
                </div>
              </div>{/* End Pricing Item */}

              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>Photojournalism</h3>
                  <h4>$200.00</h4>
                </div>
              </div>{/* End Pricing Item */}

            </div>

          </div>

        </section>{/* Pricing Section */}

        {/* Faq Section */}
        <section id="faq" className="faq section">

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="content px-xl-5">
                  <h3>{ "Frequently Asked " }<strong>Questions</strong></h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>

              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

                <div className="faq-container">
                  <div className="faq-item faq-active">
                    <h3><span className="num">1." } { "Non consectetur a erat nam at lectus urna duis?" }</h3>
                    <div className="faq-content">
                      <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item */}

                  <div className="faq-item">
                    <h3><span className="num">2." } { "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?" }</h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item */}

                  <div className="faq-item">
                    <h3><span className="num">3." } { "Dolor sit amet consectetur adipiscing elit pellentesque?" }</h3>
                    <div className="faq-content">
                      <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item */}

                  <div className="faq-item">
                    <h3><span className="num">4." } { "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?" }</h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item */}

                  <div className="faq-item">
                    <h3><span className="num">5." } { "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?" }</h3>
                    <div className="faq-content">
                      <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item */}

                </div>

              </div>
            </div>

          </div>

        </section>{/* Faq Section */}

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section accent-background">

          <Image src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="" />

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="swiper init-swiper">
              <script type="application/json" className="swiper-config">
                {
                  "loop": true,
                  "speed": 600,
                  "autoplay": {
                    "delay": 5000
                  },
                  "slidesPerView": "auto",
                  "pagination": {
                    "el": ".swiper-pagination",
                    "type": "bullets",
                    "clickable": true
                  }
                }
              </script>
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <Image src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      { "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper." }
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>{/* End testimonial item */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <Image src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      { "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa." }
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>{/* End testimonial item */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <Image src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      { "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim." }
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>{/* End testimonial item */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <Image src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      { "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam." }
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>{/* End testimonial item */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <Image src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      { "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid." }
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>{/* End testimonial item */}

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>

        </section>{/* Testimonials Section */}

        {/* Contact Section */}
        <section id="contact" className="contact section">

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-5">

                <div className="col-lg-4">
                  <div className="info-item d-flex align-items-center">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                </div>{/* End Info Item */}

                <div className="col-lg-4">
                  <div className="info-item d-flex align-items-center">
                    <i className="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                </div>{/* End Info Item */}

                <div className="col-lg-4">
                  <div className="info-item d-flex align-items-center">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>
                </div>{/* End Info Item */}

              </div>
            </div>

            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="300">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required="">
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required="">
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required="">
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>{/* End Contact Form */}

          </div>

        </section>{/* Contact Section */}

      </main>

      <footer id="footer" className="footer accent-background">

        <div className="container">
          <div className="copyright text-center ">
            <p>© { "Copyright" } <strong className="px-1 sitename">DevFolio</strong> { "All Rights Reserved" }</p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you've purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>

      </footer>

      {/* Scroll Top */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      {/* Preloader */}
      <div id="preloader"></div>

      {/* Vendor JS Files */}
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <script src="assets/vendor/php-email-form/validate.js" strategy="beforeInteractive" />
      <script src="assets/vendor/aos/aos.js" strategy="beforeInteractive" />
      <script src="assets/vendor/typed.js/typed.umd.js" strategy="beforeInteractive" />
      <script src="assets/vendor/waypoints/noframework.waypoints.js" strategy="beforeInteractive" />
      <script src="assets/vendor/purecounter/purecounter_vanilla.js" strategy="beforeInteractive" />
      <script src="assets/vendor/glightbox/js/glightbox.min.js" strategy="beforeInteractive" />
      <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="beforeInteractive" />
      <script src="assets/vendor/swiper/swiper-bundle.min.js" strategy="beforeInteractive" />

      //{/* Main JS File
      <script src="assets/js/main.js" strategy="beforeInteractive" />
  );
}
