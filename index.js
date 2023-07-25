// AJAX Aync & Await , Promise 
let data = [];

const display=()=>{

    data.map((ele)=>{

        let img = document.createElement("img");
        img.src = ele.images[0];

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let price = document.createElement("h5");
        price.innerHTML = ele.price;

        let discount = document.createElement("h6");
        discount.innerHTML = ele.discountPercentage;

        let des = document.createElement("p");
        des.innerHTML = ele.description;

        let cat = document.createElement("p");
        cat.innerHTML = ele.category;

        let div = document.createElement("div");
        div.setAttribute("id","sub-div");

        let btn = document.createElement("button");
        btn.innerHTML = "Add To Cart";
        btn.setAttribute("id","btns");

        div.append(img, title, price, discount, des, cat, btn);

        document.getElementById("page").append(div);

    })
}

const  get = async()=>{

    let res = await fetch ("https://dummyjson.com/products");
    let cloud = await res.json();
    data = cloud.products;
    console.log(data);
    display();
}
get();