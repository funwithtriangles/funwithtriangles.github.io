parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
var t,e=1/3,a=2/3,i=2*Math.PI,n=[0,e*i,a*i],o=[[241,118,76],[232,88,59]],r=100,l=r*(Math.sqrt(3)/2),s=.9,c=100,h=window.devicePixelRatio||1,d=0,f=0,v=0,g=0,w=0,u=0,m=[],M=document.querySelectorAll("[data-triEffect]"),p=function(){this.canvas=document.createElement("canvas"),this.canvas.width=2*r,this.canvas.height=2*l;var t=this.canvas.getContext("2d"),a=2*Math.floor(window.innerWidth/r),i=a*r,s=0;this.draw=function(){t.globalCompositeOperation="normal";var e=o[0];t.fillStyle="rgb("+e[0]+","+e[1]+","+e[2]+")",t.rect(-i/2,-i/2,i,i),t.fill(),t.save();e=o[1];t.fillStyle="rgba("+e[0]+","+e[1]+","+e[2]+",1)";for(var n=0;n<a;n++){var c=r-2*r*(g=n%2);t.translate(c,l);var h=(d-2*d*g)/10;t.globalCompositeOperation=g?"difference":"screen";for(var v=0;v<a;v++){var g,w=(f-2*f*(g=v%2))/10-i/2;this.triangle(r,o[g],Math.PI*g+s,v*r+h-i/2,w)}}s+=.003,t.restore()},this.triangle=function(a,i,o,r,l){var s,c;o+=e*Math.PI/2,t.beginPath(),t.fillStyle="rgba("+i[0]+","+i[1]+","+i[2]+",1)";for(var h=0;h<n.length;h++)s=a*Math.cos(n[h]+o)+r,c=a*Math.sin(n[h]+o)+l,0==h?t.moveTo(s,c):t.lineTo(s,c);t.fill(),t.closePath()}},b=function(t){var e,a,i,n,o=this,r=t.querySelector("canvas"),l=r.getContext("2d"),s=r.cloneNode(),c=t.getAttribute("data-triEffect"),d=t.getAttribute("data-aspectRatio");l=r.getContext("2d");this.draw=function(){if(a||!c){l.save();var t=l.createPattern(P.canvas,"repeat");l.fillStyle=t,l.fillRect(0,0,i,n),c&&(l.globalCompositeOperation="destination-in",l.setTransform(1,0,0,1,0,0),l.drawImage(s,0,0,i,n)),l.restore()}},this.resize=function(){i=Math.floor(r.width=t.clientWidth*h),n=c?Math.floor(r.height=i/h*d*h):Math.floor(r.height=t.clientHeight*h),i/2,n/2,l.scale(h,h),r.style.width=Math.floor(i/h)+"px",r.style.height=Math.floor(n/h)+"px",a&&(s.width=i,s.height=n,s.getContext("2d").drawImage(e,0,0,i,n))},window.addEventListener("resize",this.resize),c&&((e=new Image).src=c,e.onload=function(){a=!0,o.resize()}),this.resize()},y=function(e){t||(t=Date.now()),t<Date.now()-50&&(w=e.clientX-v,u=e.clientY-g,v=e.clientX,g=e.clientY,t=Date.now())},x=function(){w>c?w=c:w<-c&&(w=-c),u>c?u=c:u<-c&&(u=-c),d+=w*=s,f+=u*=s},C=function(){P.draw();for(var t=0;t<m.length;t++)m[t].draw()};window.addEventListener("mousemove",y),window.addEventListener("devicemotion",function(t){var e=t.acceleration.x,a=t.acceleration.y,i=t.acceleration.z;(e>.5||e<-.5)&&(w=10*e),(a>.5||a<-.5)&&(u=10*a),(i>.5||i<-.5)&&(u=10*i)});for(var P=new p,z=0;z<M.length;z++)m.push(new b(M[z]));requestAnimationFrame(function t(){x(),C(),requestAnimationFrame(t)});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.3b37783e.js.map