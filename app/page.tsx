import Script from "next/script";

export default function Home() {
  return (
    <>
        {/* ini komponen header */}
        <header>
          <title>Ipvision</title>

          <a href="/">
            <h1>DevFolio</h1>
          </a>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#galery">Galery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </header>

          {/* ini buat section home */}
          <section id="home">
            <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} /> {/* nanti adjust ukuran gambar */}
            <div>
              <h2>I am Morgan Freeman</h2> {/* ini posisi nya nanti di tengah gambar */}
              <p>Designer, Developer, Freelancer, Photographer</p> {/* ini nanti coba mau di buat typing */}
            </div>
          </section>

          {/* ini buat section About */}
          <section id="about">
            <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} /> {/* nanti adjust ukuran gambar */}
            <div>
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget est tellus. Suspendisse maximus urna ac mauris fermentum bibendum. Etiam ex orci, molestie in ex et, ultrices scelerisque mi. Phasellus dictum sapien id tellus varius ullamcorper. Suspendisse in lectus ac arcu rutrum dignissim sit amet nec purus. Aliquam dui elit, blandit a mollis ut, hendrerit sit amet erat. Donec luctus euismod leo vel dignissim. Mauris dapibus quam in sagittis vestibulum. Maecenas at dui suscipit, feugiat magna vitae, vulputate risus. Nam convallis lorem mauris, vel malesuada libero fringilla in. Fusce tristique, tortor vel finibus faucibus, turpis lectus suscipit diam, quis efficitur metus eros sit amet enim. Nunc nisi felis, tempus sed imperdiet vel, placerat non metus. Quisque dignissim efficitur nisl sed eleifend. Donec pharetra, nunc sit amet laoreet convallis, metus dui pharetra elit, semper tristique eros diam vel massa. Nullam vehicula nibh sed elementum tempus.</p>
            </div>
          </section>

          {/* ini buat section Services */}
          <section id="services">

            <div>
              <h2>Services</h2>
              <div> {/* ini nanti buat baris */}
                <div> {/* ini nanti buat kolom */}
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                </div>
              </div>
            </div>
          </section>

          {/* ini buat section Galery */}
          <section id="galery">

            <div>
              <h2>Galery</h2>
              <div> {/* ini nanti buat baris */}
                <div> {/* ini nanti buat kolom */}
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                </div>
              </div>
            </div>
          </section>

          {/* ini buat section contact */}
          <section id="contact">

            <div>
              <h2>Contact Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget est tellus. Suspendisse maximus urna ac mauris fermentum bibendum. Etiam ex orci, molestie in ex et, ultrices scelerisque mi. Phasellus dictum sapien id tellus varius ullamcorper. Suspendisse in lectus ac arcu rutrum dignissim sit amet nec purus. Aliquam dui elit, blandit a mollis ut, hendrerit sit amet erat. Donec luctus euismod leo vel dignissim. Mauris dapibus quam in sagittis vestibulum. Maecenas at dui suscipit, feugiat magna vitae, vulputate risus. Nam convallis lorem mauris, vel malesuada libero fringilla in. Fusce tristique, tortor vel finibus faucibus, turpis lectus suscipit diam, quis efficitur metus eros sit amet enim. Nunc nisi felis, tempus sed imperdiet vel, placerat non metus. Quisque dignissim efficitur nisl sed eleifend. Donec pharetra, nunc sit amet laoreet convallis, metus dui pharetra elit, semper tristique eros diam vel massa. Nullam vehicula nibh sed elementum tempus.</p>
            </div>

            {/* ini buat bagian alamat, phone number dan email */}
            <div>
              <div>
                {/* Alamat */}
                <div>
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <h2>Address</h2>
                  <p>Jl. Blora No.16, RT.2/RW.6, Dukuh Atas, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310</p>
                </div>
                {/* phone number */}
                <div>
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <h2>Call Us</h2>
                  <p>+1 5589 55488 55</p>
                </div>
                {/* Alamat */}
                <div>
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                  <h2>Email Us</h2>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>

            {/* ini form sama maps */}
            <div>
              <div>
                <div>
                 <p><strong>Ceritanya ini form</strong></p>
                 <p>Name</p>
                 <p>Email</p>
                 <p>Subject</p>
                 <p>Message</p>
                </div>
                {/* Anggep aja dulu maps */}
                <div>
                  <img src="/assets/img/home-bg.jpg" alt="Gambar Contoh" width={300} height={200} />
                </div>
              </div>
            </div>

          </section>

    </>

  );
}
