const container = document.getElementById('container');

function populateDom(data){

    const widgets = data.map(widget => {
        return (`
            <section class="widget">
                <div class="widget__color widget__${widget.title.toLowerCase().replaceAll(' ', '-')}">
                    <div class="widget__content bg-navy-900">
                    <div class="widget__header">
                        <h2>${widget.title}</h2>
                        <button type="button" aria-label="Options">
                            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentColor" fill-rule="evenodd"/></svg>
                        </button>
                    </div>
                    <div class="widget__stats">
                        <p class="widget__stats__hours">${ widget.timeframes.daily.current === 1 ? `${widget.timeframes.daily.current}hr` : `${widget.timeframes.daily.current}hrs`}</p>
                        <p class="widget__stats__prev">Last week - ${ widget.timeframes.daily.previous === 1 ? `${widget.timeframes.daily.previous}hr` : `${widget.timeframes.daily.previous}hrs`}</p>
                    </div>
                    </div>
                </div>
            </section>
            `)
    }).join('')
    container.innerHTML += widgets
}

fetch('/data.json').then((response) => {  
  if(!response.ok) return console.log('Oops! Something went wrong.');
  
  return response.json();
}).then((data) => {
  populateDom(data);
});

