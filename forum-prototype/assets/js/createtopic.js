

function handleSubmit(event){
    event.preventDefault();
    const title = document.getElementById('title').value;
    const category = document.querySelector('input[name="category"]:checked').value;
    const description = document.getElementById('description').value;

    if(!title || !category || !description){
        alert('Please fill in all fields.');
        return;
    }

    const newTopic = {
        id: fakeTopics.length + 1,
        title: title,
        description: description,
        category: category,
        postCount: 0,
        lastActivity: new Date().toISOString().split('T')[0]
    };

    fakeTopics.push(newTopic);

    localStorage.setItem('topics', JSON.stringify(fakeTopics));

    alert('New topic created successfully!');
    console.log(newTopic);

    window.location.href = 'index.html';
    
}