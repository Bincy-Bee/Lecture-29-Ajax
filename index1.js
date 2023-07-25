// AJAX ASYNC & AWAIT , PRomise...

let ajarr = [];

const display=()=>{

    ajarr.map((ele)=>{

        let img = document.createElement("img");
        img.src = ele.image;

        let fname = document.createElement("h3");
        fname.innerHTML = ele.firstName;

        let gender = document.createElement("h3");
        gender.innerHTML = ele.gender;

        let email = document.createElement("h4");
        email.innerHTML = ele.email;

        let phone = document.createElement("h4");
        phone.innerHTML = ele.phone;

        let birthdate = document.createElement("p");
        birthdate.innerHTML = ele.birthDate;

        let div = document.createElement("div");
        div.setAttribute("id","sub-div");

        div.append(img, fname, gender, email, phone, birthdate);
        document.getElementById("page").append(div);
    })
}

const get= async()=>{

    let aajj = await fetch ("https://dummyjson.com/users");
    let user = await aajj.json();
    ajarr = user.users;
    console.log(ajarr);
    display();
}
get();