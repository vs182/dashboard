let list = document.querySelectorAll(".navigation li")
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let theme_select = document.getElementById("theme_select")
let themecss1 = document.getElementById('1')
let themecss2 = document.getElementById('2')
let themecss3 = document.getElementById('3')
let themecss4 = document.getElementById('4')
let themecss5 = document.getElementById('5')
let themecss6 = document.getElementById('6')
let themecss7 = document.getElementById('7')
let themecss8 = document.getElementById('8')
let themecss9 = document.getElementById('9')
var form = document.getElementById('form');
let title = document.getElementById('title')

let count = 80;
toggle.onclick = function() {
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}

function activelink() {
    list.forEach((item) => item.classList.remove(''));
    this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('mouseover', activelink));

function theme() {
    theme_select.classList.toggle("theme-select")
    themecss1.classList.toggle("themecss")
    themecss2.classList.toggle("themecss")
    themecss3.classList.toggle("themecss")
    themecss4.classList.toggle("themecss")
    themecss5.classList.toggle("themecss")
    themecss6.classList.toggle("themecss")
    themecss7.classList.toggle("themecss")
    themecss8.classList.toggle("themecss")
    themecss9.classList.toggle("themecss")

}

function mode1() {
    localStorage.setItem("theme", '#a928ff')
    var local = localStorage.getItem("theme")
    document.documentElement.style.setProperty("--blue", local)
}

function mode2() {
    localStorage.setItem("theme", '#287bff')
    var local = localStorage.getItem("theme")
    document.documentElement.style.setProperty("--blue", local)
}

function mode3() {
    localStorage.setItem("theme", '#ff2828')
    var local = localStorage.getItem("theme")
    document.documentElement.style.setProperty("--blue", local)
}

function mode4() {
    localStorage.setItem("theme", '#ffa928')
    var local = localStorage.getItem("theme")
    document.documentElement.style.setProperty("--blue", local)
}

function mode5() {
    localStorage.setItem("theme", '#3628ff')
    var local = localStorage.getItem("theme")
    document.documentElement.style.setProperty("--blue", local)
}

function mode6() {
    localStorage.setItem("theme", '#000')
    var local = localStorage.getItem("theme")
    document.getElementById('remove').classList.remove('remove')
    document.documentElement.style.setProperty("--blue", local)


}

function mode7() {
    localStorage.setItem("theme", '#8400ff')
    var local = localStorage.getItem("theme")
    document.documentElement.style.setProperty("--blue", local)
}

function mode8() {
    localStorage.setItem("theme", '#ff008c')
    var local = localStorage.getItem("theme")
    document.documentElement.style.setProperty("--blue", local)
}

function mode9() {
    localStorage.setItem("theme", '#00ccff')
    var local = localStorage.getItem("theme")
    document.documentElement.style.setProperty("--blue", local)
}
if (localStorage.getItem("theme") == "#a928ff") {
    document.documentElement.style.setProperty("--blue", localStorage.getItem("theme"))
} else if (localStorage.getItem("theme") == "#287bff") {

    document.documentElement.style.setProperty("--blue", localStorage.getItem("theme"))
} else if (localStorage.getItem("theme") == "#ffa928") {
    document.documentElement.style.setProperty("--blue", localStorage.getItem("theme"))
} else if (localStorage.getItem("theme") == "#ffa928") {
    document.documentElement.style.setProperty("--blue", localStorage.getItem("theme"))
} else if (localStorage.getItem("theme") == "#3628ff") {
    document.documentElement.style.setProperty("--blue", localStorage.getItem("theme"))
} else if (localStorage.getItem("theme") == "#000") {
    document.documentElement.style.setProperty("--blue", localStorage.getItem("theme"))
} else if (localStorage.getItem("theme") == "#8400ff") {
    document.documentElement.style.setProperty("--blue", localStorage.getItem("theme"))
} else if (localStorage.getItem("theme") == "#ff008c") {
    document.documentElement.style.setProperty("--blue", localStorage.getItem("theme"))
} else if (localStorage.getItem("theme") == "#00ccff") {
    document.documentElement.style.setProperty("--blue", localStorage.getItem("theme"))
}


function toggleForm() {
    var login_container = document.querySelector(".logincontainer");
    login_container.classList.toggle('active')
}

