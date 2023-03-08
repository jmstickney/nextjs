import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { supabase } from "./../lib/supabaseClient";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllPostIds() {
  const { data } = await supabase.from("jobs").select("name");
  console.log(data);
  const newData = data.map((a) => a["name"]);
  console.log(newData);
  return data.map((jobs) => {
    console.log(JSON.stringify(jobs.name));
    console.log(jobs.name);
    return {
      params: {
        id: jobs.name,
      },
    };
  });
}

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   console.log(fileNames);
//   // Returns an array that looks like this:
//   // [
//   //   {
//   //     params: {
//   //       id: 'ssg-ssr'
//   //     }
//   //   },
//   //   {
//   //     params: {
//   //       id: 'pre-rendering'
//   //     }
//   //   }
//   // ]
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }

// export function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Combine the data with the id
//   return {
//     id,
//     ...matterResult.data,
//   };
// }

export async function getPostData(id) {
  const { data } = await supabase.from("jobs").select().eq("name", id);
  const rez = data[0].desc;
  console.log(data[0].desc);
  // Use gray-matter to parse the post metadata section

  // Combine the data with the id
  return {
    id,
    rez,
  };
}
