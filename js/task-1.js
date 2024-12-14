const listItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${listItem.length}`);

listItem.forEach((el) => {
     const titleItem = el.firstElementChild.textContent;
    console.log(`Category: ${titleItem}`);
    const totalChild = el.lastElementChild.children;
    console.log(`Elements: ${totalChild.length}`);
    
});




    



