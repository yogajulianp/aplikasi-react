import React from 'react';
//import { createRoot } from 'react-dom/client';



function Button ({link}){
    return <a href={link}>Find out more</a>
}

function CardBody ({date, title, content, link}){
    return (
        <div>
            <p>{date}</p>
            <h2>{title}</h2>
            <p>{content}</p>
            <Button link={link}/>
        </div>
    )
}

function CardHeader ({image, category}){
    return (
        <header>
            <h4>{category}</h4>
            <img src={image} alt =""/>
        </header>
    );
}

function Card ({image, category, date, title, content, link}){
    return (
        <article>
            <CardHeader image={image} category={category}/>
            <CardBody date={date} title={title} content={content} link={link}/>
        </article>
    );

}

function Header ({title,substitle}){
    return (
        <header>
            <h1>{title}</h1>
            <p>{substitle}</p>
        </header>
    );
}

function News (){
    
    const someNews = [
        {
            title: 'Berita hari ini',
            date: '21 Desember 2023',
            content: "Liburan panjang akhir tahun 2023",
            image:'https://source.unsplash.com/user/erondu/600x400',
            category:'News',
            link:'#'
        },
        {
            title: 'Berita hari kemarin',
            date: '20 Desember 2023',
            content: "Liburan panjang akhir tahun 2023",
            image:'https://source.unsplash.com/user/erondu/600x400',
            category:'News',
            link:'#'
        },
        {
            title: 'Berita pekan ini ini',
            date: 'pekan akhir Desember 2023',
            content: "Liburan panjang akhir tahun 2023",
            image:'https://source.unsplash.com/user/erondu/600x400',
            category:'News',
            link:'#'
        }   
    ];

    //return komponen
    //return <div>Selesaikan componentnya</div>
    return (
        <div>
            <Header title="Berita terbaru" substitle={"tahun baru 2024"}/>
            <Card
                title={someNews[0].title}
                date={someNews[0].date}
                content={someNews[0].content}
                image={someNews[0].image}
                category={someNews[0].category}
                link={someNews[0].link}
            />
            <Card
                title={someNews[1].title}
                date={someNews[1].date}
                content={someNews[1].content}
                image={someNews[1].image}
                category={someNews[1].category}
                link={someNews[1].link}
            />
             <Card
                title={someNews[2].title}
                date={someNews[2].date}
                content={someNews[2].content}
                image={someNews[2].image}
                category={someNews[2].category}
                link={someNews[2].link}
            />
        </div>
    )
}

//const root = createRoot(document.getElementById('root'));
//root.render(<News/>)
export default News