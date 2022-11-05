/* eslint-disable @next/next/no-html-link-for-pages */
import { Navbar, Hero, Stats, Testimonials, Footer } from '../components';
import styles from '../styles/style';
export default function Home({ users }) {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: QUERIES.GET_USER_DETAILS,
//   });

//   console.log(data);
//   return {
//     props: {
//       users: data.users,
//     },
//   };
// }
