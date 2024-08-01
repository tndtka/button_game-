window.addEventListener('keydown', (e)=>{ 
    //console.log('keydown event', e.key) // 이걸 쓰면 keydown event 나옴
    const div = document.getElementById(e.key) // 얘랑
    div.classList.add('pressed')  // 얘를 써주면 

    if(e.key == '1' || e.key == '2' || e.key == '3'){
        const div = document.getElementById(e.key)
        div.classList.add('pressed')
    }
}) 

// keydown X keyup O
window.addEventListener('keyup', (e)=>{ 
    if (e.key == '1' || e.key == '2' || e.key == '3'){
    const div = document.getElementById(e.key)
    div.classList.remove('pressed')
}
})