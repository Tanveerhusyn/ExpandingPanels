const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
        panel.addEventListener('click',()=>{
            RemoveAllActive();
            panel.classList.add('active');
        });
});

function RemoveAllActive(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
}