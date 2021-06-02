'use strict';

const imageContainer = document.querySelector('.images')


const wait = function(sec){
    return new Promise(function(resolve){
        setTimeout(resolve, sec * 1000);
    })
}

const createImage = function(imgPath){
    return new Promise(function(resolve, reject){
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function(){
            imageContainer.append(img);
            resolve(img);
            
        })
        img.addEventListener('error', function(){
            reject(new Error('Image not found.'));
        })
      })
    }


const loadNPause = async function(){
    try {
        let img = await createImage('img/img-1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';
        img = await createImage('img/img-2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';
    }
    catch(err){
        console.error(err)
    }
}

// loadNPause();

const loadAll = async function(imgArr){
    try
    {
        const imgs = imgArr.map(async img => await createImage(img))

        const imgs2 = await Promise.all(imgs);
        console.log(imgs2);
        imgs2.forEach(img => img.classList.add('parallel'));
    }
    catch(err){
        console.error(err);
    }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);