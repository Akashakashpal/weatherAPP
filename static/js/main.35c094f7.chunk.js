(this.webpackJsonplandingpage=this.webpackJsonplandingpage||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),i=a(14),d=a.n(i),r=(a(20),a(2));a(21);function j(e){var t=e.city,a=e.country,n=e.description,s=e.icon,i=e.temp,d=e.feelLike,r=e.minTemp,j=e.maxTemp,l=e.pressure,o=e.humidity,b=e.windSpeed,h="http://openweathermap.org/img/wn/"+s+".png";return Object(c.jsxs)("div",{className:"container mt-5 card display",children:[Object(c.jsxs)("div",{className:"row mt-4 ",children:[Object(c.jsxs)("div",{className:"col-3 text-center ",children:[Object(c.jsxs)("h2",{children:[Math.floor(i-273),Object(c.jsx)("sup",{children:"0"}),"C ,",n]}),Object(c.jsxs)("h5",{children:["Feels like ",Math.floor(d-273),Object(c.jsx)("sup",{children:"0"}),"C"]}),Object(c.jsxs)("h6",{children:[t,",",a]})]}),Object(c.jsx)("div",{className:"col-9 px-1 py-2",children:Object(c.jsx)("img",{src:h,alt:"Weather",className:"icon"})})]}),Object(c.jsxs)("div",{className:"row  my-5 text-center ",children:[Object(c.jsxs)("div",{className:"col-3",children:[Object(c.jsxs)("div",{children:["Wind Speed ",Object(c.jsx)("b",{children:"(m/sec)"})]}),Object(c.jsx)("div",{children:b})]}),Object(c.jsxs)("div",{className:"col-3",children:[Object(c.jsxs)("div",{children:["Pressure ",Object(c.jsx)("b",{children:"(hPa)"})]}),Object(c.jsx)("div",{children:l})]}),Object(c.jsxs)("div",{className:"col-3",children:[Object(c.jsxs)("div",{children:["High/Low"," ",Object(c.jsxs)("b",{children:[Object(c.jsx)("sup",{children:"0"}),"C"]})]}),Object(c.jsxs)("div",{children:[Math.floor(r-273),"/",Math.floor(j-273)]})]}),Object(c.jsxs)("div",{className:"col-3",children:[Object(c.jsxs)("div",{children:["Humidity ",Object(c.jsx)("b",{children:"(%)"})]}),Object(c.jsx)("div",{children:o})]})]})]})}function l(e){var t=e.handleCity,a=e.getWeather;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"row container-fluid pt-4 mx-4",children:[Object(c.jsx)("h3",{className:"text-black  col-6 pl-4",children:Object(c.jsx)("u",{children:"Weather App"})}),Object(c.jsxs)("form",{className:" row col-6 justify-content-end text-white",children:[Object(c.jsx)("div",{className:"col-4 md-2",children:Object(c.jsx)("input",{type:"text",required:!0,className:"form-control bg-black border-0 rounded-5 border-secondary text-black ",placeholder:"Enter City",onChange:function(e){return t(e.target.value)}})}),Object(c.jsx)("button",{className:"btn btn-success md-2",onClick:function(e){return a(e)},children:"Get Weather"})]})]})})}a(22);var o=a(5),b=a.n(o);var h=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(""),d=Object(r.a)(i,2),o=d[0],h=d[1],m=Object(n.useState)(""),O=Object(r.a)(m,2),u=O[0],p=O[1],x=Object(n.useState)(""),v=Object(r.a)(x,2),f=v[0],g=v[1],y=Object(n.useState)(null),w=Object(r.a)(y,2),N=w[0],S=w[1],k=Object(n.useState)(""),C=Object(r.a)(k,2),W=C[0],_=C[1],M=Object(n.useState)(""),E=Object(r.a)(M,2),T=E[0],L=E[1],P=Object(n.useState)(""),q=Object(r.a)(P,2),D=q[0],H=q[1],J=Object(n.useState)(""),A=Object(r.a)(J,2),B=A[0],F=A[1],G=Object(n.useState)(""),I=Object(r.a)(G,2),z=I[0],K=I[1],Q=Object(n.useState)(""),R=Object(r.a)(Q,2),U=R[0],V=R[1],X=Object(n.useState)(""),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=Object(n.useState)(""),te=Object(r.a)(ee,2),ae=te[0],ce=te[1],ne=Object(n.useState)(""),se=Object(r.a)(ne,2),ie=se[0],de=se[1];return Object(n.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){h(e.coords.latitude),s(e.coords.longitude),b.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(o,"&lon=").concat(a,"&appid=51439367c5b9c7c0362dac66df3dab7d")).then((function(e){S(e.data),p(e.data.name),_(e.data.weather[0].main),de(e.data.weather[0].icon),L(e.data.main.temp),H(e.data.main.feels_like),F(e.data.main.temp_min),K(e.data.main.temp_max),V(e.data.main.pressure),$(e.data.main.humidity),ce(e.data.wind.speed),g(e.data.sys.country)}))})):console.log("geolocation not supported")}),[o,a]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(l,{handleCity:function(e){p(e)},getWeather:function(e){e.preventDefault(),""===u?alert("Enter City"):b.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(u,"&appid=51439367c5b9c7c0362dac66df3dab7d")).then((function(e){S(e.data),p(e.data.name),_(e.data.weather[0].main),de(e.data.weather[0].icon),L(e.data.main.temp),H(e.data.main.feels_like),F(e.data.main.temp_min),K(e.data.main.temp_max),V(e.data.main.pressure),$(e.data.main.humidity),ce(e.data.wind.speed),g(e.data.sys.country)}))}}),Object(c.jsx)("div",{className:"cardDesign",children:N?Object(c.jsx)(j,{city:u,country:f,description:W,icon:ie,temp:T,feelLike:D,minTemp:B,maxTemp:z,pressure:U,humidity:Z,windSpeed:ae}):Object(c.jsx)("h2",{children:"loading...."})})]})};d.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.35c094f7.chunk.js.map