const options = {
    threshold: 1
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
      
       
        opts.forEach(opt => {
         
          if (opt.dataset.goToId === id) {
            console.log(id)
            opt.classList.add('active');
          } else {
            opt.classList.remove('active');
          }
        });
      }
    });
  }, options);
  
  const divs = document.querySelectorAll('.block-selected-opts div');
  const opts = document.querySelectorAll('.a-select');
  
  divs.forEach(div => observer.observe(div));
  