// this is for the t-shirt gallary
// this is for the object construction
function MyCloth(name,color,size,stock,image,price){
	this.name=name
	this.color=color
	this.size=size
	this.stock=stock
	this.image=image
	this.price=price
}

// creating the new product using the  object constructor property

var pant=new MyCloth("Pant","red","large",350,"img/pant.jpg","$20.99")
var tshirt=new MyCloth("Tshirt","yellow","small",150,"img/tshirt.jpg","$15.99")
var jacket=new MyCloth("Jacket","green","medium",250,"img/jacket.jpg","$30.99")
var jeanspant=new MyCloth("Jeanspant","black","large",50,"img/jeanspant.jpg","$21.99")
var switter=new MyCloth("Switter","blue","small",450,"img/switer.jpg","$24.99")


// creating the array to add the product to the array
var MyClothArray=new Array
// adding the all the product to the array 
MyClothArray.push(pant,tshirt,jacket,jeanspant,switter)

// this is the loop fot the product array
for(var i=0;i<MyClothArray.length;i++){
	// creating new element fot the each product
	var newitem=document.createElement('div');
	var newdiv=document.createElement('div');
	var nameh1=document.createElement('h1');
	var colorh1=document.createElement("h1")
	var sizeh1=document.createElement('h1')
	var stockh1=document.createElement('h1')
	var btn=document.createElement('button')
	var image=document.createElement("img")
	var price=document.createElement('h1')

	// create text for the new element
	var tname=document.createTextNode(MyClothArray[i].name);
	var tcolor=document.createTextNode("Color is: " +MyClothArray[i].color);
	var tsize=document.createTextNode("Available size is: " + MyClothArray[i].size);
	var tstock=document.createTextNode("In-Stock: "+MyClothArray[i].stock);
	var tbtn=document.createTextNode("Buy now!");
	var tprice=document.createTextNode("Price: "+MyClothArray[i].price);
	// this is for the src attribute or image property
	image.src=MyClothArray[i].image
	// update the class attribute
	nameh1.className="nepal"
	colorh1.className="kathmandu"
	sizeh1.className="pokhera"
	stockh1.className="tanahun"
	image.className="img-responsive"
	price.className="palpa"
	
	
	btn.className="btn btn-danger btn-lg center-block"
	newitem.className="col-sm-12 text-center"
	newdiv.className="thumbnail"
	
	// add text to the element
	nameh1.appendChild(tname);
	colorh1.appendChild(tcolor)
	sizeh1.appendChild(tsize)
	stockh1.appendChild(tstock)
	btn.appendChild(tbtn)
	price.appendChild(tprice)
	// add the element to the new div
	newdiv.appendChild(nameh1)
	newdiv.appendChild(image)
	newdiv.appendChild(colorh1)
	newdiv.appendChild(sizeh1)
	newdiv.appendChild(stockh1)
	newdiv.appendChild(price)
	newdiv.appendChild(btn)
	
	
	// adding the newdiv to the newitem
	newitem.appendChild(newdiv)
	// adding the new item to the element with the id="pritam"
	document.getElementById('pritam').appendChild(newitem)
	


}

