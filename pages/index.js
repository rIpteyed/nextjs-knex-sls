import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
// import { getSortedPostsData } from "../lib/posts";
// import Date from "../components/date";
import DataAccess from "../lib/data_access";
import ListView from "../components/list";

// export async function getStaticProps() {
//   await DataAccess.friskInit(process.env);
//
//   const devices = await DataAccess.listDevices();
//
//   return { props: { devices } };
// }

export async function getServerSideProps() {
  await DataAccess.friskInit(process.env);

  const devices = await DataAccess.listDevices();
  // Pass data to the page via props
  return { props: { devices } }
}

export default function Home({ devices }) {
  return (
    <Layout devices>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ListView list={devices}/>
    </Layout>
  );
}
