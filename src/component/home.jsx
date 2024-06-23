
export default function Home() {

    let age = prompt('tell us your age');

    return (
        <>
            <div className="img_box">
                <img src="Harry Potter.webp" alt="Harry Potter Image Not Available" width="50%" />
            </div>

            <div className="movie_about">
                <h2>Movie: Harry Potter</h2>
                <h4>Rating: 4.8</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis labore, id iure reprehenderit eius debitis est reiciendis sit consequatur itaque! Sequi ex fugiat esse molestiae, magni sint dolorum voluptatem ipsum sed ut laborum necessitatibus, repellendus rerum repellat in numquam? Optio ea officiis aperiam fuga nulla tenetur ducimus, a, architecto praesentium excepturi veniam quo explicabo nihil in repudiandae repellat eveniet, accusamus non saepe ipsam voluptate! Vero doloribus autem consequatur nobis reprehenderit, incidunt eligendi ullam ea sint porro, totam at amet quod corrupti minus nisi repellat provident illum officia. Incidunt voluptas fuga saepe in cupiditate doloribus beatae? Similique illo doloremque voluptate?</p>
                <button>{age >= 18 ? 'watch now' : 'you can not watch this, cause you are under 18'}</button>
            </div>

        </>
    )

}