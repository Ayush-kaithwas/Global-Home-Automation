// Initialization of firebase

const firebaseConfig = {
  apiKey: "AIzaSyAvlVtAg18ZEqLFPzIwsgQ9Ke3FAq3A_NM",
  authDomain: "home-automation-9b63c.firebaseapp.com",
  databaseURL: "https://home-automation-9b63c-default-rtdb.firebaseio.com",
  projectId: "home-automation-9b63c",
  storageBucket: "home-automation-9b63c.appspot.com",
  messagingSenderId: "740655037718",
  appId: "1:740655037718:web:3f31ad861645f87d9d6437",
  measurementId: "G-1K2KNQED42"
};

firebase.initializeApp(firebaseConfig);

// Sending data from firebase


let r = firebase.database().ref('humidity');
let x = firebase.database().ref('Temperature');

r.on('value', function (snapshot) {
    let sp = snapshot.val()
    document.getElementById("humi").innerHTML = sp
})

x.on('value', function (snapshot) {
    let t = snapshot.val()
    document.getElementById("temp").innerHTML = t
})


// Room 1
let light1 = firebase.database().ref("GF/light");
let fan1 = firebase.database().ref("GF/fan");
let ac1 = firebase.database().ref("GF/ac");


// Room 2
let fan2 = firebase.database().ref("FF/fan");
let light2 = firebase.database().ref("FF/light");
let ac2 = firebase.database().ref("FF/ac");


// My Room
let fan3 = firebase.database().ref("SF/fan");
let light3 = firebase.database().ref("SF/light");
let ac3 = firebase.database().ref("SF/ac");


let l1 = 0;
let f1 = 0;
let a1 = 0;
let l2 = 0;
let f2 = 0;
let a2 = 0;
let l3 = 0;
let f3 = 0;
let a3 = 0;


// ================================ ========================================Ground Floor================== =================================

function GF_light()
{
    if(l1==0)
    {
       light1.set(1);
       l1 = 1;
    }
    else
    {
        light1.set(0);
        l1 = 0;
    }
}

function GF_Fan()
{
    if(f1==0)
    {
        fan1.set(1);
        f1 = 1;
    }
    else
    {
        fan1.set(0);
        f1 = 0;
    }
}

function GF_Ac()
{
    if(a1==0)
    {
        ac1.set(1);
        a1 = 1;
    }
    else
    {
        ac1.set(0);
        a1 = 0;
    }
}


// ===============================
light1.on("value", function (snapshot) {
    let p = snapshot.val()
    console.log(p);
    if (p == 0) {
        document.getElementById("GF_light").style.backgroundColor = "#e74a3b";
    }
    if (p == 1) {
        document.getElementById("GF_light").style.backgroundColor = "#1cc88a";
    }
})
// ===============================
fan1.on("value", function (snapshot) {
    let p = snapshot.val()
    console.log(p);
    if (p == 0) {
        document.getElementById("GF_Fan").style.backgroundColor = "#e74a3b";
    }
    if (p == 1) {
        document.getElementById("GF_Fan").style.backgroundColor = "#1cc88a";
    }
})
// ===============================
ac1.on("value", function (snapshot) {
    let p = snapshot.val()
    console.log(p);
    if (p == 0) {
        document.getElementById("GF_Ac").style.backgroundColor = "#e74a3b";
    }
    if (p == 1) {
        document.getElementById("GF_Ac").style.backgroundColor = "#1cc88a";
    }
})






// ================================ ========================================First Floor================== =================================

function FF_light()
{
    if(l2==0)
    {
       light2.set(1);
       l2 = 1;
    }
    else
    {
        light2.set(0);
        l2 = 0;
    }
}

function FF_Fan()
{
    if(f2==0)
    {
        fan2.set(1);
        f2 = 1;
    }
    else
    {
        fan2.set(0);
        f2 = 0;
    }
}

function FF_Ac()
{
    if(a2==0)
    {
        ac2.set(1);
        a2 = 1;
    }
    else
    {
        ac2.set(0);
        a2 = 0;
    }
}


// ===============================
light2.on("value", function (snapshot) {
    let p = snapshot.val()
    console.log(p);
    if (p == 0) {
        document.getElementById("FF_light").style.backgroundColor = "#e74a3b";
    }
    if (p == 1) {
        document.getElementById("FF_light").style.backgroundColor = "#1cc88a";
    }
})
// ===============================
fan2.on("value", function (snapshot) {
    let p = snapshot.val()
    console.log(p);
    if (p == 0) {
        document.getElementById("FF_Fan").style.backgroundColor = "#e74a3b";
    }
    if (p == 1) {
        document.getElementById("FF_Fan").style.backgroundColor = "#1cc88a";
    }
})
// ===============================
ac2.on("value", function (snapshot) {
    let p = snapshot.val()
    console.log(p);
    if (p == 0) {
        document.getElementById("FF_Ac").style.backgroundColor = "#e74a3b";
    }
    if (p == 1) {
        document.getElementById("FF_Ac").style.backgroundColor = "#1cc88a";
    }
})






// ================================ ========================================Second Floor================== =================================

function SF_light()
{
    if(l3==0)
    {
       light3.set(1);
       l3 = 1;
    }
    else
    {
        light3.set(0);
        l3 = 0;
    }
}

function SF_Fan()
{
    if(f3==0)
    {
        fan3.set(1);
        f3 = 1;
    }
    else
    {
        fan3.set(0);
        f3 = 0;
    }
}

function SF_Ac()
{
    if(a3==0)
    {
        ac3.set(1);
        a3 = 1;
    }
    else
    {
        ac3.set(0);
        a3 = 0;
    }
}


// ===============================
light3.on("value", function (snapshot) {
    let p = snapshot.val()
    console.log(p);
    if (p == 0) {
        document.getElementById("SF_light").style.backgroundColor = "#e74a3b";
    }
    if (p == 1) {
        document.getElementById("SF_light").style.backgroundColor = "#1cc88a";
    }
})
// ===============================
fan3.on("value", function (snapshot) {
    let p = snapshot.val()
    console.log(p);
    if (p == 0) {
        document.getElementById("SF_Fan").style.backgroundColor = "#e74a3b";
    }
    if (p == 1) {
        document.getElementById("SF_Fan").style.backgroundColor = "#1cc88a";
    }
})
// ===============================
ac3.on("value", function (snapshot) {
    let p = snapshot.val()
    console.log(p);
    if (p == 0) {
        document.getElementById("SF_Ac").style.backgroundColor = "#e74a3b";
    }
    if (p == 1) {
        document.getElementById("SF_Ac").style.backgroundColor = "#1cc88a";
    }
})





