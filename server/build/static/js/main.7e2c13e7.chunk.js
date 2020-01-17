(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(39),o=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(18),c=a(26),i=a(16),u=a.n(i),m=a(8),h=a(11),p=a(10),d=a(7),f=a(9),E=a(134),g=a(128),y=a(61),b=a(64),w=a(129),v=a(44);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),x=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),C=function(e){var t=e.svgRef,a=e.title,n=O(e,["svgRef","title"]);return r.a.createElement("svg",j({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),a?r.a.createElement("title",null,a):null,k,x)},D=r.a.forwardRef((function(e,t){return r.a.createElement(C,j({svgRef:t},e))})),T=(a.p,function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a.classes={linkBlack:{textDecoration:"none",color:"black"},linkWhite:{textDecoration:"none",color:"white"},mystyle:{fontSize:"2rem",fontFamily:"ChalkboardSE-Bold",textDecoration:"none",color:"black"}},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{style:{background:"#e9ecef"},sticky:"top"},r.a.createElement(g.a,null,r.a.createElement(y.a,{xs:2},r.a.createElement(E.a.Brand,null,r.a.createElement(l.b,{to:"./dashboard",style:this.classes.mystyle},"EduGraph"))),r.a.createElement(y.a,{xs:1},r.a.createElement(b.a,{variant:"info"},r.a.createElement(l.b,{to:"./notes",style:this.classes.linkWhite},"Notes"))),r.a.createElement(y.a,{xs:1},r.a.createElement(b.a,{variant:"info"},r.a.createElement(l.b,{style:this.classes.linkWhite,to:"./courses"},"Courses"))),r.a.createElement(y.a,null),r.a.createElement(y.a,{xs:1},r.a.createElement(b.a,{variant:"danger"},r.a.createElement(l.b,{to:"/session",style:this.classes.linkWhite},"Start Session"))),r.a.createElement(y.a,{xs:1}),r.a.createElement(y.a,{xs:1},r.a.createElement(w.a,{variant:"light",title:r.a.createElement(D,null)},r.a.createElement(v.a.Item,null,r.a.createElement(l.b,{style:this.classes.linkBlack,to:"./profile"},"Profile")),r.a.createElement(v.a.Item,{href:""},r.a.createElement(l.b,{style:this.classes.linkBlack,to:"./"},"Logout")))))))}}]),t}(r.a.Component)),S=a(130),W=a(135),I=a(131),N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).props.color?a.color=a.props.color:a.color="#ffffff",a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("hr",{style:{color:this.color,backgroundColor:this.color,height:1}})}}]),t}(r.a.Component),L=function(e){function t(e){var a;Object(m.a)(this,t),a=Object(p.a)(this,Object(d.a)(t).call(this,e));for(var n=[],r=0;r<10;r++)n.push("course "+r);return a.state={courses:n},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{style:{margin:"5% 0% 5% 0%",height:"500px",background:"#90ee90"}},r.a.createElement("h2",{style:{marginTop:"-2.5%",color:"#ffffff"}},"Courses"),r.a.createElement(N,null),r.a.createElement(W.a,{style:{padding:"2% 2%",width:"100%",height:"90%",overflow:"scroll"}},this.props.courseData?this.props.courseData.map((function(e,t){return r.a.createElement(W.a.Item,{action:!0,variant:"light"},r.a.createElement(l.b,{style:{textDecoration:"none",color:"black"},to:{pathname:"./courses",state:{course:e}}},e))})):r.a.createElement(g.a,null,r.a.createElement(I.a,{style:{color:"white"},animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))))}}]),t}(n.Component),V=a(132),B=function(e){function t(e){var a;Object(m.a)(this,t),a=Object(p.a)(this,Object(d.a)(t).call(this,e));for(var n=[],r=0;r<10;r++)n.push("notes "+r);return a.state={notes:n,course:"",topic:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.notes,t=[];if(e)for(var a in e)for(var n in e[a])t.push({topic:n,course:a});return r.a.createElement(S.a,{style:{marginTop:"40px",height:"500px",background:"#90ee90"}},r.a.createElement("h2",{style:{marginTop:"-2.5%",color:"#ffffff"}},"Notes"),r.a.createElement(N,{color:"#ffffff"}),t.length?r.a.createElement(W.a,{style:{padding:"2% 2%",width:"100%",height:"90%",overflow:"scroll"}},t.map((function(e,t){return r.a.createElement(W.a.Item,{action:!0,variant:"light"},r.a.createElement(V.a,null,r.a.createElement("h5",null,e.course)),r.a.createElement(V.a,null,e.topic))}))):r.a.createElement(g.a,null,r.a.createElement(I.a,{style:{color:"white"},animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))}}]),t}(n.PureComponent),z=(a(55),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(g.a,{style:{top:"10px"}},r.a.createElement(V.a,{style:{marginTop:"10px"}},r.a.createElement(y.a,null,r.a.createElement(V.a,null,r.a.createElement(y.a,null),r.a.createElement(y.a,null,r.a.createElement("h5",null,"Made By")),r.a.createElement(y.a,null)),r.a.createElement(N,{color:"white"}),r.a.createElement(V.a,null,r.a.createElement(y.a,null,r.a.createElement("a",{href:"https://github.com/ABHINAV112",style:{"text-decoration":"none",color:"white"}},"Abhinav")),r.a.createElement(y.a,null,r.a.createElement("a",{href:"https://github.com/arumugam666",style:{"text-decoration":"none",color:"white"}},"Arumugum")),r.a.createElement(y.a,null,r.a.createElement("a",{href:"https://github.com/mathpranay",style:{"text-decoration":"none",color:"white"}},"Pranay")),r.a.createElement(y.a,null,r.a.createElement("a",{href:"https://github.com/swakv",style:{"text-decoration":"none",color:"white"}},"Swathi")))))))}),P=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.t1=u.a,e.next=4,u.a.awrap(fetch("https://us-central1-edugraph-78964.cloudfunctions.net/app/user/".concat(a.state.userId)));case 4:return e.t2=e.sent.json(),e.next=7,e.t1.awrap.call(e.t1,e.t2);case 7:e.t3=e.sent,e.t4={userData:e.t3},e.t0.setState.call(e.t0,e.t4);case 10:case"end":return e.stop()}}))},a.state={userId:"R8IpJr6shgUowKN0jWDQrE5ycCE2",userData:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(g.a,{class:"margin"},r.a.createElement(B,{notes:this.state.userData.notes}),r.a.createElement(L,{courseData:this.state.userData.currCourse})),r.a.createElement(z,null))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement(g.a,null,r.a.createElement(V.a,{style:{marginTop:"-2.5%"}},r.a.createElement(y.a,null),r.a.createElement(y.a,{xs:6},r.a.createElement("h1",null,this.props.title)),r.a.createElement(y.a,null)),r.a.createElement(N,{color:"#000000"}),r.a.createElement(V.a,{style:{"margin-bottom":"1.5%"}},r.a.createElement("p",null,this.props.description)),r.a.createElement(V.a,null,r.a.createElement(y.a,null),r.a.createElement(y.a,{xs:1},r.a.createElement(b.a,{variant:"success",onClick:function(){window.open("https://youtube.com")}},"Launch")),r.a.createElement(y.a,null))))}}]),t}(n.PureComponent),R=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={description:"Our immersive study session, experience helps us track your study methods. While giving a clear description of what is going right and wrong!"},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(g.a,{style:{marginTop:"10%"}},r.a.createElement(G,{class:"vertical-center",title:"Ready to start studying?",description:this.state.description})))}}]),t}(r.a.Component),M=(a(46),a(69)),H=a.n(M),U=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).mystyle={fontSize:60,fontFamily:"ChalkboardSE-Bold"},a.navstyle={width:50,height:50,position:"absolute",paddingRight:10,top:30},a.buttonstyle={top:"20px"},a.parastyle={fontFamily:"Noteworthy-Bold",fontSize:15,textAlign:"center",padding:30},a.parastyle1={position:"absolute",fontFamily:"Noteworthy-Bold",fontSize:15,textAlign:"center"},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{"overflow-x":"hidden"}},r.a.createElement(V.a,{style:{background:"rgb(233, 236, 239)"}},r.a.createElement(g.a,null,r.a.createElement(V.a,null,r.a.createElement(y.a,{xs:3},r.a.createElement("p",{style:this.mystyle},"eduGraph"),","),r.a.createElement(y.a,null),r.a.createElement(y.a,{xs:3,style:{"padding-top":"3%"}},r.a.createElement(b.a,{style:this.buttonstyle,variant:"secondary"},r.a.createElement(l.b,{to:"./dashboard",style:{textDecoration:"none",color:"white"}},"Log In")))))),r.a.createElement(g.a,null,r.a.createElement(V.a,{style:{"margin-top":"20"}},r.a.createElement(y.a,{style:{"padding-top":"5%"}},r.a.createElement(V.a,{style:{"margin-bottom":"20"}},r.a.createElement("p",{style:this.parastyle},r.a.createElement(g.a,{style:{width:"80%"}},"EduGraph is a software that makes learning efforless and tranquil. We build a knowledge graph for each course which helps better tracking of topics and helps assosiate different concepts"))),r.a.createElement(V.a,null,r.a.createElement("p",{style:this.parastyle1},r.a.createElement(g.a,{style:{width:"80%"}},"EduGraph also tracks your attention at different levels and gives you a score based on your attention and grades. With eduGraph, learning is accelerated and simplified")))),r.a.createElement(V.a,null,r.a.createElement(y.a,null),r.a.createElement(y.a,null,r.a.createElement("img",{src:H.a})),r.a.createElement(y.a,null)))))}}]),t}(r.a.Component),A=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(S.a,{style:{background:"#90ee90",height:"500px"}},r.a.createElement(g.a,null,r.a.createElement(V.a,{style:{marginTop:"-2%"}},r.a.createElement("h2",{style:{marginTop:"-2.5%",color:"#ffffff"}},"Profile")),r.a.createElement(N,null),this.props.info?r.a.createElement(W.a,{style:{overflow:"scroll"}},Object.keys(this.props.info).map((function(t,a){return r.a.createElement(W.a.Item,{key:a},t," : ",e.props.info[t])}))):r.a.createElement(I.a,{style:{color:"white"},animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))}}]),t}(n.PureComponent),F=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this.props.scores.length,a=this.props.scores[t-1],n={};if(t){e=Object.keys(a);for(var s=0;s<t;s++)for(var o in this.props.scores[s])"awayTimes"===o?n[o]+=this.props.scores[s][o].length:n[o]?n[o]+=this.props.scores[s][o]:n[o]=this.props.scores[s][o];for(o in n)n[o]=parseInt(n[o]/t);a.awayTimes=a.awayTimes.length}return r.a.createElement(S.a,{style:{background:"#90ee90"}},r.a.createElement(V.a,{style:{marginTop:"-2%"}},r.a.createElement(y.a,null,r.a.createElement("h2",{style:{marginTop:"-2.5%",color:"#ffffff"}},"Latest Session"),r.a.createElement(N,null),r.a.createElement(W.a,null,a?e.map((function(e,t){return r.a.createElement(W.a.Item,{key:t},e," : ",a[e]?a[e]:0)})):r.a.createElement(g.a,{style:{color:"white"}},r.a.createElement(I.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))),r.a.createElement(y.a,null,r.a.createElement("h2",{style:{marginTop:"-2.5%",color:"#ffffff"}},"Average Session"),r.a.createElement(N,null),r.a.createElement(W.a,null,Object.keys(n).length?e.map((function(e,t){return r.a.createElement(W.a.Item,null,e," : ",n[e]?n[e]:0)})):r.a.createElement(g.a,{style:{color:"white"}},r.a.createElement(I.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))))))}}]),t}(n.PureComponent),J=a(133),K=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).submit=function(){var e=document.getElementById("course").value,t=document.getElementById("notes").value;console.log(e,t)},a.returnForm=function(){return r.a.createElement(J.a,{style:a.style.whiteText},r.a.createElement(J.a.Group,{controlId:"formBasicEmail"},r.a.createElement(J.a.Label,null,r.a.createElement("h5",null,"Course")),r.a.createElement(J.a.Control,{type:"email",placeholder:"Enter course",id:"course"})),r.a.createElement(J.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(J.a.Label,null,r.a.createElement("h5",null,"Notes")),r.a.createElement(J.a.Control,{as:"textarea",style:{height:"250px"},rows:"3",id:"notes"})),r.a.createElement(b.a,{variant:"light",onClick:a.submit},"Upload"))},a.state={uploaded:!1},a.style={whiteText:{color:"white"}},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{style:{height:"600px",background:"#90ee90"}},r.a.createElement("h2",{style:{marginTop:"-2.5%",color:"#ffffff"}},"UploadNotes"),r.a.createElement(N,null),this.returnForm())}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.t1=u.a,e.next=4,u.a.awrap(fetch("https://us-central1-edugraph-78964.cloudfunctions.net/app/user/".concat(a.state.userId)));case 4:return e.t2=e.sent.json(),e.next=7,e.t1.awrap.call(e.t1,e.t2);case 7:e.t3=e.sent,e.t4={userData:e.t3},e.t0.setState.call(e.t0,e.t4);case 10:case"end":return e.stop()}}))},a.state={userId:"R8IpJr6shgUowKN0jWDQrE5ycCE2"},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t={};return this.state.userData&&(e=this.state.userData.details,this.state.userData.scores&&this.state.userData.scores.attention&&(t=this.state.userData.scores.attention)),r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(g.a,{style:{marginTop:"5%",marginBottom:"5%"}},r.a.createElement(A,{uploaded:!0,info:e}),r.a.createElement(F,{scores:t}),r.a.createElement(K,null)),r.a.createElement(z,null))}}]),t}(n.Component),q=a(17),$=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.setState({view:a.props.selectView?a.props.selectView:"knowledgeGraph"})},a.selectCourse=function(e){a.setState({selectedCourse:e}),a.props.setSingleTopic(!1),a.props.setCourse(e)},a.selectView=function(e){a.setState({view:e}),a.props.setSingleTopic(!1),a.props.setView(e)},a.classes={margin:{marginTop:"3%",height:"100%"},"smaller-margin":{marginTop:"1%","margin-bottom":"1%"}},a.state={selectedCourse:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(V.a,{style:{height:"50%",backgroundColor:"#90ee90",color:"#ffffff"}},r.a.createElement(g.a,{style:this.classes.margin},r.a.createElement(V.a,null,r.a.createElement(y.a,{xs:1}),r.a.createElement(y.a,null,r.a.createElement("h2",null,"Courses"))),r.a.createElement(V.a,{style:{height:"100%"}},r.a.createElement(y.a,{xs:1}),r.a.createElement(y.a,{style:{height:"100%"}},r.a.createElement(W.a,{style:{width:"100%",height:"80%",overflow:"scroll"}},this.props.courses?this.props.courses.map((function(t,a){return r.a.createElement(W.a.Item,{action:!0,variant:e.state.selectedCourse===t?"primary":"light",onClick:function(){e.selectCourse(t)},key:t},t)})):r.a.createElement(g.a,null,r.a.createElement(I.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))))))),r.a.createElement(V.a,{style:{height:"50%",backgroundColor:"#17a2b8"}},r.a.createElement(g.a,{style:this.classes.margin},r.a.createElement(V.a,null,r.a.createElement(y.a,{xs:1}),r.a.createElement(y.a,null,r.a.createElement("h2",{style:{color:"#ffffff"}},"View"))),r.a.createElement(V.a,null,r.a.createElement(y.a,{xs:1}),r.a.createElement(y.a,null,r.a.createElement(W.a,null,r.a.createElement(W.a.Item,{action:!0,variant:"knowledgeGraph"==this.props.selectedView?"info":"light",onClick:function(){return e.selectView("knowledgeGraph")}},"Knowledge Graph"),r.a.createElement(W.a.Item,{action:!0,variant:"summary"==this.props.selectedView?"info":"light",onClick:function(){return e.selectView("summary")}},"Summary")))))))}}]),t}(n.Component),X=a(77),Y=a(76),Z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e){if(e){var t=1+40/Math.hypot(e.x,e.y,e.z);a.fgRef.current.cameraPosition({x:e.x*t,y:e.y*t,z:e.z*t},e,3e3)}a.prevClicked===e?(a.props.setTopic(e.id,a.props.courseId),a.props.setSingleTopic(!0),a.props.setView("summary")):a.prevClicked=e},a.fgRef=Object(n.createRef)(),a.makeNodeData=function(e){if(!e)return{nodes:[],links:[]};var t={nodes:[],links:[]};for(var a in e.topics)t.nodes.push({id:a,val:1,color:"red"});for(var a in e.topics){var n=0;for(var r in e.topics[a].links){if(5===n)break;var s=r.split("/")[1];t.links.push({source:a,target:s}),n++}}return t},a.state={redirect:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(X.a,{width:this.props.width,height:this.props.height,backgroundColor:"white",graphData:this.makeNodeData(this.props.course),onNodeClick:this.handleClick,onNodeHover:this.handleHover,ref:this.fgRef,nodeThreeObject:function(e){var t=new Y.a(e.id);return t.color=e.color,t.textHeight=8,t},linkWidth:1})}}]),t}(r.a.Component),_=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).makeMultipleSummaries=function(){return Object.keys(a.props.courseData.topics).map((function(e,t){return[r.a.createElement("h3",null,e),r.a.createElement("p",null,a.props.courseData.topics[e].summary),r.a.createElement(N,{color:"white"})]}))},a.makeSingleSummary=function(){return[r.a.createElement("h3",null,a.props.topic),r.a.createElement("p",null,a.props.courseData.topics[a.props.topic].summary)]},a.state={text:"",qs:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return this.props.singleTopic&&this.props.courseData.topics[this.props.topic].summary,r.a.createElement(g.a,{style:{height:"100px",width:"100%"}},this.props.courseData?r.a.createElement(S.a,{style:{overflow:"scroll",height:"550px",marginTop:"50px"}},r.a.createElement("h2",null,this.props.courseData.name),r.a.createElement("div",null,this.props.singleTopic?this.makeSingleSummary():this.makeMultipleSummaries())):"")}}]),t}(r.a.Component),ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setCourse=function(e){a.setState({course:e})},a.setView=function(e){a.setState({view:e})},a.setTopic=function(e,t){a.setState({topic:e,topicCourse:t,view:"summary"})},a.setSingleTopic=function(e){a.setState({singleTopic:e})},a.componentDidMount=function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a.updateWindowDimensions(),window.addEventListener("resize",a.updateWindowDimensions),e.t0=a,e.t1=u.a,e.next=6,u.a.awrap(fetch("https://us-central1-edugraph-78964.cloudfunctions.net/app/user/".concat(a.state.userId)));case 6:return e.t2=e.sent.json(),e.next=9,e.t1.awrap.call(e.t1,e.t2);case 9:return e.t3=e.sent,e.t4=u.a,e.next=13,u.a.awrap(fetch("https://us-central1-edugraph-78964.cloudfunctions.net/app/user/allCourses/".concat(a.state.userId)));case 13:return e.t5=e.sent.json(),e.next=16,e.t4.awrap.call(e.t4,e.t5);case 16:e.t6=e.sent,e.t7={userData:e.t3,courseData:e.t6},e.t0.setState.call(e.t0,e.t7);case 19:case"end":return e.stop()}}))},a.classes=function(){return{main:{width:a.state.width,height:a.state.height,overflow:"hidden"}}},a.state={width:0,height:0,view:"knowledgeGraph",userId:"R8IpJr6shgUowKN0jWDQrE5ycCE2",userData:!1},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(q.a)(a)),a.setView=a.setView.bind(Object(q.a)(a)),a.setCourse=a.setCourse.bind(Object(q.a)(a)),a.setTopic=a.setTopic.bind(Object(q.a)(a)),a.setSingleTopic=a.setSingleTopic.bind(Object(q.a)(a)),e.location.state&&(a.state.course=e.location.state.course),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e;return this.state.courseData&&(e=this.state.courseData[this.state.course]),console.log("selected view",this.state.view),r.a.createElement("div",{style:this.classes().main},r.a.createElement(T,null),r.a.createElement(V.a,{style:{width:"100%",height:"100%"}},r.a.createElement(y.a,{xs:4,style:{height:"90%",width:"33%"}},r.a.createElement($,{setView:this.setView,setCourse:this.setCourse,style:{"margin-bottom":"100px"},courses:this.state.userData.currCourse,selectedView:this.state.view,setTopic:this.setTopic,setSingleTopic:this.setSingleTopic})),r.a.createElement(y.a,null,"knowledgeGraph"===this.state.view?r.a.createElement(Z,{setView:this.setView,width:.64582*this.state.width,height:.9*this.state.height,style:{marginLeft:0},course:e,courseId:this.state.course,setTopic:this.setTopic,setSingleTopic:this.setSingleTopic}):r.a.createElement(_,{courseData:e,topic:this.state.topic,course:this.state.course,singleTopic:this.state.singleTopic}))))}}]),t}(n.PureComponent),te=a(136),ae=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={width:0,height:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(q.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:this.state.height,width:this.state.width}},r.a.createElement(T,null),r.a.createElement(te.a,{style:{width:"18rem",top:"50%",left:"50%",transform:"translate(-50%,-75%)"}},r.a.createElement(te.a.Body,null,r.a.createElement(te.a.Title,null,"Error 404"),r.a.createElement(te.a.Text,null,"Looks like the page you're looking for doesn't exist"),r.a.createElement(b.a,{variant:"danger"},r.a.createElement(l.b,{to:"./dashboard",style:{textDecoration:"none",color:"white"}},"Go Home")))))}}]),t}(n.PureComponent),ne=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).selectCourse=function(e){a.setState({selectedCourse:e})},a.setNote=function(e,t){a.setState({course:e,topic:t}),a.props.setNote(e,t)},a.state={selectCourse:!1},a.classes={margin:{marginTop:"3%",height:"100%"},"smaller-margin":{marginTop:"1%","margin-bottom":"1%"}},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.notes,a=[];if(t)for(var n in t)for(var s in t[n])a.push({topic:s,course:n});return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(V.a,{style:{height:"100%",backgroundColor:"#90ee90",color:"#ffffff"}},r.a.createElement(g.a,{style:this.classes.margin},r.a.createElement(V.a,null,r.a.createElement(y.a,{xs:1}),r.a.createElement(y.a,null,r.a.createElement("h2",null,"Notes"))),r.a.createElement(N,null),r.a.createElement(V.a,{style:{height:"100%"}},r.a.createElement(y.a,{xs:1}),r.a.createElement(y.a,{style:{height:"100%"}},r.a.createElement(W.a,{style:{width:"100%",height:"80%",overflow:"scroll"}},a.length?a.map((function(t,a){return r.a.createElement(W.a.Item,{action:!0,variant:t.course===e.state.course&&t.topic===e.state.topic?"info":"light",onClick:function(){e.setNote(t.course,t.topic)},key:t.topic+t.course},r.a.createElement(V.a,null,r.a.createElement(y.a,null,r.a.createElement("h5",null,t.course))),r.a.createElement(V.a,null,r.a.createElement(y.a,null,t.topic)))})):r.a.createElement(g.a,null,r.a.createElement(I.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))))))))}}]),t}(n.Component),re=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{style:{marginTop:"5%"}},r.a.createElement("h2",null,this.props.course),r.a.createElement("h3",null,this.props.topic),this.props.notes.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("p",null,e),r.a.createElement(N,{color:"white"}))})))}}]),t}(n.PureComponent),se=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a.updateWindowDimensions(),window.addEventListener("resize",a.updateWindowDimensions),e.t0=a,e.t1=u.a,e.next=6,u.a.awrap(fetch("https://us-central1-edugraph-78964.cloudfunctions.net/app/user/".concat(a.state.userId)));case 6:return e.t2=e.sent.json(),e.next=9,e.t1.awrap.call(e.t1,e.t2);case 9:e.t3=e.sent,e.t4={userData:e.t3},e.t0.setState.call(e.t0,e.t4);case 12:case"end":return e.stop()}}))},a.classes=function(){return{main:{width:a.state.width,height:a.state.height,overflow:"hidden"}}},a.setNote=function(e,t){a.setState({course:e,topic:t})},a.state={width:0,height:0,userData:"",userId:"R8IpJr6shgUowKN0jWDQrE5ycCE2"},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(q.a)(a)),a.setNote=a.setNote.bind(Object(q.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return r.a.createElement("div",{style:this.classes().main},r.a.createElement(T,null),r.a.createElement(V.a,{style:{width:"100%",height:"100%"}},r.a.createElement(y.a,{xs:4,style:{height:"90%",width:"33%"}},r.a.createElement(ne,{setView:this.setView,style:{"margin-bottom":"100px"},notes:this.state.userData.notes,setNote:this.setNote})),r.a.createElement(y.a,{style:{overflow:"scroll"}},this.state.course?r.a.createElement(re,{course:this.state.course,topic:this.state.topic,notes:this.state.userData.notes[this.state.course][this.state.topic]}):"")))}}]),t}(n.PureComponent),oe=r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:U}),r.a.createElement(c.a,{path:"/testing",component:T}),r.a.createElement(c.a,{path:"/session",component:R}),r.a.createElement(c.a,{path:"/dashboard",component:P}),r.a.createElement(c.a,{path:"/profile",component:Q}),r.a.createElement(c.a,{path:"/courses",component:ee}),r.a.createElement(c.a,{path:"/notes",component:se}),r.a.createElement(c.a,{component:ae})));o.a.render(oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/sleepy.91a5bc78.gif"},79:function(e,t,a){e.exports=a(122)}},[[79,1,2]]]);
//# sourceMappingURL=main.7e2c13e7.chunk.js.map