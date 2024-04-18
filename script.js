/*
Pour ce projet je vais devoir réaliser des cartes avec une une image et du text (un cube avec 2cube(image/text)),
au quelle je vais devoir appliquer du scss, je vais devrais également créé autant de carte qu'il y'as dans mon 'tableau' et les affichers dans un format résponsive.
*/

/* 
i orginse my table as next so it's a table of table-> this one contain every thing i need for my card
so that i just need to put right index to adapt de card to my data. NB: for the last section, i will use a.slice to separate the info.
 i regouped them in the last index so i don't have too much index in my table and cause they will be used in the same line . 
*/

let table =[
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase'],
    ['image','h3','h1','p','img','p','link,img,phrase']
];


for (i=0 ;i <table.length;i++){

        //création de section dans le main.
        let article=document.createElement('article');
        document.querySelector('main').appendChild(article);
        
        let section_image=document.createElement('section');
        section_image.setAttribute('class','image');

        let section_text=document.createElement('section');
        section_text.setAttribute('class','texte');

        article.appendChild(section_image);
        article.appendChild(section_text);

    for(j=0; j<table[i].length;j++){

        switch(j){

            case 0:
                let image =document.createElement('img');
                image.setAttribute('src',table[i][j]);
                image.setAttribute('alt','ceci est une image');
                section_image.appendChild(image);
            break;
             
            case 1:
                let h3 =document.createElement('h3');
                h3.textContent=table[i][j];
                section_text.appendChild(h3);
            break;

            case 2:
                let h1 =document.createElement('h1');
                h1.textContent=table[i][j];
                section_text.appendChild(h1);
            break;
             
            case 3:
                let p =document.createElement('p');
                p.textContent=table[i][j];
                section_text.appendChild(p);
            break;
             
            case 4:
                let pdp =document.createElement('img');
                pdp.setAttribute('src',table[i][j]);
                pdp.setAttribute('alt','ceci est une image');
                section_text.appendChild(pdp);
            break;
             
            case 5:
                let text_pdp =document.createElement('p');
                text_pdp.textContent=table[i][j];
                section_text.appendChild(text_pdp);
            break;
             
            case 6:
                let last_data =table[i][j].split(',');

                let anchore=document.createElement('a');
                anchore.setAttribute('href',last_data[0]);
                anchore.textContent=last_data[2];

                let img_anchore=document.createElement('img');
                img_anchore.setAttribute('src',last_data[1]);
                img_anchore.setAttribute('alt','ceci est une image');
                anchore.appendChild(img_anchore);

                section_text.appendChild(anchore);

            break;
            
            default:
                console.log('ça bogue :(');
                break;
        }

        
    }
}
