const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const mugContainer = document.querySelector('.list-mugs');

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute("data-visible");
})

const mugList = [];
mugList.push ({
    image: './assets/img/mu.png',
    name: 'Grow up',
    price: 15,
    link:'/single-item-1.html',
});

mugList.push ({
    image: './assets/img/mu.png',
    name: 'Grow up',
    price: 15,
    link:'/single-item-2.html',
});

mugList.push ({
    image: './assets/img/mu.png',
    name: 'Grow up',
    price: 15,
    link:'/single-item-3.html',
});

mugList.push ({
    image: './assets/img/sample-mug-1.png',
    name: 'Rainbow mug',
    price: 15,
    link:'/single-item-4.html',
});

function renderMugs (stock){
    for (mug of stock){
        const mugItem = document.createElement('li');
        mugItem.classList.add('list-mugs__items', 'wrapper');

        const item = document.createElement('a');
        item.classList.add('item');
        item.href=mug.link;

        const mugImg = document.createElement('img');
        mugImg.classList.add('card-item');
        mugImg.setAttribute('src', mug.image);

        const mugTitle = document.createElement('h3');
        mugTitle.classList.add('title__item');
        mugTitle.innerText = mug.name;

        const mugPrice = document.createElement('p');
        mugPrice.classList.add('price');
        mugPrice.innerText = '$' + mug.price + '.00';
        
        item.appendChild(mugImg);
        item.appendChild(mugTitle);
        item.appendChild(mugPrice);

        mugItem.appendChild(item);

        mugContainer.appendChild(mugItem);
    }
}

renderMugs(mugList);

