import About from "../section/About_Us/About";
import Contact from "../section/Contact/Contact";
import FAQ from "../section/FAQ";
import Feature from "../section/Features/Feature";
import Footer from "../section/Footer/Footer";
import Hero from "../section/Hero/Hero";
import Newsletter from "../section/News_Letter";

const Layout = () => {
  return (
    <div className='max-w-[1040px] mx-auto'>
      <section>
        <Hero />
      </section>
      <section>
        <Feature />
      </section>
      <section>
        <About />
      </section>
<<<<<<< HEAD
      <div className="max-w-[1040px] mx-auto">
        <section>
          <Contact />
        </section>
        <section>
          <FAQ />
        </section>
        <section>
          <Newsletter />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
=======
      <section>
        <Contact />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <Newsletter />
      </section>
      <section>
        <Footer />
      </section>
    </div>
>>>>>>> d2d6a874f0e7cecd8f0eda606b8da7a5bca185ed
  );
};

export default Layout;
