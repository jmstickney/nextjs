import Layout from "../../components/layout";
import { getPostData, getAllPostIds } from "../../lib/posts";
import { supabase } from "../../lib/supabaseClient";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  //   const { data } = await supabase.from("jobs").select("id");
  //   const paths = data.map((post) => ({
  //     params: { id: JSON.stringify(post.id) },
  //   }));
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.id}</h1>
      </article>
      {postData.rez}
    </Layout>
  );
}
