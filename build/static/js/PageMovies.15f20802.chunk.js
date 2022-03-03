"use strict";(self.webpackChunk_02_projet_films=self.webpackChunk_02_projet_films||[]).push([[983],{2630:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(2791),i=t(5671),s=t(3144),o=t(9340),a=t(5716),l=t(184),c=function(e){(0,o.Z)(t,e);var n=(0,a.Z)(t);function t(){return(0,i.Z)(this,t),n.apply(this,arguments)}return(0,s.Z)(t,[{key:"render",value:function(){var e=this.props.movie;return(0,l.jsx)(l.Fragment,{children:e&&(0,l.jsx)("div",{className:"w-25 bg-light p-4 d-flex flex-column sticky-top",children:(0,l.jsxs)("div",{className:"p-4 sticky-top",children:[(0,l.jsx)("h5",{children:e.title}),(0,l.jsx)("hr",{className:"w-100"}),(0,l.jsx)("div",{children:(0,l.jsx)("img",{height:"400",className:"d-block mx-auto h-250",src:e.img,alt:"poster"})}),(0,l.jsx)("hr",{className:"w-100"}),(0,l.jsx)("p",{className:"text-secondary mb-3",children:e.details}),(0,l.jsx)("span",{children:e.description})]})})})}}]),t}(r.Component),u="Movie_container__jVGG6",d="Movie_image__v7+Py",f=function(e){(0,o.Z)(t,e);var n=(0,a.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=n.call.apply(n,[this].concat(s))).mouseEnter=function(){e.props.updateSelectedMovie(e.props.movie.title)},e}return(0,s.Z)(t,[{key:"render",value:function(){var e=this;return(0,l.jsxs)("div",{onClick:this.mouseEnter,className:"d-flex bg-light "+u,children:[(0,l.jsx)("div",{className:d,children:(0,l.jsx)("img",{src:this.props.movie.img,alt:"poster-film"})}),(0,l.jsxs)("div",{className:"d-flex flex-fill flex-column p-3",children:[(0,l.jsx)("h5",{children:this.props.movie.title}),(0,l.jsx)("hr",{className:"w-100"}),(0,l.jsx)("p",{className:"flex-fill",children:this.props.movie.details}),(0,l.jsx)("div",{className:"d-flex flex-row justify-content-end",children:this.props.isFavorite?(0,l.jsx)("button",{onClick:function(){return e.props.removeFavorite(e.props.movie.id)},className:"btn btn-small btn-danger",children:"Supprimer"}):(0,l.jsx)("button",{onClick:function(){return e.props.addFavorite(e.props.movie)},className:"btn btn-small btn-primary",children:"Ajouter"})})]})]})}}]),t}(r.Component),v=function(e){(0,o.Z)(t,e);var n=(0,a.Z)(t);function t(){return(0,i.Z)(this,t),n.apply(this,arguments)}return(0,s.Z)(t,[{key:"render",value:function(){var e=this;return(0,l.jsx)("div",{className:"w-75 p-4 border d-flex flex-row flex-wrap justify-content-center",children:this.props.movies.map((function(n,t){return(0,l.jsx)(f,{movie:n,isFavorite:-1!==e.props.favorites.indexOf(n.id),addFavorite:e.props.addFavorite,removeFavorite:e.props.removeFavorite,updateSelectedMovie:function(){return e.props.updateSelectedMovie(t)}},n.id)}))})}}]),t}(r.Component),m=t(5705),p=function(e){(0,o.Z)(t,e);var n=(0,a.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=n.call.apply(n,[this].concat(s))).submit=function(n,t){e.props.fetchMovies(n).then((function(){return t.setSubmitting(!1)}))},e}return(0,s.Z)(t,[{key:"render",value:function(){return(0,l.jsx)(m.J9,{onSubmit:this.submit,initialValues:{query:"",language:"fr-FR"},children:function(e){var n=e.handleSubmit,t=e.handleChange,r=e.handleBlur,i=e.isSubmitting;return(0,l.jsxs)("form",{className:"d-flex flex-row p-2 m-2",onSubmit:n,children:[(0,l.jsx)("input",{name:"query",className:"flex-fill form-control mx-2",placeholder:"Titre du film ... ",onChange:t,onBlur:r}),(0,l.jsxs)("select",{className:"form-control w-25 mx-2",name:"language",onChange:t,onBlur:r,children:[(0,l.jsx)("option",{value:"fr-FR",children:"Fran\xe7ais"}),(0,l.jsx)("option",{value:"en-US",children:"Anglais"})]}),(0,l.jsx)("button",{className:"btn btn-small btn-success",type:"submit",disabled:i,children:"Rechercher"})]})}})}}]),t}(r.Component),h=t(5291),x=t(364),j=t(6338),g=t(9673),b=(0,x.$j)((function(e){return{isLoading:(0,j.Np)(e),movies:(0,j.AA)(e),favoritesIds:(0,j.wz)(e),selectedMovie:(0,j.Dd)(e)}}),{fetchMovies:g.vw,setSelectedMovie:g.pW,tryAddFavorite:g.xv,tryRemoveFavorite:g.hr})((function(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{fetchMovies:e.fetchMovies}),e.isLoading?(0,l.jsx)(h.Z,{}):(0,l.jsxs)("div",{className:"d-flex flex-row flex-fill pt-4 p-2",children:[(0,l.jsx)(v,{movies:e.movies,updateSelectedMovie:e.setSelectedMovie,favorites:e.favoritesIds,addFavorite:e.tryAddFavorite,removeFavorite:e.tryRemoveFavorite}),(0,l.jsx)(c,{movie:e.selectedMovie})]})]})}))},6338:function(e,n,t){t.d(n,{lH:function(){return d},wz:function(){return f},tK:function(){return u},Np:function(){return s},AA:function(){return o},Dd:function(){return l}});var r=t(6916),i=function(e){return e.movies},s=(0,r.P1)([i],(function(e){return e.isLoading})),o=(0,r.P1)([i],(function(e){return e.data})),a=(0,r.P1)([i],(function(e){return e.selectedMovie})),l=(0,r.P1)([o,a],(function(e,n){return e[n]})),c=function(e){return e.favorites},u=(0,r.P1)([c],(function(e){return e.data})),d=(0,r.P1)([c],(function(e){return e.isLoading})),f=(0,r.P1)([u],(function(e){return e.map((function(e){return e.id}))}))}}]);
//# sourceMappingURL=PageMovies.15f20802.chunk.js.map