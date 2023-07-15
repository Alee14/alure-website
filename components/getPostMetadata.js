import {readdirSync, readFileSync} from "fs";
import matter from "gray-matter";

export default function getPostMetadata() {
    const folder = "posts/";
    const files = readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    return markdownPosts.map((fileName) => {
        const fileContent = readFileSync(`posts/${fileName}`, "utf-8");
        const matterResult = matter(fileContent);
        return {
            title: matterResult.data.title,
            author: matterResult.data.author,
            date: matterResult.data.date,
            description: matterResult.data.description,
            slug: fileName.replace(".md", "")
        }
    })
}
