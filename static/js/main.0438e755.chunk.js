(this.webpackJsonpsalary=this.webpackJsonpsalary||[]).push([[0],{17:function(e,t,a){e.exports=a(35)},22:function(e,t,a){},23:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(15),o=a.n(r),i=(a(22),a(16)),c=a(8),s=a(9),m=a(11),u=a(10);a(23);var h=function(){return l.a.createElement("header",{className:"main-header"},l.a.createElement("div",{class:"logo-wrap is-logo-image site-branding"},l.a.createElement("a",{href:"http://techietainment.io/",class:"logo",title:"Techie-Tainment"},l.a.createElement("img",{class:"logo-default logo-sticky-retina logo-retina",width:"276",src:"http://techietainment.io/wp-content/uploads/2020/06/t4a-01.png",alt:"Techie-Tainment"}))),l.a.createElement("a",{href:"http://techietainment.io/",className:"main-menu"},"Home"),l.a.createElement("a",{href:"http://techietainment.io/",className:"main-menu"},"Tech News"),l.a.createElement("a",{href:"http://techietainment.io/",className:"main-menu"},"Hackhaton"),l.a.createElement("a",{href:"http://techietainment.io/",className:"main-menu"},"Freebies"),l.a.createElement("a",{href:"http://techietainment.io/",className:"main-menu"},"Comferences/Meetups"),l.a.createElement("a",{href:"http://techietainment.io/",className:"main-menu"},"Scholarships"))},p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={offcanva:!0},e.showOffcanvas=function(){var t=e.state.offcanva;e.setState({offcanva:!t}),!0===e.state.offcanva?document.getElementById("mobile-menu").style.display="block":document.getElementById("mobile-menu").style.display="none"},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"main-header"},l.a.createElement("div",{className:"toggle-btn",onClick:this.showOffcanvas}),l.a.createElement("div",{class:"logo-wrap is-logo-image site-branding"},l.a.createElement("a",{href:"http://techietainment.io/",class:"logo",title:"Techie-Tainment"},l.a.createElement("img",{class:"logo-default logo-sticky-retina logo-retina",width:"213",src:"http://techietainment.io/wp-content/uploads/2020/06/t2-01.png",alt:"Techie-Tainment"})))),l.a.createElement("div",{id:"mobile-menu",className:"offcanvas-menu"},l.a.createElement("div",{className:"off-canvas-header"},l.a.createElement("div",{className:"off-canvas-close-btn",onClick:this.showOffcanvas},"X"),l.a.createElement("div",{class:"off-canvas-logo"},l.a.createElement("a",{href:"http://techietainment.io/"},l.a.createElement("img",{src:"http://techietainment.io/wp-content/uploads/2020/06/T-icon-01.png",alt:"Techie-Tainment",width:"88"})))),l.a.createElement("div",{className:"off-canvas-inner"},l.a.createElement("a",{href:"http://techietainment.io/",className:"mobile-menu"},"Home"),l.a.createElement("a",{href:"http://techietainment.io/",className:"mobile-menu"},"Tech News"),l.a.createElement("a",{href:"http://techietainment.io/",className:"mobile-menu"},"Hackhaton"),l.a.createElement("a",{href:"http://techietainment.io/",className:"mobile-menu"},"Freebies"),l.a.createElement("a",{href:"http://techietainment.io/",className:"mobile-menu"},"Comferences/Meetups"),l.a.createElement("a",{href:"http://techietainment.io/",className:"mobile-menu"},"Scholarships"))))}}]),a}(l.a.Component),v=a(12),d=a.n(v);d.a.initializeApp({apiKey:"AIzaSyAvMeNIPUAajkOyva0ANFMbn2KyVmzEyGU",authDomain:"techietainment-salary.firebaseapp.com",databaseURL:"https://techietainment-salary.firebaseio.com"});var g=d.a.auth,E=d.a.database();function f(){var e=new g.GoogleAuthProvider;return g().signInWithPopup(e)}function b(){var e=new g.GithubAuthProvider;return g().signInWithPopup(e)}var y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:g().currentUser,salary:[],jobTitle:"",experienceLevel:"",readError:null,writeError:null,comment:"",error:"",salaryAmount:null,authenticated:!1,message:"",avgSalary:null,percentage:null,submit:!1},e.changeSubmit=function(){var t=e.state.submit;e.setState({submit:!t})},e.googleSignIn=function(){try{f()}catch(t){e.setState({error:t.message})}},e.githubSignIn=function(){try{b()}catch(t){e.setState({error:t.message})}},e.estimateSalary=function(){var t=e.state,a=t.salary,n=t.jobTitle,l=t.experienceLevel,r=a.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase()),e.experience.toLowerCase().includes(l.toLowerCase())})),o=0;for(var i in r)o+=parseFloat(r[i].salary);var c=o/r.length,s=c/100*10;e.setState({avgSalary:c,percentage:s})},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.loadSalary=function(t){t.preventDefault();var a=e.state.jobTitle;e.setState({readError:null});try{E.ref(a).on("value",(function(t){var a=[];t.forEach((function(e){a.push(e.val())})),e.setState({salary:a})})),setTimeout(e.estimateSalary,1e3)}catch(n){e.setState({readError:n.message})}},e.handleSubmit=function(t){t.preventDefault(),e.setState({writeError:null});var a=e.state.jobTitle;try{E.ref(a).push({title:a,experience:e.state.experienceLevel,salary:e.state.salaryAmount}),e.setState({jobTitle:"",experienceLevel:"",salaryAmount:"",message:"Salary submitted successfully"})}catch(n){e.setState({writeError:n.message})}},e.submitSalary=function(){return l.a.createElement("div",null,!1===e.state.authenticated?l.a.createElement("div",{className:"form-container",style:{background:"lightgray",paddingTop:"20px",paddingBottom:"20px"}},l.a.createElement("h1",null,l.a.createElement("strong",null,"Submit Salary")),l.a.createElement("h3",{style:{color:"red",textAlign:"center",margin:"20px"}},"Sign In to Submit salary"),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{className:"form-control google-button",type:"button",onClick:e.googleSignIn},"Sign in with Google")),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{className:"form-control github-button",type:"button",onClick:e.githubSignIn},"Sign in with GitHub"))):l.a.createElement("div",{className:"form-container"},l.a.createElement("h1",null,l.a.createElement("strong",null,"Submit Salary")),l.a.createElement("h4",{style:{color:"green",textAlign:"center"}},e.state.message),l.a.createElement("form",{className:"py-5 px-5",onSubmit:e.handleSubmit},l.a.createElement("div",null,l.a.createElement("select",{name:"jobTitle",value:e.state.jobTitle,className:"form-control",onChange:e.handleChange},l.a.createElement("option",{value:"",selected:!0}," Select a Job Title "),l.a.createElement("option",{value:"web developer"}," Web Developer"),l.a.createElement("option",{value:"app developer"}," Mobile App Developer"))),l.a.createElement("div",{className:"py-5"},l.a.createElement("select",{name:"experienceLevel",value:e.state.experienceLevel,className:"form-control",onChange:e.handleChange},l.a.createElement("option",{value:"",selected:!0}," Select a Experience Level "),l.a.createElement("option",{value:"junior"}," Junior ( 1-3 years)"),l.a.createElement("option",{value:"intermediate"}," Intermediate (3-5 years)"),l.a.createElement("option",{value:"senior"}," Senior (5+ years)"))),l.a.createElement("div",{style:{marginBottom:"15px"}},"Salary in Naira (#)",l.a.createElement("input",{className:"form-control",type:"number",placeholder:"100,000",value:e.state.salaryAmount,name:"salaryAmount",onChange:e.handleChange})),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{className:"form-control button",type:"submit"},"Submit Salary"))),l.a.createElement("button",{className:"btn btn-primary mr-3",onClick:function(){return g().signOut()}},"Logout")))},e.getSalary=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"form-container"},l.a.createElement("h1",null,l.a.createElement("strong",null,"What am I worth?")),null!=e.state.avgSalary?l.a.createElement("p",null,"Estimated salary for ",e.state.experienceLevel," ",e.state.jobTitle,l.a.createElement("p",{style:{color:"green",fontSize:"1em"}},l.a.createElement("strong",null,"#",(e.state.avgSalary-e.state.percentage).toLocaleString()," - #",(e.state.avgSalary+e.state.percentage).toLocaleString()))):null,l.a.createElement("form",{className:"py-5 px-5",onSubmit:e.loadSalary},l.a.createElement("div",null,l.a.createElement("select",{name:"jobTitle",value:e.state.jobTitle,className:"form-control",onChange:e.handleChange},l.a.createElement("option",{value:"",selected:!0}," Select a Job Title "),l.a.createElement("option",{value:"web developer"}," Web Developer"),l.a.createElement("option",{value:"app developer"}," Mobile App Developer"))),l.a.createElement("div",{className:"py-5"},l.a.createElement("select",{name:"experienceLevel",value:e.state.experienceLevel,className:"form-control",onChange:e.handleChange},l.a.createElement("option",{value:"",selected:!0}," Select a Experience Level "),l.a.createElement("option",{value:"junior"}," Junior ( 1-3 years)"),l.a.createElement("option",{value:"intermediate"}," Intermediate (3-5 years)"),l.a.createElement("option",{value:"senior"}," Senior (5+ years)"))),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{className:"form-control button",type:"submit"},"Get Salary")))))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().onAuthStateChanged((function(t){t?e.setState({authenticated:!0}):e.setState({authenticated:!1})}))}},{key:"render",value:function(){var e=window.screen.width;return(l.a.createElement("div",null,e<=700?l.a.createElement(p,null):l.a.createElement(h,null),l.a.createElement("div",{className:"holder"},l.a.createElement("div",{className:"text-holder"},l.a.createElement("h1",null,"Get Paid Right"),l.a.createElement("p",null,"Get salary estimates based on Job title and experience")),l.a.createElement("div",{className:"holder-button"},l.a.createElement("button",{className:"form-control",onClick:this.changeSubmit},this.state.submit?"Get Salary":"Submit Salary"))),l.a.createElement("div",null,this.state.submit?this.submitSalary():this.getSalary())))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0438e755.chunk.js.map