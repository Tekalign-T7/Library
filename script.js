const book1=document.querySelector("#book1");
const button=document.querySelector(".button-container");
button.addEventListener("click",()=>{
    console.log("hi")
})

function Book(title,author,pages,status){
    if(!new.target){
        throw Error("YouForget to use the keyword new");
    }
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.status=status;
    this.info=function(){
        return `${this.title} by ${this.author},${this.pages} pagges,${this.status}`;
    }
    book1.append(this.info());
}
const theHobbit= new Book('The Hobbit','J.R.R. TOLKIEN',295,'not read yet');
