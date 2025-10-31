
document.addEventListener('DOMContentLoaded', function() {
    allTopics = JSON.parse(localStorage.getItem('topics')) || fakeTopics;
    displayTopics();
})





function displayTopics(topicsToDisplay = allTopics){

    const container = document.getElementById('topics-container');
    const noResults = document.getElementById('no-results');


    container.innerHTML = '';

    if (topicsToDisplay.length === 0) {
        if(noResults){
            noResults.style.display = 'block';
        }
        
        return;
    } else {
        if(noResults){
            noResults.style.display = 'none';
        }
    }


    topicsToDisplay.forEach(topic => {
        const topicCard = createTopicCard(topic);
        container.appendChild(topicCard);
    });
}



function createTopicCard(topic){
    
    const col = document.createElement('div');
    col.className = 'col-md-6 mb-4';

    let badgeClass; 
    if (topic.category === 'Technical') {
        badgeClass = 'badge-primary';
    } else {
        badgeClass = 'badge-secondary';
    }

 

    col.innerHTML = `
        <div class="card h-100 topic-card" style="cursor: pointer;" onclick="viewTopic(${topic.id})">
            <div class="card-body">
                <h5 class ="card-title">${topic.title}</h5>
                <span class="badge ${badgeClass} text-capitalize mb-2">${topic.category}</span> 
            </div>
            <p class="card-text text-muted px-3"> ${topic.description} </p>
            <div class="card-footer bg-white border-top-0">
            <small class="text-muted">
            <i class="bi bi-chat-dots"></i> ${topic.postCount} posts 
            <span class="ms-3">
              <i class="bi bi-clock me-1"></i> Last activity: ${topic.lastActivity}
            </span>
            </small>
            </div>
        </div>
    `;

    const card = col.querySelector('.topic-card');
    card.addEventListener('mouseenter', function() {
        this.classList.add('border-primary');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.remove('border-primary');
    });
    return col;


}

function filterTopics(){
    const searchText = document.getElementById('searchInput').value.toLowerCase(); 
    const selectedCategory = document.querySelector('input[name="categoryFilter"]:checked').value;

    let filteredTopics = allTopics.filter(topic =>{
        const matchesSearch = topic.title.toLowerCase().includes(searchText) || topic.description.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayTopics(filteredTopics);
   
}

function viewTopic(topicId){
    window.location.href = `topic.html?id=${topicId}`;
}

function createNewTopic(){
    window.location.href = 'createtopic.html';
}
