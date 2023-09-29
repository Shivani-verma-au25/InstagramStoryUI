let arr = [
    {dp:'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',img:'https://plus.unsplash.com/premium_photo-1661281391052-715e8f2337da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
    {dp:'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',img:'https://plus.unsplash.com/premium_photo-1674498702207-5b1705932409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
    {dp:'https://images.unsplash.com/photo-1622396636133-ba43f812bc35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',img:'https://plus.unsplash.com/premium_photo-1674498702207-5b1705932409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
    {dp:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',img:'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {dp:'https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',img:'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9yc2NoZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {dp:'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',img:'https://images.unsplash.com/photo-1635094742897-3f0014ccc07b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVjYXRpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
    {dp:'https://media.istockphoto.com/id/1167257685/photo/beautiful-young-girl-enjoying-nature-on-a-field-of-sunflowers-sunlight-plays-on-the-field.jpg?s=612x612&w=0&k=20&c=s3Xhfi1QZpyjQ_0MLJuBuI6dS1eKa0Q8IiZCVMa3HKg=',img:'https://images.unsplash.com/photo-1515858457941-c3d246d93ef0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
]

let clutter = "";
arr.forEach(function(elem,index){
    clutter += `<div class="stry" id="first">
    <img id="${index}" src="${elem.dp}" alt="">
</div>`
})
document.querySelector('.stories').innerHTML = clutter

// full screen 
let grow = 0
document.querySelector('.stories').addEventListener('click',function(dets){
    document.querySelector('#full-srceen').style.display = 'initial';
    document.querySelector('#full-srceen').style.backgroundImage = `url(${arr[dets.target.id].img})`
    setTimeout(function(){
        document.querySelector('#full-srceen').style.display = 'none';
    },3000)
    if (grow <=100) {
        setInterval(function(){
            document.querySelector('#growth').style.width = `${grow++}%`
            document.querySelector('#growth').style.backgroundColor = 'gray' 
            document.querySelector('.stry').style.border = 'none' 
        },30)
    } else {
        grow = 0
    }
})

document.querySelector('#full-srceen i').addEventListener('click',function(dets){
    console.log('hey');
    document.querySelector('#full-srceen').style.display = 'none';
})


// follow part ***********************************8

let arr2 = [
    {name:'Luci',logo:'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',bg:'https://images.unsplash.com/photo-1687182252183-58a905e7569a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',icon1:'ri-heart-line',icon2:'<i class="ri-chat-3-line"></i>',icon3:'< class="ri-share-forward-fill"'},
    {name:"Meran",logo:'https://media.istockphoto.com/id/1167257685/photo/beautiful-young-girl-enjoying-nature-on-a-field-of-sunflowers-sunlight-plays-on-the-field.jpg?s=612x612&w=0&k=20&c=s3Xhfi1QZpyjQ_0MLJuBuI6dS1eKa0Q8IiZCVMa3HKg=',bg:'https://images.unsplash.com/photo-1687298704083-05b781ea8280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {name:"Mellow",logo:'https://images.unsplash.com/photo-1687360440741-f5df549b352d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',bg:'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
    {name:"Aerin",logo:'https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',bg:'https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {name:'Rayul',logo:'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',bg:'https://images.unsplash.com/photo-1632084546206-c277f777fa47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1Y2F0aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {name:'Albert Dera',logo:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',bg:'https://images.unsplash.com/photo-1617650728468-8581e439c864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbWJvcmdoaW5pJTIwYXZlbnRhZG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
    {name:'Partric',logo:'https://images.unsplash.com/photo-1557977275-d261356f567f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=399&q=80',bg:'https://images.unsplash.com/photo-1548624321-000bbb8e2ce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
    // {name:'Partric',logo:'https://images.unsplash.com/photo-1557977275-d261356f567f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=399&q=80',bg:'https://images.unsplash.com/photo-1548624321-000bbb8e2ce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'}
]

let clutter1 = '';
arr2.forEach(function(elem,inx){
    // console.log(inx,elem.name);
    clutter1 += `<div class="inner-c">
    <div class="nav">
        <div class="logo-pic">
            <img src="${elem.logo}" alt="">
            <h6>${elem.name}</h6>
        </div>
        <div class="follow">
            <h6>Follow</h6>
            <i class="ri-more-2-fill"></i>
        </div>
    </div>
    <img id = 'bg' src="${elem.bg}"alt="">
    <div class="likes">
        <div class="heart">
            <i id="h" class="ri-heart-3-fill"></i>
            <i class="ri-chat-1-line"></i>
            <i class="ri-share-forward-line"></i>
        </div>
        <div class="save">
            <i class="ri-image-add-line"></i>
        </div>
    </div>
</div> `
})
document.querySelector('#center').innerHTML = clutter1


// for heart
let flag = 0
let like = document.querySelectorAll('.heart #h')
like.forEach(function(elem){
    // console.log(elem);
    elem.addEventListener('click',function(dets){
      if (flag == 0) {
          // console.log('hey');
            elem.style.color = "red"
            flag = 1
      } else {
            elem.style.color = "black"
            flag = 0
      }

    })
})


// follow

let flag2 = 0
let follw = document.querySelectorAll('.follow h6')

follw.forEach(function(elem){
    elem.addEventListener('click',function(dets){
        if (flag2 == 0) {
            elem.innerHTML = "Following"
            flag2 = 1
        } else {
            elem.innerHTML = "Follow"
            flag2 = 0
        }
    })
})

// floated heart
let f_heart = document.querySelectorAll('#center #bg')
let full_hrt = document.querySelector('#c-fullScreen')
let pic_hrt = document.querySelector('#c-fullScreen #kiss')
console.log(pic_hrt);
f_heart.forEach(function(elem){
    // console.log(elem);
    elem.addEventListener('click',function(dets){
        full_hrt.style.zIndex = 1
        pic_hrt.style.scale = 10
        setTimeout(function(){
            full_hrt.style.zIndex = -1
            pic_hrt.style.scale = 0
        },1000)
    })
})


