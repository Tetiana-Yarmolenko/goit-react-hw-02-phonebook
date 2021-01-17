(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1FotQ",label:"ContactForm_label__3cx7R",input:"ContactForm_input__nMepo",button:"ContactForm_button__2u0Xn"}},,,,,function(t,e,n){t.exports={list:"ContactList_list__1yL2I",item:"ContactList_item__Kisj4",button:"ContactList_button__2tlff"}},,function(t,e,n){t.exports={filter:"Filter_filter__3fhwR",input:"Filter_input__WXe7Q"}},,function(t,e,n){t.exports={container:"Container_container__HTyIb"}},,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),c=n.n(o),r=n(10),i=n.n(r),s=(n(19),n(13)),l=n(3),u=n(4),h=n(6),m=n(5),d=(n(20),n(11)),b=n.n(d);var f=function(t){var e=t.children;return Object(a.jsx)("div",{className:b.a.container,children:e})},p=n(12),j=n(23),C=n(2),v=n.n(C),O={name:"",phone:""},x=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state=O,t.handleChangeForm=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(p.a)({},a,o))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,o=n.phone,c=t.props.onAdd;t.validateForm()&&(c({id:Object(j.a)(),name:a,phone:o}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.phone,o=t.props.onCheckUnique;return n&&a?o(n):(alert("Some field is empty"),!1)},t.resetForm=function(){return t.setState(O)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(a.jsxs)("form",{className:v.a.form,onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)("label",{className:v.a.label,children:["Name",Object(a.jsx)("input",{className:v.a.input,text:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeForm})]}),Object(a.jsxs)("label",{className:v.a.label,children:["Phone",Object(a.jsx)("input",{className:v.a.input,text:"tel",name:"phone",placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm})]}),Object(a.jsx)("button",{className:v.a.button,type:"submit",children:"Add contact"})]})}}]),n}(o.Component),_=n(7),g=n.n(_);var F=function(t){var e=t.contacts,n=t.onRemove;return Object(a.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.name,o=t.phone,c=t.id;return Object(a.jsxs)("li",{className:g.a.item,children:[e,": ",o,Object(a.jsx)("button",{className:g.a.button,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})},y=n(9),N=n.n(y),k=function(t){var e=t.filter,n=t.onChange;return Object(a.jsxs)("label",{className:N.a.filter,children:["Find contacts by name",Object(a.jsx)("input",{className:N.a.input,type:"text",value:e,onChange:function(t){var e=t.target;return n(e.value)},placeholder:"Enter name for Search"})]})},S=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",phone:"459-12-56"},{id:"id-2",name:"Hermione Kline",phone:"443-89-12"},{id:"id-3",name:"Eden Clements",phone:"645-17-79"},{id:"id-4",name:"Annie Copeland",phone:"227-91-26"}],filter:"",name:"",phone:""},t.handleAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}}))},t.handleCheckUnique=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Contacts is already exist"),!n},t.handleRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,o=this.getVisibleContacts();return Object(a.jsxs)(f,{children:[Object(a.jsx)("h1",{className:"phonebook",children:"Phonebook"}),Object(a.jsx)(x,{contacts:e,onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUnique}),Object(a.jsx)("h2",{className:"contacts",children:"Contacts"}),Object(a.jsx)(k,{filter:n,onChange:this.handleFilterChange}),Object(a.jsx)(F,{contacts:o,onRemove:this.handleRemoveContact})]})}}]),n}(o.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),o(t),c(t),r(t)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),w()}],[[21,1,2]]]);
//# sourceMappingURL=main.7ad84521.chunk.js.map