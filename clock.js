
setInterval(() =>{
    let d = new Date()
    document.getElementById('clock').innerText = d.toLocaleTimeString();
}, 1000)