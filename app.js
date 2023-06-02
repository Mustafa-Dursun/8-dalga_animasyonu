const labels = document.querySelectorAll('.formControl label');


labels.forEach(label => {

    const text=label.innerText;
    label.innerHTML = text
        .split('')
        .map((harf, index) => `        
        <span style="transition-delay: ${index * 50}ms;">${harf}</span>  
        `)
        .join('');

});

    
  