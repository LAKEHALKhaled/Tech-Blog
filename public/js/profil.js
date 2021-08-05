const newFormHandler = async (event) => {
  event.preventDefault();


  const description = document.querySelector('#post-desc').value.trim();
console.log(description);
  if (description) {
    const response = await fetch(`/api/`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};


document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

console.log("hello");