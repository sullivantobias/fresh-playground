// routes/github/[username].tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
    login: string;
    name: string;
    avatar_url: string;
    middle_ware_test: string;
}

export const handler: Handlers<User | null> = {
    async GET(_, ctx) {
        const { username } = ctx.params;
        const { data } = ctx.state;

        const resp = await fetch(`https://api.github.com/users/${username}`);

        if (resp.status === 404) return ctx.render(null);

        const user: User = await resp.json();

        user.middle_ware_test = data;

        return ctx.render(user);
    },
};

export default function Page({ data }: PageProps<User | null>) {
    if (!data) return <h1>User not found</h1>;

    const { name, avatar_url, login, middle_ware_test } = data;

    return (
        <div>
            <img src={avatar_url} width={64} height={64} />
            <h1>{name}</h1>
            <p>{login}</p>
            { middle_ware_test && <p> This page uses middleware: {middle_ware_test}</p> }
        </div>
    );
}
