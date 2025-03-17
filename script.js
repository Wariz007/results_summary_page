document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.summary__container');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                //create new div for each item
                const div = document.createElement('div');
                div.classList.add('item');

                //create wrapper div for image + category text
                const categoryWrapper = document.createElement('div');
                categoryWrapper.classList.add('category-wrapper');

                //create an img element
                const img = document.createElement('img');
                img.src = item.icon;
                img.alt = item.category;
                img.width = 30;

                //create category span
                const categoryText = document.createElement('span');
                categoryText.textContent = item.category;

                //append img + category text to wrapper
                categoryWrapper.appendChild(img);
                categoryWrapper.appendChild(categoryText);

                //create a score span
                const scoreText = document.createElement('span');
                scoreText.textContent = `${item.score}/100`;

                //append both wrapper and score to main div
                div.appendChild(categoryWrapper);
                div.appendChild(scoreText);

                //append item to container
                container.appendChild(div);
            })
        })
        .catch(error => console.error('Error fetching data:', error));
})