function register() {
    var username = document.getElementById("newuser")
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    localStorage.setItem("username", username.value)
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);

    var reader = new FileReader()

    var name = document.getElementById('image').files[0].name

    reader.addEventListener('load', function() {
        console.log("enter")
        if (this.result && localStorage) {
            window.localStorage.setItem("image", this.result);
            alert("image stored");
            showimage()
        } else {
            alert("not");
        }
    })

    reader.readAsDataURL(document.getElementById('image').files[0])
    console.log(name);

    window.location.href = "../html/index.html";



}

function showimage() {

    var profileimg = document.querySelector(".user");
    var img = document.getElementById("img-div");

    let res = window.localStorage.getItem("image")

    var image = new Image()
    var imageProfile = new Image()

    image.src = res;
    imageProfile.src = res;


    profileimg.appendChild(image)
    img.appendChild(imageProfile)

}
showimage()


//checking
function login() {
    console.log("hello")
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');


    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if (userName.value == storedName && userPw.value == storedPw) {
        window.location.href = "../html/index.html";

    } else {
        alert('Error on login');
    }
}





var infoname = document.getElementById("infoname");
var infoemail = document.getElementById("infoemail")

infoemail.value = localStorage.getItem("name")
infoname.value = localStorage.getItem("username")



// chat


function starck() {
    var details = document.getElementById('details')
    document.getElementById('chatContainer').style.transition = "0.5s";
    document.getElementById('chatContainer').style.width = "200px";

    var childchat = document.createElement('div')
    childchat.classList.add("childchat")
    childchat.setAttribute("id", "chatdis")

    var input = document.createElement("h2");
    input.innerHTML = "Starck";
    input.classList.add("chat-header");

    var image = document.createElement("div");
    image.classList.add("chat-image");

    var img = document.createElement("img");
    img.setAttribute("src", "../Assets/stark.jpg");

    var icondiv = document.createElement("button");
    icondiv.classList.add("icondiv")
    icondiv.setAttribute("onclick", "remove()");

    var icon = document.createElement("i")
    icon.setAttribute("class", "fas fa-times");

    var chatbox = document.createElement("input")
    chatbox.setAttribute("type", "text")
    chatbox.setAttribute("id", "chat")
    chatbox.classList.add("chat-box")

    var msgicon = document.createElement("i")
    msgicon.setAttribute("class", "fas fa-paper-plane")

    var sendbutton = document.createElement("button")
    sendbutton.classList.add("send-btn")
    sendbutton.setAttribute("onclick", "send()");
    sendbutton.appendChild(msgicon);



    childchat.appendChild(sendbutton)
    childchat.appendChild(chatbox)
    icondiv.appendChild(icon)
    childchat.appendChild(icondiv);
    image.appendChild(img)
    childchat.appendChild(input);
    childchat.appendChild(image);
    details.append(childchat)


    stark.style.display = "none";

    if (chatbox.value != "") {
        console.log("hello")
    } else {
        console.log("empty")
    }

}

function remove() {
    document.querySelector('.childchat').remove();
    document.getElementById('chatContainer').style.width = "500px";
    stark.style.display = "block";


}

function send() {
    var chatdiv = document.createElement("div");
    chatdiv.classList.add("chatdiv");
    chatdiv.setAttribute("id", "data")
    var chat = document.getElementById("chat")
    var chatdis = document.getElementById("chatdis")
    var text = document.createElement("p")
    text.classList.add("msg")
    text.innerHTML = chat.value;
    chatdiv.appendChild(text);
    chatdis.appendChild(chatdiv);
    chat.value = "";
    text.style.bottom = count + "%"
    count -= 10;
    var myDiv = document.getElementById("chatdis");
    myDiv.scrollTop = myDiv.scrollHeight;

}




connection.query(`create table ${new_user}(id int not null primary key AUTO_INCREMENT,user_name varchar(255),user_pass varchar(255),user_email varchar(255),user_profile longtext)`);
connection.query(`insert into ${new_user}(user_name,user_email,user_pass,user_profile) values(?,?,?,?)`, [new_user, new_email, new_password, image], function(err) {
    if (err) throw err;
    else { res.redirect("/dashboard") }
    res.end();
})