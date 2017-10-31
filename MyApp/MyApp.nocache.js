function MyApp(){var Gb='',Hb=0,Ib='gwt.codesvr=',Jb='gwt.hosted=',Kb='gwt.hybrid',Lb='MyApp',Mb='__gwt_marker_MyApp',Nb='<script id="',Ob='"><\/script>',Pb='SCRIPT',Qb='#',Rb='?',Sb='/',Tb=1,Ub='base',Vb='img',Wb='clear.cache.gif',Xb='meta',Yb='name',Zb='gwt:property',$b='content',_b='=',ac='gwt:onPropertyErrorFn',bc='Bad handler "',cc='" for "gwt:onPropertyErrorFn"',dc='gwt:onLoadErrorFn',ec='" for "gwt:onLoadErrorFn"',fc='user.agent',gc='webkit',hc='safari',ic='msie',jc=10,kc=11,lc='ie10',mc=9,nc='ie9',oc=8,pc='ie8',qc='gecko',rc='gecko1_8',sc=2,tc=3,uc=4,vc='Single-script hosted mode not yet implemented. See issue ',wc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',xc='4EF53A34FB9EADA7AF6A8A7D206E5F95',yc=':1',zc=':',Ac='DOMContentLoaded',Bc=50;var k=Gb,l=Hb,m=Ib,n=Jb,o=Kb,p=Lb,q=Mb,r=Nb,s=Ob,t=Pb,u=Qb,v=Rb,w=Sb,A=Tb,B=Ub,C=Vb,D=Wb,F=Xb,G=Yb,H=Zb,I=$b,J=_b,K=ac,L=bc,M=cc,N=dc,O=ec,P=fc,Q=gc,R=hc,S=ic,T=jc,U=kc,V=lc,W=mc,X=nc,Y=oc,Z=pc,$=qc,_=rc,ab=sc,bb=tc,cb=uc,db=vc,eb=wc,fb=xc,gb=yc,hb=zc,ib=Ac,jb=Bc;var kb=window,lb=document,mb,nb,ob=k,pb={},qb=[],rb=[],sb=[],tb=l,ub,vb;if(!kb.__gwt_stylesLoaded){kb.__gwt_stylesLoaded={}}if(!kb.__gwt_scriptsLoaded){kb.__gwt_scriptsLoaded={}}function wb(){var b=false;try{var c=kb.location.search;return (c.indexOf(m)!=-1||(c.indexOf(n)!=-1||kb.external&&kb.external.gwtOnLoad))&&c.indexOf(o)==-1}catch(a){}wb=function(){return b};return b}
function xb(){if(mb&&nb){mb(ub,p,ob,tb)}}
function yb(){var e,f=q,g;lb.write(r+f+s);g=lb.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=t){e=e.previousSibling}function h(a){var b=a.lastIndexOf(u);if(b==-1){b=a.length}var c=a.indexOf(v);if(c==-1){c=a.length}var d=a.lastIndexOf(w,Math.min(c,b));return d>=l?a.substring(l,d+A):k}
;if(e&&e.src){ob=h(e.src)}if(ob==k){var i=lb.getElementsByTagName(B);if(i.length>l){ob=i[i.length-A].href}else{ob=h(lb.location.href)}}else if(ob.match(/^\w+:\/\//)){}else{var j=lb.createElement(C);j.src=ob+D;ob=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function zb(){var b=document.getElementsByTagName(F);for(var c=l,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(G),g;if(f){if(f==H){g=e.getAttribute(I);if(g){var h,i=g.indexOf(J);if(i>=l){f=g.substring(l,i);h=g.substring(i+A)}else{f=g;h=k}pb[f]=h}}else if(f==K){g=e.getAttribute(I);if(g){try{vb=eval(g)}catch(a){alert(L+g+M)}}}else if(f==N){g=e.getAttribute(I);if(g){try{ub=eval(g)}catch(a){alert(L+g+O)}}}}}}
__gwt_isKnownPropertyValue=function(a,b){return b in qb[a]};__gwt_getMetaProperty=function(a){var b=pb[a];return b==null?null:b};function Ab(a,b){var c=sb;for(var d=l,e=a.length-A;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Bb(a){var b=rb[a](),c=qb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(vb){vb(a,d,b)}throw null}
rb[P]=function(){var a=navigator.userAgent.toLowerCase();var b=lb.documentMode;if(function(){return a.indexOf(Q)!=-1}())return R;if(function(){return a.indexOf(S)!=-1&&(b>=T&&b<U)}())return V;if(function(){return a.indexOf(S)!=-1&&(b>=W&&b<U)}())return X;if(function(){return a.indexOf(S)!=-1&&(b>=Y&&b<U)}())return Z;if(function(){return a.indexOf($)!=-1||b>=U}())return _;return k};qb[P]={'gecko1_8':l,'ie10':A,'ie8':ab,'ie9':bb,'safari':cb};MyApp.onScriptLoad=function(a){MyApp=null;mb=a;xb()};if(wb()){alert(db+eb);return}yb();zb();try{var Cb;Ab([_],fb);Ab([R],fb+gb);Cb=sb[Bb(P)];var Db=Cb.indexOf(hb);if(Db!=-1){tb=Number(Cb.substring(Db+A))}}catch(a){return}var Eb;function Fb(){if(!nb){nb=true;xb();if(lb.removeEventListener){lb.removeEventListener(ib,Fb,false)}if(Eb){clearInterval(Eb)}}}
if(lb.addEventListener){lb.addEventListener(ib,function(){Fb()},false)}var Eb=setInterval(function(){if(/loaded|complete/.test(lb.readyState)){Fb()}},jb)}
MyApp();(function () {var $gwt_version = "2.8.2";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = '4EF53A34FB9EADA7AF6A8A7D206E5F95';function k(){}
function X(){}
function de(){}
function Ze(){}
function _d(){}
function eb(){}
function hb(){}
function af(){}
function Uf(){}
function qb(){jb()}
function tb(){jb()}
function Pe(){Oe()}
function Qe(){Le()}
function Me(a){He()}
function tg(){tg=_d}
function Og(){this.a=0}
function bg(a){this.a=a}
function jg(a){this.a=a}
function lg(a){this.a=a}
function ye(a){this.a=a}
function yh(a){this.a=a}
function sf(a){this.a=a}
function Cf(a){this.a=a}
function Ff(a){this.a=a}
function Hf(a){this.a=a}
function Qf(a){this.a=a}
function Sf(a){this.a=a}
function Wf(a){this.a=a}
function Qh(a){this.a=a}
function Uh(a){this.a=a}
function Nh(a){this.b=a}
function li(a){this.c=a}
function le(){this.a=''}
function eh(){this.a=''}
function Bi(){this.a=new yi}
function B(){B=_d;A=new k}
function U(){U=_d;T=new X}
function Ti(){Ti=_d;Si=Vi()}
function wi(){v.call(this)}
function sg(){v.call(this)}
function Ug(){v.call(this)}
function kj(){v.call(this)}
function Ng(a){w.call(this,a)}
function Xg(a){w.call(this,a)}
function gh(a){w.call(this,a)}
function fh(a){Ng.call(this,a)}
function oi(a){rj(a);this.a=a}
function bb(a){ab();$.p(a)}
function Sd(a){return a.b}
function Ef(a){return yf(a.a)}
function Eb(a,b){return Cg(a,b)}
function ge(b,a){return b.test(a)}
function Xi(){Ti();return new Si}
function xg(a){wg(a);return a.i}
function Ne(a){Le();He();return}
function He(){He=_d;Pb(Pd(),14)}
function K(){K=_d;!!(ab(),$)}
function v(){q(this);this.n()}
function Lg(){w.call(this,null)}
function R(a){$wnd.clearTimeout(a)}
function De(a){wb(a.parentNode,a)}
function xb(a){return lb((jb(),a))}
function Ai(a,b){return ph(a.a,b)}
function Zi(a,b){return a.a.get(b)}
function vh(a){return a.a.c+a.b.c}
function Zb(a){return typeof a===Tj}
function Zg(a,b){return rj(a),a===b}
function ah(a,b){return a.substr(b)}
function ai(a,b){this.a=a;this.b=b}
function Bf(){this.f=new Array(3)}
function Li(a){this.a=Xi();this.b=a}
function aj(a){this.a=Xi();this.b=a}
function Oe(){Oe=_d;Le();Ke[Yj]=Ne}
function Ve(){Ve=_d;new yi;new Bi}
function Vd(){Td==null&&(Td=[])}
function S(){H!=0&&(H=0);J=-1}
function jb(){jb=_d;ib=Pb(Od(),13)}
function Bj(){Bj=_d;yj=new k;Aj=new k}
function yb(b,a){b.innerHTML=a||''}
function nj(a,b,c){a.splice(b,0,c)}
function dh(a,b){a.a+=''+b;return a}
function $g(a,b){return a.indexOf(b)}
function mj(a){return a!=null?p(a):0}
function _b(a){return a==null?null:a}
function nh(a){return !a?null:a.R()}
function Ab(a,b){return kb((jb(),a),b)}
function Vb(a,b){return a!=null&&Ob(a,b)}
function fe(c,a,b){return a.replace(c,b)}
function wb(b,a){return b.removeChild(a)}
function ub(b,a){return b.appendChild(a)}
function xj(a){return a.$H||(a.$H=++wj)}
function of(a,b){hf();return a[b]||null}
function oj(a){if(!a){throw Sd(new sg)}}
function uj(a){if(!a){throw Sd(new Lg)}}
function pj(a){if(!a){throw Sd(new kj)}}
function wg(a){if(a.i!=null){return}Gg(a)}
function r(a,b){a.b=b;b!=null&&vj(b,Jj,a)}
function Qi(a){var b;b=a[rk];b.call(a,0)}
function ei(){this.a=Gb(gd,Wj,1,0,5,1)}
function w(a){this.c=a;q(this);this.n()}
function Xe(a){this.c=a;q(this);this.n()}
function Vg(){w.call(this,'html is null')}
function Nf(a){a.c.items=a.a.lastResponse}
function q(a){a.d&&a.b!==Ij&&a.n();return a}
function Qb(a){uj(a==null||Zb(a));return a}
function Tb(a){uj(a==null||Yb(a));return a}
function Yb(a){return typeof a==='string'}
function Xb(a){return typeof a==='number'}
function Wb(a){return typeof a==='boolean'}
function Cb(b,a){return b.getElementById(a)}
function kb(a,b){return a.createElement(b)}
function vb(c,a,b){return c.insertBefore(a,b)}
function L(a,b,c){return a.apply(b,c);var d}
function kf(a,b,c){hf();return a[b].apply(a,c)}
function Ri(a,b){var c;c=a[rk];c.call(a,b)}
function vj(b,c,d){try{b[c]=d}catch(a){}}
function Ee(a,b,c){this.b=a;this.c=b;this.a=c}
function uf(a,b,c){this.b=a;this.c=b;this.a=c}
function gj(a,b,c){this.a=a;this.b=b;this.c=c}
function Pb(a,b){uj(a==null||Ob(a,b));return a}
function Y(a,b){!a&&(a=[]);a[a.length]=b;return a}
function Yi(a,b){return !(a.a.get(b)===undefined)}
function ph(a,b){return Yb(b)?rh(a,b):!!Ii(a.a,b)}
function uh(a,b){return b==null?Ki(a.a):_i(a.b,b)}
function Ib(a){return Array.isArray(a)&&a.V===de}
function Ub(a){return !Array.isArray(a)&&a.V===de}
function $b(a){return typeof a===Gj||typeof a===Tj}
function zb(a){return (jb(),a).createElement('div')}
function rg(){rg=_d;qg=$wnd.window.document}
function Tg(){Tg=_d;Sg=Gb(bd,Wj,16,256,0,1)}
function Ej(){if(zj==256){yj=Aj;Aj=new k;zj=0}++zj}
function rj(a){if(a==null){throw Sd(new Ug)}return a}
function he(a){if(a==null){throw Sd(new Vg)}this.a=a}
function Rb(a){uj(a==null||Array.isArray(a));return a}
function Jb(a,b,c){oj(c==null||Db(a,c));return a[b]=c}
function zi(a,b){var c;c=sh(a.a,b,a);return c==null}
function Yg(a,b){tj(b,a.length);return a.charCodeAt(b)}
function Od(){if(Nd==0){return new qb}return new tb}
function Qd(){if(Nd==0){return new Ze}return new af}
function Pd(){if(Nd==1){return new Qe}return new Pe}
function ee(){$wnd.setTimeout(Fj(We));Ie();Af(new Bf)}
function Q(a){K();$wnd.setTimeout(function(){throw a},0)}
function xi(a,b){return _b(a)===_b(b)||a!=null&&m(a,b)}
function lj(a,b){return _b(a)===_b(b)||a!=null&&m(a,b)}
function rh(a,b){return b==null?!!Ii(a.a,null):Yi(a.b,b)}
function qh(a,b){return b==null?nh(Ii(a.a,null)):Zi(a.b,b)}
function sh(a,b,c){return Yb(b)?th(a,b,c):Ji(a.a,b,c)}
function sj(a,b){if(a<0||a>b){throw Sd(new Ng(sk+a+tk+b))}}
function qj(a,b){if(a<0||a>=b){throw Sd(new Ng(sk+a+tk+b))}}
function tj(a,b){if(a<0||a>=b){throw Sd(new fh(sk+a+tk+b))}}
function Sb(a,b){uj(a==null||a&&b&&a instanceof b);return a}
function yf(a){(rg(),qg).body.appendChild(a.c);return Rg()}
function Eg(a){if(a.H()){return null}var b=a.h;return Yd[b]}
function be(a){function b(){}
;b.prototype=a||{};return new b}
function vi(a){var b,c;c=a;b=c.$modCount|0;c.$modCount=b+1}
function ui(a,b){if(b.$modCount!=a.$modCount){throw Sd(new wi)}}
function Zf(a){this.c=a;this.a=Bb($doc);this.b=Bb($doc)}
function qf(a,b){this.b=a;this.c=b;this.a=this.b.a.length}
function yi(){this.a=new Li(this);this.b=new aj(this);vi(this)}
function Ni(a){this.e=a;this.b=this.e.a.entries();this.a=new Array}
function Hi(a,b){var c;c=a.a.get(b);return c==null?new Array:c}
function Cg(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.B(b))}
function O(a,b,c){var d;d=M();try{return L(a,b,c)}finally{P(d)}}
function th(a,b,c){return b==null?Ji(a.a,null,c):$i(a.b,b,c)}
function Ii(a,b){var c;return Gi(b,Hi(a,b==null?0:(c=p(b),c|0)))}
function Ag(a,b,c){var d,e;d=(e=new yg,e.f=a,e.d=b,e);Kg(c,d);return d}
function Rg(){var a;a=(Tg(),Sg)[128];!a&&(a=Sg[128]=new Og);return a}
function P(a){a&&W((U(),T));--H;if(a){if(J!=-1){R(J);J=-1}}}
function ab(){ab=_d;var a,b;b=!db();a=new hb;$=b?new eb:a}
function Ce(a){var b;Be();yb(ze,a);b=xb(ze);wb(b.parentNode,b);return b}
function Dh(a){var b;ui(a.d,a);pj(a.b);b=Pb(a.a.N(),11);a.b=Ch(a);return b}
function gg(a){var b;b=a.e.data;if(b==null){b=Rb([]);a.e.data=b}a.d.items=b}
function F(a){return a.toString?a.toString():'[JavaScriptObject]'}
function cj(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function eg(a){this.d=a;this.a=Bb($doc);this.b=Bb($doc);this.c=Bb($doc)}
function Be(){if(!ze){ze=zb($doc);Re(ze,false);ub((Ve(),$doc.body),ze)}}
function G(){if(Date.now){return Date.now()}return (new Date).getTime()}
function N(b){K();return function(){return O(b,this,arguments);var a}}
function t(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function di(a,b,c){for(;c<a.a.length;++c){if(lj(b,a.a[c])){return c}}return -1}
function fj(a){if(a.a.d!=a.c){return Zi(a.a,a.b.value[0])}return a.b.value[1]}
function W(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=Z(b,c)}while(a.b);a.b=c}}
function V(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=Z(b,c)}while(a.a);a.a=c}}
function Kg(a,b){var c;if(!a){return}b.h=a;var d=Eg(b);if(!d){Yd[a]=[b];return}d.T=b}
function Rd(a){var b;if(Vb(a,4)){return a}b=a&&a[Jj];if(!b){b=new C(a);bb(b)}return b}
function lb(a){var b=a.firstChild;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function mb(a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function ae(a,b,c){var d=function(){return a.apply(d,arguments)};b.apply(d,c);return d}
function Gb(a,b,c,d,e,f){var g;g=Hb(e,d);e!=10&&Kb(Eb(a,f),b,c,e,g);return g}
function _g(a,b){var c;b=bh(b);c=new RegExp('^.*/(.+).html$');return a.replace(c,b)}
function Hh(a,b){var c,d;for(c=0,d=a.L();c<d;++c){if(lj(b,a.P(c))){return c}}return -1}
function si(a){var b,c,d;d=0;for(c=a.I();c.M();){b=c.N();d=d+(b!=null?p(b):0);d=d|0}return d}
function ti(a){var b,c,d;d=1;for(c=a.I();c.M();){b=c.N();d=31*d+(b!=null?p(b):0);d=d|0}return d}
function We(){var a,b,c;b=Pb(Qd(),49);a=b.v();c=b.w();if(!Zg(a,c)){throw Sd(new Ye(a,c))}}
function ih(a,b){var c,d;rj(b);for(d=b.I();d.M();){c=d.N();if(!a.K(c)){return false}}return true}
function cb(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||'anonymous'}
function Bb(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function ac(a){return Math.max(Math.min(a,2147483647),-2147483648)|0}
function Fb(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function Kb(a,b,c,d,e){e.T=a;e.U=b;e.V=de;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function Re(a,b){a.style.display=b?'':_j;b?a.removeAttribute(ak):a.setAttribute(ak,'true')}
function _f(a){a.c.items=Rb(of(a.a.lastResponse,'items'));a.d.style.display=_j}
function Ud(){Vd();var a=Td;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function Xd(a,b){typeof window===Gj&&typeof window['$gwt']===Gj&&(window['$gwt'][a]=b)}
function C(a){B();q(this);this.b=a;a!=null&&vj(a,Jj,this);this.c=a==null?'null':ce(a);this.a=a}
function yg(){++vg;this.i=null;this.g=null;this.f=null;this.d=null;this.b=null;this.h=null;this.a=null}
function Eh(a){this.d=a;this.c=new cj(this.d.b);this.a=this.c;this.b=Ch(this);this.$modCount=a.$modCount}
function ag(){this.b=Sb(dg(new eg(this)),$wnd.HTMLDivElement);this.a.addEventListener('response',new bg(this))}
function Ch(a){if(a.a.M()){return true}if(a.a!=a.c){return false}a.a=new Ni(a.d.a);return a.a.M()}
function _i(a,b){var c;c=a.a.get(b);if(c===undefined){++a.d}else{Ri(a.a,b);--a.c;vi(a.b)}return c}
function $i(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;vi(a.b)}else{++a.d}return d}
function Gi(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(xi(a,c.Q())){return c}}return null}
function hh(a,b){var c,d;for(d=a.I();d.M();){c=d.N();if(_b(b)===_b(c)||b!=null&&m(b,c)){return true}}return false}
function M(){var a;if(H!=0){a=G();if(a-I>2000){I=a;J=$wnd.setTimeout(S,10)}}if(H++==0){V((U(),T));return true}return false}
function Se(a,b){var c;switch(He(),Je((jb(),b).type)){case 16:case 32:c=ib.r(b);if(!!c&&a.h.W()){return}}}
function nf(a){hf();var b,c,d;zi(ff,a);d=Pb(qh(gf,a),22);if(d){for(c=d.I();c.M();){b=Qb(c.N());b(null)}}uh(gf,a);return null}
function Ae(a){var b,c,d;Be();b=(d=(jb(),a).parentNode,(!d||d.nodeType!=1)&&(d=null),d);c=mb(a);ub(ze,a);return new Ee(b,c,a)}
function wf(a){(rg(),$wnd.window.window).addEventListener('online',a);$wnd.window.window.addEventListener('offline',a)}
function xf(a){switch(a){case 0:return (new Of).b;case 1:return (new ag).b;case 2:return (new ig).c;default:return null;}}
function ug(a){if(a>=48&&a<48+$wnd.Math.min(10,10)){return a-48}if(a>=97&&a<97){return a-97+10}if(a>=65&&a<65){return a-65+10}return -1}
function Jg(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function db(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function Mf(a){var b;b=a.c.columns[0];b.renderer=ae(Uf.prototype.A,Uf,[]);(hf(),df).async(ae(Wf.prototype.A,Wf,[a]),1000);return Rg()}
function Kf(a){this.h=a;this.a=Bb($doc);this.b=Bb($doc);this.c=Bb($doc);this.d=Bb($doc);this.e=Bb($doc);this.f=Bb($doc);this.g=Bb($doc)}
function og(a){this.h=a;this.a=Bb($doc);this.b=Bb($doc);this.c=Bb($doc);this.d=Bb($doc);this.e=Bb($doc);this.f=Bb($doc);this.g=Bb($doc)}
function Dj(a){Bj();var b,c,d;c=':'+a;d=Aj[c];if(d!=null){return ac((rj(d),d))}d=yj[c];b=d==null?Cj(a):ac((rj(d),d));Ej();Aj[c]=b;return b}
function p(a){return Yb(a)?Dj(a):Xb(a)?ac((rj(a),a)):Wb(a)?(rj(a),a)?1231:1237:Ub(a)?a.l():Ib(a)?xj(a):!!a&&!!a.hashCode?a.hashCode():xj(a)}
function m(a,b){return Yb(a)?Zg(a,b):Xb(a)?(rj(a),a===b):Wb(a)?(rj(a),a===b):Ub(a)?a.j(b):Ib(a)?a===b:!!a&&!!a.equals?a.equals(b):_b(a)===_b(b)}
function zf(a){var b;a.b.persistent||a.b.close();b=Mg(ce(a.d.selected));a.a.innerHTML='';a.a.appendChild(Jb(a.f,b,a.f[b]==null?xf(b):a.f[b]))}
function mf(a,b){hf();var c,d,e;c=ae(qf.prototype.A,qf,[a,b]);for(e=new Nh(a);e.a<e.b.L();){d=(pj(e.a<e.b.L()),Tb(e.b.P(e.a++)));lf(d,c,null)}}
function Ob(a,b){if(Yb(a)){return !!Nb[b]}else if(a.U){return !!a.U[b]}else if(Xb(a)){return !!Mb[b]}else if(Wb(a)){return !!Lb[b]}return false}
function Of(){this.b=Sb(Yf(new Zf(this)),$wnd.HTMLDivElement);this.c.then(ae(Qf.prototype.A,Qf,[this]));this.a.addEventListener('response',new Sf(this))}
function ig(){this.c=Sb(ng(new og(this)),$wnd.HTMLDivElement);this.e.addEventListener('pouchdb-connect',new jg(this));this.f.addEventListener('click',new lg(this))}
function Hb(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function Ye(a,b){var c;Xe.call(this,(c=dk+a+') '+ek+b+fk+gk==null?'null':ce(dk+a+') '+ek+b+fk+gk),Vb(dk+a+') '+ek+b+fk+gk,4)?Pb(dk+a+') '+ek+b+fk+gk,4):null,c))}
function Wd(b,c,d,e){Vd();var f=Td;$moduleName=c;$moduleBase=d;Nd=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{Fj(g)()}catch(a){b(c,a)}}else{Fj(g)()}}
function ve(){ve=_d;new le;re=new RegExp('[&<>\'"]');pe=new RegExp('&','g');qe=new RegExp('>','g');se=new RegExp('<','g');ue=new RegExp("'",'g');te=new RegExp('"','g')}
function bh(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){tj(b+1,a.length);a.charCodeAt(b+1)==36?(a=a.substr(0,b)+'$'+ah(a,++b)):(a=a.substr(0,b)+(''+ah(a,++b)))}return a}
function Vi(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map===Tj&&Map.prototype.entries&&b()){return Map}else{return Wi()}}
function Yf(a){var b,c,d,e;d=Ce($f(a.a,a.b).a);b=Ae(d);c=xe(new ye(a.a));a.c.a=Sb(c,$wnd.HTMLElement);e=xe(new ye(a.b));a.c.c=Sb(e,$wnd.HTMLElement);b.b?vb(b.b,b.a,b.c):De(b.a);return d}
function Zd(){Yd={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function lh(a,b){var c,d,e;c=b.Q();e=b.R();d=Yb(c)?qh(a,c):nh(Ii(a.a,c));if(!(_b(e)===_b(d)||e!=null&&m(e,d))){return false}if(d==null&&!(Yb(c)?rh(a,c):!!Ii(a.a,c))){return false}return true}
function jf(a){if(!Zg(a.substr(0,4),'http')){(new RegExp('^([\\w-]+)$')).test(a)&&(a=a+'/'+a);(new RegExp('^(.*\\.(html|js)$)$')).test(a)||(a+='.html');a=$wnd.gwtBowerLocation+(''+a)}return a}
function Z(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].W()&&(c=Y(c,g)):g[0].W()}catch(a){a=Rd(a);if(Vb(a,4)){d=a;K();Q(Vb(d,18)?Pb(d,18).o():d)}else throw Sd(a)}}return c}
function xe(a){if(!a.b){a.b=Cb($doc,a.a);if(!a.b){throw Sd(new w('Cannot find element with id "'+a.a+'". Perhaps it is not attached to the document body.'))}a.b.removeAttribute('id')}return a.b}
function ce(a){var b;if(Array.isArray(a)&&a.V===de){return xg(Yb(a)?ld:Xb(a)?Yc:Wb(a)?Vc:Ub(a)?a.T:Ib(a)?a.T:a.T||Array.isArray(a)&&Eb(cc,1)||cc)+'@'+(b=p(a)>>>0,b.toString(16))}return a.toString()}
function Pf(a){var b,c,d;d=a;b=d.element;c=Sb(b.firstChild,$wnd.HTMLImageElement);if(c==null){c=Sb((rg(),qg).createElement('img'),$wnd.HTMLImageElement);b.appendChild(c)}c.src=F(d.data);return Rg()}
function Ki(a){var b,c,d,e;c=(b=a.a.get(0),b==null?new Array:b);for(e=0;e<c.length;e++){d=c[e];if(xi(null,d.Q())){if(c.length==1){c.length=0;Qi(a.a)}else{c.splice(e,1)}--a.c;vi(a.b);return d.R()}}return null}
function Ji(a,b,c){var d,e,f,g,h;h=b==null?0:(g=p(b),g|0);e=(d=a.a.get(h),d==null?new Array:d);if(e.length==0){a.a.set(h,e)}else{f=Gi(b,e);if(f){return f.S(c)}}Jb(e,e.length,new ai(b,c));++a.c;vi(a.b);return null}
function hf(){hf=_d;var a,b;'import' in $doc.createElement('link');if($wnd.gwtBowerLocation==null){a=(K(),$moduleBase);b=$moduleName;$g(a,(rj(b),b))!=-1||(a=b+'/');$wnd.gwtBowerLocation=a+'bower_components/'}ff=new Bi;gf=new yi}
function $d(a,b,c){var d=Yd,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=Yd[b]),be(h));_.U=c;!b&&(_.V=de);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.T=f)}
function dg(a){var b,c,d,e,f;d=Ce(fg(a.a,a.b,a.c).a);b=Ae(d);c=xe(new ye(a.a));a.d.a=Sb(c,$wnd.HTMLElement);f=xe(new ye(a.b));a.d.d=Sb(f,$wnd.HTMLElement);e=xe(new ye(a.c));a.d.c=Sb(e,$wnd.HTMLElement);b.b?vb(b.b,b.a,b.c):De(b.a);return d}
function Gg(a){if(a.G()){var b=a.c;b.H()?(a.i='['+b.h):!b.G()?(a.i='[L'+b.D()+';'):(a.i='['+b.D());a.b=b.C()+'[]';a.g=b.F()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.i=Jg('.',[c,Jg('$',d)]);a.b=Jg('.',[c,Jg('.',d)]);a.g=d[d.length-1]}
function Le(){Le=_d;Ke={click:Ne,dblclick:Ne,mousedown:Ne,mouseup:Ne,mousemove:Ne,mouseover:Ne,mouseout:Ne,mousewheel:Ne,keydown:Me,keyup:Me,keypress:Me,touchstart:Ne,touchend:Ne,touchmove:Ne,touchcancel:Ne,gesturestart:Ne,gestureend:Ne,gesturechange:Ne}}
function we(a){ve();if(!ge(re,a)){return a}a.indexOf('&')!=-1&&(a=fe(pe,a,'&amp;'));a.indexOf('<')!=-1&&(a=fe(se,a,'&lt;'));a.indexOf('>')!=-1&&(a=fe(qe,a,'&gt;'));a.indexOf('"')!=-1&&(a=fe(te,a,'&quot;'));a.indexOf("'")!=-1&&(a=fe(ue,a,'&#39;'));return a}
function Cj(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=(tj(c+3,a.length),a.charCodeAt(c+3)+(tj(c+2,a.length),31*(a.charCodeAt(c+2)+(tj(c+1,a.length),31*(a.charCodeAt(c+1)+(tj(c,a.length),31*(a.charCodeAt(c)+31*b)))))));b=b|0;c+=4}while(c<d){b=b*31+Yg(a,c++)}b=b|0;return b}
function Ui(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function hg(a){var b;if(a.a.value.length==0){a.a.invalid=a.a.value.length==0;return}if(a.g.validate()&&a.b.validate()){b=new $wnd.Object;b.date=a.a.value;b.title=a.g.value;b.description=a.b.value;kf(a.d,'push',Kb(Eb(gd,1),Wj,1,5,['items',b]));kf(a.e,'push',Kb(Eb(gd,1),Wj,1,5,['data',b]));a.a.value='';a.g.value='';a.b.value=''}}
function Jf(a){var b,c,d,e,f,g;e=Ce(Lf(a.a,a.b,a.c,a.d,a.e,a.f,a.g).a);b=Ae(e);xe(new ye(a.a));d=xe(new ye(a.b));a.h.b=Sb(d,$wnd.HTMLElement);f=xe(new ye(a.c));a.h.d=Sb(f,$wnd.HTMLElement);xe(new ye(a.d));xe(new ye(a.e));g=xe(new ye(a.f));a.h.e=Sb(g,$wnd.HTMLElement);c=xe(new ye(a.g));a.h.a=Sb(c,$wnd.HTMLDivElement);b.b?vb(b.b,b.a,b.c):De(b.a);return e}
function lf(a,b,c){hf();var d,e,f,g;f=jf(a);d=ae(sf.prototype.A,sf,[f]);if(df==null){pf(ae(uf.prototype.A,uf,[a,b,c]));return}if(!Ai(ff,f)){e=Ab($doc,_g(f,'$1'));if(!(!!e&&e.constructor!==$wnd.HTMLElement&&e.constructor!=$wnd.HTMLUnknownElement)){g=Pb(qh(gf,f),22);if(!g){g=new ei;th(gf,f,g);df.importHref(f,d,c)}b!=null&&g.J(b);return}zi(ff,f)}b!=null&&b(null)}
function Mg(a){var b,c,d,e,f;if(a==null){throw Sd(new Xg('null'))}d=a.length;e=d>0&&(tj(0,a.length),a.charCodeAt(0)==45||(tj(0,a.length),a.charCodeAt(0)==43))?1:0;for(b=e;b<d;b++){if(ug((tj(b,a.length),a.charCodeAt(b)))==-1){throw Sd(new Xg(ok+a+'"'))}}f=parseInt(a,10);c=f<-2147483648;if(isNaN(f)){throw Sd(new Xg(ok+a+'"'))}else if(c||f>2147483647){throw Sd(new Xg(ok+a+'"'))}return f}
function Db(a,b){var c;switch(Fb(a)){case 6:return Yb(b);case 7:return Xb(b);case 8:return Wb(b);case 3:return Array.isArray(b)&&(c=Fb(b),!(c>=14&&c<=16));case 11:return b!=null&&Zb(b);case 12:return b!=null&&(typeof b===Gj||typeof b==Tj);case 0:return Ob(b,a.__elementTypeId$);case 2:return $b(b)&&!(b.V===de);case 1:return $b(b)&&!(b.V===de)||Ob(b,a.__elementTypeId$);default:return true;}}
function pf(b){function c(){ef=$wnd.Polymer;df=$wnd.Polymer.Base;$doc.body.removeAttribute('unresolved')}
if(!$wnd.Polymer){if(!$wnd._pending_oks){$wnd._pending_oks=[b];var d=$doc.createElement('link');d.rel='import';d.href=jf('polymer');d.onload=function(){$wnd._pending_oks.forEach(function(a){a()});$wnd._pending_oks=undefined;c()};$doc.head.appendChild(d)}$wnd._pending_oks.push(b)}else{c();b()}}
function ng(a){var b,c,d,e,f,g,h,i,j;e=Ce(pg(a.a,a.b,a.c,a.d,a.e,a.f,a.g).a);b=Ae(e);f=xe(new ye(a.a));Sb(f,$wnd.HTMLFormElement);c=xe(new ye(a.b));a.h.a=Sb(c,$wnd.HTMLElement);j=xe(new ye(a.c));a.h.g=Sb(j,$wnd.HTMLElement);d=xe(new ye(a.d));a.h.b=Sb(d,$wnd.HTMLElement);i=xe(new ye(a.e));a.h.f=Sb(i,$wnd.HTMLElement);g=xe(new ye(a.f));a.h.d=Sb(g,$wnd.HTMLElement);h=xe(new ye(a.g));a.h.e=Sb(h,$wnd.HTMLElement);b.b?vb(b.b,b.a,b.c):De(b.a);return e}
function $f(a,b){var c;c=new eh;c.a+="<div><style> vaadin-grid img { width: 40px; height: 40px; border-radius: 50%; position: absolute; top: 4px; } <\/style> <iron-ajax id='";dh(c,we(a));c.a+="' url='users.json'><\/iron-ajax> <vaadin-grid class='fit' id='";dh(c,we(b));c.a+="'> <table> <colgroup> <col name='image' width='80'> <col name='name' width='150'> <col name='last'> <col name='city'> <col name='state'> <col name='country'> <\/colgroup> <\/table> <\/vaadin-grid><\/div>";return new he(c.a)}
function Af(a){a.c=Sb(Jf(new Kf(a)),$wnd.HTMLDivElement);wf(new Cf(a));a.e.style.display=$wnd.navigator.onLine?_j:'block';hf();mf(new oi(Kb(Eb(ld,1),Wj,2,6,['paper-styles','iron-icons','app-layout/app-drawer-layout/app-drawer-layout','app-layout/app-drawer/app-drawer','app-layout/app-header-layout/app-header-layout','app-layout/app-header/app-header','app-layout/app-toolbar/app-toolbar','paper-listbox','paper-item','paper-icon-button','iron-ajax','iron-list','vaadin-grid','paper-progress','paper-material','vaadin-date-picker','paper-input','paper-input/paper-textarea','paper-button','vaadin-pouchdb'])),ae(Ff.prototype.A,Ff,[a]));a.d.addEventListener('iron-select',new Hf(a))}
function Je(a){switch(a){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case Yj:case 'mousewheel':return 131072;case 'contextmenu':return 262144;case 'paste':return 524288;case 'touchstart':return 1048576;case 'touchmove':return 2097152;case 'touchend':return 4194304;case 'touchcancel':return 8388608;case 'gesturestart':return 16777216;case 'gesturechange':return 33554432;case 'gestureend':return 67108864;default:return -1;}}
function Wi(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[rk]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!Ui()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[rk]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function Ie(){var a,b,c;b=$doc.compatMode;a=Kb(Eb(ld,1),Wj,2,6,[Xj]);for(c=0;c<a.length;c++){if(Zg(a[c],b)){return}}a.length==1&&Zg(Xj,a[0])&&Zg('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
function fg(a,b,c){var d;d=new eh;d.a+="<div class='view2'><style> .view2 .item { margin: 10px; padding: 0 10px 0 20px; border-radius: 8px; border: 1px solid #ddd; overflow: auto; } .view2 img { height: 120px; } .view2 paper-progress { width: 100%; } <\/style> <iron-ajax auto='false' handle-as='json' id='";dh(d,we(a));d.a+='\' params=\'{"part":"snippet", "q":"progressive web applications", "key": "AIzaSyAuecFZ9xJXbGDkQYWBmYrtzOGJD-iDIgI", "type": "video"}\' url=\'https://www.googleapis.com/youtube/v3/search\'><\/iron-ajax> <paper-progress id=\'';dh(d,we(b));d.a+="' indeterminate='true'><\/paper-progress> <iron-list as='item' class='fit' id='";dh(d,we(c));d.a+="'> <template> <div> <div class='item layout vertical center'> <h4>[[item.snippet.title]]<\/h4> <a href='https://www.youtube.com/watch?v=[[item.id.videoId]]' target='_blank'><img src='[[item.snippet.thumbnails.high.url]]' width='160'><\/a> <p>[[item.snippet.description]]<\/p> <\/div> <\/div> <\/template> <\/iron-list><\/div>";return new he(d.a)}
function pg(a,b,c,d,e,f,g){var h;h=new eh;h.a+="<div class='view3'><style> .view3 paper-material { margin: 20px; padding: 10px 25px 30px 25px; } .view3 paper-button { margin-top: 30px; } .view3 vaadin-date-picker { margin-right: 15px; } <\/style> <paper-material elevation='3'> <form id='";dh(h,we(a));h.a+="'> <div class='layout horizontal'> <vaadin-date-picker id='";dh(h,we(b));h.a+="' label='date' required='true'><\/vaadin-date-picker> <paper-input error-message='Required' id='";dh(h,we(c));h.a+="' label='title' pattern='^.+$' required='true'><\/paper-input> <\/div> <paper-textarea id='";dh(h,we(d));h.a+="' label='description'><\/paper-textarea> <paper-button id='";dh(h,we(e));h.a+="' raised='true'>Add<\/paper-button> <\/form> <\/paper-material> <paper-material elevation='2'> <h4>TODOs<\/h4> <vaadin-grid id='";dh(h,we(f));h.a+="' selection-mode='multi'> <table> <col name='date' width='120'> <col name='title' width='130'> <col name='description'> <thead hidden=''><\/thead> <\/table> <\/vaadin-grid> <\/paper-material> <vaadin-pouchdb dbname='todos' id='";dh(h,we(g));h.a+="' index='date'><\/vaadin-pouchdb><\/div>";return new he(h.a)}
function Lf(a,b,c,d,e,f,g){var h;h=new eh;h.a+="<div><style> app-header { color: var(--app-primary-color); background-color: var(--app-secondary-color); } app-drawer app-header-layout { background-color: var(--app-drawer-content-background-color); } app-drawer paper-menu { background-color: transparent !important; } .content { margin-top: 64px; } <\/style> <app-drawer-layout class='fit' id='";dh(h,we(a));h.a+="'> <app-drawer id='";dh(h,we(b));h.a+="'> <app-header-layout has-scrolling-region='true'> <app-header> <app-toolbar>Menu<\/app-toolbar> <\/app-header> <paper-listbox id='";dh(h,we(c));h.a+="'> <paper-item>User List<\/paper-item> <paper-item>Videos<\/paper-item> <paper-item>Todos<\/paper-item> <\/paper-listbox> <\/app-header-layout> <\/app-drawer> <app-header-layout attributes='fullbleed' class='fit mright' has-scrolling-region='true' id='";dh(h,we(d));h.a+="'> <app-header> <app-toolbar> <paper-icon-button drawer-toggle='true' icon='menu'><\/paper-icon-button> <div id='";dh(h,we(e));h.a+="' main-title=''> MyApp <paper-badge icon='flight-takeoff' id='";dh(h,we(f));h.a+="'><\/paper-badge> <\/div> <\/app-toolbar> <\/app-header> <div class='content fit layout vertical' id='";dh(h,we(g));h.a+="'><\/div> <\/app-header-layout> <\/app-drawer-layout><\/div>";return new he(h.a)}
var Gj='object',Hj='java.lang',Ij='__noinit__',Jj='__java$exception',Kj={3:1,4:1},Lj='com.google.gwt.core.client.impl',Mj='com.google.gwt.core.client',Nj={13:1},Oj='com.google.gwt.dom.client',Pj='DOMImplStandard',Qj='DOMImplMozilla',Rj='DOMImplStandardBase',Sj='DOMImplWebkit',Tj='function',Uj='com.google.gwt.safehtml.shared',Vj='com.google.gwt.uibinder.client',Wj={3:1,7:1},Xj='CSS1Compat',Yj='DOMMouseScroll',Zj={14:1},$j='com.google.gwt.user.client.impl',_j='none',ak='aria-hidden',bk='com.google.gwt.user.client.ui',ck={33:1},dk='Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (',ek='does not match the runtime user.agent value (',fk=').\n',gk='Expect more errors.',hk='com.google.gwt.useragent.client',ik='gecko1_8',jk='safari',kk='msie',lk={15:1},mk='com.vaadin.polymer.demo.client',nk='com.vaadin.polymer.demo.client.views',ok='For input string: "',pk='java.util',qk={11:1},rk='delete',sk='Index: ',tk=', Size: ',uk='user.agent';var _,Yd,Td,Nd=-1;Zd();$d(1,null,{},k);_.j=function l(a){return this===a};_.k=function n(){return this.T};_.l=function o(){return xj(this)};_.equals=function(a){return this.j(a)};_.hashCode=function(){return this.l()};$d(36,1,{},yg);_.B=function zg(a){var b;b=new yg;b.e=4;a>1?(b.c=Cg(this,a-1)):(b.c=this);return b};_.C=function Bg(){wg(this);return this.b};_.D=function Dg(){return xg(this)};_.F=function Fg(){wg(this);return this.g};_.G=function Hg(){return (this.e&4)!=0};_.H=function Ig(){return (this.e&1)!=0};_.e=0;var vg=1;var gd=Ag(Hj,'Object',1);var Xc=Ag(Hj,'Class',36);$d(4,1,Kj);_.m=function s(a){return new Error(a)};_.n=function u(){var a,b,c;c=this.c==null?null:this.c.replace(new RegExp('\n','g'),' ');b=(a=xg(this.T),c==null?a:a+': '+c);r(this,t(this.m(b)));bb(this)};_.b=Ij;_.d=true;var md=Ag(Hj,'Throwable',4);$d(29,4,Kj);var $c=Ag(Hj,'Exception',29);$d(8,29,Kj,w);var hd=Ag(Hj,'RuntimeException',8);$d(31,8,Kj);var cd=Ag(Hj,'JsException',31);$d(61,31,Kj);var ec=Ag(Lj,'JavaScriptExceptionBase',61);$d(18,61,{18:1,3:1,4:1},C);_.o=function D(){return _b(this.a)===_b(A)?null:this.a};var A;var bc=Ag(Mj,'JavaScriptException',18);var cc=Ag(Mj,'JavaScriptObject$',0);$d(94,1,{});var dc=Ag(Mj,'Scheduler',94);var H=0,I=0,J=-1;$d(71,94,{},X);var T;var fc=Ag(Lj,'SchedulerImpl',71);var $;$d(108,1,{});var jc=Ag(Lj,'StackTraceCreator/Collector',108);$d(62,108,{},eb);_.p=function fb(a){var b={},j;var c=[];a['fnStack']=c;var d=arguments.callee.caller;while(d){var e=(ab(),d.name||(d.name=cb(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};var gc=Ag(Lj,'StackTraceCreator/CollectorLegacy',62);$d(109,108,{});_.p=function gb(a){};var ic=Ag(Lj,'StackTraceCreator/CollectorModern',109);$d(63,109,{},hb);var hc=Ag(Lj,'StackTraceCreator/CollectorModernNoSourceMap',63);$d(13,1,Nj);_.q=function nb(a){return a.currentTarget};var ib;var oc=Ag(Oj,'DOMImpl',13);$d(114,13,Nj);_.r=function ob(a){return a.relatedTarget};_.s=function pb(a){a.preventDefault()};var mc=Ag(Oj,Pj,114);$d(75,114,Nj,qb);_.r=function rb(b){var c=b.relatedTarget;if(!c){return null}try{var d=c.nodeName;return c}catch(a){return null}};var kc=Ag(Oj,Qj,75);$d(115,114,Nj);_.q=function sb(a){return a.currentTarget||$wnd};var lc=Ag(Oj,Rj,115);$d(74,115,Nj,tb);var nc=Ag(Oj,Sj,74);var Lb,Mb,Nb;$d(25,1,{27:1,3:1},he);_.t=function ie(){return this.a};_.j=function je(a){if(!Vb(a,27)){return false}return Zg(this.a,Pb(a,27).t())};_.l=function ke(){return Dj(this.a)};var pc=Ag(Uj,'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml',25);$d(90,1,{27:1,3:1},le);_.t=function me(){return this.a};_.j=function ne(a){if(!Vb(a,27)){return false}return Zg(this.a,Pb(a,27).t())};_.l=function oe(){return Dj(this.a)};var qc=Ag(Uj,'SafeHtmlString',90);var pe,qe,re,se,te,ue;$d(5,1,{},ye);var rc=Ag(Vj,'LazyDomElement',5);var ze;$d(81,1,{},Ee);var sc=Ag(Vj,'UiBinderUtil/TempAttachment',81);var Fe=null,Ge;$d(14,1,Zj);var xc=Ag($j,'DOMImpl',14);$d(120,14,Zj);var Ke;var vc=Ag($j,Pj,120);$d(92,120,Zj,Pe);var tc=Ag($j,Qj,92);$d(121,120,Zj);var uc=Ag($j,Rj,121);$d(93,121,Zj,Qe);var wc=Ag($j,Sj,93);$d(117,1,{});var zc=Ag(bk,'UIObject',117);$d(118,117,ck);_.u=function Te(a){Se(this,a)};var Ac=Ag(bk,'Widget',118);$d(119,118,ck);_.u=function Ue(a){Se(this,a);null.W()};var yc=Ag(bk,'Composite',119);$d(28,4,Kj);var Zc=Ag(Hj,'Error',28);$d(6,28,Kj);var Uc=Ag(Hj,'AssertionError',6);$d(50,6,Kj,Ye);var Bc=Ag(hk,'UserAgentAsserter/UserAgentAssertionError',50);$d(73,1,{49:1},Ze);_.v=function $e(){return ik};_.w=function _e(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf('webkit')!=-1}())return jk;if(function(){return a.indexOf(kk)!=-1&&b>=10&&b<11}())return 'ie10';if(function(){return a.indexOf(kk)!=-1&&b>=9&&b<11}())return 'ie9';if(function(){return a.indexOf(kk)!=-1&&b>=8&&b<11}())return 'ie8';if(function(){return a.indexOf('gecko')!=-1||b>=11}())return ik;return 'unknown'};var Cc=Ag(hk,'UserAgentImplGecko1_8',73);$d(72,1,{49:1},af);_.v=function bf(){return jk};_.w=function cf(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf('webkit')!=-1}())return jk;if(function(){return a.indexOf(kk)!=-1&&b>=10&&b<11}())return 'ie10';if(function(){return a.indexOf(kk)!=-1&&b>=9&&b<11}())return 'ie9';if(function(){return a.indexOf(kk)!=-1&&b>=8&&b<11}())return 'ie8';if(function(){return a.indexOf('gecko')!=-1||b>=11}())return ik;return 'unknown'};var Dc=Ag(hk,'UserAgentImplSafari',72);$d(490,1,{});var df,ef,ff,gf;$d(136,$wnd.Function,lk,qf);_.A=function rf(a){--this.a==0&&Ef(this.c);return null};_.a=0;$d(134,$wnd.Function,lk,sf);_.A=function tf(a){return nf(this.a)};$d(135,$wnd.Function,lk,uf);_.A=function vf(a){return hf(),lf(this.b,this.c,this.a),null};$d(488,1,{});$d(48,1,{},Bf);var Hc=Ag(mk,'Shell',48);$d(53,1,{},Cf);_.handleEvent=function Df(a){this.a.e.style.display=$wnd.navigator.onLine?_j:'block'};var Ec=Ag(mk,'Shell/lambda$0$Type',53);$d(123,$wnd.Function,lk,Ff);_.A=function Gf(a){return Ef(this)};$d(55,1,{},Hf);_.handleEvent=function If(a){zf(this.a)};var Fc=Ag(mk,'Shell/lambda$2$Type',55);$d(52,1,{},Kf);var Gc=Ag(mk,'Shell_ShellWidgetsUiBinderImpl/Widgets',52);$d(56,119,ck,Of);var Kc=Ag(nk,'View1',56);$d(137,$wnd.Function,lk,Qf);_.A=function Rf(a){return Mf(this.a)};$d(82,1,{},Sf);_.handleEvent=function Tf(a){Nf(this.a)};var Ic=Ag(nk,'View1/lambda$1$Type',82);$d(138,$wnd.Function,lk,Uf);_.A=function Vf(a){return Pf(a)};$d(139,$wnd.Function,lk,Wf);_.A=function Xf(a){return this.a.a.generateRequest()};$d(87,1,{},Zf);var Jc=Ag(nk,'View1_View1UiBinderImpl/Widgets',87);$d(57,1,{},ag);var Nc=Ag(nk,'View2',57);$d(83,1,{},bg);_.handleEvent=function cg(a){_f(this.a)};var Lc=Ag(nk,'View2/lambda$0$Type',83);$d(88,1,{},eg);var Mc=Ag(nk,'View2_View2UiBinderImpl/Widgets',88);$d(58,119,ck,ig);var Rc=Ag(nk,'View3',58);$d(84,1,{},jg);_.handleEvent=function kg(a){gg(this.a)};var Oc=Ag(nk,'View3/lambda$0$Type',84);$d(85,1,{},lg);_.handleEvent=function mg(a){hg(this.a)};var Pc=Ag(nk,'View3/lambda$1$Type',85);$d(89,1,{},og);var Qc=Ag(nk,'View3_View3UiBinderImpl/Widgets',89);var qg;$d(37,1,{51:1});var Sc=Ag(Hj,'AbstractStringBuilder',37);$d(65,8,Kj,sg);var Tc=Ag(Hj,'ArrayStoreException',65);Lb={3:1,35:1};var Vc=Ag(Hj,'Boolean',106);$d(59,8,Kj,Lg);var Wc=Ag(Hj,'ClassCastException',59);$d(30,1,{3:1,30:1});var fd=Ag(Hj,'Number',30);Mb={3:1,35:1,30:1};var Yc=Ag(Hj,'Double',107);$d(60,8,Kj);var _c=Ag(Hj,'IllegalArgumentException',60);$d(32,8,Kj,Ng);var ad=Ag(Hj,'IndexOutOfBoundsException',32);$d(16,30,{3:1,35:1,16:1,30:1},Og);_.j=function Pg(a){return Vb(a,16)&&Pb(a,16).a==this.a};_.l=function Qg(){return this.a};_.a=0;var bd=Ag(Hj,'Integer',16);var Sg;$d(479,1,{});$d(39,31,Kj,Ug,Vg);_.m=function Wg(a){return new TypeError(a)};var dd=Ag(Hj,'NullPointerException',39);$d(24,60,Kj,Xg);var ed=Ag(Hj,'NumberFormatException',24);Nb={3:1,51:1,35:1,2:1};var ld=Ag(Hj,'String',2);$d(17,37,{51:1},eh);var jd=Ag(Hj,'StringBuilder',17);$d(64,32,Kj,fh);var kd=Ag(Hj,'StringIndexOutOfBoundsException',64);$d(483,1,{});$d(40,8,Kj,gh);var nd=Ag(Hj,'UnsupportedOperationException',40);$d(110,1,{});_.J=function jh(a){throw Sd(new gh('Add not supported on this collection'))};_.K=function kh(a){return hh(this,a)};var od=Ag(pk,'AbstractCollection',110);$d(113,1,{47:1});_.j=function mh(a){var b,c,d;if(a===this){return true}if(!Vb(a,19)){return false}d=Pb(a,47);if(this.a.c+this.b.c!=d.a.c+d.b.c){return false}for(c=new Eh((new yh(d)).a);c.b;){b=Dh(c);if(!lh(this,b)){return false}}return true};_.l=function oh(){return si(new yh(this))};var zd=Ag(pk,'AbstractMap',113);$d(67,113,{47:1});var rd=Ag(pk,'AbstractHashMap',67);$d(112,110,{26:1});_.j=function wh(a){var b;if(a===this){return true}if(!Vb(a,26)){return false}b=Pb(a,26);if(b.L()!=this.L()){return false}return ih(this,b)};_.l=function xh(){return si(this)};var Ad=Ag(pk,'AbstractSet',112);$d(20,112,{26:1},yh);_.K=function zh(a){if(Vb(a,11)){return lh(this.a,Pb(a,11))}return false};_.I=function Ah(){return new Eh(this.a)};_.L=function Bh(){return vh(this.a)};var qd=Ag(pk,'AbstractHashMap/EntrySet',20);$d(21,1,{},Eh);_.N=function Gh(){return Dh(this)};_.M=function Fh(){return this.b};_.b=false;var pd=Ag(pk,'AbstractHashMap/EntrySetIterator',21);$d(111,110,{22:1});_.O=function Ih(a,b){throw Sd(new gh('Add not supported on this list'))};_.J=function Jh(a){this.O(this.L(),a);return true};_.j=function Kh(a){var b,c,d,e,f;if(a===this){return true}if(!Vb(a,22)){return false}f=Pb(a,22);if(this.L()!=f.L()){return false}e=f.I();for(c=this.I();c.M();){b=c.N();d=e.N();if(!(_b(b)===_b(d)||b!=null&&m(b,d))){return false}}return true};_.l=function Lh(){return ti(this)};_.I=function Mh(){return new Nh(this)};var td=Ag(pk,'AbstractList',111);$d(41,1,{},Nh);_.M=function Oh(){return this.a<this.b.L()};_.N=function Ph(){return pj(this.a<this.b.L()),this.b.P(this.a++)};_.a=0;var sd=Ag(pk,'AbstractList/IteratorImpl',41);$d(70,112,{26:1},Qh);_.K=function Rh(a){return ph(this.a,a)};_.I=function Sh(){var a;return a=new Eh((new yh(this.a)).a),new Uh(a)};_.L=function Th(){return vh(this.a)};var vd=Ag(pk,'AbstractMap/1',70);$d(43,1,{},Uh);_.M=function Vh(){return this.a.b};_.N=function Wh(){var a;a=Dh(this.a);return a.Q()};var ud=Ag(pk,'AbstractMap/1/1',43);$d(68,1,qk);_.j=function Xh(a){var b;if(!Vb(a,11)){return false}b=Pb(a,11);return lj(this.a,b.Q())&&lj(this.b,b.R())};_.Q=function Yh(){return this.a};_.R=function Zh(){return this.b};_.l=function $h(){return mj(this.a)^mj(this.b)};_.S=function _h(a){var b;b=this.b;this.b=a;return b};var wd=Ag(pk,'AbstractMap/AbstractEntry',68);$d(69,68,qk,ai);var xd=Ag(pk,'AbstractMap/SimpleEntry',69);$d(116,1,qk);_.j=function bi(a){var b;if(!Vb(a,11)){return false}b=Pb(a,11);return lj(this.b.value[0],b.Q())&&lj(fj(this),b.R())};_.l=function ci(){return mj(this.b.value[0])^mj(fj(this))};var yd=Ag(pk,'AbstractMapEntry',116);$d(79,111,{3:1,22:1},ei);_.O=function fi(a,b){sj(a,this.a.length);nj(this.a,a,b)};_.J=function gi(a){this.a[this.a.length]=a;return true};_.K=function hi(a){return di(this,a,0)!=-1};_.P=function ii(a){return qj(a,this.a.length),this.a[a]};_.I=function ji(){return new li(this)};_.L=function ki(){return this.a.length};var Cd=Ag(pk,'ArrayList',79);$d(80,1,{},li);_.M=function mi(){return this.a<this.c.a.length};_.N=function ni(){pj(this.a<this.c.a.length);this.b=this.a++;return this.c.a[this.b]};_.a=0;_.b=-1;var Bd=Ag(pk,'ArrayList/1',80);$d(54,111,{3:1,22:1},oi);_.K=function pi(a){return Hh(this,a)!=-1};_.P=function qi(a){qj(a,this.a.length);return this.a[a]};_.L=function ri(){return this.a.length};var Dd=Ag(pk,'Arrays/ArrayList',54);$d(91,8,Kj,wi);var Ed=Ag(pk,'ConcurrentModificationException',91);$d(19,67,{3:1,19:1,47:1},yi);var Fd=Ag(pk,'HashMap',19);$d(42,112,{3:1,26:1},Bi);_.J=function Ci(a){return zi(this,a)};_.K=function Di(a){return Ai(this,a)};_.I=function Ei(){var a;return a=new Eh((new yh((new Qh(this.a)).a)).a),new Uh(a)};_.L=function Fi(){return vh(this.a)};var Gd=Ag(pk,'HashSet',42);$d(76,1,{},Li);_.I=function Mi(){return new Ni(this)};_.c=0;var Id=Ag(pk,'InternalHashCodeMap',76);$d(44,1,{},Ni);_.N=function Pi(){return this.d=this.a[this.c++],this.d};_.M=function Oi(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.c=0;_.d=null;var Hd=Ag(pk,'InternalHashCodeMap/1',44);var Si;$d(77,1,{},aj);_.I=function bj(){return new cj(this)};_.c=0;_.d=0;var Ld=Ag(pk,'InternalStringMap',77);$d(45,1,{},cj);_.N=function ej(){return this.c=this.a,this.a=this.b.next(),new gj(this.d,this.c,this.d.d)};_.M=function dj(){return !this.a.done};var Jd=Ag(pk,'InternalStringMap/1',45);$d(78,116,qk,gj);_.Q=function hj(){return this.b.value[0]};_.R=function ij(){return fj(this)};_.S=function jj(a){return $i(this.a,this.b.value[0],a)};_.c=0;var Kd=Ag(pk,'InternalStringMap/2',78);$d(86,8,Kj,kj);var Md=Ag(pk,'NoSuchElementException',86);$d(481,1,{});$d(475,1,{});var wj=0;var yj,zj=0,Aj;$d(476,1,{});var Fj=(K(),N);var gwtOnLoad=gwtOnLoad=Wd;Ud(ee);Xd('permProps',[[['locale','default'],[uk,ik]],[['locale','default'],[uk,jk]]]);if (MyApp) MyApp.onScriptLoad(gwtOnLoad);})();