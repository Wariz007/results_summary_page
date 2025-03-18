document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.summary__container');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                //create new div for each item
                const div = document.createElement('div');
                div.classList.add('item');
                div.id = `item-${index}`;

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
                categoryText.style.fontWeight = 'bold';
                categoryText.id = `category-text-${index}`;

                //append img + category text to wrapper
                categoryWrapper.appendChild(img);
                categoryWrapper.appendChild(categoryText);

                //create a score span
                const scoreText = document.createElement('span');
                scoreText.innerHTML = `<span class="score-bold">${item.score}</span> <span class="reduced-opacity">/ 100</span>`;

                //append both wrapper and score to main div
                div.appendChild(categoryWrapper);
                div.appendChild(scoreText);

                //append item to container
                container.appendChild(div); 
            })

            //uniquely target each div
            const firstDiv = document.getElementById('item-0');
            firstDiv.style.backgroundColor = 'hsla(0, 100.00%, 67.10%, 0.12)';

            const secondDiv = document.getElementById('item-1');
            secondDiv.style.backgroundColor = 'hsla(39, 100.00%, 56.10%, 0.12)';

            const thirdDiv = document.getElementById('item-2');
            thirdDiv.style.backgroundColor = 'hsla(166, 100.00%, 37.10%, 0.12)';

            const fourthDiv = document.getElementById('item-3');
            fourthDiv.style.backgroundColor = 'hsla(234, 85.20%, 44.90%, 0.12)';

            //uniquely target each categoryText
            const firstCategory = document.getElementById('category-text-0');
            firstCategory.style.color = 'hsl(0, 100%, 67%)';

            const secondCategory = document.getElementById('category-text-1');
            secondCategory.style.color = 'hsl(39, 100%, 56%)';

            const thirdCategory = document.getElementById('category-text-2');
            thirdCategory.style.color = 'hsl(166, 100%, 37%)';

            const fourthCategory = document.getElementById('category-text-3');
            fourthCategory.style.color = 'hsl(234, 85%, 45%)';
        })
        .catch(error => console.error('Error fetching data:', error));
})