/*
const data = [{"imageUrl":"../ecom/img/product0.jpeg","title":"Product 0","owner":"salah","rating":2,"oldPrice":12.9900000000000002131628207280300557613372802734375,"newPrice":9.9900000000000002131628207280300557613372802734375},
{"imageUrl":"../ecom/img/product1.jpeg","title":"Product 1","rating":4.5,"owner":"abdlah","oldPrice":29.989999999999998436805981327779591083526611328125,"newPrice":24.989999999999998436805981327779591083526611328125},
{"imageUrl":"../ecom/img/product2.jpeg","title":"Product 2","rating":3.70000000000000017763568394002504646778106689453125,"owner":"salah","oldPrice":19.989999999999998436805981327779591083526611328125,"newPrice":17.989999999999998436805981327779591083526611328125},
{"imageUrl":"../ecom/img/product3.jpeg","title":"Product 3","rating":4.20000000000000017763568394002504646778106689453125,"owner":"john","oldPrice":39.99000000000000198951966012828052043914794921875,"newPrice":34.99000000000000198951966012828052043914794921875},
{"imageUrl":"../ecom/img/product4.jpeg","title":"Product 4","rating":4.79999999999999982236431605997495353221893310546875,"owner":"john","oldPrice":49.99000000000000198951966012828052043914794921875,"newPrice":44.99000000000000198951966012828052043914794921875},
{"imageUrl":"../ecom/img/product5.jpeg","title":"Product 5","rating":3.100000000000000088817841970012523233890533447265625,"owner":"abdlah","oldPrice":15.9900000000000002131628207280300557613372802734375,"newPrice":12.9900000000000002131628207280300557613372802734375},
{"imageUrl":"../ecom/img/product6.jpeg","title":"Product 6","rating":4.9000000000000003552713678800500929355621337890625,"owner":"john","oldPrice":59.99000000000000198951966012828052043914794921875,"newPrice":54.99000000000000198951966012828052043914794921875},
{"imageUrl":"../ecom/img/product7.jpeg","title":"Product 7","rating":2.5,"owner":"salah","oldPrice":25.989999999999998436805981327779591083526611328125,"newPrice":22.989999999999998436805981327779591083526611328125},
{"imageUrl":"../ecom/img/product8.jpeg","title":"Product 8","rating":4,"owner":"john","oldPrice":39.99000000000000198951966012828052043914794921875,"newPrice":34.99000000000000198951966012828052043914794921875},
{"imageUrl":"../ecom/img/product9.jpeg","title":"Product 9","rating":4.29999999999999982236431605997495353221893310546875,"owner":"abdlah","oldPrice":69.9899999999999948840923025272786617279052734375,"newPrice":64.9899999999999948840923025272786617279052734375}
];*/

const getData = async()=>{
    const res = await fetch('http://localhost/tpwebstore/FSHanouti/BEHanouti/index.php?action=allProduct');
    const response = await res.json();
    let data = [];
    for(let i=0;i<response.length;i++){
        data.push(response[i]);
    }
    console.log(data);
    return data;
}



const container = document.querySelector('.container');

const stqrt = (titl)=>{
    const container = document.createElement('div');
    const title = document.createElement('h1');
    title.innerHTML = titl;
    container.appendChild(title);
    document.querySelector('.container').appendChild(container);
}

const headingComponent = ()=>{
    const header = document.createElement('header');
    header.innerHTML = `
    <div class="container px-4 px-lg-5 my-5">
        <div class="text-center ">
            <h1 class="display-4 fw-bolder text-white ">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">With Este shop</p>
        </div>
    </div>
    `;
    header.setAttribute('class','headerf bg-dark py-5');
    return header;
}

const productListComponent = (data)=>{
    const productList = document.createElement('section');
    console.log(data.length)
    let str =    `
        <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">`
    for(let i=0;i<data.length;i++) { 
            str+= ` <div class="col mb-5">
            <div class="card h-100">
            <a onclick="product(${i},${data})" style="text-decoration: none !important; color:black;">
                <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                <img class="card-img-top" src="img/product${i}.jpeg" alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder" >${data[i].title}</h5>
                        <!-- Product reviews-->
                        <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                    </div>
                        <span class="text-muted text-decoration-line-through">${data[i].price}</span>
                        ${data[i].priceSOLD}
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="./addcart.php?id=">Add to cart</a></div>
                </div></a>
            </div>
            </div>`;
        };

        str+=`
        </div>
        </div>            
    `;
    productList.innerHTML = str;
    return productList;
}

const home = async()=>{
    container.innerHTML ='';
    const heading = headingComponent();
    const data = await getData();
    const productList = productListComponent(data);
    container.appendChild(heading);
    container.appendChild(productList);
}


home();

const product=(id,data)=>{
    
    let stateObj = { id: id };
   
   window.history.pushState(stateObj,
           "Product", "/product.html");
    const product = document.createElement('section');
    product.innerHTML = `
            <div class="container px-4 px-lg-5 my-5 ">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6">
                        
                    <img class="card-img-top mb-5 mb-md-0" src="${data[id].imageUrl}" alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">SKU: BST-498</div>
                        <h1 class="display-5 fw-bolder">${data[id].title}</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through">${data[id].oldPrice}</span>
                            <span>${data[id].newPrice}</span>
                        </div>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div class="d-flex">
                            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                            
                        </div>
                    </div>
                
                </div>
            </div>
    `;
    product.setAttribute("class",'py-5');
    container.innerHTML ='';
    container.appendChild(product);
}


window.addEventListener('popstate', function (event) {
    const currentUrl = window.location.href;
	switch (currentUrl){
        case 'http://127.0.0.1:5500/hanoti/':
            case 'http://127.0.0.1:5500/hanoti/index.html':
                home();break;
        case 'http://127.0.0.1:5500/hanoti/product.html':
            product();break;
        default:
            home();
            break;
    }
});


