class Application {
    constructor( param ) {
        const app = this;

        this.el = param.el;

        this.el.innerHTML = '';
        this.el.append( this.getBasicDOM() );

        const panelElement = this.el.querySelector( '[data-panel]' );

        panelElement
            .querySelector( '[data-button="done"]' )
            .addEventListener( 'click', event => {
                for (let item of this.list) {
                    if (item.selected) {
                        item.done = !item.done;
                        item.selected = !item.selected;
                    }
                }

                this.update()
            });

        panelElement
            .querySelector( '[data-button="archiv"]' )
            .addEventListener('click', event => {
                for (let item of this.list) {
                    if (item.selected) {
                        item.archived = !item.archived;
                        item.selected = !item.selected;
                    }
                }

                this.update();
            });

        this.el
            .querySelector('input')
            .addEventListener('keydown', function(event) {
                if (event.key !== 'Enter' || !this.value.trim()) {
                    return;
                };

                // максимальный id элемента + 1 
                const id = Math.max(0, ...app.list.map(x => x.id)) + 1;

                app.list.push({ 
                    id: id,
                    content: this.value.trim(), 
                    selected: false, 
                    done: false, 
                    archived: false  
                });

                app.list = app.list.sort((a, b) => b.id - a.id);

                this.value = '';

                app.update();
            });
        
        if (localStorage.getItem('__TODO_APPLICATION__')) {
            this.list = JSON.parse(localStorage.getItem('__TODO_APPLICATION__'))
        } else {
            this.list = [];
        };

        this.list = [
            { id: 5, content: 'Позвонить доктору', selected: false, done: true, archived: false  },
            { id: 4, content: 'Покодить', selected: false, done: true, archived: false  },
            { id: 3, content: 'Посмотреть js', selected: false, done: false, archived: false  },
            { id: 2, content: 'Помыть машину', selected: false, done: false, archived: false  },
            { id: 1, content: 'Купить хлеб', selected: false, done: false, archived: false  }
        ];

        this.update();
    };

    get someSelected() {
        return this.items.some(item => item.selected);
    };
    // возвращает незаархивированные элементы
    get items() {
        return this.list.filter(item => !item.archived);
    };

    // создаим метод, для генерации структуры
    update () {
        const app = this; 

        localStorage.setItem('__TODO_APPLICATION__', JSON.stringify(this.list));

        const ulElement = this.el.querySelector('[data-items]');
        ulElement.innerHTML = '';

        for (const item of this.items) {
            const liElement = this.getItemDOM(item);
            ulElement.append( liElement );

            if (item.selected) {
                liElement.classList.add('active');
            };

            if (item.done) {
                liElement.querySelector('span').classList.add('item-done');
            };

            liElement.addEventListener('click', function(event) {
                if ( event.target.tagName === 'BUTTON' ) {
                    const action = event.target.getAttribute('data-button');

                    if (action === 'archiv') {
                        item.archived = true;
                        app.update();  
                    } else if (action === 'done') {
                        item.done = !item.done;
                        app.update();
                    }

                } else {
                    item.selected = !item.selected;
                    app.update();
                }
            });
        };

        const panelElement = this.el.querySelector('[data-panel]');
        const buttonElements = panelElement.querySelectorAll('[data-button]');

        buttonElements.forEach(element => element.removeAttribute('disabled'));

        if (!this.someSelected) {
            buttonElements.forEach(element => element.setAttribute('disabled', true));
        };
    };

    getItemDOM (item) {
        const  divElement = document.createElement('ul');
        divElement.innerHTML = `
            <li class="list-group-item false" data-item data-item-id="${item.id}">
                <div class="d-flex w-100 justify-content-between">
                    <span>${item.content}</span>
                    <div class="btn-group" role="group" ${this.someSelected ? 'style="visibility: hidden"' : '""'}>
                        <button type="button" class="btn btn-danger" data-button="archiv">Архив</button>
                        <button type="button" class="btn btn-success" data-button="done">Сделано</button>
                    </div>
                </div>
            </li>
        `;
         
        return divElement.firstElementChild; 
    };

    // функция для генерации каркаса
    getBasicDOM () { // императивный/декларативный
        const  divElement = document.createElement('div');
        divElement.innerHTML = `
            <div class="container">
                <div class="card" style="max-width: 700px; margin: 10px auto;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" data-control>
                            <div class="d-flex">
                                <input type="text" class="form-control" placeholder="Еще одно дело">
                                <div class="btn-group" role="group" data-panel>
                                    <button type="button" class="btn btn-danger" data-button="archiv">Архив</button>
                                    <button type="button" class="btn btn-success" data-button="done">Сделано</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="list-group list-group-flush" data-items></ul>
                </div>
            </div>
        `;

        return divElement.firstElementChild; 
    };

    // функция генерирует каждую из задач

};




