import React from "react"

//  export default function Main () {
//     return (
//         <div className="content">
//             <h3>welcom to  our Blaog App</h3>
//             <h4>Where You can, share your Thoughts </h4>
//             <p>You can easly write , update, delete you blog in one click!</p>
//         </div>
//     )
// }
function MainContent({ posts }) {
    return (
        <main>
        {posts.length > 0 ? (
            posts.map((post, index) => (
            <article key={index}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            </article>
            ))
        ) : (
            <p>No posts available</p>
        )}
        </main>
    );

}
export default MainContent;