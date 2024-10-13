let currentAudio = null;
let currentSoundFile = null;
let currentButton = null; 

document.querySelectorAll('.drum').forEach(key => {
    key.addEventListener('click', () => {
        playsound(key,key.dataset.sound);
    });
});

document.addEventListener('keydown', (event) => {
    const keyMap = {
        'v': 'sound1',
        'i': 'sound2',
        'r': 'sound3',
        'a': 'sound4',
        't': 'sound5',
        'k': 'sound6',
    };

    const soundId = keyMap[event.key.toLowerCase()];
    if (soundId) {
        const button=document.getElementById(soundId);
        playorstop(button,button.dataset.sound);
    }
});

function playorstop(button, soundFile) {
    if (currentAudio && currentSoundFile === soundFile && !currentAudio.paused) {
        stopsound(button);  
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            resetbutton();  
        }
        currentAudio = new Audio(soundFile);
        currentAudio.play();
        currentSoundFile = soundFile;  

        button.textContent = button.dataset.stopText;
        button.classList.add('stop');
        button.classList.remove('play');
    }
}


function playsound(button,soundFile) {

    if(currentAudio && currentSoundFile === soundFile && !currentAudio.paused)
    {
        stopsound(button);
    }
    else
    {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            resetbutton();
        }
        currentAudio = new Audio(soundFile);
        currentAudio.play();
        currentSoundFile = soundFile; 

        button.textContent = button.dataset.stopText ;  
        button.classList.add('stop');
        button.classList.remove('play');
    }
}

function stopsound(button)
{
    if(currentAudio)
    {
        currentAudio.pause();
        currentAudio.currentTime=0;
        currentSoundFile = null; 

        button.textContent = button.dataset.playText ;  
        button.classList.add('play');
        button.classList.remove('stop');
    }
    
}

function resetbutton() {
    document.querySelectorAll('.drum').forEach(button => {
        button.textContent = button.dataset.playText ; 
        button.classList.add('play');
        button.classList.remove('stop');
    });
}