(this["webpackJsonpside-project"]=this["webpackJsonpside-project"]||[]).push([[0],{19:function(e,n,t){var r=t(56);r.keys().forEach((function(n){var t=n.replace(/^.+\/([^/]+)\/index\.jsx/,"$1");Object.keys(r(n)).forEach((function(c){"default"===c?e.exports[t]=r(n)[c]:e.exports[c]=r(n)[c]}))}))},2:function(e,n,t){var r=t(42);r.keys().forEach((function(n){var t=n.replace(/^.+\/([^/]+)\/index\.jsx/,"$1");Object.keys(r(n)).forEach((function(c){"default"===c?e.exports[t]=r(n)[c]:e.exports[c]=r(n)[c]}))}))},3:function(e,n,t){"use strict";t.r(n);var r,c=t(7),o=t(4),i=o.d.div(r||(r=Object(c.a)(["\n  color: ",";\n  line-height: 1.5;\n  white-space: pre-wrap;\n  z-index: inherit;\n  overflow: hidden;\n\n  ","\n\n  ","\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"])),(function(e){return e.color?e.theme.colors[e.color]:"white"}),(function(e){return e.pointer&&"\n      cursor: pointer;\n    "}),(function(e){return e.center&&"\n      text-align: center;\n    "}),(function(e){return e.underline&&"\n      text-decoration: underline;\n    "}),(function(e){return e.landing&&"\n      font-size: 6rem;\n      font-weigth: bold;  \n    "}),(function(e){return e.large&&"\n      font-size: 3rem;\n      font-weight: normal;\n      font-style: normal;\n    "}),(function(e){return e.title1&&"\n      font-size: 2.5rem;\n      font-weight: bold;\n    "}),(function(e){return e.title2&&"\n      font-size: 2.5rem;\n      font-weight: normal;\n    "}),(function(e){return e.title3&&"\n      font-size: 2rem;\n      font-weight: normal;\n    "}),(function(e){return e.content1&&"\n      font-size: 1.75rem;\n      font-weight: bold;\n    "}),(function(e){return e.content2&&"\n      font-size: 1.75rem;\n      font-weight: normal;\n    "}),(function(e){return e.header&&"\n      font-size: 1.25rem;\n      font-weight: normal;\n    "}));n.default=Object(o.e)(i)},42:function(e,n,t){var r={"./Divider/index.jsx":43,"./GlobalStyle/index.jsx":46,"./GridSystem/index.jsx":49,"./Layout/index.jsx":61,"./Margin/index.jsx":54,"./StyledRow/index.jsx":55,"./Typography/index.jsx":3};function c(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=o,e.exports=c,c.id=42},43:function(e,n,t){"use strict";t.r(n),t.d(n,"Divider",(function(){return i}));var r,c=t(7),o=t(4),i=Object(o.e)(o.d.div(r||(r=Object(c.a)(["\n  width: ",";\n  height: ",";\n  background-color: ",";\n"])),(function(e){return e.row?"0.25rem":"100%"}),(function(e){return e.row?"100%":"0.25rem"}),(function(e){return e.color?e.theme.colors[e.color]:e.theme.colors.white})))},46:function(e,n,t){"use strict";t.r(n);var r,c=t(7),o=t(4),i=(t(47),t(48),.01*window.innerHeight);document.documentElement.style.setProperty("--vh","".concat(i,"px"));var l=Object(o.b)(r||(r=Object(c.a)(["\n  :root {\n    font-size: 16px;\n    font-family: 'Consola', sans-serif;\n  }\n\n  body {\n    line-height: 1.6;\n    background-color: ",";\n\n    a {\n      text-decoration: none;\n    }\n  }\n\n  .container-fluid {\n    width: 100%;\n    padding: 0;\n  }\n"])),(function(e){return e.theme.colors.gray900}));n.default=Object(o.e)(l)},47:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n),t.d(n,"Grid",(function(){return j})),t.d(n,"Col",(function(){return u})),t.d(n,"Row",(function(){return f})),t.d(n,"Container",(function(){return b}));var r,c,o,i,l,a,d=t(7),s=t(4),j=Object(s.e)(s.d.div(r||(r=Object(d.a)(["\n  width: ",";\n  height: auto;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){return e.theme.grid.width}))),u=Object(s.e)(s.d.div(c||(c=Object(d.a)(["\n  width: auto;\n  display: flex;\n  flex-direction: column;\n\n  ","\n\n  ","\n\n  ","\n"])),(function(e){return e.size&&Object(s.c)(o||(o=Object(d.a)(["\n      width: calc(\n        (100% - "," * ",") /\n          "," * "," +\n          "," * ","\n      );\n    "])),e.theme.grid.gutter,e.theme.grid.columnSize-1,e.theme.grid.columnSize,e.size,e.theme.grid.gutter,e.size-1)}),(function(e){return e.center&&"\n    justify-content: center;\n  "}),(function(e){return e.end&&Object(s.c)(i||(i=Object(d.a)(["\n      justify-content: flex-end;\n    "])))}))),f=Object(s.e)(s.d.div(l||(l=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n\n  ","\n\n  ","\n\n  "," ~ "," {\n    margin-left: ",";\n  }\n"])),(function(e){return e.justify&&"\n    justify-content: ".concat(e.justify,";\n  ")}),(function(e){return e.align&&"\n    align-items: ".concat(e.align,";\n  ")}),u,u,(function(e){return e.theme.grid.gutter}))),b=Object(s.e)(s.d.div(a||(a=Object(d.a)(["\n  width: 100vw;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"])),(function(e){return e.row&&"\n    flex-direction: row;\n  "}),(function(e){return e.column&&"\n    flex-direction: column;\n  "}),(function(e){return e.center&&"\n    align-items: center;\n  "}),(function(e){return e.cover&&"\n    width: 100vw;\n    height: 100vh;\n    align-items: center;\n    justify-content: center;\n    background-position: center;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n  "})))},54:function(e,n,t){"use strict";t.r(n),t.d(n,"Margin",(function(){return l}));var r,c,o=t(7),i=t(4),l=i.d.div(r||(r=Object(o.a)(["\n  height: calc("," * 0.5rem);\n  ","\n"])),(function(e){return e.size}),(function(e){return e.row&&Object(i.c)(c||(c=Object(o.a)(["\n      height: 0;\n      width: calc("," * 0.5rem);\n    "])),(function(e){return e.size}))}))},55:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(1);n.default=function(e){var n=e.children,t=e.line;return Object(c.jsxs)(r.Row,{align:"center",children:[Object(c.jsx)(r.Col,{size:.8,children:Object(c.jsx)(r.Row,{justify:"flex-end",children:Object(c.jsx)(r.Typography,{title2:!0,color:"gray500",children:t})})}),Object(c.jsx)(r.Margin,{row:!0,size:10}),n]})}},56:function(e,n,t){var r={"./Landing/index.jsx":57};function c(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=o,e.exports=c,c.id=56},57:function(e,n,t){"use strict";t.r(n);var r,c=t(7),o=t(0),i=t(4),l=t(2),a=t(3),d=t(15),s=t(1),j=Object(i.d)(l.Container)(r||(r=Object(c.a)(["\n  margin: 0 30px;\n"])));n.default=function(){var e=Object(d.e)((function(e){return e.shared.scroll})),n=Object(o.useRef)([]);return Object(o.useEffect)((function(){!function(e){n.current[{HERO:0,STACK:1}[e]].scrollIntoView({behavior:"smooth",block:"start"})}(e)}),[e]),Object(s.jsx)(l.Layout,{children:Object(s.jsxs)(j,{children:[Object(s.jsxs)("div",{ref:function(e){return n.current[0]=e},children:[Object(s.jsx)(l.Row,{children:Object(s.jsx)(l.Margin,{size:9})}),Object(s.jsxs)(l.StyledRow,{line:1,children:[Object(s.jsxs)(a.default,{large:!0,color:"blue300",children:["const"," "]}),Object(s.jsxs)(a.default,{large:!0,color:"blue200",children:["me"," "]}),Object(s.jsxs)(a.default,{large:!0,color:"gray400",children:["="," "]}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:"{"})]}),Object(s.jsxs)(l.StyledRow,{line:2,children:[Object(s.jsx)(l.Margin,{row:!0,size:15}),Object(s.jsxs)(a.default,{large:!0,color:"blue100",children:["name:"," "]}),Object(s.jsx)(a.default,{large:!0,color:"blue100",children:"leeJungWoo"}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:","})]}),Object(s.jsxs)(l.StyledRow,{line:3,children:[Object(s.jsx)(l.Margin,{row:!0,size:15}),Object(s.jsxs)(a.default,{large:!0,color:"blue100",children:["nickName:"," "]}),Object(s.jsx)(a.default,{large:!0,color:"blue100",children:"dudo"}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:","})]}),Object(s.jsxs)(l.StyledRow,{line:4,children:[Object(s.jsx)(l.Margin,{row:!0,size:15}),Object(s.jsxs)(a.default,{large:!0,color:"blue100",children:["motto:"," "]}),Object(s.jsx)(a.default,{large:!0,color:"blue100",children:"twblne"}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:","})]}),Object(s.jsx)(l.StyledRow,{line:5,children:Object(s.jsx)(a.default,{large:!0,color:"gray400",children:"};"})})]}),Object(s.jsx)(l.StyledRow,{line:6,children:Object(s.jsx)(l.Margin,{size:9})}),Object(s.jsxs)("div",{ref:function(e){return n.current[1]=e},children:[Object(s.jsx)(l.StyledRow,{line:7,children:Object(s.jsx)(l.Margin,{size:9})}),Object(s.jsxs)(l.StyledRow,{line:8,children:[Object(s.jsxs)(a.default,{large:!0,color:"blue300",children:["const"," "]}),Object(s.jsxs)(a.default,{large:!0,color:"yellow300",children:["getSkillStacks"," "]}),Object(s.jsxs)(a.default,{large:!0,color:"gray400",children:["="," "]}),Object(s.jsxs)(a.default,{large:!0,color:"blue100",children:["me"," "]}),Object(s.jsxs)(a.default,{large:!0,color:"blue300",children:["=>"," "]}),Object(s.jsx)(a.default,{large:!0,color:"gray400",pointer:!0,children:"{"})]}),Object(s.jsxs)(l.StyledRow,{line:9,children:[Object(s.jsx)(l.Margin,{row:!0,size:10}),Object(s.jsxs)(a.default,{large:!0,color:"violet",children:["return"," "]}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:"["})]}),Object(s.jsxs)(l.StyledRow,{line:10,children:[Object(s.jsx)(l.Margin,{row:!0,size:20}),Object(s.jsx)(a.default,{large:!0,color:"brown300",children:'"JavaScript"'}),Object(s.jsxs)(a.default,{large:!0,color:"gray400",children:[","," "]}),Object(s.jsx)(a.default,{large:!0,color:"brown300",children:'"HTML"'}),Object(s.jsxs)(a.default,{large:!0,color:"gray400",children:[","," "]}),Object(s.jsx)(a.default,{large:!0,color:"brown300",children:'"CSS"'}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:","}),Object(s.jsx)(l.Margin,{row:!0,size:15}),Object(s.jsx)(a.default,{large:!0,color:"green300",children:"// Level 2"})]}),Object(s.jsxs)(l.StyledRow,{line:11,children:[Object(s.jsx)(l.Margin,{row:!0,size:20}),Object(s.jsx)(a.default,{large:!0,color:"brown300",children:'"React.js"'}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:","}),Object(s.jsx)(a.default,{large:!0,color:"brown300",children:'"styled-components"'}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:","}),Object(s.jsx)(l.Margin,{row:!0,size:5}),Object(s.jsx)(a.default,{large:!0,color:"green300",children:"// Level 1"})]}),Object(s.jsxs)(l.StyledRow,{line:12,children:[Object(s.jsx)(l.Margin,{row:!0,size:20}),Object(s.jsx)(a.default,{large:!0,color:"brown300",children:'"Next.js"'}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:","}),Object(s.jsx)(a.default,{large:!0,color:"brown300",children:'"TypeScript"'}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:","}),Object(s.jsx)(l.Margin,{row:!0,size:31}),Object(s.jsx)(a.default,{large:!0,color:"green300",children:"// Level 0"})]}),Object(s.jsxs)(l.StyledRow,{line:13,children:[Object(s.jsx)(l.Margin,{row:!0,size:10}),Object(s.jsx)(a.default,{large:!0,color:"gray400",children:"];"})]}),Object(s.jsx)(l.StyledRow,{line:14,children:Object(s.jsx)(a.default,{large:!0,color:"gray400",children:"};"})})]}),Object(s.jsx)(l.Margin,{size:100})]})})}},60:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"setScroll",(function(){return T}));var c=t(0),o=t.n(c),i=t(21),l=t.n(i),a=t(6),d=t(2),s=t(10),j=t(19),u=t(1),f=Object(s.a)();var b=function(){return Object(u.jsxs)(a.c,{history:f,children:[Object(u.jsx)(d.GlobalStyle,{}),Object(u.jsx)(a.b,{render:function(e){var n=e.location;return Object(u.jsxs)(a.d,{location:n,children:[Object(u.jsx)(a.b,{path:"/",exact:!0,children:Object(u.jsx)(j.Landing,{})}),Object(u.jsx)(a.b,{path:"/programming",children:Object(u.jsx)(j.Programming,{})}),Object(u.jsx)(a.b,{path:"/hiphop",children:Object(u.jsx)(j.Hiphop,{})}),Object(u.jsx)(a.b,{path:"/Fashion",children:Object(u.jsx)(j.Fashion,{})}),Object(u.jsx)(a.a,{path:"*",to:"/"})]})}})]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),o(e),i(e)}))},g=t(4),x=t(15),O={grid:{width:"1240px",gutter:"30px",columnSize:12},colors:{primary:"#FFc847",primaryVariant:"#FDB92e",onPrimary:"#232527",secondary:"#3A3D40",secondaryVariant:"#232527",onSecondary:"#FFFFFF",tertiary:"#FFFFFF",tertiaryVariant:"#F8F9FA",onTertiary:"#FF6D6F",disabled:"#DEE2E6",onDisabled:"#B4B8BC",error:"#D93925",warning:"#ffc847",info:"#3584dF",success:"#20BA45",border:"#DEE2E6",background:"#F6F7FB",backgroundVariant:"#EEF1F5",body:"rgba(0, 0, 0, 0.6)",white:"#ffffff",black:"#000000",tooltip:"#fff8e1",yellow50:"#fff8ee",yellow60:"#fff8e1",yellow250:"#ffd94d",yellow300:"#ffc847",yellow320:"#fdb92e",coralPink50:"#ffebeb",coralPink70:"#ffcdcd",coralPink200:"#ff956c",coralPink300:"#ff6d6f",coralPink500:"#e24a2f",pink800:"#ff467d",gray30:"#f5f6f6",gray40:"#f6f7fa",gray50:"#F8F9FA",gray100:"#EDF0F3",gray200:"#DEE2E6",gray230:"#d8dbde",gray250:"#d6d6d6",gray300:"#CCD0D4",gray400:"#B4B8BC",gray420:"#abaeb2",gray480:"#8e8e93",gray500:"#8C9094",gray600:"#6E7175",gray620:"#637175",gray700:"#4C5154",gray720:"#4b4b4b",gray780:"#3b3f42",gray800:"#3A3D40",gray850:"#2c2f32",gray860:"#2b2b2b",gray870:"#272a2c",gray880:"#27292c",gray900:"#232527",red300:"#de412a",red400:"#d93925",green50:"#dee2d6",green300:"#20ba45",blue50:"#f6f7fb",blue100:"#5f94c9",blue200:"#0697fe",blue300:"#2373cf",information:"#3584df",brown:"#3B2709",brown300:"#9da175ff",navy:"#1F3248",violet:"#7737b8",shadow:"0 7px 10px rgba(0, 0, 0, 0.18)",size:{header:"64px"}},sizes:{header:"64px",cover:"calc(var(--vh, 1vh) * 100 - 64px)",giant:{width:"343px",height:"48px",fontSize:"1rem"},large:{width:"242px",height:"48px",fontSize:"1rem"},medium:{width:"156px",height:"40px",fontSize:"1rem"},small:{width:"106px",height:"40px",fontSize:"0.875rem"},tiny:{width:"80px",height:"32px",fontSize:"0.75rem"}},fontSizes:{t1:"64px",t2:"40px",h1:"22px",h2:"22px",st1:"18px",st2:"18px",b1:"15px"},fontFamily:{general:"Nanum Square Round"},fontWeights:{t1:"700",t2:"800",h1:"700",h2:"300",st1:"700",st2:"400",b1:"400"},lineHeights:{t1:"1.2",t2:"1.1",h1:"1.32",h2:"1.32",st1:"1.2",st2:"1.2",b1:"1.47"},breakPoints:{xs:"0px",sm:"600px",md:"960px",lg:"1280px",xl:"1920px"},header:{height:"84px"}},y=t(24),w=t(18),p=t(14),m=t(30),v=t(37),S=t(35),z=t.n(S),F=t(25),k="SET_SCROLL",E={scroll:"HERO"};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k:return Object(w.a)(Object(w.a)({},e),{},{scroll:n.scroll});default:return e}},C=function(e){return Object(p.c)({router:Object(F.a)(e),shared:R})},M={key:"moing",storage:z.a,blacklist:["shared"]},D=Object(s.a)(),L=function(e){return Object(p.e)(Object(v.a)(M,C(D)),e,Object(p.d)(Object(p.a)(Object(m.a)(D))))},T=function(e){return{type:k,scroll:e}},B=(Object(w.a)({},r),L());l.a.render(Object(u.jsx)(g.a,{theme:O,children:Object(u.jsx)(x.a,{store:B,children:Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(y.a,{children:Object(u.jsx)(a.b,{component:b})})})})}),document.getElementById("root")),h()},61:function(e,n,t){"use strict";t.r(n);var r,c,o,i,l=t(7),a=t(0),d=t(4),s=t(18),j=t(15),u=t(2),f=t(1),b=d.d.li(r||(r=Object(l.a)(["\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  ","\n"])),(function(e){return e.active&&"background-color: ".concat(e.theme.colors.gray900,";")})),h=Object(d.d)((function(e){return Object(f.jsx)(u.Typography,Object(s.a)({},e))}))(c||(c=Object(l.a)(["\n  &:hover {\n    font-weight: bold;\n  }\n"]))),g=d.d.ul(o||(o=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  &:hover > "," {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &:hover > ",":hover {\n    outline: none;\n  }\n\n  &:hover > ",":active {\n    outline: none;\n  }\n"])),b,b,b),x=d.d.header(i||(i=Object(l.a)(["\n  display: flex;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  color: ",";\n  background-color: ",";\n  z-index: 99;\n"])),(function(e){return e.theme.colors.gray400}),(function(e){return e.theme.colors.gray700}));var O,y=function(){var e=Object(j.d)(),n=Object(j.e)((function(e){return e.shared.scroll}));return Object(f.jsx)(x,{children:Object(f.jsx)(u.Container,{row:!0,center:!0,children:Object(f.jsxs)(g,{children:[Object(f.jsx)(b,{onClick:function(){return e({type:"SET_SCROLL",scroll:"HERO"})},active:"HERO"===n,children:Object(f.jsx)(h,{header:!0,children:"AboutMe.js"})}),Object(f.jsx)(b,{onClick:function(){return e({type:"SET_SCROLL",scroll:"STACK"})},active:"STACK"===n,children:Object(f.jsx)(h,{header:!0,children:"SkillStacks.js"})})]})})})},w=d.d.main(O||(O=Object(l.a)(["\n  overflow: hidden;\n"])));n.default=Object(d.e)((function(e){var n=e.children;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{}),Object(f.jsx)(w,{children:n})]})}))}},[[60,1,2]]]);
//# sourceMappingURL=main.e992ef55.chunk.js.map