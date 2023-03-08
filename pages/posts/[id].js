import Layout from "../../components/layout";
import { getPostData, getAllPostIds } from "../../lib/posts";
import { supabase } from "../../lib/supabaseClient";
import Head from "next/head";

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
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.rez}
    </Layout>
  );
}
