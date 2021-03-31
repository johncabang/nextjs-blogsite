import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Marty. I'm a Full Stack Developer</p>
        <p>
          Just say anything, George, say what ever's natural, the first thing
          that comes to your mind. Take that you mutated son-of-a-bitch. My
          pine, why you. You space bastard, you killed a pine. You do? Yeah,
          it's 8:00. Hey, McFly, I thought I told you never to come in here.
          Well it's gonna cost you. How much money you got on you?
        </p>
      </section>
    </Layout>
  );
}
