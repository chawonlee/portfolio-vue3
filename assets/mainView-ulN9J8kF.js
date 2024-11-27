import{r as d,o as D,a as F,b as E,c as T,d as C,e,t as S,f as v,w as $,g as r,F as R}from"./index-DmYADbcz.js";const j="/assets/myPhoto1-BA_sL9VR.jpg",A="/assets/hoverDot-0vWaDEHe.png",H={class:"about-wrap"},I={class:"intro"},N={class:"main-text"},W={class:"scroll-down"},q={__name:"aboutView",setup(P){const m=d(["열정이 넘치는 개발자","꾸준히 성장하는 개발자","도전적인 개발자","협력 능력이 뛰어난 개발자","문제 해결 능력이 뛰어난 개발자","세부 사항에 주의를 기울이는 개발자","팀워크를 중시하는 개발자","사용자 경험에 집중하는 개발자","시간 관리를 철저히 하는 개발자","열린 마음으로 피드백을 수용하는 개발자","안정성과 성능을 고려하는 개발자"]),f=d("꾸준히 성장하는 개발자"),y=d(null),u=d(!1),n=d(null);let o,h=[];const l={x:null,y:null};let _;D(()=>{if(setTimeout(()=>{p()},3e3),!n.value)return;const s=n.value;if(o=s.getContext("2d"),!o){console.error("Canvas getContext failed!");return}x(),g(),b(),window.addEventListener("resize",x),s.addEventListener("mousemove",M),s.addEventListener("mouseleave",z)}),F(()=>{cancelAnimationFrame(_),window.removeEventListener("resize",x),n.value.removeEventListener("mousemove",M),n.value.removeEventListener("mouseleave",z)});const p=()=>{u.value||(u.value=!0,w(),setTimeout(()=>{L()},2e3))},w=()=>{u.value&&(f.value=m.value[Math.floor(Math.random()*m.value.length)],y.value=setTimeout(()=>{w()},100))},L=()=>{clearTimeout(y.value),u.value=!1};class B{constructor(t,i,a,c){this.x=t,this.y=i,this.size=a,this.color=c,this.dx=(Math.random()-.5)*1.3,this.dy=(Math.random()-.5)*1.3}draw(){o.beginPath(),o.arc(this.x,this.y,this.size,0,Math.PI*2),o.fillStyle=this.color,o.fill()}update(){(this.x+this.size>n.value.width||this.x-this.size<0)&&(this.dx*=-1),(this.y+this.size>n.value.height||this.y-this.size<0)&&(this.dy*=-1),this.x+=this.dx,this.y+=this.dy,this.draw()}}const g=()=>{h=[];const s=200;for(let t=0;t<s;t++){const i=Math.random()*3+3,a=Math.random()*n.value.width,c=Math.random()*n.value.height,k=`rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.3)`;h.push(new B(a,c,i,k))}},V=()=>{if(l.x===null||l.y===null)return;const s=h.filter(t=>{const i=t.x-l.x,a=t.y-l.y;return Math.sqrt(i*i+a*a)<100});for(let t=0;t<s.length;t++)for(let i=t+1;i<s.length;i++){const a=s[t],c=s[i];o.beginPath(),o.moveTo(a.x,a.y),o.lineTo(c.x,c.y),o.strokeStyle=a.color,o.lineWidth=.8,o.stroke()}},b=()=>{o.clearRect(0,0,n.value.width,n.value.height),h.forEach(s=>s.update()),V(),_=requestAnimationFrame(b)},x=()=>{n.value.width=window.innerWidth,n.value.height=window.innerHeight,g()},M=s=>{const t=n.value.getBoundingClientRect();l.x=s.clientX-t.left,l.y=s.clientY-t.top},z=()=>{l.x=null,l.y=null};return(s,t)=>{const i=E("v-icon"),a=E("v-btn");return T(),C(R,null,[e("canvas",{ref_key:"connectDot",ref:n},null,512),e("section",H,[t[2]||(t[2]=e("img",{src:j,width:"30%",class:"myPhoto"},null,-1)),e("div",I,[t[0]||(t[0]=e("div",{class:"title"},"The journey is the reward",-1)),e("div",N,[e("div",null,"저는 "+S(f.value)+" 입니다.",1),v(a,{onClick:p,variant:"text",disabled:u.value,color:"#626463"},{default:$(()=>[v(i,{icon:"mdi-shuffle-variant",color:"secondary"})]),_:1},8,["disabled"])]),t[1]||(t[1]=e("div",{class:"detail-text"},[r(" 안녕하세요. 프론트엔드 개발자 이채원입니다. "),e("br"),r(" 바람과 비에 흔들리면서도 곧게 뻗어 아름답게 피어나는 꽃처럼,"),e("br"),r(" 저도 풀스택이라는 명확한 목표를 향해 꾸준히 성장하고 있습니다."),e("br"),r(" 새로운 기술을 배우고 도전하는 과정이 쉽지는 않지만, "),e("br"),r(" 사람들과 협업하여 의미 있는 결과물을 만들어내는 일에 큰 보람을 느낍니다."),e("br"),r(" 다양한 의견을 존중하며 최선의 해결책을 함께 찾아가는 경험을 소중히 여기며,"),e("br"),r(" 변화하는 기술과 트랜드에 적응하고 한 단계 더 발전하는 개발자가 되기 위해"),e("br"),r(" 끊임없이 노력하고 있습니다."),e("br")],-1))])]),t[4]||(t[4]=e("img",{src:A,class:"hover-instruction",alt:"Move the cursor over the dots!"},null,-1)),e("div",W,[t[3]||(t[3]=e("div",null,"더보기",-1)),v(i,{icon:"mdi-chevron-down",color:"secondary",size:"x-large"})])],64)}}},U={class:"aboutView"},Y={__name:"mainView",setup(P){return(m,f)=>(T(),C("section",U,[v(q)]))}};export{Y as default};
