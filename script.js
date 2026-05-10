document.querySelectorAll('.course-toggle').forEach((button)=>{
  button.addEventListener('click',()=>{
    const item=button.closest('.course-item');
    item.classList.toggle('open');
  });
});

const search=document.querySelector('#courseSearch');
if(search){
  search.addEventListener('input',()=>{
    const q=search.value.toLowerCase().trim();
    document.querySelectorAll('.course-item').forEach(item=>{
      item.style.display=item.innerText.toLowerCase().includes(q)?'block':'none';
    });
  });
}
