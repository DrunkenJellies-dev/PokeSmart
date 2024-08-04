document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-like, .btn-dislike').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.target.closest('form').action;
        fetch(url, {
          method: 'POST',
          headers: {
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value,
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            const postActions = event.target.closest('.post-actions');
            postActions.querySelector('.btn-like span').textContent = data.likes_count;
            postActions.querySelector('.btn-dislike span').textContent = data.dislikes_count;
          }
        });
      });
    });
  });
  