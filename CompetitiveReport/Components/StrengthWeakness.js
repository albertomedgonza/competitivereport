export default function renderSW(data) { 
    return data.map(d=>`
    <section id="News">
        <div class="search">
            <input type="search" name='news' placeholder="Search News...">
        </div>
        <h1> News </h1>
            <div class="news-list">
                ${renderNewsItems(data)}
            </div>
    </section>
	`).join('');
}

export function renderNewsItems(data) { 
    return data.map(d=> `
    <div class="row">
            <div class="col-8">
                ${d.title}
            </div>
            <div class="col-4">
                ${d.date}
            </div>
    </div>
    `);
}