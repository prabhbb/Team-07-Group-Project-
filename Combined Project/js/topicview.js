let currentTopicId;

document.addEventListener('DOMContentLoaded', function() {
    loadTopic();
});


function loadTopic(){
    const urlParams = new URLSearchParams(window.location.search);
    currentTopicId = parseInt(urlParams.get('id'));

    if(!currentTopicId){
        alert('No topic ID provided.');
        window.location.href = 'index.html';
        return;
    }

    const topics = JSON.parse(localStorage.getItem('topics')) || fakeTopics;
    const posts = JSON.parse(localStorage.getItem('posts')) || fakePosts;

    const topic = topics.find(t => t.id === currentTopicId);

    if(!topic){
        alert('Topic not found.');
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('topicTitle').textContent = topic.title;
    document.getElementById('topicDescription').textContent = topic.description;
    document.getElementById('postCount').textContent = topic.postCount;

    
    const badge = document.getElementById('categoryBadge');
    badge.textContent = topic.category;
    if(topic.category === 'Technical'){
        badge.className = 'badge bg-primary';
    } else {
        badge.className = 'badge bg-secondary';
    }

    const topicPosts = posts.filter(p => p.topicId === currentTopicId);
    displayPosts(topicPosts);
}


function displayPosts(posts){
    const container = document.getElementById('postsContainer');
    const noPosts = document.getElementById('noPostsMessage');  
    container.innerHTML = '';

    if(posts.length === 0){
        noPosts.style.display = 'block';
        return;

    }
    noPosts.style.display = 'none';

    posts.forEach(post => {
        const postCard = createPostCard(post);
        container.appendChild(postCard);
    });

}


function createPostCard(post){
    const card = document.createElement('div');
    card.className = 'card mb-3';

    

    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.content}</p>
            <hr>
            <small class="text-muted">
                <i class="bi bi-person-circle"></i> ${post.author}
                <span class="ms-3">
                    <i class="bi bi-clock"></i> ${post.createdAt}
                </span>
            </small>
        </div>
    `;
    return card;
}

function addPost(){
    const modal = new bootstrap.Modal(document.getElementById('addPostModal'));
    modal.show();
}

function submitPost(){
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const author = document.getElementById('postAuthor').value;

    if(!title || !content || !author){
        alert('Please fill in all fields.');
        return;
    }

    let posts = JSON.parse(localStorage.getItem('posts')) || fakePosts;

    const newPost = {
        id: posts.length + 1,
        topicId: currentTopicId,
        title: title,
        content: content,
        author: author,
        createdAt: new Date().toISOString().slice(0,16).replace('T', ' ')
   };

   posts.push(newPost);

   localStorage.setItem('posts', JSON.stringify(posts));

   let topics = JSON.parse(localStorage.getItem('topics')) || fakeTopics;
   const topic = topics.find(t => t.id === currentTopicId);
   if(topic){
    topic.postCount += 1;
    topic.lastActivity = new Date().toISOString().split('T')[0];
    localStorage.setItem('topics', JSON.stringify(topics));
   }

   const modal = bootstrap.Modal.getInstance(document.getElementById('addPostModal'));
   modal.hide();

   document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
    document.getElementById('postAuthor').value = '';

    const topicPosts = posts.filter(p => p.topicId === currentTopicId);
    displayPosts(topicPosts);

    document.getElementById('postCount').textContent = topic.postCount;
}

