const buttons = document.querySelectorAll(".button");
const button_reset = document.querySelector(".button_reset");
const txt = document.querySelector(".txt");
const imgGif = document.querySelector(".img-gif");

let idx = 0;



const alternatives = [ 
    { text: "", image: "./images/cat-01.gif" }, 
    { text: "这么扎心", image: "./images/cat-04.gif" },
    { text: "我想你了 ", image: "./images/cat-02.gif" },
    { text: "来吧，给我一次机会", image: "./images/cat-05.gif" },
    { text: "不要这么绝情好吗 ", image: "./images/cat-06.gif" },
];

const ohyes = {
     text: "我知道你想我了。",
      image: "./images/cat-yes.gif"
};

function updateDisplay(o) { 
    imgGif.src = o.image; 
    txt.innerHTML = o.text;
}


button_reset.addEventListener("click", function() { 
    idx = 0;
    updateDisplay(alternatives[idx]);
    buttons.forEach(item => item.style.display = "inline-block");
    button_reset.style.display = "none";
});


buttons.forEach(btn => {
    btn.addEventListener("click", function() {
         if (btn.id === "y") {
             buttons.forEach(item => item.style.display = "none");
             updateDisplay(ohyes);
             const sound = document.getELementById("h");
             sound.volume = 0.9;
             audioHappy.muted = false;
             sound.play();
             const audioHappy = document.getELementByld('h');
             audioHappy.preload = 'auto';
             audioHappy.addEventListener('error',(e)=>{
                console.error(':',e.target.error);
             });
             audioHappy.play().catch(e=>{
                console.log('音频加载失败',e);
             });
            } 

        if (btn.id === "n") {
            

           
            idx += 1;
        if (idx < alternatives.length) { 
            updateDisplay(alternatives[idx]);
        } else {

        buttons.forEach(item => item.style.display = "none");
        button_reset.style.display = "inline-block";
            }
        }
    });
});

