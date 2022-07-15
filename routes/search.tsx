// routes/search.tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

const ALLOWED_NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];
const CRYPTED_DATA = 'CRYPTED DATA';

interface Data {
    results: string[];
    query: string;
}

export const handler: Handlers<Data> = {
    GET(req, ctx) {
        const url = new URL(req.url);
        const query = url.searchParams.get("q") || "";
        const isAllowed = ALLOWED_NAMES.includes(query);

        return ctx.render({ ...isAllowed && {results: CRYPTED_DATA}, query });
    },
};

export default function Page({ data }: PageProps<Data>) {
    const { results, query } = data;

    return (
        <div>
            <form>
                <input type="text" name="q" value={query}/>
                <button type="submit">Search</button>
            </form>
            <ul>
                {results &&  <span >{results}</span>}
            </ul>
        </div>
    );
}
