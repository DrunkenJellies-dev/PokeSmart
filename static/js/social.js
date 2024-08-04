document.addEventListener('DOMContentLoaded', () => {
    const copyLinkButton = document.getElementById('copyLink');
    copyLinkButton.addEventListener('click', () => {
      const link = window.location.href;
      navigator.clipboard.writeText(link).then(() => {
        alert('Link copied to clipboard!');
      }, (err) => {
        console.error('Failed to copy: ', err);
      });
    });
  });