(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=(n(9),n(13)),i=n(4),l=n(5),u=n(7),m=n(6),d=n(2),h=n(10),b=n.n(h),j=n(0),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",id:""},e.nameInputId=b.a.generate(),e.handleChange=function(t){var n,a=t.currentTarget,c=a.name,r=a.value;e.setState((n={},Object(d.a)(n,c,r),Object(d.a)(n,"id",b.a.generate()),n))},e.handleSubmit=function(t){t.preventDefault(),e.props.onNameCheck(e.state.name).length>=1?alert("Contact with the name ".concat(e.state.name," already exists.")):e.props.addNewContact(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:"formLabel",children:["Name",Object(j.jsx)("input",{className:"nameInput",type:"text",name:"name",value:this.state.name,id:this.nameInputId,onChange:this.handleChange,placeholder:"enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:"formLabel",children:["Phone number",Object(j.jsx)("input",{className:"phoneInput",type:"text",name:"number",placeholder:"enter phone number",value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",className:"submitBtn",children:"Add contact"})]})}}]),n}(a.Component),p=n(11),O=function(e){var t=e.name,n=e.number,a=e.id,c=e.removeContact;return Object(j.jsxs)("li",{className:"contactsListItem",id:a,children:[Object(j.jsxs)("b",{className:"contactName",children:[t,":"]}),n,Object(j.jsx)("button",{className:"deleteBtn",type:"button",onClick:function(){c(a)},children:"Delete"})]},a)},C=function(e){var t=e.contacts,n=e.removeContact;return Object(j.jsx)("ul",{className:"contactsList",children:t.map((function(e){return Object(a.createElement)(O,Object(p.a)(Object(p.a)({},e),{},{removeContact:n,key:e.id}))}))})},x=function(e){var t=e.onSearchHandler,n=e.filter;return Object(j.jsxs)("label",{className:"searchFormLabel",children:["Find contacts by name",Object(j.jsx)("input",{className:"searchField",type:"text",name:"name",placeholder:"enter name",value:n,onChange:t})]})},v=(n(27),function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{className:"sectionTitle",children:t}),n]})}),N=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.onNameCheck=function(t){return e.state.contacts.filter((function(e){return e.name.toLowerCase()===t.toLowerCase()}))},e.addNewContact=function(t){e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[t])}}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.onSearchHandler=function(t){e.setState({filter:t.currentTarget.value})},e.onFilterRender=function(){return e.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.onFilterRender();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{title:"Phonebook",children:Object(j.jsx)(f,{onNameCheck:this.onNameCheck,addNewContact:this.addNewContact})}),Object(j.jsxs)(v,{title:"Contacts",children:[Object(j.jsx)(x,{onSearchHandler:this.onSearchHandler,filter:this.state.filter}),Object(j.jsx)(C,{contacts:e,onFilterRender:this.onFilterRender,removeContact:this.removeContact})]})]})}}]),n}(a.Component),g=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(N,{})})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.54c6843e.chunk.js.map