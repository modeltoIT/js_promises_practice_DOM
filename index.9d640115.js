function e(e,n){var t=document.createElement("div");t.classList.add(n),t.dataset.qa="notification",t.textContent=e,document.body.append(t)}new Promise(function(e,n){document.body.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){return n(Error("First promise was rejected"))},3e3)}).then(function(n){return e(n,"success")}).catch(function(n){return e(n,"error")});var n=new Promise(function(e){document.body.addEventListener("click",function(){e("left")})}),t=new Promise(function(e){document.body.addEventListener("contextmenu",function(){e("right")})});Promise.any([n,t]).then(function(n){e("Second promise was resolved","success")}),Promise.all([n,t]).then(function(n){e("Third promise was resolved","success")});
//# sourceMappingURL=index.9d640115.js.map
