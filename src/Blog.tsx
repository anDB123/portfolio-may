import './Blog.scss'

function BlogEntry({ title, id, body }: { title: string, id: number, body: string }) {
    return (
        <div key={id} className='blog-entry'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default function Blog() {
    const blogEntries = [
        { title: "Next ideas for the site", id: 2, body: "I'll likely make this site a bit more flashy over the next year. I'm thinking of some animations, some 3d effects and maybe adding some games or something. " },
        { title: "First Blog Entry", id: 1, body: "I'm writing this as a test for what a blog entry might look like. It's in need of more markup potential but this is a good first step. \n\nMy main aim with this blog is to develop my web-dev skills and write about what I learn. Not expecting anyone to read it but rather hoping I benefit from writing it." }
    ];
    return (
        <div id='blog-wrapper'>
            {blogEntries.map(entry => (
                <BlogEntry key={entry.id} title={entry.title} id={entry.id} body={entry.body} />
            ))}
        </div>
    )
}