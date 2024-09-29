// Object.defineProperties
function Produto(nome,preco,estoque){
        this.nome=nome
        this.preco=preco
        this.estoque=estoque
Object.defineProperty(this,'estoque',{
        enumerable:true,
        value:estoque,
        writable:true,
        configurable:true
})
}
const p1=new Produto('camiseta',15)
p1.estoque=8
console.log(p1)