
function loadHeader() {
    fetch('/commomHeader&Footer/html/header.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('body').insertAdjacentHTML('afterbegin', data);
      })
      .catch(error => console.error('Error loading header:', error));
  }
  

  function loadFooter() {
    fetch('/commomHeader&Footer/html/footer.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('body').insertAdjacentHTML('beforeend', data);
      })
      .catch(error => console.error('Error loading footer:', error));
  }
  

  window.onload = function() {
    loadHeader();
    loadFooter();
  };
  