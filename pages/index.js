import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
// import { getSortedPostsData } from "../lib/posts";
// import Date from "../components/date";
import DataAccess from "../lib/data_access";

export async function getStaticProps() {
  await DataAccess.friskInit(process.env);

  const devices = await DataAccess.listDevices();

  return { props: { devices } };
}

export default function Home({ devices }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <p>Hi, I'm me, let me tell you a little about me.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {devices.map(({ id, token, user_id, project_id }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/devices/${id}`}>
                <a>{token}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <span>{`User: ${user_id}, Project: ${project_id}`}</span>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
