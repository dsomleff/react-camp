import { useRouter} from "next/router";

export default function NewsSlug() {
    const router = useRouter();
    console.log(router.query.newsSlug);
    return (
        <h1>The Slug Page</h1>
    );
}
