export default function renderIntro(about)  { 
    return `
    <section id="Intro">

        <h1 class="title"> ${about.name} </h1>
        <p> <strong> ${about.author1} & ${about.author2} </strong> </p>
        <p> ${about.info}</p>

    </section>`;
}
