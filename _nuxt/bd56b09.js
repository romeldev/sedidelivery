(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{325:function(e,t,r){"use strict";r.r(t);r(7),r(44);var n=r(14),o={layout:"admin",data:function(){return{loading:!1,fields:["index",{key:"email",label:"Correo",sortable:!0},{key:"phone",label:"Telefono",sortable:!0},{key:"address",label:"Direccion",sortable:!1},"actions"],items:[],form:{name:null,agent:null,email:null,phone:null,whatsapp:null,address:null},collection:this.$fire.firestore.collection("bussiness")}},mounted:function(){this.getItems(),this.$bvModal.show("modal-form")},methods:{edit:function(data){console.log("data",data),this.$bvModal.show("modal-form")},send:function(){alert("send...")},getItems:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.collection.get();case 4:t.sent.docs.map((function(t){var data=t.data();data.id=t.id,e.items.push(data)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.$bvToast.toast("No se pudo recuperar los datos",{title:"Error",variant:"danger",solid:!0});case 11:e.loading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},store:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.collection.add(e.form);case 3:t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},update:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.collection.add(e.form);case 3:t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},destroy:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.collection.add(e.form);case 3:t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},l=r(35),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{staticClass:"text-center",attrs:{"bg-variant":"light",header:"Usuarios","body-class":"p-0"}},[r("b-card-text",[r("b-table",{attrs:{small:"",hover:"",stacked:"sm",fields:e.fields,items:e.items,busy:e.loading},scopedSlots:e._u([{key:"cell(index)",fn:function(data){return[e._v("\n                    "+e._s(data.index+1)+"\n                ")]}},{key:"cell(actions)",fn:function(data){return[r("b-dropdown",{staticClass:"m-md-2",attrs:{size:"sm",right:"",text:"Accion",variant:"outline-secondary"}},[r("b-dropdown-item",{on:{click:function(t){return e.edit(data)}}},[e._v("Editar")]),e._v(" "),r("b-dropdown-item",[e._v("Elimnar")]),e._v(" "),r("b-dropdown-item",[e._v("Responder")])],1)]}},{key:"table-busy",fn:function(){return[r("div",{staticClass:"text-center text-danger my-2"},[r("b-spinner",{staticClass:"align-middle"}),e._v(" "),r("strong",[e._v("Cargando...")])],1)]},proxy:!0}])})],1)],1),e._v(" "),r("b-modal",{attrs:{id:"modal-form","hide-footer":"",title:"Empresa"}},[r("b-form",{on:{submit:e.update}},[r("b-form-group",{attrs:{label:"Nombre*","label-for":"name"}},[r("b-form-input",{attrs:{id:"name",type:"text",placeholder:"nombre"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Representante*","label-for":"agent"}},[r("b-form-input",{attrs:{id:"agent",type:"text",placeholder:"agent"},model:{value:e.form.agent,callback:function(t){e.$set(e.form,"agent",t)},expression:"form.agent"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Correo*","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",type:"text",placeholder:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Telefono*","label-for":"phone"}},[r("b-form-input",{attrs:{id:"phone",type:"text",placeholder:"phone"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Whatsapp","label-for":"whatsapp"}},[r("b-form-input",{attrs:{id:"whatsapp",type:"text",placeholder:"whatsapp"},model:{value:e.form.whatsapp,callback:function(t){e.$set(e.form,"whatsapp",t)},expression:"form.whatsapp"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Direccion","label-for":"address"}},[r("b-form-input",{attrs:{id:"address",type:"text",placeholder:"address"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),r("b-button",{staticClass:"mt-3",attrs:{variant:"outline-warning",block:""},on:{click:e.send}},[e._v("Enviar")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);