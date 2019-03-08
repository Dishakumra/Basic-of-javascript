var divAddProduct = document.getElementById("divAddProduct");
var divListProducts = document.getElementById("divListProducts");
var aAddProduct = document.getElementById("aAddProduct");

aAddProduct.addEventListener("click", function(event)
{
  createNewProductPanel();
}
);
function addProducttoDOM()
{
  var name=document.getElementById("textProductName").value;
  var desc=document.getElementById("txtProductDesc").value;
  var price=document.getElementById("txtProductPrice").value;
  var quantity=document.getElementById("txtProductQuantity").value;

if(name==""||desc==""||price==""||quantity=="")
alert("ADD VALUE");
else
{

  var divProduct = document.createElement("div");
  divProduct.setAttribute("id", "productId");

  var aProductName=document.createElement("a");
  aProductName.setAttribute("href","#");
  aProductName.innerHTML=name;
  divProduct.appendChild(aProductName);

  insertBlankLine(divProduct,1);

  var aProductDesc = document.createElement("label");
  aProductDesc.innerHTML = desc;
    divProduct.appendChild(aProductDesc);
  insertBlankLine(divProduct,1);

     var aProductPrice=document.createElement("label");
     aProductPrice.innerHTML=price;
     divProduct.appendChild(aProductPrice);
    insertBlankLine(divProduct,1);

    var aDelete=document.createElement("button");
    aDelete.setAttribute("id","aDelete");
    aDelete.innerHTML="Delete";
    divProduct.appendChild(aDelete);

    aDelete.addEventListener("click",function(event)
  {
    var innerParent=event.target.parentNode;
    innerParent.parentNode.removeChild(innerParent);
  });
    divListProducts.appendChild(divProduct);
    divAddProduct.innerHTML="";
    unHideAddNewProductLink();
  }
}
function unHideAddNewProductLink()
{
  aAddProduct.setAttribute("style","visibility:visible");
}
function insertBlankLine(targetElement,a)
{
  for(var i=0;i<a;i++)
  {
  var br=document.createElement("br");
  targetElement.appendChild(br);
}
}
function hideAddNewProductLink()
{
  aAddProduct.setAttribute("style","visibility:hidden");
}
function createNewProductPanel()
{
  hideAddNewProductLink();
  var lblAddProduct=document.createElement("label");
  lblAddProduct.innerHTML="ADD NEW PRODUCT";
  lblAddProduct.setAttribute("style","font-weight:bold");

  divAddProduct.appendChild(lblAddProduct);

  insertBlankLine(divAddProduct,2);
  var textProductName=document.createElement("input");
  textProductName.setAttribute("id","textProductName");
  textProductName.setAttribute("type","text");
  textProductName.setAttribute("placeholder","ENTER NAME");
  divAddProduct.appendChild(textProductName);

  insertBlankLine(divAddProduct,2);
  var txtProductDesc = document.createElement("textarea");
  txtProductDesc.setAttribute("id","txtProductDesc");
    txtProductDesc.setAttribute("placeholder", "Enter the product description");
  txtProductDesc.setAttribute("style","width:250px ; height:50px");
  divAddProduct.appendChild(txtProductDesc);


insertBlankLine(divAddProduct,2);
  var txtProductPrice = document.createElement("input");
	txtProductPrice.setAttribute("type","text");
	txtProductPrice.setAttribute("id","txtProductPrice");
    txtProductPrice.setAttribute("placeholder", "Enter the product price");
	txtProductPrice.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductPrice);


insertBlankLine(divAddProduct,2);
  var txtProductQuantity = document.createElement("input");
	txtProductQuantity.setAttribute("type","text");
	txtProductQuantity.setAttribute("id","txtProductQuantity");
    txtProductQuantity.setAttribute("placeholder", "Enter the product quantity");
	txtProductQuantity.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductQuantity);

  insertBlankLine(divAddProduct,2);

  var btnAddButton = document.createElement("button");
  btnAddButton.setAttribute("id","btnAddButton");
  btnAddButton.innerHTML = "Add Product";
  divAddProduct.appendChild(btnAddButton);

  btnAddButton.addEventListener("click", function(event)
                    {
                      addProducttoDOM();
                    }
               );
}
