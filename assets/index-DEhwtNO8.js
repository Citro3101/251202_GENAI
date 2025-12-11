(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const zo="181",Kr={ROTATE:0,DOLLY:1,PAN:2},qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hd=0,Vl=1,ud=2,gh=1,dd=2,Ti=3,tr=0,Vt=1,Ci=2,Di=0,Zr=1,Bl=2,zl=3,Hl=4,pd=5,pr=100,fd=101,md=102,gd=103,vd=104,_d=200,bd=201,xd=202,yd=203,Wn=204,jn=205,wd=206,Md=207,Sd=208,Ed=209,Td=210,Cd=211,Ad=212,Pd=213,Rd=214,Xn=0,qn=1,Yn=2,ea=3,Kn=4,Zn=5,$n=6,Jn=7,vh=0,Dd=1,Ld=2,Qi=0,Ud=1,Nd=2,Id=3,Od=4,Fd=5,kd=6,Vd=7,_h=300,ta=301,ia=302,Qn=303,eo=304,Xs=306,to=1e3,Ai=1001,io=1002,jt=1003,Bd=1004,rs=1005,Jt=1006,sn=1007,mr=1008,fi=1009,bh=1010,xh=1011,Ra=1012,Ho=1013,_r=1014,Pi=1015,na=1016,Go=1017,Wo=1018,Da=1020,yh=35902,wh=35899,Mh=1021,Sh=1022,oi=1023,La=1026,Ua=1027,Eh=1028,jo=1029,Xo=1030,qo=1031,Yo=1033,Cs=33776,As=33777,Ps=33778,Rs=33779,ro=35840,ao=35841,so=35842,no=35843,oo=36196,lo=37492,co=37496,ho=37808,uo=37809,po=37810,fo=37811,mo=37812,go=37813,vo=37814,_o=37815,bo=37816,xo=37817,yo=37818,wo=37819,Mo=37820,So=37821,Eo=36492,To=36494,Co=36495,Ao=36283,Po=36284,Ro=36285,Do=36286,zd=3200,Hd=3201,Gd=0,Wd=1,Zi="",Wt="srgb",ra="srgb-linear",Ns="linear",Je="srgb",Pr=7680,Gl=519,jd=512,Xd=513,qd=514,Th=515,Yd=516,Kd=517,Zd=518,$d=519,Wl=35044,jl="300 es",ui=2e3,Is=2001;function Ch(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jd(){const i=Os("canvas");return i.style.display="block",i}const Xl={};function ql(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ae(...i){const e="THREE."+i.shift();console.warn(e,...i)}function gt(...i){const e="THREE."+i.shift();console.error(e,...i)}function Na(...i){const e=i.join(" ");e in Xl||(Xl[e]=!0,Ae(...i))}function Qd(i,e,t){return new Promise(function(r,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:r()}}setTimeout(s,t)})}class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let s=0,n=a.length;s<n;s++)a[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Ca=Math.PI/180,Ia=180/Math.PI;function oa(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function Ko(i,e){return(i%e+e)%e}function ep(i,e,t,r,a){return r+(i-e)*(a-r)/(t-e)}function tp(i,e,t){return i!==e?(t-i)/(e-i):0}function Aa(i,e,t){return(1-t)*i+t*e}function ip(i,e,t,r){return Aa(i,e,1-Math.exp(-t*r))}function rp(i,e=1){return e-Math.abs(Ko(i,e*2)-e)}function ap(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function np(i,e){return i+Math.floor(Math.random()*(e-i+1))}function op(i,e){return i+Math.random()*(e-i)}function lp(i){return i*(.5-Math.random())}function cp(i){i!==void 0&&(Yl=i);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hp(i){return i*Ca}function up(i){return i*Ia}function dp(i){return(i&i-1)===0&&i!==0}function pp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mp(i,e,t,r,a){const s=Math.cos,n=Math.sin,o=s(t/2),c=n(t/2),l=s((e+r)/2),h=n((e+r)/2),d=s((e-r)/2),p=n((e-r)/2),f=s((r-e)/2),v=n((r-e)/2);switch(a){case"XYX":i.set(o*h,c*d,c*p,o*l);break;case"YZY":i.set(c*p,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*p,o*h,o*l);break;case"XZX":i.set(o*h,c*v,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*v,o*l);break;case"ZYZ":i.set(c*v,c*f,o*h,o*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function jr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gr={DEG2RAD:Ca,RAD2DEG:Ia,generateUUID:oa,clamp:ke,euclideanModulo:Ko,mapLinear:ep,inverseLerp:tp,lerp:Aa,damp:ip,pingpong:rp,smoothstep:ap,smootherstep:sp,randInt:np,randFloat:op,randFloatSpread:lp,seededRandom:cp,degToRad:hp,radToDeg:up,isPowerOfTwo:dp,ceilPowerOfTwo:pp,floorPowerOfTwo:fp,setQuaternionFromProperEuler:mp,normalize:Dt,denormalize:jr};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ke(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ke(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),s=this.x-e.x,n=this.y-e.y;return this.x=s*r-n*a+e.x,this.y=s*a+n*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class br{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,s,n,o){let c=r[a+0],l=r[a+1],h=r[a+2],d=r[a+3],p=s[n+0],f=s[n+1],v=s[n+2],b=s[n+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=p,e[t+1]=f,e[t+2]=v,e[t+3]=b;return}if(d!==b||c!==p||l!==f||h!==v){let m=c*p+l*f+h*v+d*b;m<0&&(p=-p,f=-f,v=-v,b=-b,m=-m);let u=1-o;if(m<.9995){const E=Math.acos(m),S=Math.sin(E);u=Math.sin(u*E)/S,o=Math.sin(o*E)/S,c=c*u+p*o,l=l*u+f*o,h=h*u+v*o,d=d*u+b*o}else{c=c*u+p*o,l=l*u+f*o,h=h*u+v*o,d=d*u+b*o;const E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,a,s,n){const o=r[a],c=r[a+1],l=r[a+2],h=r[a+3],d=s[n],p=s[n+1],f=s[n+2],v=s[n+3];return e[t]=o*v+h*d+c*f-l*p,e[t+1]=c*v+h*p+l*d-o*f,e[t+2]=l*v+h*f+o*p-c*d,e[t+3]=h*v-o*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,s=e._z,n=e._order,o=Math.cos,c=Math.sin,l=o(r/2),h=o(a/2),d=o(s/2),p=c(r/2),f=c(a/2),v=c(s/2);switch(n){case"XYZ":this._x=p*h*d+l*f*v,this._y=l*f*d-p*h*v,this._z=l*h*v+p*f*d,this._w=l*h*d-p*f*v;break;case"YXZ":this._x=p*h*d+l*f*v,this._y=l*f*d-p*h*v,this._z=l*h*v-p*f*d,this._w=l*h*d+p*f*v;break;case"ZXY":this._x=p*h*d-l*f*v,this._y=l*f*d+p*h*v,this._z=l*h*v+p*f*d,this._w=l*h*d-p*f*v;break;case"ZYX":this._x=p*h*d-l*f*v,this._y=l*f*d+p*h*v,this._z=l*h*v-p*f*d,this._w=l*h*d+p*f*v;break;case"YZX":this._x=p*h*d+l*f*v,this._y=l*f*d+p*h*v,this._z=l*h*v-p*f*d,this._w=l*h*d-p*f*v;break;case"XZY":this._x=p*h*d-l*f*v,this._y=l*f*d-p*h*v,this._z=l*h*v+p*f*d,this._w=l*h*d+p*f*v;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],s=t[8],n=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=r+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(n-a)*f}else if(r>o&&r>d){const f=2*Math.sqrt(1+r-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(a+n)/f,this._z=(s+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-r-d);this._w=(s-l)/f,this._x=(a+n)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-r-o);this._w=(n-a)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,s=e._z,n=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=r*h+n*o+a*l-s*c,this._y=a*h+n*c+s*o-r*l,this._z=s*h+n*l+r*c-a*o,this._w=n*h-r*o-a*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,a=e._y,s=e._z,n=e._w,o=this.dot(e);o<0&&(r=-r,a=-a,s=-s,n=-n,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+r*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+n*t,this._onChangeCallback()}else this._x=this._x*c+r*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+n*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,r=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6]*a,this.y=s[1]*t+s[4]*r+s[7]*a,this.z=s[2]*t+s[5]*r+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,s=e.elements,n=1/(s[3]*t+s[7]*r+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*r+s[8]*a+s[12])*n,this.y=(s[1]*t+s[5]*r+s[9]*a+s[13])*n,this.z=(s[2]*t+s[6]*r+s[10]*a+s[14])*n,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,s=e.x,n=e.y,o=e.z,c=e.w,l=2*(n*a-o*r),h=2*(o*t-s*a),d=2*(s*r-n*t);return this.x=t+c*l+n*d-o*h,this.y=r+c*h+o*l-s*d,this.z=a+c*d+s*h-n*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*a,this.y=s[1]*t+s[5]*r+s[9]*a,this.z=s[2]*t+s[6]*r+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ke(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,s=e.z,n=t.x,o=t.y,c=t.z;return this.x=a*c-s*o,this.y=s*n-r*c,this.z=r*o-a*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nn.copy(this).projectOnVector(e),this.sub(nn)}reflect(e){return this.sub(nn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ke(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nn=new I,Kl=new br;class Ue{constructor(e,t,r,a,s,n,o,c,l){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,s,n,o,c,l)}set(e,t,r,a,s,n,o,c,l){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=r,h[7]=n,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,s=this.elements,n=r[0],o=r[3],c=r[6],l=r[1],h=r[4],d=r[7],p=r[2],f=r[5],v=r[8],b=a[0],m=a[3],u=a[6],E=a[1],S=a[4],A=a[7],L=a[2],M=a[5],P=a[8];return s[0]=n*b+o*E+c*L,s[3]=n*m+o*S+c*M,s[6]=n*u+o*A+c*P,s[1]=l*b+h*E+d*L,s[4]=l*m+h*S+d*M,s[7]=l*u+h*A+d*P,s[2]=p*b+f*E+v*L,s[5]=p*m+f*S+v*M,s[8]=p*u+f*A+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],s=e[3],n=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*n*h-t*o*l-r*s*h+r*o*c+a*s*l-a*n*c}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],s=e[3],n=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*n-o*l,p=o*c-h*s,f=l*s-n*c,v=t*d+r*p+a*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=d*b,e[1]=(a*l-h*r)*b,e[2]=(o*r-a*n)*b,e[3]=p*b,e[4]=(h*t-a*c)*b,e[5]=(a*s-o*t)*b,e[6]=f*b,e[7]=(r*c-l*t)*b,e[8]=(n*t-r*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,s,n,o){const c=Math.cos(s),l=Math.sin(s);return this.set(r*c,r*l,-r*(c*n+l*o)+n+e,-a*l,a*c,-a*(-l*n+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(on.makeScale(e,t)),this}rotate(e){return this.premultiply(on.makeRotation(-e)),this}translate(e,t){return this.premultiply(on.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const on=new Ue,Zl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gp(){const i={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(a,s,n){return this.enabled===!1||s===n||!s||!n||(this.spaces[s].transfer===Je&&(a.r=Li(a.r),a.g=Li(a.g),a.b=Li(a.b)),this.spaces[s].primaries!==this.spaces[n].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Je&&(a.r=$r(a.r),a.g=$r(a.g),a.b=$r(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Zi?Ns:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,n){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Na("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Na("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[ra]:{primaries:e,whitePoint:r,transfer:Ns,toXYZ:Zl,fromXYZ:$l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:r,transfer:Je,toXYZ:Zl,fromXYZ:$l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const Xe=gp();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Rr;class vp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Rr===void 0&&(Rr=Os("canvas")),Rr.width=e.width,Rr.height=e.height;const a=Rr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Rr}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),s=a.data;for(let n=0;n<s.length;n++)s[n]=Li(s[n]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Li(t[r]/255)*255):t[r]=Li(t[r]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _p=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let n=0,o=a.length;n<o;n++)a[n].isDataTexture?s.push(ln(a[n].image)):s.push(ln(a[n]))}else s=ln(a);r.url=s}return t||(e.images[this.uuid]=r),r}}function ln(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let bp=0;const cn=new I;class Ut extends Sr{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,r=Ai,a=Ai,s=Jt,n=mr,o=oi,c=fi,l=Ut.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=oa(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=s,this.minFilter=n,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cn).x}get height(){return this.source.getSize(cn).y}get depth(){return this.source.getSize(cn).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case to:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case to:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=_h;Ut.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,r=0,a=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,s=this.w,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*a+n[12]*s,this.y=n[1]*t+n[5]*r+n[9]*a+n[13]*s,this.z=n[2]*t+n[6]*r+n[10]*a+n[14]*s,this.w=n[3]*t+n[7]*r+n[11]*a+n[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,s;const n=e.elements,o=n[0],c=n[4],l=n[8],h=n[1],d=n[5],p=n[9],f=n[2],v=n[6],b=n[10];if(Math.abs(c-h)<.01&&Math.abs(l-f)<.01&&Math.abs(p-v)<.01){if(Math.abs(c+h)<.1&&Math.abs(l+f)<.1&&Math.abs(p+v)<.1&&Math.abs(o+d+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const u=(o+1)/2,E=(d+1)/2,S=(b+1)/2,A=(c+h)/4,L=(l+f)/4,M=(p+v)/4;return u>E&&u>S?u<.01?(r=0,a=.707106781,s=.707106781):(r=Math.sqrt(u),a=A/r,s=L/r):E>S?E<.01?(r=.707106781,a=0,s=.707106781):(a=Math.sqrt(E),r=A/a,s=M/a):S<.01?(r=.707106781,a=.707106781,s=0):(s=Math.sqrt(S),r=L/s,a=M/s),this.set(r,a,s,t),this}let m=Math.sqrt((v-p)*(v-p)+(l-f)*(l-f)+(h-c)*(h-c));return Math.abs(m)<.001&&(m=1),this.x=(v-p)/m,this.y=(l-f)/m,this.z=(h-c)/m,this.w=Math.acos((o+d+b-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ke(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xp extends Sr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const a={width:e,height:t,depth:r.depth},s=new Ut(a);this.textures=[];const n=r.count;for(let o=0;o<n;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends xp{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ah extends Ut{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yp extends Ut{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let n=0,o=s.count;n<o;n++)e.isMesh===!0?e.getVertexPosition(n,ri):ri.fromBufferAttribute(s,n),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),as.copy(r.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}const a=e.children;for(let s=0,n=a.length;s<n;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),ss.subVectors(this.max,ga),Dr.subVectors(e.a,ga),Lr.subVectors(e.b,ga),Ur.subVectors(e.c,ga),Bi.subVectors(Lr,Dr),zi.subVectors(Ur,Lr),nr.subVectors(Dr,Ur);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-nr.z,nr.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,nr.z,0,-nr.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-nr.y,nr.x,0];return!hn(t,Dr,Lr,Ur,ss)||(t=[1,0,0,0,1,0,0,0,1],!hn(t,Dr,Lr,Ur,ss))?!1:(ns.crossVectors(Bi,zi),t=[ns.x,ns.y,ns.z],hn(t,Dr,Lr,Ur,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new I,new I,new I,new I,new I,new I,new I,new I],ri=new I,as=new Ga,Dr=new I,Lr=new I,Ur=new I,Bi=new I,zi=new I,nr=new I,ga=new I,ss=new I,ns=new I,or=new I;function hn(i,e,t,r,a){for(let s=0,n=i.length-3;s<=n;s+=3){or.fromArray(i,s);const o=a.x*Math.abs(or.x)+a.y*Math.abs(or.y)+a.z*Math.abs(or.z),c=e.dot(or),l=t.dot(or),h=r.dot(or);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const wp=new Ga,va=new I,un=new I;class qs{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):wp.setFromPoints(e).getCenter(r);let a=0;for(let s=0,n=e.length;s<n;s++)a=Math.max(a,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);const t=va.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(va,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(un.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(un)),this.expandByPoint(va.copy(e.center).sub(un))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const xi=new I,dn=new I,os=new I,Hi=new I,pn=new I,ls=new I,fn=new I;class $o{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){dn.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(dn);const s=e.distanceTo(t)*.5,n=-this.direction.dot(os),o=Hi.dot(this.direction),c=-Hi.dot(os),l=Hi.lengthSq(),h=Math.abs(1-n*n);let d,p,f,v;if(h>0)if(d=n*c-o,p=n*o-c,v=s*h,d>=0)if(p>=-v)if(p<=v){const b=1/h;d*=b,p*=b,f=d*(d+n*p+2*o)+p*(n*d+p+2*c)+l}else p=s,d=Math.max(0,-(n*p+o)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(n*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-v?(d=Math.max(0,-(-n*s+o)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=v?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(n*s+o)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=n>0?-s:s,d=Math.max(0,-(n*p+o)),f=-d*d+p*(p+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(dn).addScaledVector(os,p),f}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const r=xi.dot(this.direction),a=xi.dot(xi)-r*r,s=e.radius*e.radius;if(a>s)return null;const n=Math.sqrt(s-a),o=r-n,c=r+n;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,s,n,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(r=(e.min.x-p.x)*l,a=(e.max.x-p.x)*l):(r=(e.max.x-p.x)*l,a=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,n=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,n=(e.min.y-p.y)*h),r>n||s>a||((s>r||isNaN(r))&&(r=s),(n<a||isNaN(a))&&(a=n),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),r>c||o>a)||((o>r||r!==r)&&(r=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,r,a,s){pn.subVectors(t,e),ls.subVectors(r,e),fn.crossVectors(pn,ls);let n=this.direction.dot(fn),o;if(n>0){if(a)return null;o=1}else if(n<0)o=-1,n=-n;else return null;Hi.subVectors(this.origin,e);const c=o*this.direction.dot(ls.crossVectors(Hi,ls));if(c<0)return null;const l=o*this.direction.dot(pn.cross(Hi));if(l<0||c+l>n)return null;const h=-o*Hi.dot(fn);return h<0?null:this.at(h/n,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,r,a,s,n,o,c,l,h,d,p,f,v,b,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,s,n,o,c,l,h,d,p,f,v,b,m)}set(e,t,r,a,s,n,o,c,l,h,d,p,f,v,b,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=r,u[12]=a,u[1]=s,u[5]=n,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=v,u[11]=b,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),n=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*s,t[5]=r[5]*s,t[6]=r[6]*s,t[7]=0,t[8]=r[8]*n,t[9]=r[9]*n,t[10]=r[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,s=e.z,n=Math.cos(r),o=Math.sin(r),c=Math.cos(a),l=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=n*h,f=n*d,v=o*h,b=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+v*l,t[5]=p-b*l,t[9]=-o*c,t[2]=b-p*l,t[6]=v+f*l,t[10]=n*c}else if(e.order==="YXZ"){const p=c*h,f=c*d,v=l*h,b=l*d;t[0]=p+b*o,t[4]=v*o-f,t[8]=n*l,t[1]=n*d,t[5]=n*h,t[9]=-o,t[2]=f*o-v,t[6]=b+p*o,t[10]=n*c}else if(e.order==="ZXY"){const p=c*h,f=c*d,v=l*h,b=l*d;t[0]=p-b*o,t[4]=-n*d,t[8]=v+f*o,t[1]=f+v*o,t[5]=n*h,t[9]=b-p*o,t[2]=-n*l,t[6]=o,t[10]=n*c}else if(e.order==="ZYX"){const p=n*h,f=n*d,v=o*h,b=o*d;t[0]=c*h,t[4]=v*l-f,t[8]=p*l+b,t[1]=c*d,t[5]=b*l+p,t[9]=f*l-v,t[2]=-l,t[6]=o*c,t[10]=n*c}else if(e.order==="YZX"){const p=n*c,f=n*l,v=o*c,b=o*l;t[0]=c*h,t[4]=b-p*d,t[8]=v*d+f,t[1]=d,t[5]=n*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+v,t[10]=p-b*d}else if(e.order==="XZY"){const p=n*c,f=n*l,v=o*c,b=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+b,t[5]=n*h,t[9]=f*d-v,t[2]=v*d-f,t[6]=o*h,t[10]=b*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mp,e,Sp)}lookAt(e,t,r){const a=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Gi.crossVectors(r,Ht),Gi.lengthSq()===0&&(Math.abs(r.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Gi.crossVectors(r,Ht)),Gi.normalize(),cs.crossVectors(Ht,Gi),a[0]=Gi.x,a[4]=cs.x,a[8]=Ht.x,a[1]=Gi.y,a[5]=cs.y,a[9]=Ht.y,a[2]=Gi.z,a[6]=cs.z,a[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,s=this.elements,n=r[0],o=r[4],c=r[8],l=r[12],h=r[1],d=r[5],p=r[9],f=r[13],v=r[2],b=r[6],m=r[10],u=r[14],E=r[3],S=r[7],A=r[11],L=r[15],M=a[0],P=a[4],V=a[8],y=a[12],x=a[1],R=a[5],O=a[9],z=a[13],G=a[2],Z=a[6],Y=a[10],te=a[14],H=a[3],Q=a[7],le=a[11],Ie=a[15];return s[0]=n*M+o*x+c*G+l*H,s[4]=n*P+o*R+c*Z+l*Q,s[8]=n*V+o*O+c*Y+l*le,s[12]=n*y+o*z+c*te+l*Ie,s[1]=h*M+d*x+p*G+f*H,s[5]=h*P+d*R+p*Z+f*Q,s[9]=h*V+d*O+p*Y+f*le,s[13]=h*y+d*z+p*te+f*Ie,s[2]=v*M+b*x+m*G+u*H,s[6]=v*P+b*R+m*Z+u*Q,s[10]=v*V+b*O+m*Y+u*le,s[14]=v*y+b*z+m*te+u*Ie,s[3]=E*M+S*x+A*G+L*H,s[7]=E*P+S*R+A*Z+L*Q,s[11]=E*V+S*O+A*Y+L*le,s[15]=E*y+S*z+A*te+L*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],s=e[12],n=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],f=e[14],v=e[3],b=e[7],m=e[11],u=e[15];return v*(+s*c*d-a*l*d-s*o*p+r*l*p+a*o*f-r*c*f)+b*(+t*c*f-t*l*p+s*n*p-a*n*f+a*l*h-s*c*h)+m*(+t*l*d-t*o*f-s*n*d+r*n*f+s*o*h-r*l*h)+u*(-a*o*h-t*c*d+t*o*p+a*n*d-r*n*p+r*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],s=e[3],n=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],f=e[11],v=e[12],b=e[13],m=e[14],u=e[15],E=d*m*l-b*p*l+b*c*f-o*m*f-d*c*u+o*p*u,S=v*p*l-h*m*l-v*c*f+n*m*f+h*c*u-n*p*u,A=h*b*l-v*d*l+v*o*f-n*b*f-h*o*u+n*d*u,L=v*d*c-h*b*c-v*o*p+n*b*p+h*o*m-n*d*m,M=t*E+r*S+a*A+s*L;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/M;return e[0]=E*P,e[1]=(b*p*s-d*m*s-b*a*f+r*m*f+d*a*u-r*p*u)*P,e[2]=(o*m*s-b*c*s+b*a*l-r*m*l-o*a*u+r*c*u)*P,e[3]=(d*c*s-o*p*s-d*a*l+r*p*l+o*a*f-r*c*f)*P,e[4]=S*P,e[5]=(h*m*s-v*p*s+v*a*f-t*m*f-h*a*u+t*p*u)*P,e[6]=(v*c*s-n*m*s-v*a*l+t*m*l+n*a*u-t*c*u)*P,e[7]=(n*p*s-h*c*s+h*a*l-t*p*l-n*a*f+t*c*f)*P,e[8]=A*P,e[9]=(v*d*s-h*b*s-v*r*f+t*b*f+h*r*u-t*d*u)*P,e[10]=(n*b*s-v*o*s+v*r*l-t*b*l-n*r*u+t*o*u)*P,e[11]=(h*o*s-n*d*s-h*r*l+t*d*l+n*r*f-t*o*f)*P,e[12]=L*P,e[13]=(h*b*a-v*d*a+v*r*p-t*b*p-h*r*m+t*d*m)*P,e[14]=(v*o*a-n*b*a-v*r*c+t*b*c+n*r*m-t*o*m)*P,e[15]=(n*d*a-h*o*a+h*r*c-t*d*c-n*r*p+t*o*p)*P,this}scale(e){const t=this.elements,r=e.x,a=e.y,s=e.z;return t[0]*=r,t[4]*=a,t[8]*=s,t[1]*=r,t[5]*=a,t[9]*=s,t[2]*=r,t[6]*=a,t[10]*=s,t[3]*=r,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),s=1-r,n=e.x,o=e.y,c=e.z,l=s*n,h=s*o;return this.set(l*n+r,l*o-a*c,l*c+a*o,0,l*o+a*c,h*o+r,h*c-a*n,0,l*c-a*o,h*c+a*n,s*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,s,n){return this.set(1,r,s,0,e,1,n,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,s=t._x,n=t._y,o=t._z,c=t._w,l=s+s,h=n+n,d=o+o,p=s*l,f=s*h,v=s*d,b=n*h,m=n*d,u=o*d,E=c*l,S=c*h,A=c*d,L=r.x,M=r.y,P=r.z;return a[0]=(1-(b+u))*L,a[1]=(f+A)*L,a[2]=(v-S)*L,a[3]=0,a[4]=(f-A)*M,a[5]=(1-(p+u))*M,a[6]=(m+E)*M,a[7]=0,a[8]=(v+S)*P,a[9]=(m-E)*P,a[10]=(1-(p+b))*P,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let s=Nr.set(a[0],a[1],a[2]).length();const n=Nr.set(a[4],a[5],a[6]).length(),o=Nr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const c=1/s,l=1/n,h=1/o;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=l,ai.elements[5]*=l,ai.elements[6]*=l,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),r.x=s,r.y=n,r.z=o,this}makePerspective(e,t,r,a,s,n,o=ui,c=!1){const l=this.elements,h=2*s/(t-e),d=2*s/(r-a),p=(t+e)/(t-e),f=(r+a)/(r-a);let v,b;if(c)v=s/(n-s),b=n*s/(n-s);else if(o===ui)v=-(n+s)/(n-s),b=-2*n*s/(n-s);else if(o===Is)v=-n/(n-s),b=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,a,s,n,o=ui,c=!1){const l=this.elements,h=2/(t-e),d=2/(r-a),p=-(t+e)/(t-e),f=-(r+a)/(r-a);let v,b;if(c)v=1/(n-s),b=n/(n-s);else if(o===ui)v=-2/(n-s),b=-(n+s)/(n-s);else if(o===Is)v=-1/(n-s),b=-s/(n-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=v,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Nr=new I,ai=new mt,Mp=new I(0,0,0),Sp=new I(1,1,1),Gi=new I,cs=new I,Ht=new I,Jl=new mt,Ql=new br;class Ni{constructor(e=0,t=0,r=0,a=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,s=a[0],n=a[4],o=a[8],c=a[1],l=a[5],h=a[9],d=a[2],p=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-n,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-n,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ke(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ep=0;const ec=new I,Ir=new br,yi=new mt,hs=new I,_a=new I,Tp=new I,Cp=new br,tc=new I(1,0,0),ic=new I(0,1,0),rc=new I(0,0,1),ac={type:"added"},Ap={type:"removed"},Or={type:"childadded",child:null},mn={type:"childremoved",child:null};class At extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new I,t=new Ni,r=new br,a=new I(1,1,1);function s(){r.setFromEuler(t,!1)}function n(){t.setFromQuaternion(r,void 0,!1)}t._onChange(s),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ue}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(tc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return ec.copy(e).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?hs.copy(e):hs.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(_a,hs,this.up):yi.lookAt(hs,_a,this.up),this.quaternion.setFromRotationMatrix(yi),a&&(yi.extractRotation(a.matrixWorld),Ir.setFromRotationMatrix(yi),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ac),Or.child=e,this.dispatchEvent(Or),Or.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ap),mn.child=e,this.dispatchEvent(mn),mn.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ac),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,Tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(s(e.animations,c))}}if(t){const o=n(e.geometries),c=n(e.materials),l=n(e.textures),h=n(e.images),d=n(e.shapes),p=n(e.skeletons),f=n(e.animations),v=n(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),f.length>0&&(r.animations=f),v.length>0&&(r.nodes=v)}return r.object=a,r;function n(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new I,wi=new I,gn=new I,Mi=new I,Fr=new I,kr=new I,sc=new I,vn=new I,_n=new I,bn=new I,xn=new ft,yn=new ft,wn=new ft;class ni{constructor(e=new I,t=new I,r=new I){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),si.subVectors(e,t),a.cross(si);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,r,a,s){si.subVectors(a,t),wi.subVectors(r,t),gn.subVectors(e,t);const n=si.dot(si),o=si.dot(wi),c=si.dot(gn),l=wi.dot(wi),h=wi.dot(gn),d=n*l-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(l*c-o*h)*p,v=(n*h-o*c)*p;return s.set(1-f-v,v,f)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,r,a,s,n,o,c){return this.getBarycoord(e,t,r,a,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mi.x),c.addScaledVector(n,Mi.y),c.addScaledVector(o,Mi.z),c)}static getInterpolatedAttribute(e,t,r,a,s,n){return xn.setScalar(0),yn.setScalar(0),wn.setScalar(0),xn.fromBufferAttribute(e,t),yn.fromBufferAttribute(e,r),wn.fromBufferAttribute(e,a),n.setScalar(0),n.addScaledVector(xn,s.x),n.addScaledVector(yn,s.y),n.addScaledVector(wn,s.z),n}static isFrontFacing(e,t,r,a){return si.subVectors(r,t),wi.subVectors(e,t),si.cross(wi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),si.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,r,a,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,s=this.c;let n,o;Fr.subVectors(a,r),kr.subVectors(s,r),vn.subVectors(e,r);const c=Fr.dot(vn),l=kr.dot(vn);if(c<=0&&l<=0)return t.copy(r);_n.subVectors(e,a);const h=Fr.dot(_n),d=kr.dot(_n);if(h>=0&&d<=h)return t.copy(a);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return n=c/(c-h),t.copy(r).addScaledVector(Fr,n);bn.subVectors(e,s);const f=Fr.dot(bn),v=kr.dot(bn);if(v>=0&&f<=v)return t.copy(s);const b=f*l-c*v;if(b<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(r).addScaledVector(kr,o);const m=h*v-f*d;if(m<=0&&d-h>=0&&f-v>=0)return sc.subVectors(s,a),o=(d-h)/(d-h+(f-v)),t.copy(a).addScaledVector(sc,o);const u=1/(m+b+p);return n=b*u,o=p*u,t.copy(r).addScaledVector(Fr,n).addScaledVector(kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},us={h:0,s:0,l:0};function Mn(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=r,Xe.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Xe.workingColorSpace){if(e=Ko(e,1),t=ke(t,0,1),r=ke(r,0,1),t===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+t):r+t-r*t,n=2*r-s;this.r=Mn(n,s,e+1/3),this.g=Mn(n,s,e),this.b=Mn(n,s,e-1/3)}return Xe.colorSpaceToWorking(this,a),this}setStyle(e,t=Wt){function r(s){s!==void 0&&parseFloat(s)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const n=a[1],o=a[2];switch(n){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],n=s.length;if(n===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(s,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const r=Rh[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Xe.workingToColorSpace(Rt.copy(this),e),Math.round(ke(Rt.r*255,0,255))*65536+Math.round(ke(Rt.g*255,0,255))*256+Math.round(ke(Rt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Rt.copy(this),t);const r=Rt.r,a=Rt.g,s=Rt.b,n=Math.max(r,a,s),o=Math.min(r,a,s);let c,l;const h=(o+n)/2;if(o===n)c=0,l=0;else{const d=n-o;switch(l=h<=.5?d/(n+o):d/(2-n-o),n){case r:c=(a-s)/d+(a<s?6:0);break;case a:c=(s-r)/d+2;break;case s:c=(r-a)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Wt){Xe.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,r=Rt.g,a=Rt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(us);const r=Aa(Wi.h,us.h,t),a=Aa(Wi.s,us.s,t),s=Aa(Wi.l,us.l,t);return this.setHSL(r,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*r+s[6]*a,this.g=s[1]*t+s[4]*r+s[7]*a,this.b=s[2]*t+s[5]*r+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new He;He.NAMES=Rh;let Pp=0;class Wa extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=Zr,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wn,this.blendDst=jn,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wn&&(r.blendSrc=this.blendSrc),this.blendDst!==jn&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(s){const n=[];for(const o in s){const c=s[o];delete c.metadata,n.push(c)}return n}if(t){const s=a(e.textures),n=a(e.images);s.length>0&&(r.textures=s),n.length>0&&(r.images=n)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let s=0;s!==a;++s)r[s]=t[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jo extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,ds=new Ne;let Rp=0;class pi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Wl,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=jr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Dt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),a=Dt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),a=Dt(a,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}}class Dh extends pi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Lh extends pi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class li extends pi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Dp=0;const Kt=new mt,Sn=new At,Vr=new I,Gt=new Ga,ba=new Ga,St=new I;class vi extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?Lh:Dh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new Ue().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,r){return Kt.makeTranslation(e,t,r),this.applyMatrix4(Kt),this}scale(e,t,r){return Kt.makeScale(e,t,r),this.applyMatrix4(Kt),this}lookAt(e){return Sn.lookAt(e),Sn.updateMatrix(),this.applyMatrix4(Sn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,s=e.length;a<s;a++){const n=e[a];r.push(n.x,n.y,n.z||0)}this.setAttribute("position",new li(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const r=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,n=t.length;s<n;s++){const o=t[s];ba.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Gt.min,ba.min),Gt.expandByPoint(St),St.addVectors(Gt.max,ba.max),Gt.expandByPoint(St)):(Gt.expandByPoint(ba.min),Gt.expandByPoint(ba.max))}Gt.getCenter(r);let a=0;for(let s=0,n=e.count;s<n;s++)St.fromBufferAttribute(e,s),a=Math.max(a,r.distanceToSquared(St));if(t)for(let s=0,n=t.length;s<n;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)St.fromBufferAttribute(o,l),c&&(Vr.fromBufferAttribute(e,l),St.add(Vr)),a=Math.max(a,r.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*r.count),4));const n=this.getAttribute("tangent"),o=[],c=[];for(let V=0;V<r.count;V++)o[V]=new I,c[V]=new I;const l=new I,h=new I,d=new I,p=new Ne,f=new Ne,v=new Ne,b=new I,m=new I;function u(V,y,x){l.fromBufferAttribute(r,V),h.fromBufferAttribute(r,y),d.fromBufferAttribute(r,x),p.fromBufferAttribute(s,V),f.fromBufferAttribute(s,y),v.fromBufferAttribute(s,x),h.sub(l),d.sub(l),f.sub(p),v.sub(p);const R=1/(f.x*v.y-v.x*f.y);isFinite(R)&&(b.copy(h).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(R),o[V].add(b),o[y].add(b),o[x].add(b),c[V].add(m),c[y].add(m),c[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let V=0,y=E.length;V<y;++V){const x=E[V],R=x.start,O=x.count;for(let z=R,G=R+O;z<G;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new I,A=new I,L=new I,M=new I;function P(V){L.fromBufferAttribute(a,V),M.copy(L);const y=o[V];S.copy(y),S.sub(L.multiplyScalar(L.dot(y))).normalize(),A.crossVectors(M,y);const x=A.dot(c[V])<0?-1:1;n.setXYZW(V,S.x,S.y,S.z,x)}for(let V=0,y=E.length;V<y;++V){const x=E[V],R=x.start,O=x.count;for(let z=R,G=R+O;z<G;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,f=r.count;p<f;p++)r.setXYZ(p,0,0,0);const a=new I,s=new I,n=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let p=0,f=e.count;p<f;p+=3){const v=e.getX(p+0),b=e.getX(p+1),m=e.getX(p+2);a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,b),n.fromBufferAttribute(t,m),h.subVectors(n,s),d.subVectors(a,s),h.cross(d),o.fromBufferAttribute(r,v),c.fromBufferAttribute(r,b),l.fromBufferAttribute(r,m),o.add(h),c.add(h),l.add(h),r.setXYZ(v,o.x,o.y,o.z),r.setXYZ(b,c.x,c.y,c.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)a.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),n.fromBufferAttribute(t,p+2),h.subVectors(n,s),d.subVectors(a,s),h.cross(d),r.setXYZ(p+0,h.x,h.y,h.z),r.setXYZ(p+1,h.x,h.y,h.z),r.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h);let f=0,v=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let u=0;u<h;u++)p[v++]=l[f++]}return new pi(p,h,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,r=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,r);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const p=l[h],f=e(p,r);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let o=0,c=n.length;o<c;o++){const l=n[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const l=r[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(a[c]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const l in a){const h=a[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let l=0,h=n.length;l<h;l++){const d=n[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new mt,lr=new $o,ps=new qs,oc=new I,fs=new I,ms=new I,gs=new I,En=new I,vs=new I,lc=new I,_s=new I;class Ii extends At{constructor(e=new vi,t=new Jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const n=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=a}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,s=r.morphAttributes.position,n=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){vs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(En.fromBufferAttribute(d,e),n?vs.addScaledVector(En,h):vs.addScaledVector(En.sub(t),h))}t.add(vs)}return t}raycast(e,t){const r=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ps.copy(r.boundingSphere),ps.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(ps.containsPoint(lr.origin)===!1&&(lr.intersectSphere(ps,oc)===null||lr.origin.distanceToSquared(oc)>(e.far-e.near)**2))&&(nc.copy(s).invert(),lr.copy(e.ray).applyMatrix4(nc),!(r.boundingBox!==null&&lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,r){let a;const s=this.geometry,n=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(n))for(let v=0,b=p.length;v<b;v++){const m=p[v],u=n[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let A=E,L=S;A<L;A+=3){const M=o.getX(A),P=o.getX(A+1),V=o.getX(A+2);a=bs(this,u,e,r,l,h,d,M,P,V),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=v,u=b;m<u;m+=3){const E=o.getX(m),S=o.getX(m+1),A=o.getX(m+2);a=bs(this,n,e,r,l,h,d,E,S,A),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(n))for(let v=0,b=p.length;v<b;v++){const m=p[v],u=n[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let A=E,L=S;A<L;A+=3){const M=A,P=A+1,V=A+2;a=bs(this,u,e,r,l,h,d,M,P,V),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=v,u=b;m<u;m+=3){const E=m,S=m+1,A=m+2;a=bs(this,n,e,r,l,h,d,E,S,A),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Lp(i,e,t,r,a,s,n,o){let c;if(e.side===Vt?c=r.intersectTriangle(n,s,a,!0,o):c=r.intersectTriangle(a,s,n,e.side===tr,o),c===null)return null;_s.copy(o),_s.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_s);return l<t.near||l>t.far?null:{distance:l,point:_s.clone(),object:i}}function bs(i,e,t,r,a,s,n,o,c,l){i.getVertexPosition(o,fs),i.getVertexPosition(c,ms),i.getVertexPosition(l,gs);const h=Lp(i,e,t,r,fs,ms,gs,lc);if(h){const d=new I;ni.getBarycoord(lc,fs,ms,gs,d),a&&(h.uv=ni.getInterpolatedAttribute(a,o,c,l,d,new Ne)),s&&(h.uv1=ni.getInterpolatedAttribute(s,o,c,l,d,new Ne)),n&&(h.normal=ni.getInterpolatedAttribute(n,o,c,l,d,new I),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new I,materialIndex:0};ni.getNormal(fs,ms,gs,p.normal),h.face=p,h.barycoord=d}return h}class la extends vi{constructor(e=1,t=1,r=1,a=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:s,depthSegments:n};const o=this;a=Math.floor(a),s=Math.floor(s),n=Math.floor(n);const c=[],l=[],h=[],d=[];let p=0,f=0;v("z","y","x",-1,-1,r,t,e,n,s,0),v("z","y","x",1,-1,r,t,-e,n,s,1),v("x","z","y",1,1,e,r,t,a,n,2),v("x","z","y",1,-1,e,r,-t,a,n,3),v("x","y","z",1,-1,e,t,r,a,s,4),v("x","y","z",-1,-1,e,t,-r,a,s,5),this.setIndex(c),this.setAttribute("position",new li(l,3)),this.setAttribute("normal",new li(h,3)),this.setAttribute("uv",new li(d,2));function v(b,m,u,E,S,A,L,M,P,V,y){const x=A/P,R=L/V,O=A/2,z=L/2,G=M/2,Z=P+1,Y=V+1;let te=0,H=0;const Q=new I;for(let le=0;le<Y;le++){const Ie=le*R-z;for(let Ve=0;Ve<Z;Ve++){const Ze=Ve*x-O;Q[b]=Ze*E,Q[m]=Ie*S,Q[u]=G,l.push(Q.x,Q.y,Q.z),Q[b]=0,Q[m]=0,Q[u]=M>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(Ve/P),d.push(1-le/V),te+=1}}for(let le=0;le<V;le++)for(let Ie=0;Ie<P;Ie++){const Ve=p+Ie+Z*le,Ze=p+Ie+Z*(le+1),et=p+(Ie+1)+Z*(le+1),tt=p+(Ie+1)+Z*le;c.push(Ve,Ze,tt),c.push(Ze,et,tt),H+=6}o.addGroup(f,H,y),f+=H,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function aa(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const r=aa(i[t]);for(const a in r)e[a]=r[a]}return e}function Up(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Np={clone:aa,merge:Lt};var Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=Up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Nh extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new I,cc=new Ne,hc=new Ne;class $t extends Nh{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,cc,hc),t.subVectors(hc,cc)}setViewOffset(e,t,r,a,s,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,s=-.5*a;const n=this.view;if(this.view!==null&&this.view.enabled){const c=n.fullWidth,l=n.fullHeight;s+=n.offsetX*a/c,t-=n.offsetY*r/l,a*=n.width/c,r*=n.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Br=-90,zr=1;class Fp extends At{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $t(Br,zr,e,t);a.layers=this.layers,this.add(a);const s=new $t(Br,zr,e,t);s.layers=this.layers,this.add(s);const n=new $t(Br,zr,e,t);n.layers=this.layers,this.add(n);const o=new $t(Br,zr,e,t);o.layers=this.layers,this.add(o);const c=new $t(Br,zr,e,t);c.layers=this.layers,this.add(c);const l=new $t(Br,zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,s,n,o,c]=t;for(const l of t)this.remove(l);if(e===ui)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Is)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,n,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,s),e.setRenderTarget(r,1,a),e.render(t,n),e.setRenderTarget(r,2,a),e.render(t,o),e.setRenderTarget(r,3,a),e.render(t,c),e.setRenderTarget(r,4,a),e.render(t,l),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,a),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=v,r.texture.needsPMREMUpdate=!0}}class Ih extends Ut{constructor(e=[],t=ta,r,a,s,n,o,c,l,h){super(e,t,r,a,s,n,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kp extends xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ih(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new la(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:aa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vt,blending:Di});s.uniforms.tEquirect.value=t;const n=new Ii(a,s),o=t.minFilter;return t.minFilter===mr&&(t.minFilter=Jt),new Fp(1,10,this).update(e,n),t.minFilter=o,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const s=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,r,a);e.setRenderTarget(s)}}class Yr extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class Tn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,s=null,n=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,r),u=this._getHandJoint(l,b);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,v=.005;l.inputState.pinching&&p>f+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Yr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Bp extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zp extends Ut{constructor(e=null,t=1,r=1,a,s,n,o,c,l=jt,h=jt,d,p){super(null,n,o,c,l,h,a,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cn=new I,Hp=new I,Gp=new Ue;class Ki{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Cn.subVectors(r,t).cross(Hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Cn),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Gp.getNormalMatrix(e),a=this.coplanarPoint(Cn).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new qs,Wp=new Ne(.5,.5),xs=new I;class Qo{constructor(e=new Ki,t=new Ki,r=new Ki,a=new Ki,s=new Ki,n=new Ki){this.planes=[e,t,r,a,s,n]}set(e,t,r,a,s,n){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(a),o[4].copy(s),o[5].copy(n),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ui,r=!1){const a=this.planes,s=e.elements,n=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],p=s[6],f=s[7],v=s[8],b=s[9],m=s[10],u=s[11],E=s[12],S=s[13],A=s[14],L=s[15];if(a[0].setComponents(l-n,f-h,u-v,L-E).normalize(),a[1].setComponents(l+n,f+h,u+v,L+E).normalize(),a[2].setComponents(l+o,f+d,u+b,L+S).normalize(),a[3].setComponents(l-o,f-d,u-b,L-S).normalize(),r)a[4].setComponents(c,p,m,A).normalize(),a[5].setComponents(l-c,f-p,u-m,L-A).normalize();else if(a[4].setComponents(l-c,f-p,u-m,L-A).normalize(),t===ui)a[5].setComponents(l+c,f+p,u+m,L+A).normalize();else if(t===Is)a[5].setComponents(c,p,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){cr.center.set(0,0,0);const t=Wp.distanceTo(e.center);return cr.radius=.7071067811865476+t,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(xs.x=a.normal.x>0?e.max.x:e.min.x,xs.y=a.normal.y>0?e.max.y:e.min.y,xs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Oh extends Wa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fs=new I,ks=new I,uc=new mt,xa=new $o,ys=new qs,An=new I,dc=new I;class jp extends At{constructor(e=new vi,t=new Oh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,s=t.count;a<s;a++)Fs.fromBufferAttribute(t,a-1),ks.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Fs.distanceTo(ks);e.setAttribute("lineDistance",new li(r,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,n=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ys.copy(r.boundingSphere),ys.applyMatrix4(a),ys.radius+=s,e.ray.intersectsSphere(ys)===!1)return;uc.copy(a).invert(),xa.copy(e.ray).applyMatrix4(uc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=r.index,d=r.attributes.position;if(h!==null){const p=Math.max(0,n.start),f=Math.min(h.count,n.start+n.count);for(let v=p,b=f-1;v<b;v+=l){const m=h.getX(v),u=h.getX(v+1),E=ws(this,e,xa,c,m,u,v);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(f-1),b=h.getX(p),m=ws(this,e,xa,c,v,b,f-1);m&&t.push(m)}}else{const p=Math.max(0,n.start),f=Math.min(d.count,n.start+n.count);for(let v=p,b=f-1;v<b;v+=l){const m=ws(this,e,xa,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=ws(this,e,xa,c,f-1,p,f-1);v&&t.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const n=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=a}}}}}function ws(i,e,t,r,a,s,n){const o=i.geometry.attributes.position;if(Fs.fromBufferAttribute(o,a),ks.fromBufferAttribute(o,s),t.distanceSqToSegment(Fs,ks,An,dc)>r)return;An.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(An);if(!(c<e.near||c>e.far))return{distance:c,point:dc.clone().applyMatrix4(i.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:i}}const pc=new I,fc=new I;class Xp extends jp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,s=t.count;a<s;a+=2)pc.fromBufferAttribute(t,a),fc.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+pc.distanceTo(fc);e.setAttribute("lineDistance",new li(r,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fh extends Ut{constructor(e,t,r=_r,a,s,n,o=jt,c=jt,l,h=La,d=1){if(h!==La&&h!==Ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,a,s,n,o,c,h,r,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class kh extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ys extends vi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const s=e/2,n=t/2,o=Math.floor(r),c=Math.floor(a),l=o+1,h=c+1,d=e/o,p=t/c,f=[],v=[],b=[],m=[];for(let u=0;u<h;u++){const E=u*p-n;for(let S=0;S<l;S++){const A=S*d-s;v.push(A,-E,0),b.push(0,0,1),m.push(S/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<o;E++){const S=E+l*u,A=E+l*(u+1),L=E+1+l*(u+1),M=E+1+l*u;f.push(S,A,M),f.push(A,L,M)}this.setIndex(f),this.setAttribute("position",new li(v,3)),this.setAttribute("normal",new li(b,3)),this.setAttribute("uv",new li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}class qp extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yp extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vh extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Pn=new mt,mc=new I,gc=new I;class Kp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qo,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(mc),gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gc),t.updateMatrixWorld(),Pn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pn,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Pn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bh extends Nh{constructor(e=-1,t=1,r=1,a=-1,s=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=s,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,s,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=r-e,n=r+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,n=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,n,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zp extends Kp{constructor(){super(new Bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zh extends Vh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Zp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $p extends Vh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jp extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class vc{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ef extends Xp{constructor(e=10,t=10,r=4473924,a=8947848){r=new He(r),a=new He(a);const s=t/2,n=e/t,o=e/2,c=[],l=[];for(let p=0,f=0,v=-o;p<=t;p++,v+=n){c.push(-o,0,v,o,0,v),c.push(v,0,-o,v,0,o);const b=p===s?r:a;b.toArray(l,f),f+=3,b.toArray(l,f),f+=3,b.toArray(l,f),f+=3,b.toArray(l,f),f+=3}const h=new vi;h.setAttribute("position",new li(c,3)),h.setAttribute("color",new li(l,3));const d=new Oh({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class tf extends Sr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _c(i,e,t,r){const a=rf(r);switch(t){case Mh:return i*e;case Eh:return i*e/a.components*a.byteLength;case jo:return i*e/a.components*a.byteLength;case Xo:return i*e*2/a.components*a.byteLength;case qo:return i*e*2/a.components*a.byteLength;case Sh:return i*e*3/a.components*a.byteLength;case oi:return i*e*4/a.components*a.byteLength;case Yo:return i*e*4/a.components*a.byteLength;case Cs:case As:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:case no:return Math.max(i,16)*Math.max(e,8)/4;case ro:case so:return Math.max(i,8)*Math.max(e,8)/2;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eo:case To:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ao:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ro:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rf(i){switch(i){case fi:case bh:return{byteLength:1,components:1};case Ra:case xh:case na:return{byteLength:2,components:1};case Go:case Wo:return{byteLength:2,components:4};case _r:case Ho:case Pi:return{byteLength:4,components:1};case yh:case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);function Hh(){let i=null,e=!1,t=null,r=null;function a(s,n){t(s,n),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function af(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,v)=>f.start-v.start);let p=0;for(let f=1;f<d.length;f++){const v=d[p],b=d[f];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++p,d[p]=b)}d.length=p+1;for(let f=0,v=d.length;f<v;f++){const b=d[f];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function n(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,o,c),l.version=o.version}}return{get:a,remove:s,update:n}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_f=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Af=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Og=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:sf,alphahash_pars_fragment:nf,alphamap_fragment:of,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:pf,batching_vertex:ff,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:vf,iridescence_fragment:_f,bumpmap_pars_fragment:bf,clipping_planes_fragment:xf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:Ef,color_pars_vertex:Tf,color_vertex:Cf,common:Af,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Df,displacementmap_vertex:Lf,emissivemap_fragment:Uf,emissivemap_pars_fragment:Nf,colorspace_fragment:If,colorspace_pars_fragment:Of,envmap_fragment:Ff,envmap_common_pars_fragment:kf,envmap_pars_fragment:Vf,envmap_pars_vertex:Bf,envmap_physical_pars_fragment:$f,envmap_vertex:zf,fog_vertex:Hf,fog_pars_vertex:Gf,fog_fragment:Wf,fog_pars_fragment:jf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:Kf,lights_pars_begin:Zf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:im,lights_physical_pars_fragment:rm,lights_fragment_begin:am,lights_fragment_maps:sm,lights_fragment_end:nm,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:dm,map_particle_fragment:pm,map_particle_pars_fragment:fm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:vm,morphcolor_vertex:_m,morphnormal_vertex:bm,morphtarget_pars_vertex:xm,morphtarget_vertex:ym,normal_fragment_begin:wm,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:Em,normal_vertex:Tm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Dm,opaque_fragment:Lm,packing:Um,premultiplied_alpha_fragment:Nm,project_vertex:Im,dithering_fragment:Om,dithering_pars_fragment:Fm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:zm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Gm,skinbase_vertex:Wm,skinning_pars_vertex:jm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:Km,tonemapping_fragment:Zm,tonemapping_pars_fragment:$m,transmission_fragment:Jm,transmission_pars_fragment:Qm,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ig,worldpos_vertex:rg,background_vert:ag,background_frag:sg,backgroundCube_vert:ng,backgroundCube_frag:og,cube_vert:lg,cube_frag:cg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:dg,distanceRGBA_frag:pg,equirect_vert:fg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:vg,meshbasic_vert:_g,meshbasic_frag:bg,meshlambert_vert:xg,meshlambert_frag:yg,meshmatcap_vert:wg,meshmatcap_frag:Mg,meshnormal_vert:Sg,meshnormal_frag:Eg,meshphong_vert:Tg,meshphong_frag:Cg,meshphysical_vert:Ag,meshphysical_frag:Pg,meshtoon_vert:Rg,meshtoon_frag:Dg,points_vert:Lg,points_frag:Ug,shadow_vert:Ng,shadow_frag:Ig,sprite_vert:Og,sprite_frag:Fg},se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},hi={basic:{uniforms:Lt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Lt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Lt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Lt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Lt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Lt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Lt([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Lt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Lt([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Lt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Lt([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Lt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Lt([se.lights,se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};hi.physical={uniforms:Lt([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ms={r:0,b:0,g:0},hr=new Ni,kg=new mt;function Vg(i,e,t,r,a,s,n){const o=new He(0);let c=s===!0?0:1,l,h,d=null,p=0,f=null;function v(S){let A=S.isScene===!0?S.background:null;return A&&A.isTexture&&(A=(S.backgroundBlurriness>0?t:e).get(A)),A}function b(S){let A=!1;const L=v(S);L===null?u(o,c):L&&L.isColor&&(u(L,1),A=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?r.buffers.color.setClear(0,0,0,1,n):M==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,n),(i.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,A){const L=v(A);L&&(L.isCubeTexture||L.mapping===Xs)?(h===void 0&&(h=new Ii(new la(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:aa(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),hr.copy(A.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(hr)),h.material.toneMapped=Xe.getTransfer(L.colorSpace)!==Je,(d!==L||p!==L.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=L,p=L.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Ii(new Ys(2,2),new Oi({name:"BackgroundMaterial",uniforms:aa(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(L.colorSpace)!==Je,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||p!==L.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=L,p=L.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function u(S,A){S.getRGB(Ms,Uh(i)),r.buffers.color.setClear(Ms.r,Ms.g,Ms.b,A,n)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),c=A,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,u(o,c)},render:b,addToRenderList:m,dispose:E}}function Bg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=p(null);let s=a,n=!1;function o(x,R,O,z,G){let Z=!1;const Y=d(z,O,R);s!==Y&&(s=Y,l(s.object)),Z=f(x,z,O,G),Z&&v(x,z,O,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Z||n)&&(n=!1,A(x,R,O,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,R,O){const z=O.wireframe===!0;let G=r[x.id];G===void 0&&(G={},r[x.id]=G);let Z=G[R.id];Z===void 0&&(Z={},G[R.id]=Z);let Y=Z[z];return Y===void 0&&(Y=p(c()),Z[z]=Y),Y}function p(x){const R=[],O=[],z=[];for(let G=0;G<t;G++)R[G]=0,O[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:z,object:x,attributes:{},index:null}}function f(x,R,O,z){const G=s.attributes,Z=R.attributes;let Y=0;const te=O.getAttributes();for(const H in te)if(te[H].location>=0){const Q=G[H];let le=Z[H];if(le===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),Q===void 0||Q.attribute!==le||le&&Q.data!==le.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function v(x,R,O,z){const G={},Z=R.attributes;let Y=0;const te=O.getAttributes();for(const H in te)if(te[H].location>=0){let Q=Z[H];Q===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const le={};le.attribute=Q,Q&&Q.data&&(le.data=Q.data),G[H]=le,Y++}s.attributes=G,s.attributesNum=Y,s.index=z}function b(){const x=s.newAttributes;for(let R=0,O=x.length;R<O;R++)x[R]=0}function m(x){u(x,0)}function u(x,R){const O=s.newAttributes,z=s.enabledAttributes,G=s.attributeDivisors;O[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),G[x]!==R&&(i.vertexAttribDivisor(x,R),G[x]=R)}function E(){const x=s.newAttributes,R=s.enabledAttributes;for(let O=0,z=R.length;O<z;O++)R[O]!==x[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function S(x,R,O,z,G,Z,Y){Y===!0?i.vertexAttribIPointer(x,R,O,G,Z):i.vertexAttribPointer(x,R,O,z,G,Z)}function A(x,R,O,z){b();const G=z.attributes,Z=O.getAttributes(),Y=R.defaultAttributeValues;for(const te in Z){const H=Z[te];if(H.location>=0){let Q=G[te];if(Q===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const le=Q.normalized,Ie=Q.itemSize,Ve=e.get(Q);if(Ve===void 0)continue;const Ze=Ve.buffer,et=Ve.type,tt=Ve.bytesPerElement,j=et===i.INT||et===i.UNSIGNED_INT||Q.gpuType===Ho;if(Q.isInterleavedBufferAttribute){const K=Q.data,fe=K.stride,De=Q.offset;if(K.isInstancedInterleavedBuffer){for(let _e=0;_e<H.locationSize;_e++)u(H.location+_e,K.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<H.locationSize;_e++)m(H.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let _e=0;_e<H.locationSize;_e++)S(H.location+_e,Ie/H.locationSize,et,le,fe*tt,(De+Ie/H.locationSize*_e)*tt,j)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)u(H.location+K,Q.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let K=0;K<H.locationSize;K++)S(H.location+K,Ie/H.locationSize,et,le,Ie*tt,Ie/H.locationSize*K*tt,j)}}else if(Y!==void 0){const le=Y[te];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(H.location,le);break;case 3:i.vertexAttrib3fv(H.location,le);break;case 4:i.vertexAttrib4fv(H.location,le);break;default:i.vertexAttrib1fv(H.location,le)}}}}E()}function L(){V();for(const x in r){const R=r[x];for(const O in R){const z=R[O];for(const G in z)h(z[G].object),delete z[G];delete R[O]}delete r[x]}}function M(x){if(r[x.id]===void 0)return;const R=r[x.id];for(const O in R){const z=R[O];for(const G in z)h(z[G].object),delete z[G];delete R[O]}delete r[x.id]}function P(x){for(const R in r){const O=r[R];if(O[x.id]===void 0)continue;const z=O[x.id];for(const G in z)h(z[G].object),delete z[G];delete O[x.id]}}function V(){y(),n=!0,s!==a&&(s=a,l(s.object))}function y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:V,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:M,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:m,disableUnusedAttributes:E}}function zg(i,e,t){let r;function a(l){r=l}function s(l,h){i.drawArrays(r,l,h),t.update(h,r,1)}function n(l,h,d){d!==0&&(i.drawArraysInstanced(r,l,h,d),t.update(h,r,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,d);let p=0;for(let f=0;f<d;f++)p+=h[f];t.update(p,r,1)}function c(l,h,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<l.length;v++)n(l[v],h[v],p[v]);else{f.multiDrawArraysInstancedWEBGL(r,l,0,h,0,p,0,d);let v=0;for(let b=0;b<d;b++)v+=h[b]*p[b];t.update(v,r,1)}}this.setMode=a,this.render=s,this.renderInstances=n,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Hg(i,e,t,r){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function n(P){return!(P!==oi&&r.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const V=P===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==fi&&r.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pi&&!V)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ae("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:n,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:L,maxSamples:M}}function Gg(i){const e=this;let t=null,r=0,a=!1,s=!1;const n=new Ki,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||r!==0||a;return a=p,r=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){const v=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!a||v===null||v.length===0||s&&!m)s?h(null):l();else{const E=s?0:r,S=E*4;let A=u.clippingState||null;c.value=A,A=h(v,p,S,f);for(let L=0;L!==S;++L)A[L]=t[L];u.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(d,p,f,v){const b=d!==null?d.length:0;let m=null;if(b!==0){if(m=c.value,v!==!0||m===null){const u=f+b*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,A=f;S!==b;++S,A+=4)n.copy(d[S]).applyMatrix4(E,o),n.normal.toArray(m,A),m[A+3]=n.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Wg(i){let e=new WeakMap;function t(n,o){return o===Qn?n.mapping=ta:o===eo&&(n.mapping=ia),n}function r(n){if(n&&n.isTexture){const o=n.mapping;if(o===Qn||o===eo)if(e.has(n)){const c=e.get(n).texture;return t(c,n.mapping)}else{const c=n.image;if(c&&c.height>0){const l=new kp(c.height);return l.fromEquirectangularTexture(i,n),e.set(n,l),n.addEventListener("dispose",a),t(l.texture,n.mapping)}else return null}}return n}function a(n){const o=n.target;o.removeEventListener("dispose",a);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}const $i=4,bc=[.125,.215,.35,.446,.526,.582],fr=20,jg=256,ya=new Bh,xc=new He;let Rn=null,Dn=0,Ln=0,Un=!1;const Xg=new I;class yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,s={}){const{size:n=256,position:o=Xg}=s;Rn=this._renderer.getRenderTarget(),Dn=this._renderer.getActiveCubeFace(),Ln=this._renderer.getActiveMipmapLevel(),Un=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rn,Dn,Ln),this._renderer.xr.enabled=Un,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ta||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rn=this._renderer.getRenderTarget(),Dn=this._renderer.getActiveCubeFace(),Ln=this._renderer.getActiveMipmapLevel(),Un=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:na,format:oi,colorSpace:ra,depthBuffer:!1},a=wc(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(e,t,r);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qg(s)),this._blurMaterial=Kg(s,e,t),this._ggxMaterial=Yg(s,e,t)}return a}_compileMaterial(e){const t=new Ii(new vi,e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,r,a,s){const n=new $t(90,1,t,r),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(xc),l.toneMapping=Qi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(a),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new la,new Jo({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const p=this._backgroundBox,f=p.material;let v=!1;const b=e.background;b?b.isColor&&(f.color.copy(b),e.background=null,v=!0):(f.color.copy(xc),v=!0);for(let m=0;m<6;m++){const u=m%3;u===0?(n.up.set(0,o[m],0),n.position.set(s.x,s.y,s.z),n.lookAt(s.x+c[m],s.y,s.z)):u===1?(n.up.set(0,0,o[m]),n.position.set(s.x,s.y,s.z),n.lookAt(s.x,s.y+c[m],s.z)):(n.up.set(0,o[m],0),n.position.set(s.x,s.y,s.z),n.lookAt(s.x,s.y,s.z+c[m]));const E=this._cubeSize;Hr(a,u*E,m>2?E:0,E,E),l.setRenderTarget(a),v&&l.render(p,n),l.render(e,n)}l.toneMapping=d,l.autoClear=h,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===ta||e.mapping===ia;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const s=a?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Hr(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(n,ya)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,s=this._pingPongRenderTarget,n=this._ggxMaterial,o=this._lodMeshes[r];o.material=n;const c=n.uniforms,l=r/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),p=.05+l*.95,f=d*p,{_lodMax:v}=this,b=this._sizeLods[r],m=3*b*(r>v-$i?r-v+$i:0),u=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=v-t,Hr(s,m,u,3*b,2*b),a.setRenderTarget(s),a.render(o,ya),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-r,Hr(e,m,u,3*b,2*b),a.setRenderTarget(e),a.render(o,ya)}_blur(e,t,r,a,s){const n=this._pingPongRenderTarget;this._halfBlur(e,n,t,r,a,"latitudinal",s),this._halfBlur(n,e,r,r,a,"longitudinal",s)}_halfBlur(e,t,r,a,s,n,o){const c=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[a];d.material=l;const p=l.uniforms,f=this._sizeLods[r]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fr-1),b=s/v,m=isFinite(s)?1+Math.floor(h*b):fr;m>fr&&Ae(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const u=[];let E=0;for(let P=0;P<fr;++P){const V=P/b,y=Math.exp(-V*V/2);u.push(y),P===0?E+=y:P<m&&(E+=2*y)}for(let P=0;P<u.length;P++)u[P]=u[P]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=n==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=v,p.mipInt.value=S-r;const A=this._sizeLods[a],L=3*A*(a>S-$i?a-S+$i:0),M=4*(this._cubeSize-A);Hr(t,L,M,3*A,2*A),c.setRenderTarget(t),c.render(d,ya)}}function qg(i){const e=[],t=[],r=[];let a=i;const s=i-$i+1+bc.length;for(let n=0;n<s;n++){const o=Math.pow(2,a);e.push(o);let c=1/o;n>i-$i?c=bc[n-i+$i-1]:n===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,v=6,b=3,m=2,u=1,E=new Float32Array(b*v*f),S=new Float32Array(m*v*f),A=new Float32Array(u*v*f);for(let M=0;M<f;M++){const P=M%3*2/3-1,V=M>2?0:-1,y=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];E.set(y,b*v*M),S.set(p,m*v*M);const x=[M,M,M,M,M,M];A.set(x,u*v*M)}const L=new vi;L.setAttribute("position",new pi(E,b)),L.setAttribute("uv",new pi(S,m)),L.setAttribute("faceIndex",new pi(A,u)),r.push(new Ii(L,null)),a>$i&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function wc(i,e,t){const r=new xr(i,e,t);return r.texture.mapping=Xs,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hr(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function Yg(i,e,t){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ks(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Kg(i,e,t){const r=new Float32Array(fr),a=new I(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Mc(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Sc(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zg(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const c=o.mapping,l=c===Qn||c===eo,h=c===ta||c===ia;if(l||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new yc(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&a(f)?(t===null&&(t=new yc(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function a(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function n(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:n}}function $g(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=i.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Na("WebGLRenderer: "+r+" extension not supported."),a}}}function Jg(i,e,t,r){const a={},s=new WeakMap;function n(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",n),delete a[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return a[p.id]===!0||(p.addEventListener("dispose",n),a[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const f in p)e.update(p[f],i.ARRAY_BUFFER)}function l(d){const p=[],f=d.index,v=d.attributes.position;let b=0;if(f!==null){const E=f.array;b=f.version;for(let S=0,A=E.length;S<A;S+=3){const L=E[S+0],M=E[S+1],P=E[S+2];p.push(L,M,M,P,P,L)}}else if(v!==void 0){const E=v.array;b=v.version;for(let S=0,A=E.length/3-1;S<A;S+=3){const L=S+0,M=S+1,P=S+2;p.push(L,M,M,P,P,L)}}else return;const m=new(Ch(p)?Lh:Dh)(p,1);m.version=b;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Qg(i,e,t){let r;function a(p){r=p}let s,n;function o(p){s=p.type,n=p.bytesPerElement}function c(p,f){i.drawElements(r,f,s,p*n),t.update(f,r,1)}function l(p,f,v){v!==0&&(i.drawElementsInstanced(r,f,s,p*n,v),t.update(f,r,v))}function h(p,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,f,0,s,p,0,v);let b=0;for(let m=0;m<v;m++)b+=f[m];t.update(b,r,1)}function d(p,f,v,b){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/n,f[u],b[u]);else{m.multiDrawElementsInstancedWEBGL(r,f,0,s,p,0,b,0,v);let u=0;for(let E=0;E<v;E++)u+=f[E]*b[E];t.update(u,r,1)}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ev(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,n,o){switch(t.calls++,n){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:gt("WebGLInfo: Unknown draw mode:",n);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function tv(i,e,t){const r=new WeakMap,a=new ft;function s(n,o,c){const l=n.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=r.get(o);if(p===void 0||p.count!==d){let f=function(){V.dispose(),r.delete(o),o.removeEventListener("dispose",f)};p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let A=0;v===!0&&(A=1),b===!0&&(A=2),m===!0&&(A=3);let L=o.attributes.position.count*A,M=1;L>e.maxTextureSize&&(M=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const P=new Float32Array(L*M*4*d),V=new Ah(P,L,M,d);V.type=Pi,V.needsUpdate=!0;const y=A*4;for(let x=0;x<d;x++){const R=u[x],O=E[x],z=S[x],G=L*M*4*x;for(let Z=0;Z<R.count;Z++){const Y=Z*y;v===!0&&(a.fromBufferAttribute(R,Z),P[G+Y+0]=a.x,P[G+Y+1]=a.y,P[G+Y+2]=a.z,P[G+Y+3]=0),b===!0&&(a.fromBufferAttribute(O,Z),P[G+Y+4]=a.x,P[G+Y+5]=a.y,P[G+Y+6]=a.z,P[G+Y+7]=0),m===!0&&(a.fromBufferAttribute(z,Z),P[G+Y+8]=a.x,P[G+Y+9]=a.y,P[G+Y+10]=a.z,P[G+Y+11]=z.itemSize===4?a.w:1)}}p={count:d,texture:V,size:new Ne(L,M)},r.set(o,p),o.addEventListener("dispose",f)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",n.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];const v=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function iv(i,e,t,r){let a=new WeakMap;function s(c){const l=r.render.frame,h=c.geometry,d=e.get(c,h);if(a.get(d)!==l&&(e.update(d),a.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;a.get(p)!==l&&(p.update(),a.set(p,l))}return d}function n(){a=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:n}}const Gh=new Ut,Ec=new Fh(1,1),Wh=new Ah,jh=new yp,Xh=new Ih,Tc=[],Cc=[],Ac=new Float32Array(16),Pc=new Float32Array(9),Rc=new Float32Array(4);function ca(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let s=Tc[a];if(s===void 0&&(s=new Float32Array(a),Tc[a]=s),e!==0){r.toArray(s,0);for(let n=1,o=0;n!==e;++n)o+=t,i[n].toArray(s,o)}return s}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Zs(i,e){let t=Cc[e];t===void 0&&(t=new Int32Array(e),Cc[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function rv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function ov(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(yt(t,r))return;Rc.set(r),i.uniformMatrix2fv(this.addr,!1,Rc),wt(t,r)}}function lv(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(yt(t,r))return;Pc.set(r),i.uniformMatrix3fv(this.addr,!1,Pc),wt(t,r)}}function cv(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(yt(t,r))return;Ac.set(r),i.uniformMatrix4fv(this.addr,!1,Ac),wt(t,r)}}function hv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function _v(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(Ec.compareFunction=Th,s=Ec):s=Gh,t.setTexture2D(e||s,a)}function bv(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||jh,a)}function xv(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Xh,a)}function yv(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Wh,a)}function wv(i){switch(i){case 5126:return rv;case 35664:return av;case 35665:return sv;case 35666:return nv;case 35674:return ov;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return fv;case 36294:return mv;case 36295:return gv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return yv}}function Mv(i,e){i.uniform1fv(this.addr,e)}function Sv(i,e){const t=ca(e,this.size,2);i.uniform2fv(this.addr,t)}function Ev(i,e){const t=ca(e,this.size,3);i.uniform3fv(this.addr,t)}function Tv(i,e){const t=ca(e,this.size,4);i.uniform4fv(this.addr,t)}function Cv(i,e){const t=ca(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Av(i,e){const t=ca(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pv(i,e){const t=ca(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rv(i,e){i.uniform1iv(this.addr,e)}function Dv(i,e){i.uniform2iv(this.addr,e)}function Lv(i,e){i.uniform3iv(this.addr,e)}function Uv(i,e){i.uniform4iv(this.addr,e)}function Nv(i,e){i.uniform1uiv(this.addr,e)}function Iv(i,e){i.uniform2uiv(this.addr,e)}function Ov(i,e){i.uniform3uiv(this.addr,e)}function Fv(i,e){i.uniform4uiv(this.addr,e)}function kv(i,e,t){const r=this.cache,a=e.length,s=Zs(t,a);yt(r,s)||(i.uniform1iv(this.addr,s),wt(r,s));for(let n=0;n!==a;++n)t.setTexture2D(e[n]||Gh,s[n])}function Vv(i,e,t){const r=this.cache,a=e.length,s=Zs(t,a);yt(r,s)||(i.uniform1iv(this.addr,s),wt(r,s));for(let n=0;n!==a;++n)t.setTexture3D(e[n]||jh,s[n])}function Bv(i,e,t){const r=this.cache,a=e.length,s=Zs(t,a);yt(r,s)||(i.uniform1iv(this.addr,s),wt(r,s));for(let n=0;n!==a;++n)t.setTextureCube(e[n]||Xh,s[n])}function zv(i,e,t){const r=this.cache,a=e.length,s=Zs(t,a);yt(r,s)||(i.uniform1iv(this.addr,s),wt(r,s));for(let n=0;n!==a;++n)t.setTexture2DArray(e[n]||Wh,s[n])}function Hv(i){switch(i){case 5126:return Mv;case 35664:return Sv;case 35665:return Ev;case 35666:return Tv;case 35674:return Cv;case 35675:return Av;case 35676:return Pv;case 5124:case 35670:return Rv;case 35667:case 35671:return Dv;case 35668:case 35672:return Lv;case 35669:case 35673:return Uv;case 5125:return Nv;case 36294:return Iv;case 36295:return Ov;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}class Gv{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=wv(t.type)}}class Wv{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hv(t.type)}}class jv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let s=0,n=a.length;s!==n;++s){const o=a[s];o.setValue(e,t[o.id],r)}}}const Nn=/(\w+)(\])?(\[|\.)?/g;function Dc(i,e){i.seq.push(e),i.map[e.id]=e}function Xv(i,e,t){const r=i.name,a=r.length;for(Nn.lastIndex=0;;){const s=Nn.exec(r),n=Nn.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&n+2===a){Dc(t,l===void 0?new Gv(o,i,e):new Wv(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new jv(o),Dc(t,h)),t=h}}}class Ds{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const s=e.getActiveUniform(t,a),n=e.getUniformLocation(t,s.name);Xv(s,n,this)}}setValue(e,t,r,a){const s=this.map[t];s!==void 0&&s.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let s=0,n=t.length;s!==n;++s){const o=t[s],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,s=e.length;a!==s;++a){const n=e[a];n.id in t&&r.push(n)}return r}}function Lc(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const qv=37297;let Yv=0;function Kv(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let n=a;n<s;n++){const o=n+1;r.push(`${o===e?">":" "} ${o}: ${t[n]}`)}return r.join(`
`)}const Uc=new Ue;function Zv(i){Xe._getMatrix(Uc,Xe.workingColorSpace,i);const e=`mat3( ${Uc.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Ns:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Nc(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const n=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Kv(i.getShaderSource(e),n)}else return a}function $v(i,e){const t=Zv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jv(i,e){let t;switch(e){case Ud:t="Linear";break;case Nd:t="Reinhard";break;case Id:t="Cineon";break;case Od:t="ACESFilmic";break;case kd:t="AgX";break;case Vd:t="Neutral";break;case Fd:t="Custom";break;default:Ae("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ss=new I;function Qv(){Xe.getLuminanceCoefficients(Ss);const i=Ss.x.toFixed(4),e=Ss.y.toFixed(4),t=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function t_(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function i_(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const s=i.getActiveAttrib(e,a),n=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[n]={type:s.type,location:i.getAttribLocation(e,n),locationSize:o}}return t}function Ta(i){return i!==""}function Ic(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(i){return i.replace(r_,s_)}const a_=new Map;function s_(i,e){let t=Oe[e];if(t===void 0){const r=a_.get(e);if(r!==void 0)t=Oe[r],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lo(t)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(i){return i.replace(n_,o_)}function o_(i,e,t,r){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function kc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function c_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ta:case ia:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ia:e="ENVMAP_MODE_REFRACTION";break}return e}function u_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vh:e="ENVMAP_BLENDING_MULTIPLY";break;case Dd:e="ENVMAP_BLENDING_MIX";break;case Ld:e="ENVMAP_BLENDING_ADD";break}return e}function d_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function p_(i,e,t,r){const a=i.getContext(),s=t.defines;let n=t.vertexShader,o=t.fragmentShader;const c=l_(t),l=c_(t),h=h_(t),d=u_(t),p=d_(t),f=e_(t),v=t_(s),b=a.createProgram();let m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ta).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ta).join(`
`),u.length>0&&(u+=`
`)):(m=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),u=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Qi?Jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,$v("linearToOutputTexel",t.outputColorSpace),Qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),n=Lo(n),n=Ic(n,t),n=Oc(n,t),o=Lo(o),o=Ic(o,t),o=Oc(o,t),n=Fc(n),o=Fc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=E+m+n,A=E+u+o,L=Lc(a,a.VERTEX_SHADER,S),M=Lc(a,a.FRAGMENT_SHADER,A);a.attachShader(b,L),a.attachShader(b,M),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function P(R){if(i.debug.checkShaderErrors){const O=a.getProgramInfoLog(b)||"",z=a.getShaderInfoLog(L)||"",G=a.getShaderInfoLog(M)||"",Z=O.trim(),Y=z.trim(),te=G.trim();let H=!0,Q=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,b,L,M);else{const le=Nc(a,L,"vertex"),Ie=Nc(a,M,"fragment");gt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Z+`
`+le+`
`+Ie)}else Z!==""?Ae("WebGLProgram: Program Info Log:",Z):(Y===""||te==="")&&(Q=!1);Q&&(R.diagnostics={runnable:H,programLog:Z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:te,prefix:u}})}a.deleteShader(L),a.deleteShader(M),V=new Ds(a,b),y=i_(a,b)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=a.getProgramParameter(b,qv)),x},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=M,this}let f_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(r),n=this._getShaderCacheForMaterial(e);return n.has(a)===!1&&(n.add(a),a.usedTimes++),n.has(s)===!1&&(n.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new g_(e),t.set(e,r)),r}}class g_{constructor(e){this.id=f_++,this.code=e,this.usedTimes=0}}function v_(i,e,t,r,a,s,n){const o=new Ph,c=new m_,l=new Set,h=[],d=a.logarithmicDepthBuffer,p=a.vertexTextures;let f=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,x,R,O,z){const G=O.fog,Z=z.geometry,Y=y.isMeshStandardMaterial?O.environment:null,te=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),H=te&&te.mapping===Xs?te.image.height:null,Q=v[y.type];y.precision!==null&&(f=a.getMaxPrecision(y.precision),f!==y.precision&&Ae("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const le=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ie=le!==void 0?le.length:0;let Ve=0;Z.morphAttributes.position!==void 0&&(Ve=1),Z.morphAttributes.normal!==void 0&&(Ve=2),Z.morphAttributes.color!==void 0&&(Ve=3);let Ze,et,tt,j;if(Q){const $e=hi[Q];Ze=$e.vertexShader,et=$e.fragmentShader}else Ze=y.vertexShader,et=y.fragmentShader,c.update(y),tt=c.getVertexShaderID(y),j=c.getFragmentShaderID(y);const K=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),De=z.isInstancedMesh===!0,_e=z.isBatchedMesh===!0,ye=!!y.map,it=!!y.matcap,Ye=!!te,Be=!!y.aoMap,C=!!y.lightMap,Et=!!y.bumpMap,We=!!y.normalMap,rt=!!y.displacementMap,ge=!!y.emissiveMap,lt=!!y.metalnessMap,be=!!y.roughnessMap,Re=y.anisotropy>0,w=y.clearcoat>0,g=y.dispersion>0,N=y.iridescence>0,W=y.sheen>0,X=y.transmission>0,B=Re&&!!y.anisotropyMap,xe=w&&!!y.clearcoatMap,ne=w&&!!y.clearcoatNormalMap,Se=w&&!!y.clearcoatRoughnessMap,ue=N&&!!y.iridescenceMap,$=N&&!!y.iridescenceThicknessMap,ie=W&&!!y.sheenColorMap,Le=W&&!!y.sheenRoughnessMap,we=!!y.specularMap,ce=!!y.specularColorMap,Pe=!!y.specularIntensityMap,T=X&&!!y.transmissionMap,oe=X&&!!y.thicknessMap,re=!!y.gradientMap,ae=!!y.alphaMap,J=y.alphaTest>0,q=!!y.alphaHash,me=!!y.extensions;let Me=Qi;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Me=i.toneMapping);const Mt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:et,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:_e,batchingColor:_e&&z._colorsTexture!==null,instancing:De,instancingColor:De&&z.instanceColor!==null,instancingMorph:De&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ra,alphaToCoverage:!!y.alphaToCoverage,map:ye,matcap:it,envMap:Ye,envMapMode:Ye&&te.mapping,envMapCubeUVHeight:H,aoMap:Be,lightMap:C,bumpMap:Et,normalMap:We,displacementMap:p&&rt,emissiveMap:ge,normalMapObjectSpace:We&&y.normalMapType===Wd,normalMapTangentSpace:We&&y.normalMapType===Gd,metalnessMap:lt,roughnessMap:be,anisotropy:Re,anisotropyMap:B,clearcoat:w,clearcoatMap:xe,clearcoatNormalMap:ne,clearcoatRoughnessMap:Se,dispersion:g,iridescence:N,iridescenceMap:ue,iridescenceThicknessMap:$,sheen:W,sheenColorMap:ie,sheenRoughnessMap:Le,specularMap:we,specularColorMap:ce,specularIntensityMap:Pe,transmission:X,transmissionMap:T,thicknessMap:oe,gradientMap:re,opaque:y.transparent===!1&&y.blending===Zr&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:J,alphaHash:q,combine:y.combine,mapUv:ye&&b(y.map.channel),aoMapUv:Be&&b(y.aoMap.channel),lightMapUv:C&&b(y.lightMap.channel),bumpMapUv:Et&&b(y.bumpMap.channel),normalMapUv:We&&b(y.normalMap.channel),displacementMapUv:rt&&b(y.displacementMap.channel),emissiveMapUv:ge&&b(y.emissiveMap.channel),metalnessMapUv:lt&&b(y.metalnessMap.channel),roughnessMapUv:be&&b(y.roughnessMap.channel),anisotropyMapUv:B&&b(y.anisotropyMap.channel),clearcoatMapUv:xe&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:$&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&b(y.sheenRoughnessMap.channel),specularMapUv:we&&b(y.specularMap.channel),specularColorMapUv:ce&&b(y.specularColorMap.channel),specularIntensityMapUv:Pe&&b(y.specularIntensityMap.channel),transmissionMapUv:T&&b(y.transmissionMap.channel),thicknessMapUv:oe&&b(y.thicknessMap.channel),alphaMapUv:ae&&b(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(We||Re),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(ye||ae),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ve,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:ye&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===Je,decodeVideoTextureEmissive:ge&&y.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(y.emissiveMap.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ci,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:me&&y.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&y.extensions.multiDraw===!0||_e)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function u(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)x.push(R),x.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(E(x,y),S(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function A(y){const x=v[y.type];let R;if(x){const O=hi[x];R=Np.clone(O.uniforms)}else R=y.uniforms;return R}function L(y,x){let R;for(let O=0,z=h.length;O<z;O++){const G=h[O];if(G.cacheKey===x){R=G,++R.usedTimes;break}}return R===void 0&&(R=new p_(i,x,y,s),h.push(R)),R}function M(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function P(y){c.remove(y)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:A,acquireProgram:L,releaseProgram:M,releaseShaderCache:P,programs:h,dispose:V}}function __(){let i=new WeakMap;function e(n){return i.has(n)}function t(n){let o=i.get(n);return o===void 0&&(o={},i.set(n,o)),o}function r(n){i.delete(n)}function a(n,o,c){i.get(n)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:s}}function b_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bc(){const i=[];let e=0;const t=[],r=[],a=[];function s(){e=0,t.length=0,r.length=0,a.length=0}function n(d,p,f,v,b,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:v,renderOrder:d.renderOrder,z:b,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=b,u.group=m),e++,u}function o(d,p,f,v,b,m){const u=n(d,p,f,v,b,m);f.transmission>0?r.push(u):f.transparent===!0?a.push(u):t.push(u)}function c(d,p,f,v,b,m){const u=n(d,p,f,v,b,m);f.transmission>0?r.unshift(u):f.transparent===!0?a.unshift(u):t.unshift(u)}function l(d,p){t.length>1&&t.sort(d||b_),r.length>1&&r.sort(p||Vc),a.length>1&&a.sort(p||Vc)}function h(){for(let d=e,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:r,transparent:a,init:s,push:o,unshift:c,finish:h,sort:l}}function x_(){let i=new WeakMap;function e(r,a){const s=i.get(r);let n;return s===void 0?(n=new Bc,i.set(r,[n])):a>=s.length?(n=new Bc,s.push(n)):n=s[a],n}function t(){i=new WeakMap}return{get:e,dispose:t}}function y_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new He};break;case"SpotLight":t={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function w_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let M_=0;function S_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function E_(i){const e=new y_,t=w_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new I);const a=new I,s=new mt,n=new mt;function o(l){let h=0,d=0,p=0;for(let y=0;y<9;y++)r.probe[y].set(0,0,0);let f=0,v=0,b=0,m=0,u=0,E=0,S=0,A=0,L=0,M=0,P=0;l.sort(S_);for(let y=0,x=l.length;y<x;y++){const R=l[y],O=R.color,z=R.intensity,G=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*z,d+=O.g*z,p+=O.b*z;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(R.sh.coefficients[Y],z);P++}else if(R.isDirectionalLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const te=R.shadow,H=t.get(R);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,r.directionalShadow[f]=H,r.directionalShadowMap[f]=Z,r.directionalShadowMatrix[f]=R.shadow.matrix,E++}r.directional[f]=Y,f++}else if(R.isSpotLight){const Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(O).multiplyScalar(z),Y.distance=G,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,r.spot[b]=Y;const te=R.shadow;if(R.map&&(r.spotLightMap[L]=R.map,L++,te.updateMatrices(R),R.castShadow&&M++),r.spotLightMatrix[b]=te.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,r.spotShadow[b]=H,r.spotShadowMap[b]=Z,A++}b++}else if(R.isRectAreaLight){const Y=e.get(R);Y.color.copy(O).multiplyScalar(z),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),r.rectArea[m]=Y,m++}else if(R.isPointLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){const te=R.shadow,H=t.get(R);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,H.shadowCameraNear=te.camera.near,H.shadowCameraFar=te.camera.far,r.pointShadow[v]=H,r.pointShadowMap[v]=Z,r.pointShadowMatrix[v]=R.shadow.matrix,S++}r.point[v]=Y,v++}else if(R.isHemisphereLight){const Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(z),Y.groundColor.copy(R.groundColor).multiplyScalar(z),r.hemi[u]=Y,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=p;const V=r.hash;(V.directionalLength!==f||V.pointLength!==v||V.spotLength!==b||V.rectAreaLength!==m||V.hemiLength!==u||V.numDirectionalShadows!==E||V.numPointShadows!==S||V.numSpotShadows!==A||V.numSpotMaps!==L||V.numLightProbes!==P)&&(r.directional.length=f,r.spot.length=b,r.rectArea.length=m,r.point.length=v,r.hemi.length=u,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=A+L-M,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=M,r.numLightProbes=P,V.directionalLength=f,V.pointLength=v,V.spotLength=b,V.rectAreaLength=m,V.hemiLength=u,V.numDirectionalShadows=E,V.numPointShadows=S,V.numSpotShadows=A,V.numSpotMaps=L,V.numLightProbes=P,r.version=M_++)}function c(l,h){let d=0,p=0,f=0,v=0,b=0;const m=h.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){const S=l[u];if(S.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(m),d++}else if(S.isSpotLight){const A=r.spot[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),n.identity(),s.copy(S.matrixWorld),s.premultiply(m),n.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(n),A.halfHeight.applyMatrix4(n),v++}else if(S.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const A=r.hemi[b];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:r}}function zc(i){const e=new E_(i),t=[],r=[];function a(h){l.camera=h,t.length=0,r.length=0}function s(h){t.push(h)}function n(h){r.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:n}}function T_(i){let e=new WeakMap;function t(a,s=0){const n=e.get(a);let o;return n===void 0?(o=new zc(i),e.set(a,[o])):s>=n.length?(o=new zc(i),n.push(o)):o=n[s],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P_(i,e,t){let r=new Qo;const a=new Ne,s=new Ne,n=new ft,o=new qp({depthPacking:Hd}),c=new Yp,l={},h=t.maxTextureSize,d={[tr]:Vt,[Vt]:tr,[Ci]:Ci},p=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:C_,fragmentShader:A_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const v=new vi;v.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ii(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let u=this.type;this.render=function(M,P,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Di),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=u!==Ti&&this.type===Ti,G=u===Ti&&this.type!==Ti;for(let Z=0,Y=M.length;Z<Y;Z++){const te=M[Z],H=te.shadow;if(H===void 0){Ae("WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const Q=H.getFrameExtents();if(a.multiply(Q),s.copy(H.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/Q.x),a.x=s.x*Q.x,H.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/Q.y),a.y=s.y*Q.y,H.mapSize.y=s.y)),H.map===null||z===!0||G===!0){const Ie=this.type!==Ti?{minFilter:jt,magFilter:jt}:{};H.map!==null&&H.map.dispose(),H.map=new xr(a.x,a.y,Ie),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const le=H.getViewportCount();for(let Ie=0;Ie<le;Ie++){const Ve=H.getViewport(Ie);n.set(s.x*Ve.x,s.y*Ve.y,s.x*Ve.z,s.y*Ve.w),O.viewport(n),H.updateMatrices(te,Ie),r=H.getFrustum(),A(P,V,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===Ti&&E(H,V),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,R)};function E(M,P){const V=e.update(b);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new xr(a.x,a.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(P,null,V,p,b,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(P,null,V,f,b,null)}function S(M,P,V,y){let x=null;const R=V.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)x=R;else if(x=V.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=x.uuid,z=P.uuid;let G=l[O];G===void 0&&(G={},l[O]=G);let Z=G[z];Z===void 0&&(Z=x.clone(),G[z]=Z,P.addEventListener("dispose",L)),x=Z}if(x.visible=P.visible,x.wireframe=P.wireframe,y===Ti?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:d[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,V.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=V}return x}function A(M,P,V,y,x){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Ti)&&(!M.frustumCulled||r.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld);const O=e.update(M),z=M.material;if(Array.isArray(z)){const G=O.groups;for(let Z=0,Y=G.length;Z<Y;Z++){const te=G[Z],H=z[te.materialIndex];if(H&&H.visible){const Q=S(M,H,y,x);M.onBeforeShadow(i,M,P,V,O,Q,te),i.renderBufferDirect(V,null,O,Q,M,te),M.onAfterShadow(i,M,P,V,O,Q,te)}}}else if(z.visible){const G=S(M,z,y,x);M.onBeforeShadow(i,M,P,V,O,G,null),i.renderBufferDirect(V,null,O,G,M,null),M.onAfterShadow(i,M,P,V,O,G,null)}}const R=M.children;for(let O=0,z=R.length;O<z;O++)A(R[O],P,V,y,x)}function L(M){M.target.removeEventListener("dispose",L);for(const P in l){const V=l[P],y=M.target.uuid;y in V&&(V[y].dispose(),delete V[y])}}}const R_={[Xn]:qn,[Yn]:$n,[Kn]:Jn,[ea]:Zn,[qn]:Xn,[$n]:Yn,[Jn]:Kn,[Zn]:ea};function D_(i,e){function t(){let T=!1;const oe=new ft;let re=null;const ae=new ft(0,0,0,0);return{setMask:function(J){re!==J&&!T&&(i.colorMask(J,J,J,J),re=J)},setLocked:function(J){T=J},setClear:function(J,q,me,Me,Mt){Mt===!0&&(J*=Me,q*=Me,me*=Me),oe.set(J,q,me,Me),ae.equals(oe)===!1&&(i.clearColor(J,q,me,Me),ae.copy(oe))},reset:function(){T=!1,re=null,ae.set(-1,0,0,0)}}}function r(){let T=!1,oe=!1,re=null,ae=null,J=null;return{setReversed:function(q){if(oe!==q){const me=e.get("EXT_clip_control");q?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),oe=q;const Me=J;J=null,this.setClear(Me)}},getReversed:function(){return oe},setTest:function(q){q?K(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(q){re!==q&&!T&&(i.depthMask(q),re=q)},setFunc:function(q){if(oe&&(q=R_[q]),ae!==q){switch(q){case Xn:i.depthFunc(i.NEVER);break;case qn:i.depthFunc(i.ALWAYS);break;case Yn:i.depthFunc(i.LESS);break;case ea:i.depthFunc(i.LEQUAL);break;case Kn:i.depthFunc(i.EQUAL);break;case Zn:i.depthFunc(i.GEQUAL);break;case $n:i.depthFunc(i.GREATER);break;case Jn:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=q}},setLocked:function(q){T=q},setClear:function(q){J!==q&&(oe&&(q=1-q),i.clearDepth(q),J=q)},reset:function(){T=!1,re=null,ae=null,J=null,oe=!1}}}function a(){let T=!1,oe=null,re=null,ae=null,J=null,q=null,me=null,Me=null,Mt=null;return{setTest:function($e){T||($e?K(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function($e){oe!==$e&&!T&&(i.stencilMask($e),oe=$e)},setFunc:function($e,ci,ei){(re!==$e||ae!==ci||J!==ei)&&(i.stencilFunc($e,ci,ei),re=$e,ae=ci,J=ei)},setOp:function($e,ci,ei){(q!==$e||me!==ci||Me!==ei)&&(i.stencilOp($e,ci,ei),q=$e,me=ci,Me=ei)},setLocked:function($e){T=$e},setClear:function($e){Mt!==$e&&(i.clearStencil($e),Mt=$e)},reset:function(){T=!1,oe=null,re=null,ae=null,J=null,q=null,me=null,Me=null,Mt=null}}}const s=new t,n=new r,o=new a,c=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,f=[],v=null,b=!1,m=null,u=null,E=null,S=null,A=null,L=null,M=null,P=new He(0,0,0),V=0,y=!1,x=null,R=null,O=null,z=null,G=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,te=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=te>=2);let Q=null,le={};const Ie=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),Ze=new ft().fromArray(Ie),et=new ft().fromArray(Ve);function tt(T,oe,re,ae){const J=new Uint8Array(4),q=i.createTexture();i.bindTexture(T,q),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<re;me++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(oe+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return q}const j={};j[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),n.setClear(1),o.setClear(0),K(i.DEPTH_TEST),n.setFunc(ea),Et(!1),We(Vl),K(i.CULL_FACE),Be(Di);function K(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function fe(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function De(T,oe){return d[T]!==oe?(i.bindFramebuffer(T,oe),d[T]=oe,T===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),T===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function _e(T,oe){let re=f,ae=!1;if(T){re=p.get(oe),re===void 0&&(re=[],p.set(oe,re));const J=T.textures;if(re.length!==J.length||re[0]!==i.COLOR_ATTACHMENT0){for(let q=0,me=J.length;q<me;q++)re[q]=i.COLOR_ATTACHMENT0+q;re.length=J.length,ae=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,ae=!0);ae&&i.drawBuffers(re)}function ye(T){return v!==T?(i.useProgram(T),v=T,!0):!1}const it={[pr]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[md]:i.FUNC_REVERSE_SUBTRACT};it[gd]=i.MIN,it[vd]=i.MAX;const Ye={[_d]:i.ZERO,[bd]:i.ONE,[xd]:i.SRC_COLOR,[Wn]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[wd]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[jn]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[Md]:i.ONE_MINUS_DST_ALPHA,[Cd]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(T,oe,re,ae,J,q,me,Me,Mt,$e){if(T===Di){b===!0&&(fe(i.BLEND),b=!1);return}if(b===!1&&(K(i.BLEND),b=!0),T!==pd){if(T!==m||$e!==y){if((u!==pr||A!==pr)&&(i.blendEquation(i.FUNC_ADD),u=pr,A=pr),$e)switch(T){case Zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:gt("WebGLState: Invalid blending: ",T);break}else switch(T){case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",T);break}E=null,S=null,L=null,M=null,P.set(0,0,0),V=0,m=T,y=$e}return}J=J||oe,q=q||re,me=me||ae,(oe!==u||J!==A)&&(i.blendEquationSeparate(it[oe],it[J]),u=oe,A=J),(re!==E||ae!==S||q!==L||me!==M)&&(i.blendFuncSeparate(Ye[re],Ye[ae],Ye[q],Ye[me]),E=re,S=ae,L=q,M=me),(Me.equals(P)===!1||Mt!==V)&&(i.blendColor(Me.r,Me.g,Me.b,Mt),P.copy(Me),V=Mt),m=T,y=!1}function C(T,oe){T.side===Ci?fe(i.CULL_FACE):K(i.CULL_FACE);let re=T.side===Vt;oe&&(re=!re),Et(re),T.blending===Zr&&T.transparent===!1?Be(Di):Be(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),n.setFunc(T.depthFunc),n.setTest(T.depthTest),n.setMask(T.depthWrite),s.setMask(T.colorWrite);const ae=T.stencilWrite;o.setTest(ae),ae&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ge(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(T){x!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),x=T)}function We(T){T!==hd?(K(i.CULL_FACE),T!==R&&(T===Vl?i.cullFace(i.BACK):T===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),R=T}function rt(T){T!==O&&(Y&&i.lineWidth(T),O=T)}function ge(T,oe,re){T?(K(i.POLYGON_OFFSET_FILL),(z!==oe||G!==re)&&(i.polygonOffset(oe,re),z=oe,G=re)):fe(i.POLYGON_OFFSET_FILL)}function lt(T){T?K(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function be(T){T===void 0&&(T=i.TEXTURE0+Z-1),Q!==T&&(i.activeTexture(T),Q=T)}function Re(T,oe,re){re===void 0&&(Q===null?re=i.TEXTURE0+Z-1:re=Q);let ae=le[re];ae===void 0&&(ae={type:void 0,texture:void 0},le[re]=ae),(ae.type!==T||ae.texture!==oe)&&(Q!==re&&(i.activeTexture(re),Q=re),i.bindTexture(T,oe||j[T]),ae.type=T,ae.texture=oe)}function w(){const T=le[Q];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(T){T("WebGLState:",T)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(T){T("WebGLState:",T)}}function W(){try{i.texSubImage2D(...arguments)}catch(T){T("WebGLState:",T)}}function X(){try{i.texSubImage3D(...arguments)}catch(T){T("WebGLState:",T)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(T){T("WebGLState:",T)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(T){T("WebGLState:",T)}}function ne(){try{i.texStorage2D(...arguments)}catch(T){T("WebGLState:",T)}}function Se(){try{i.texStorage3D(...arguments)}catch(T){T("WebGLState:",T)}}function ue(){try{i.texImage2D(...arguments)}catch(T){T("WebGLState:",T)}}function $(){try{i.texImage3D(...arguments)}catch(T){T("WebGLState:",T)}}function ie(T){Ze.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Ze.copy(T))}function Le(T){et.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),et.copy(T))}function we(T,oe){let re=l.get(oe);re===void 0&&(re=new WeakMap,l.set(oe,re));let ae=re.get(T);ae===void 0&&(ae=i.getUniformBlockIndex(oe,T.name),re.set(T,ae))}function ce(T,oe){const re=l.get(oe).get(T);c.get(oe)!==re&&(i.uniformBlockBinding(oe,re,T.__bindingPointIndex),c.set(oe,re))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,le={},d={},p=new WeakMap,f=[],v=null,b=!1,m=null,u=null,E=null,S=null,A=null,L=null,M=null,P=new He(0,0,0),V=0,y=!1,x=null,R=null,O=null,z=null,G=null,Ze.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),n.reset(),o.reset()}return{buffers:{color:s,depth:n,stencil:o},enable:K,disable:fe,bindFramebuffer:De,drawBuffers:_e,useProgram:ye,setBlending:Be,setMaterial:C,setFlipSided:Et,setCullFace:We,setLineWidth:rt,setPolygonOffset:ge,setScissorTest:lt,activeTexture:be,bindTexture:Re,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:ue,texImage3D:$,updateUBOMapping:we,uniformBlockBinding:ce,texStorage2D:ne,texStorage3D:Se,texSubImage2D:W,texSubImage3D:X,compressedTexSubImage2D:B,compressedTexSubImage3D:xe,scissor:ie,viewport:Le,reset:Pe}}function L_(i,e,t,r,a,s,n){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,g){return f?new OffscreenCanvas(w,g):Os("canvas")}function b(w,g,N){let W=1;const X=Re(w);if((X.width>N||X.height>N)&&(W=N/Math.max(X.width,X.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const B=Math.floor(W*X.width),xe=Math.floor(W*X.height);d===void 0&&(d=v(B,xe));const ne=g?v(B,xe):d;return ne.width=B,ne.height=xe,ne.getContext("2d").drawImage(w,0,0,B,xe),Ae("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+B+"x"+xe+")."),ne}else return"data"in w&&Ae("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,g,N,W,X=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let B=g;if(g===i.RED&&(N===i.FLOAT&&(B=i.R32F),N===i.HALF_FLOAT&&(B=i.R16F),N===i.UNSIGNED_BYTE&&(B=i.R8)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(B=i.R8UI),N===i.UNSIGNED_SHORT&&(B=i.R16UI),N===i.UNSIGNED_INT&&(B=i.R32UI),N===i.BYTE&&(B=i.R8I),N===i.SHORT&&(B=i.R16I),N===i.INT&&(B=i.R32I)),g===i.RG&&(N===i.FLOAT&&(B=i.RG32F),N===i.HALF_FLOAT&&(B=i.RG16F),N===i.UNSIGNED_BYTE&&(B=i.RG8)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(B=i.RG8UI),N===i.UNSIGNED_SHORT&&(B=i.RG16UI),N===i.UNSIGNED_INT&&(B=i.RG32UI),N===i.BYTE&&(B=i.RG8I),N===i.SHORT&&(B=i.RG16I),N===i.INT&&(B=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(B=i.RGB8UI),N===i.UNSIGNED_SHORT&&(B=i.RGB16UI),N===i.UNSIGNED_INT&&(B=i.RGB32UI),N===i.BYTE&&(B=i.RGB8I),N===i.SHORT&&(B=i.RGB16I),N===i.INT&&(B=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),N===i.UNSIGNED_INT&&(B=i.RGBA32UI),N===i.BYTE&&(B=i.RGBA8I),N===i.SHORT&&(B=i.RGBA16I),N===i.INT&&(B=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),g===i.RGBA){const xe=X?Ns:Xe.getTransfer(W);N===i.FLOAT&&(B=i.RGBA32F),N===i.HALF_FLOAT&&(B=i.RGBA16F),N===i.UNSIGNED_BYTE&&(B=xe===Je?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function A(w,g){let N;return w?g===null||g===_r||g===Da?N=i.DEPTH24_STENCIL8:g===Pi?N=i.DEPTH32F_STENCIL8:g===Ra&&(N=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===_r||g===Da?N=i.DEPTH_COMPONENT24:g===Pi?N=i.DEPTH_COMPONENT32F:g===Ra&&(N=i.DEPTH_COMPONENT16),N}function L(w,g){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==jt&&w.minFilter!==Jt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function M(w){const g=w.target;g.removeEventListener("dispose",M),V(g),g.isVideoTexture&&h.delete(g)}function P(w){const g=w.target;g.removeEventListener("dispose",P),x(g)}function V(w){const g=r.get(w);if(g.__webglInit===void 0)return;const N=w.source,W=p.get(N);if(W){const X=W[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&y(w),Object.keys(W).length===0&&p.delete(N)}r.remove(w)}function y(w){const g=r.get(w);i.deleteTexture(g.__webglTexture);const N=w.source,W=p.get(N);delete W[g.__cacheKey],n.memory.textures--}function x(w){const g=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let X=0;X<g.__webglFramebuffer[W].length;X++)i.deleteFramebuffer(g.__webglFramebuffer[W][X]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=w.textures;for(let W=0,X=N.length;W<X;W++){const B=r.get(N[W]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),n.memory.textures--),r.remove(N[W])}r.remove(w)}let R=0;function O(){R=0}function z(){const w=R;return w>=a.maxTextures&&Ae("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),R+=1,w}function G(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function Z(w,g){const N=r.get(w);if(w.isVideoTexture&&lt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const W=w.image;if(W===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,w,g);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function Y(w,g){const N=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){j(N,w,g);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function te(w,g){const N=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){j(N,w,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function H(w,g){const N=r.get(w);if(w.version>0&&N.__version!==w.version){K(N,w,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const Q={[to]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},le={[jt]:i.NEAREST,[Bd]:i.NEAREST_MIPMAP_NEAREST,[rs]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[sn]:i.LINEAR_MIPMAP_NEAREST,[mr]:i.LINEAR_MIPMAP_LINEAR},Ie={[jd]:i.NEVER,[$d]:i.ALWAYS,[Xd]:i.LESS,[Th]:i.LEQUAL,[qd]:i.EQUAL,[Zd]:i.GEQUAL,[Yd]:i.GREATER,[Kd]:i.NOTEQUAL};function Ve(w,g){if(g.type===Pi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Jt||g.magFilter===sn||g.magFilter===rs||g.magFilter===mr||g.minFilter===Jt||g.minFilter===sn||g.minFilter===rs||g.minFilter===mr)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Q[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Q[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Q[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,le[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,le[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ie[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===jt||g.minFilter!==rs&&g.minFilter!==mr||g.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function Ze(w,g){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",M));const W=g.source;let X=p.get(W);X===void 0&&(X={},p.set(W,X));const B=G(g);if(B!==w.__cacheKey){X[B]===void 0&&(X[B]={texture:i.createTexture(),usedTimes:0},n.memory.textures++,N=!0),X[B].usedTimes++;const xe=X[w.__cacheKey];xe!==void 0&&(X[w.__cacheKey].usedTimes--,xe.usedTimes===0&&y(g)),w.__cacheKey=B,w.__webglTexture=X[B].texture}return N}function et(w,g,N){return Math.floor(Math.floor(w/N)/g)}function tt(w,g,N,W){const X=w.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,W,g.data);else{X.sort((ue,$)=>ue.start-$.start);let B=0;for(let ue=1;ue<X.length;ue++){const $=X[B],ie=X[ue],Le=$.start+$.count,we=et(ie.start,g.width,4),ce=et($.start,g.width,4);ie.start<=Le+1&&we===ce&&et(ie.start+ie.count-1,g.width,4)===we?$.count=Math.max($.count,ie.start+ie.count-$.start):(++B,X[B]=ie)}X.length=B+1;const xe=i.getParameter(i.UNPACK_ROW_LENGTH),ne=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ue=0,$=X.length;ue<$;ue++){const ie=X[ue],Le=Math.floor(ie.start/4),we=Math.ceil(ie.count/4),ce=Le%g.width,Pe=Math.floor(Le/g.width),T=we;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(i.TEXTURE_2D,0,ce,Pe,T,1,N,W,g.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function j(w,g,N){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);const X=Ze(w,g),B=g.source;t.bindTexture(W,w.__webglTexture,i.TEXTURE0+N);const xe=r.get(B);if(B.version!==xe.__version||X===!0){t.activeTexture(i.TEXTURE0+N);const ne=Xe.getPrimaries(Xe.workingColorSpace),Se=g.colorSpace===Zi?null:Xe.getPrimaries(g.colorSpace),ue=g.colorSpace===Zi||ne===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let $=b(g.image,!1,a.maxTextureSize);$=be(g,$);const ie=s.convert(g.format,g.colorSpace),Le=s.convert(g.type);let we=S(g.internalFormat,ie,Le,g.colorSpace,g.isVideoTexture);Ve(W,g);let ce;const Pe=g.mipmaps,T=g.isVideoTexture!==!0,oe=xe.__version===void 0||X===!0,re=B.dataReady,ae=L(g,$);if(g.isDepthTexture)we=A(g.format===Ua,g.type),oe&&(T?t.texStorage2D(i.TEXTURE_2D,1,we,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,we,$.width,$.height,0,ie,Le,null));else if(g.isDataTexture)if(Pe.length>0){T&&oe&&t.texStorage2D(i.TEXTURE_2D,ae,we,Pe[0].width,Pe[0].height);for(let J=0,q=Pe.length;J<q;J++)ce=Pe[J],T?re&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce.width,ce.height,ie,Le,ce.data):t.texImage2D(i.TEXTURE_2D,J,we,ce.width,ce.height,0,ie,Le,ce.data);g.generateMipmaps=!1}else T?(oe&&t.texStorage2D(i.TEXTURE_2D,ae,we,$.width,$.height),re&&tt(g,$,ie,Le)):t.texImage2D(i.TEXTURE_2D,0,we,$.width,$.height,0,ie,Le,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){T&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,we,Pe[0].width,Pe[0].height,$.depth);for(let J=0,q=Pe.length;J<q;J++)if(ce=Pe[J],g.format!==oi)if(ie!==null)if(T){if(re)if(g.layerUpdates.size>0){const me=_c(ce.width,ce.height,g.format,g.type);for(const Me of g.layerUpdates){const Mt=ce.data.subarray(Me*me/ce.data.BYTES_PER_ELEMENT,(Me+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Me,ce.width,ce.height,1,ie,Mt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,$.depth,ie,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,we,ce.width,ce.height,$.depth,0,ce.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else T?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,$.depth,ie,Le,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,we,ce.width,ce.height,$.depth,0,ie,Le,ce.data)}else{T&&oe&&t.texStorage2D(i.TEXTURE_2D,ae,we,Pe[0].width,Pe[0].height);for(let J=0,q=Pe.length;J<q;J++)ce=Pe[J],g.format!==oi?ie!==null?T?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ce.width,ce.height,ie,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,J,we,ce.width,ce.height,0,ce.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):T?re&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce.width,ce.height,ie,Le,ce.data):t.texImage2D(i.TEXTURE_2D,J,we,ce.width,ce.height,0,ie,Le,ce.data)}else if(g.isDataArrayTexture)if(T){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,we,$.width,$.height,$.depth),re)if(g.layerUpdates.size>0){const J=_c($.width,$.height,g.format,g.type);for(const q of g.layerUpdates){const me=$.data.subarray(q*J/$.data.BYTES_PER_ELEMENT,(q+1)*J/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,$.width,$.height,1,ie,Le,me)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ie,Le,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,$.width,$.height,$.depth,0,ie,Le,$.data);else if(g.isData3DTexture)T?(oe&&t.texStorage3D(i.TEXTURE_3D,ae,we,$.width,$.height,$.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ie,Le,$.data)):t.texImage3D(i.TEXTURE_3D,0,we,$.width,$.height,$.depth,0,ie,Le,$.data);else if(g.isFramebufferTexture){if(oe)if(T)t.texStorage2D(i.TEXTURE_2D,ae,we,$.width,$.height);else{let J=$.width,q=$.height;for(let me=0;me<ae;me++)t.texImage2D(i.TEXTURE_2D,me,we,J,q,0,ie,Le,null),J>>=1,q>>=1}}else if(Pe.length>0){if(T&&oe){const J=Re(Pe[0]);t.texStorage2D(i.TEXTURE_2D,ae,we,J.width,J.height)}for(let J=0,q=Pe.length;J<q;J++)ce=Pe[J],T?re&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ie,Le,ce):t.texImage2D(i.TEXTURE_2D,J,we,ie,Le,ce);g.generateMipmaps=!1}else if(T){if(oe){const J=Re($);t.texStorage2D(i.TEXTURE_2D,ae,we,J.width,J.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,Le,$)}else t.texImage2D(i.TEXTURE_2D,0,we,ie,Le,$);m(g)&&u(W),xe.__version=B.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function K(w,g,N){if(g.image.length!==6)return;const W=Ze(w,g),X=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);const B=r.get(X);if(X.version!==B.__version||W===!0){t.activeTexture(i.TEXTURE0+N);const xe=Xe.getPrimaries(Xe.workingColorSpace),ne=g.colorSpace===Zi?null:Xe.getPrimaries(g.colorSpace),Se=g.colorSpace===Zi||xe===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const ue=g.isCompressedTexture||g.image[0].isCompressedTexture,$=g.image[0]&&g.image[0].isDataTexture,ie=[];for(let q=0;q<6;q++)!ue&&!$?ie[q]=b(g.image[q],!0,a.maxCubemapSize):ie[q]=$?g.image[q].image:g.image[q],ie[q]=be(g,ie[q]);const Le=ie[0],we=s.convert(g.format,g.colorSpace),ce=s.convert(g.type),Pe=S(g.internalFormat,we,ce,g.colorSpace),T=g.isVideoTexture!==!0,oe=B.__version===void 0||W===!0,re=X.dataReady;let ae=L(g,Le);Ve(i.TEXTURE_CUBE_MAP,g);let J;if(ue){T&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Pe,Le.width,Le.height);for(let q=0;q<6;q++){J=ie[q].mipmaps;for(let me=0;me<J.length;me++){const Me=J[me];g.format!==oi?we!==null?T?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,Pe,Me.width,Me.height,0,Me.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,0,0,Me.width,Me.height,we,ce,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,Pe,Me.width,Me.height,0,we,ce,Me.data)}}}else{if(J=g.mipmaps,T&&oe){J.length>0&&ae++;const q=Re(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Pe,q.width,q.height)}for(let q=0;q<6;q++)if($){T?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ie[q].width,ie[q].height,we,ce,ie[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Pe,ie[q].width,ie[q].height,0,we,ce,ie[q].data);for(let me=0;me<J.length;me++){const Me=J[me].image[q].image;T?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,0,0,Me.width,Me.height,we,ce,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,Pe,Me.width,Me.height,0,we,ce,Me.data)}}else{T?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,we,ce,ie[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Pe,we,ce,ie[q]);for(let me=0;me<J.length;me++){const Me=J[me];T?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,0,0,we,ce,Me.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,Pe,we,ce,Me.image[q])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),B.__version=X.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function fe(w,g,N,W,X,B){const xe=s.convert(N.format,N.colorSpace),ne=s.convert(N.type),Se=S(N.internalFormat,xe,ne,N.colorSpace),ue=r.get(g),$=r.get(N);if($.__renderTarget=g,!ue.__hasExternalTextures){const ie=Math.max(1,g.width>>B),Le=Math.max(1,g.height>>B);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,B,Se,ie,Le,g.depth,0,xe,ne,null):t.texImage2D(X,B,Se,ie,Le,0,xe,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,X,$.__webglTexture,0,rt(g)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,X,$.__webglTexture,B),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(w,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){const W=g.depthTexture,X=W&&W.isDepthTexture?W.type:null,B=A(g.stencilBuffer,X),xe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=rt(g);ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,B,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,B,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,B,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,w)}else{const W=g.textures;for(let X=0;X<W.length;X++){const B=W[X],xe=s.convert(B.format,B.colorSpace),ne=s.convert(B.type),Se=S(B.internalFormat,xe,ne,B.colorSpace),ue=rt(g);N&&ge(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Se,g.width,g.height):ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Se,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const N=r.get(g.depthTexture);N.__renderTarget=g,(!N.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const W=N.__webglTexture,X=rt(g);if(g.depthTexture.format===La)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(g.depthTexture.format===Ua)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function ye(w){const g=r.get(w),N=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",X)};W.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=W}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const W=w.texture.mipmaps;W&&W.length>0?_e(g.__webglFramebuffer[0],w):_e(g.__webglFramebuffer,w)}else if(N){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),De(g.__webglDepthbuffer[W],w,!1);else{const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,B)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),De(g.__webglDepthbuffer,w,!1);else{const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,B)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(w,g,N){const W=r.get(w);g!==void 0&&fe(W.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&ye(w)}function Ye(w){const g=w.texture,N=r.get(w),W=r.get(g);w.addEventListener("dispose",P);const X=w.textures,B=w.isWebGLCubeRenderTarget===!0,xe=X.length>1;if(xe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,n.memory.textures++),B){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let Se=0;Se<g.mipmaps.length;Se++)N.__webglFramebuffer[ne][Se]=i.createFramebuffer()}else N.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)N.__webglFramebuffer[ne]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ne=0,Se=X.length;ne<Se;ne++){const ue=r.get(X[ne]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),n.memory.textures++)}if(w.samples>0&&ge(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<X.length;ne++){const Se=X[ne];N.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const ue=s.convert(Se.format,Se.colorSpace),$=s.convert(Se.type),ie=S(Se.internalFormat,ue,$,Se.colorSpace,w.isXRRenderTarget===!0),Le=rt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ie,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),De(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)fe(N.__webglFramebuffer[ne][Se],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se);else fe(N.__webglFramebuffer[ne],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ne=0,Se=X.length;ne<Se;ne++){const ue=X[ne],$=r.get(ue);let ie=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,$.__webglTexture),Ve(ie,ue),fe(N.__webglFramebuffer,w,ue,i.COLOR_ATTACHMENT0+ne,ie,0),m(ue)&&u(ie)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,W.__webglTexture),Ve(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)fe(N.__webglFramebuffer[Se],w,g,i.COLOR_ATTACHMENT0,ne,Se);else fe(N.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,ne,0);m(g)&&u(ne),t.unbindTexture()}w.depthBuffer&&ye(w)}function Be(w){const g=w.textures;for(let N=0,W=g.length;N<W;N++){const X=g[N];if(m(X)){const B=E(w),xe=r.get(X).__webglTexture;t.bindTexture(B,xe),u(B),t.unbindTexture()}}}const C=[],Et=[];function We(w){if(w.samples>0){if(ge(w)===!1){const g=w.textures,N=w.width,W=w.height;let X=i.COLOR_BUFFER_BIT;const B=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=r.get(w),ne=g.length>1;if(ne)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Se=w.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);const $=r.get(g[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,N,W,0,0,N,W,X,i.NEAREST),c===!0&&(C.length=0,Et.length=0,C.push(i.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(C.push(B),Et.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);const $=r.get(g[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,$,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function rt(w){return Math.min(a.maxSamples,w.samples)}function ge(w){const g=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function lt(w){const g=n.render.frame;h.get(w)!==g&&(h.set(w,g),w.update())}function be(w,g){const N=w.colorSpace,W=w.format,X=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==ra&&N!==Zi&&(Xe.getTransfer(N)===Je?(W!==oi||X!==fi)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",N)),g}function Re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=H,this.rebindTextures=it,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge}function U_(i,e){function t(r,a=Zi){let s;const n=Xe.getTransfer(a);if(r===fi)return i.UNSIGNED_BYTE;if(r===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(r===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===bh)return i.BYTE;if(r===xh)return i.SHORT;if(r===Ra)return i.UNSIGNED_SHORT;if(r===Ho)return i.INT;if(r===_r)return i.UNSIGNED_INT;if(r===Pi)return i.FLOAT;if(r===na)return i.HALF_FLOAT;if(r===Mh)return i.ALPHA;if(r===Sh)return i.RGB;if(r===oi)return i.RGBA;if(r===La)return i.DEPTH_COMPONENT;if(r===Ua)return i.DEPTH_STENCIL;if(r===Eh)return i.RED;if(r===jo)return i.RED_INTEGER;if(r===Xo)return i.RG;if(r===qo)return i.RG_INTEGER;if(r===Yo)return i.RGBA_INTEGER;if(r===Cs||r===As||r===Ps||r===Rs)if(n===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===As)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ro||r===ao||r===so||r===no)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===so)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===no)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===oo||r===lo||r===co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===oo||r===lo)return n===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===co)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ho||r===uo||r===po||r===fo||r===mo||r===go||r===vo||r===_o||r===bo||r===xo||r===yo||r===wo||r===Mo||r===So)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===ho)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uo)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===po)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fo)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mo)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===go)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vo)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_o)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bo)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xo)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yo)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wo)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mo)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===So)return n===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eo||r===To||r===Co)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Eo)return n===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===To)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ao||r===Po||r===Ro||r===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===Ao)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Da?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new kh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Oi({vertexShader:N_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ii(new Ys(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F_ extends Sr{constructor(e,t){super();const r=this;let a=null,s=1,n=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,v=null;const b=typeof XRWebGLBinding<"u",m=new O_,u={},E=t.getContextAttributes();let S=null,A=null;const L=[],M=[],P=new Ne;let V=null;const y=new $t;y.viewport=new ft;const x=new $t;x.viewport=new ft;const R=[y,x],O=new Jp;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=L[j];return K===void 0&&(K=new Tn,L[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=L[j];return K===void 0&&(K=new Tn,L[j]=K),K.getGripSpace()},this.getHand=function(j){let K=L[j];return K===void 0&&(K=new Tn,L[j]=K),K.getHandSpace()};function Z(j){const K=M.indexOf(j.inputSource);if(K===-1)return;const fe=L[K];fe!==void 0&&(fe.update(j.inputSource,j.frame,l||n),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",te);for(let j=0;j<L.length;j++){const K=M[j];K!==null&&(M[j]=null,L[j].disconnect(K))}z=null,G=null,m.reset();for(const j in u)delete u[j];e.setRenderTarget(S),f=null,p=null,d=null,a=null,A=null,tt.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,r.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,r.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(a,t)),d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(S=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,fe=null,De=null;E.depth&&(De=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=E.stencil?Ua:La,fe=E.stencil?Da:_r);const _e={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(_e),a.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),A=new xr(p.textureWidth,p.textureHeight,{format:oi,type:fi,depthTexture:new Fh(p.textureWidth,p.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const K={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(a,t,K),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new xr(f.framebufferWidth,f.framebufferHeight,{format:oi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,n=await a.requestReferenceSpace(o),tt.setContext(a),tt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(j){for(let K=0;K<j.removed.length;K++){const fe=j.removed[K],De=M.indexOf(fe);De>=0&&(M[De]=null,L[De].disconnect(fe))}for(let K=0;K<j.added.length;K++){const fe=j.added[K];let De=M.indexOf(fe);if(De===-1){for(let ye=0;ye<L.length;ye++)if(ye>=M.length){M.push(fe),De=ye;break}else if(M[ye]===null){M[ye]=fe,De=ye;break}if(De===-1)break}const _e=L[De];_e&&_e.connect(fe)}}const H=new I,Q=new I;function le(j,K,fe){H.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);const De=H.distanceTo(Q),_e=K.projectionMatrix.elements,ye=fe.projectionMatrix.elements,it=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),Be=(_e[9]+1)/_e[5],C=(_e[9]-1)/_e[5],Et=(_e[8]-1)/_e[0],We=(ye[8]+1)/ye[0],rt=it*Et,ge=it*We,lt=De/(-Et+We),be=lt*-Et;if(K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(be),j.translateZ(lt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),_e[10]===-1)j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Re=it+lt,w=Ye+lt,g=rt-be,N=ge+(De-be),W=Be*Ye/w*Re,X=C*Ye/w*Re;j.projectionMatrix.makePerspective(g,N,W,X,Re,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ie(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let K=j.near,fe=j.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),O.near=x.near=y.near=K,O.far=x.far=y.far=fe,(z!==O.near||G!==O.far)&&(a.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,G=O.far),O.layers.mask=j.layers.mask|6,y.layers.mask=O.layers.mask&3,x.layers.mask=O.layers.mask&5;const De=j.parent,_e=O.cameras;Ie(O,De);for(let ye=0;ye<_e.length;ye++)Ie(_e[ye],De);_e.length===2?le(O,y,x):O.projectionMatrix.copy(y.projectionMatrix),Ve(j,O,De)};function Ve(j,K,fe){fe===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ia*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(j){c=j,p!==null&&(p.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return u[j]};let Ze=null;function et(j,K){if(h=K.getViewerPose(l||n),v=K,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let De=!1;fe.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let ye=0;ye<fe.length;ye++){const it=fe[ye];let Ye=null;if(f!==null)Ye=f.getViewport(it);else{const C=d.getViewSubImage(p,it);Ye=C.viewport,ye===0&&(e.setRenderTargetTextures(A,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(A))}let Be=R[ye];Be===void 0&&(Be=new $t,Be.layers.enable(ye),Be.viewport=new ft,R[ye]=Be),Be.matrix.fromArray(it.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(it.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ye===0&&(O.matrix.copy(Be.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(Be)}const _e=a.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){d=r.getBinding();const ye=d.getDepthInformation(fe[0]);ye&&ye.isValid&&ye.texture&&m.init(ye,a.renderState)}if(_e&&_e.includes("camera-access")&&b){e.state.unbindTexture(),d=r.getBinding();for(let ye=0;ye<fe.length;ye++){const it=fe[ye].camera;if(it){let Ye=u[it];Ye||(Ye=new kh,u[it]=Ye);const Be=d.getCameraImage(it);Ye.sourceTexture=Be}}}}for(let fe=0;fe<L.length;fe++){const De=M[fe],_e=L[fe];De!==null&&_e!==void 0&&_e.update(De,K,l||n)}Ze&&Ze(j,K),K.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:K}),v=null}const tt=new Hh;tt.setAnimationLoop(et),this.setAnimationLoop=function(j){Ze=j},this.dispose=function(){}}}const ur=new Ni,k_=new mt;function V_(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function r(m,u){u.color.getRGB(m.fogColor.value,Uh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,E,S,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,A)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),b(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(n(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,E,S):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Vt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Vt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=e.get(u),S=E.envMap,A=E.envMapRotation;S&&(m.envMap.value=S,ur.copy(A),ur.x*=-1,ur.y*=-1,ur.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(ur)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function n(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,E,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=S*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Vt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function b(m,u){const E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function B_(i,e,t,r){let a={},s={},n=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const A=S.program;r.uniformBlockBinding(E,A)}function l(E,S){let A=a[E.id];A===void 0&&(v(E),A=h(E),a[E.id]=A,E.addEventListener("dispose",m));const L=S.program;r.updateUBOMapping(E,L);const M=e.render.frame;s[E.id]!==M&&(p(E),s[E.id]=M)}function h(E){const S=d();E.__bindingPointIndex=S;const A=i.createBuffer(),L=E.__size,M=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,L,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,A),A}function d(){for(let E=0;E<o;E++)if(n.indexOf(E)===-1)return n.push(E),E;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const S=a[E.id],A=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,P=A.length;M<P;M++){const V=Array.isArray(A[M])?A[M]:[A[M]];for(let y=0,x=V.length;y<x;y++){const R=V[y];if(f(R,M,y,L)===!0){const O=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let Z=0;Z<z.length;Z++){const Y=z[Z],te=b(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,O+G,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,G),G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,S,A,L){const M=E.value,P=S+"_"+A;if(L[P]===void 0)return typeof M=="number"||typeof M=="boolean"?L[P]=M:L[P]=M.clone(),!0;{const V=L[P];if(typeof M=="number"||typeof M=="boolean"){if(V!==M)return L[P]=M,!0}else if(V.equals(M)===!1)return V.copy(M),!0}return!1}function v(E){const S=E.uniforms;let A=0;const L=16;for(let P=0,V=S.length;P<V;P++){const y=Array.isArray(S[P])?S[P]:[S[P]];for(let x=0,R=y.length;x<R;x++){const O=y[x],z=Array.isArray(O.value)?O.value:[O.value];for(let G=0,Z=z.length;G<Z;G++){const Y=z[G],te=b(Y),H=A%L,Q=H%te.boundary,le=H+Q;A+=Q,le!==0&&L-le<te.storage&&(A+=L-le),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=A,A+=te.storage}}}const M=A%L;return M>0&&(A+=L-M),E.__size=A,E.__cache={},this}function b(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const A=n.indexOf(S.__bindingPointIndex);n.splice(A,1),i.deleteBuffer(a[S.id]),delete a[S.id],delete s[S.id]}function u(){for(const E in a)i.deleteBuffer(a[E]);n=[],a={},s={}}return{bind:c,update:l,dispose:u}}const z_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Si=null;function H_(){return Si===null&&(Si=new zp(z_,32,32,Xo,na),Si.minFilter=Jt,Si.magFilter=Jt,Si.wrapS=Ai,Si.wrapT=Ai,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class G_{constructor(e={}){const{canvas:t=Jd(),context:r=null,depth:a=!0,stencil:s=!1,alpha:n=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=n;const v=new Set([Yo,qo,jo]),b=new Set([fi,_r,Ra,Da,Go,Wo]),m=new Uint32Array(4),u=new Int32Array(4);let E=null,S=null;const A=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let P=!1;this._outputColorSpace=Wt;let V=0,y=0,x=null,R=-1,O=null;const z=new ft,G=new ft;let Z=null;const Y=new He(0);let te=0,H=t.width,Q=t.height,le=1,Ie=null,Ve=null;const Ze=new ft(0,0,H,Q),et=new ft(0,0,H,Q);let tt=!1;const j=new Qo;let K=!1,fe=!1;const De=new mt,_e=new I,ye=new ft,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Be(){return x===null?le:1}let C=r;function Et(_,U){return t.getContext(_,U)}try{const _={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",me,!1),C===null){const U="webgl2";if(C=Et(U,_),C===null)throw Et(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw _("WebGLRenderer: "+_.message),_}let We,rt,ge,lt,be,Re,w,g,N,W,X,B,xe,ne,Se,ue,$,ie,Le,we,ce,Pe,T,oe;function re(){We=new $g(C),We.init(),Pe=new U_(C,We),rt=new Hg(C,We,e,Pe),ge=new D_(C,We),rt.reversedDepthBuffer&&p&&ge.buffers.depth.setReversed(!0),lt=new ev(C),be=new __,Re=new L_(C,We,ge,be,rt,Pe,lt),w=new Wg(M),g=new Zg(M),N=new af(C),T=new Bg(C,N),W=new Jg(C,N,lt,T),X=new iv(C,W,N,lt),Le=new tv(C,rt,Re),ue=new Gg(be),B=new v_(M,w,g,We,rt,T,ue),xe=new V_(M,be),ne=new x_,Se=new T_(We),ie=new Vg(M,w,g,ge,X,f,c),$=new P_(M,X,rt),oe=new B_(C,lt,rt,ge),we=new zg(C,We,lt),ce=new Qg(C,We,lt),lt.programs=B.programs,M.capabilities=rt,M.extensions=We,M.properties=be,M.renderLists=ne,M.shadowMap=$,M.state=ge,M.info=lt}re();const ae=new F_(M,C);this.xr=ae,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const _=We.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=We.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(_){_!==void 0&&(le=_,this.setSize(H,Q,!1))},this.getSize=function(_){return _.set(H,Q)},this.setSize=function(_,U,F=!0){if(ae.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}H=_,Q=U,t.width=Math.floor(_*le),t.height=Math.floor(U*le),F===!0&&(t.style.width=_+"px",t.style.height=U+"px"),this.setViewport(0,0,_,U)},this.getDrawingBufferSize=function(_){return _.set(H*le,Q*le).floor()},this.setDrawingBufferSize=function(_,U,F){H=_,Q=U,le=F,t.width=Math.floor(_*F),t.height=Math.floor(U*F),this.setViewport(0,0,_,U)},this.getCurrentViewport=function(_){return _.copy(z)},this.getViewport=function(_){return _.copy(Ze)},this.setViewport=function(_,U,F,k){_.isVector4?Ze.set(_.x,_.y,_.z,_.w):Ze.set(_,U,F,k),ge.viewport(z.copy(Ze).multiplyScalar(le).round())},this.getScissor=function(_){return _.copy(et)},this.setScissor=function(_,U,F,k){_.isVector4?et.set(_.x,_.y,_.z,_.w):et.set(_,U,F,k),ge.scissor(G.copy(et).multiplyScalar(le).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(_){ge.setScissorTest(tt=_)},this.setOpaqueSort=function(_){Ie=_},this.setTransparentSort=function(_){Ve=_},this.getClearColor=function(_){return _.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(_=!0,U=!0,F=!0){let k=0;if(_){let D=!1;if(x!==null){const ee=x.texture.format;D=v.has(ee)}if(D){const ee=x.texture.type,he=b.has(ee),de=ie.getClearColor(),pe=ie.getClearAlpha(),Ee=de.r,Ce=de.g,Te=de.b;he?(m[0]=Ee,m[1]=Ce,m[2]=Te,m[3]=pe,C.clearBufferuiv(C.COLOR,0,m)):(u[0]=Ee,u[1]=Ce,u[2]=Te,u[3]=pe,C.clearBufferiv(C.COLOR,0,u))}else k|=C.COLOR_BUFFER_BIT}U&&(k|=C.DEPTH_BUFFER_BIT),F&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ie.dispose(),ne.dispose(),Se.dispose(),be.dispose(),w.dispose(),g.dispose(),X.dispose(),T.dispose(),oe.dispose(),B.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ll),ae.removeEventListener("sessionend",Ul),ar.stop()};function J(_){_.preventDefault(),ql("WebGLRenderer: Context Lost."),P=!0}function q(){ql("WebGLRenderer: Context Restored."),P=!1;const _=lt.autoReset,U=$.enabled,F=$.autoUpdate,k=$.needsUpdate,D=$.type;re(),lt.autoReset=_,$.enabled=U,$.autoUpdate=F,$.needsUpdate=k,$.type=D}function me(_){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Me(_){const U=_.target;U.removeEventListener("dispose",Me),Mt(U)}function Mt(_){$e(_),be.remove(_)}function $e(_){const U=be.get(_).programs;U!==void 0&&(U.forEach(function(F){B.releaseProgram(F)}),_.isShaderMaterial&&B.releaseShaderCache(_))}this.renderBufferDirect=function(_,U,F,k,D,ee){U===null&&(U=it);const he=D.isMesh&&D.matrixWorld.determinant()<0,de=ad(_,U,F,k,D);ge.setMaterial(k,he);let pe=F.index,Ee=1;if(k.wireframe===!0){if(pe=W.getWireframeAttribute(F),pe===void 0)return;Ee=2}const Ce=F.drawRange,Te=F.attributes.position;let ze=Ce.start*Ee,at=(Ce.start+Ce.count)*Ee;ee!==null&&(ze=Math.max(ze,ee.start*Ee),at=Math.min(at,(ee.start+ee.count)*Ee)),pe!==null?(ze=Math.max(ze,0),at=Math.min(at,pe.count)):Te!=null&&(ze=Math.max(ze,0),at=Math.min(at,Te.count));const dt=at-ze;if(dt<0||dt===1/0)return;T.setup(D,k,de,F,pe);let ct,st=we;if(pe!==null&&(ct=N.get(pe),st=ce,st.setIndex(ct)),D.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*Be()),st.setMode(C.LINES)):st.setMode(C.TRIANGLES);else if(D.isLine){let ve=k.linewidth;ve===void 0&&(ve=1),ge.setLineWidth(ve*Be()),D.isLineSegments?st.setMode(C.LINES):D.isLineLoop?st.setMode(C.LINE_LOOP):st.setMode(C.LINE_STRIP)}else D.isPoints?st.setMode(C.POINTS):D.isSprite&&st.setMode(C.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Na("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))st.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const ve=D._multiDrawStarts,Tt=D._multiDrawCounts,_i=D._multiDrawCount,ti=pe?N.get(pe).bytesPerElement:1,Ar=be.get(k).currentProgram.getUniforms();for(let zt=0;zt<_i;zt++)Ar.setValue(C,"_gl_DrawID",zt),st.render(ve[zt]/ti,Tt[zt])}else if(D.isInstancedMesh)st.renderInstances(ze,dt,D.count);else if(F.isInstancedBufferGeometry){const ve=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Tt=Math.min(F.instanceCount,ve);st.renderInstances(ze,dt,Tt)}else st.render(ze,dt)};function ci(_,U,F){_.transparent===!0&&_.side===Ci&&_.forceSinglePass===!1?(_.side=Vt,_.needsUpdate=!0,is(_,U,F),_.side=tr,_.needsUpdate=!0,is(_,U,F),_.side=Ci):is(_,U,F)}this.compile=function(_,U,F=null){F===null&&(F=_),S=Se.get(F),S.init(U),L.push(S),F.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(S.pushLight(D),D.castShadow&&S.pushShadow(D))}),_!==F&&_.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(S.pushLight(D),D.castShadow&&S.pushShadow(D))}),S.setupLights();const k=new Set;return _.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ee=D.material;if(ee)if(Array.isArray(ee))for(let he=0;he<ee.length;he++){const de=ee[he];ci(de,F,D),k.add(de)}else ci(ee,F,D),k.add(ee)}),S=L.pop(),k},this.compileAsync=function(_,U,F=null){const k=this.compile(_,U,F);return new Promise(D=>{function ee(){if(k.forEach(function(he){be.get(he).currentProgram.isReady()&&k.delete(he)}),k.size===0){D(_);return}setTimeout(ee,10)}We.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let ei=null;function rd(_){ei&&ei(_)}function Ll(){ar.stop()}function Ul(){ar.start()}const ar=new Hh;ar.setAnimationLoop(rd),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(_){ei=_,ae.setAnimationLoop(_),_===null?ar.stop():ar.start()},ae.addEventListener("sessionstart",Ll),ae.addEventListener("sessionend",Ul),this.render=function(_,U){if(U!==void 0&&U.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,U,x),S=Se.get(_,L.length),S.init(U),L.push(S),De.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(De,ui,U.reversedDepth),fe=this.localClippingEnabled,K=ue.init(this.clippingPlanes,fe),E=ne.get(_,A.length),E.init(),A.push(E),ae.enabled===!0&&ae.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&rn(ee,U,-1/0,M.sortObjects)}rn(_,U,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(Ie,Ve),Ye=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ye&&ie.addToRenderList(E,_),this.info.render.frame++,K===!0&&ue.beginShadows();const F=S.state.shadowsArray;$.render(F,_,U),K===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=E.opaque,D=E.transmissive;if(S.setupLights(),U.isArrayCamera){const ee=U.cameras;if(D.length>0)for(let he=0,de=ee.length;he<de;he++){const pe=ee[he];Il(k,D,_,pe)}Ye&&ie.render(_);for(let he=0,de=ee.length;he<de;he++){const pe=ee[he];Nl(E,_,pe,pe.viewport)}}else D.length>0&&Il(k,D,_,U),Ye&&ie.render(_),Nl(E,_,U);x!==null&&y===0&&(Re.updateMultisampleRenderTarget(x),Re.updateRenderTargetMipmap(x)),_.isScene===!0&&_.onAfterRender(M,_,U),T.resetDefaultState(),R=-1,O=null,L.pop(),L.length>0?(S=L[L.length-1],K===!0&&ue.setGlobalState(M.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function rn(_,U,F,k){if(_.visible===!1)return;if(_.layers.test(U.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(U);else if(_.isLight)S.pushLight(_),_.castShadow&&S.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||j.intersectsSprite(_)){k&&ye.setFromMatrixPosition(_.matrixWorld).applyMatrix4(De);const ee=X.update(_),he=_.material;he.visible&&E.push(_,ee,he,F,ye.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||j.intersectsObject(_))){const ee=X.update(_),he=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ye.copy(_.boundingSphere.center)):(ee.boundingSphere===null&&ee.computeBoundingSphere(),ye.copy(ee.boundingSphere.center)),ye.applyMatrix4(_.matrixWorld).applyMatrix4(De)),Array.isArray(he)){const de=ee.groups;for(let pe=0,Ee=de.length;pe<Ee;pe++){const Ce=de[pe],Te=he[Ce.materialIndex];Te&&Te.visible&&E.push(_,ee,Te,F,ye.z,Ce)}}else he.visible&&E.push(_,ee,he,F,ye.z,null)}}const D=_.children;for(let ee=0,he=D.length;ee<he;ee++)rn(D[ee],U,F,k)}function Nl(_,U,F,k){const{opaque:D,transmissive:ee,transparent:he}=_;S.setupLightsView(F),K===!0&&ue.setGlobalState(M.clippingPlanes,F),k&&ge.viewport(z.copy(k)),D.length>0&&ts(D,U,F),ee.length>0&&ts(ee,U,F),he.length>0&&ts(he,U,F),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Il(_,U,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[k.id]===void 0&&(S.state.transmissionRenderTarget[k.id]=new xr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?na:fi,minFilter:mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const D=S.state.transmissionRenderTarget[k.id],ee=k.viewport||z;D.setSize(ee.z*M.transmissionResolutionScale,ee.w*M.transmissionResolutionScale);const he=M.getRenderTarget(),de=M.getActiveCubeFace(),pe=M.getActiveMipmapLevel();M.setRenderTarget(D),M.getClearColor(Y),te=M.getClearAlpha(),te<1&&M.setClearColor(16777215,.5),M.clear(),Ye&&ie.render(F);const Ee=M.toneMapping;M.toneMapping=Qi;const Ce=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),S.setupLightsView(k),K===!0&&ue.setGlobalState(M.clippingPlanes,k),ts(_,F,k),Re.updateMultisampleRenderTarget(D),Re.updateRenderTargetMipmap(D),We.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ze=0,at=U.length;ze<at;ze++){const dt=U[ze],{object:ct,geometry:st,material:ve,group:Tt}=dt;if(ve.side===Ci&&ct.layers.test(k.layers)){const _i=ve.side;ve.side=Vt,ve.needsUpdate=!0,Ol(ct,F,k,st,ve,Tt),ve.side=_i,ve.needsUpdate=!0,Te=!0}}Te===!0&&(Re.updateMultisampleRenderTarget(D),Re.updateRenderTargetMipmap(D))}M.setRenderTarget(he,de,pe),M.setClearColor(Y,te),Ce!==void 0&&(k.viewport=Ce),M.toneMapping=Ee}function ts(_,U,F){const k=U.isScene===!0?U.overrideMaterial:null;for(let D=0,ee=_.length;D<ee;D++){const he=_[D],{object:de,geometry:pe,group:Ee}=he;let Ce=he.material;Ce.allowOverride===!0&&k!==null&&(Ce=k),de.layers.test(F.layers)&&Ol(de,U,F,pe,Ce,Ee)}}function Ol(_,U,F,k,D,ee){_.onBeforeRender(M,U,F,k,D,ee),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),D.onBeforeRender(M,U,F,k,_,ee),D.transparent===!0&&D.side===Ci&&D.forceSinglePass===!1?(D.side=Vt,D.needsUpdate=!0,M.renderBufferDirect(F,U,k,D,_,ee),D.side=tr,D.needsUpdate=!0,M.renderBufferDirect(F,U,k,D,_,ee),D.side=Ci):M.renderBufferDirect(F,U,k,D,_,ee),_.onAfterRender(M,U,F,k,D,ee)}function is(_,U,F){U.isScene!==!0&&(U=it);const k=be.get(_),D=S.state.lights,ee=S.state.shadowsArray,he=D.state.version,de=B.getParameters(_,D.state,ee,U,F),pe=B.getProgramCacheKey(de);let Ee=k.programs;k.environment=_.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(_.isMeshStandardMaterial?g:w).get(_.envMap||k.environment),k.envMapRotation=k.environment!==null&&_.envMap===null?U.environmentRotation:_.envMapRotation,Ee===void 0&&(_.addEventListener("dispose",Me),Ee=new Map,k.programs=Ee);let Ce=Ee.get(pe);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===he)return kl(_,de),Ce}else de.uniforms=B.getUniforms(_),_.onBeforeCompile(de,M),Ce=B.acquireProgram(de,pe),Ee.set(pe,Ce),k.uniforms=de.uniforms;const Te=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Te.clippingPlanes=ue.uniform),kl(_,de),k.needsLights=nd(_),k.lightsStateVersion=he,k.needsLights&&(Te.ambientLightColor.value=D.state.ambient,Te.lightProbe.value=D.state.probe,Te.directionalLights.value=D.state.directional,Te.directionalLightShadows.value=D.state.directionalShadow,Te.spotLights.value=D.state.spot,Te.spotLightShadows.value=D.state.spotShadow,Te.rectAreaLights.value=D.state.rectArea,Te.ltc_1.value=D.state.rectAreaLTC1,Te.ltc_2.value=D.state.rectAreaLTC2,Te.pointLights.value=D.state.point,Te.pointLightShadows.value=D.state.pointShadow,Te.hemisphereLights.value=D.state.hemi,Te.directionalShadowMap.value=D.state.directionalShadowMap,Te.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Te.spotShadowMap.value=D.state.spotShadowMap,Te.spotLightMatrix.value=D.state.spotLightMatrix,Te.spotLightMap.value=D.state.spotLightMap,Te.pointShadowMap.value=D.state.pointShadowMap,Te.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function Fl(_){if(_.uniformsList===null){const U=_.currentProgram.getUniforms();_.uniformsList=Ds.seqWithValue(U.seq,_.uniforms)}return _.uniformsList}function kl(_,U){const F=be.get(_);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function ad(_,U,F,k,D){U.isScene!==!0&&(U=it),Re.resetTextureUnits();const ee=U.fog,he=k.isMeshStandardMaterial?U.environment:null,de=x===null?M.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:ra,pe=(k.isMeshStandardMaterial?g:w).get(k.envMap||he),Ee=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ce=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!F.morphAttributes.position,ze=!!F.morphAttributes.normal,at=!!F.morphAttributes.color;let dt=Qi;k.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(dt=M.toneMapping);const ct=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,st=ct!==void 0?ct.length:0,ve=be.get(k),Tt=S.state.lights;if(K===!0&&(fe===!0||_!==O)){const Ct=_===O&&k.id===R;ue.setState(k,_,Ct)}let _i=!1;k.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Tt.state.version||ve.outputColorSpace!==de||D.isBatchedMesh&&ve.batching===!1||!D.isBatchedMesh&&ve.batching===!0||D.isBatchedMesh&&ve.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ve.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ve.instancing===!1||!D.isInstancedMesh&&ve.instancing===!0||D.isSkinnedMesh&&ve.skinning===!1||!D.isSkinnedMesh&&ve.skinning===!0||D.isInstancedMesh&&ve.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ve.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ve.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ve.instancingMorph===!1&&D.morphTexture!==null||ve.envMap!==pe||k.fog===!0&&ve.fog!==ee||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==ue.numPlanes||ve.numIntersection!==ue.numIntersection)||ve.vertexAlphas!==Ee||ve.vertexTangents!==Ce||ve.morphTargets!==Te||ve.morphNormals!==ze||ve.morphColors!==at||ve.toneMapping!==dt||ve.morphTargetsCount!==st)&&(_i=!0):(_i=!0,ve.__version=k.version);let ti=ve.currentProgram;_i===!0&&(ti=is(k,U,D));let Ar=!1,zt=!1,ma=!1;const ht=ti.getUniforms(),Ot=ve.uniforms;if(ge.useProgram(ti.program)&&(Ar=!0,zt=!0,ma=!0),k.id!==R&&(R=k.id,zt=!0),Ar||O!==_){ge.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ht.setValue(C,"projectionMatrix",_.projectionMatrix),ht.setValue(C,"viewMatrix",_.matrixWorldInverse);const Ct=ht.map.cameraPosition;Ct!==void 0&&Ct.setValue(C,_e.setFromMatrixPosition(_.matrixWorld)),rt.logarithmicDepthBuffer&&ht.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ht.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),O!==_&&(O=_,zt=!0,ma=!0)}if(D.isSkinnedMesh){ht.setOptional(C,D,"bindMatrix"),ht.setOptional(C,D,"bindMatrixInverse");const Ct=D.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ht.setValue(C,"boneTexture",Ct.boneTexture,Re))}D.isBatchedMesh&&(ht.setOptional(C,D,"batchingTexture"),ht.setValue(C,"batchingTexture",D._matricesTexture,Re),ht.setOptional(C,D,"batchingIdTexture"),ht.setValue(C,"batchingIdTexture",D._indirectTexture,Re),ht.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&ht.setValue(C,"batchingColorTexture",D._colorsTexture,Re));const Yt=F.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&Le.update(D,F,ti),(zt||ve.receiveShadow!==D.receiveShadow)&&(ve.receiveShadow=D.receiveShadow,ht.setValue(C,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ot.envMap.value=pe,Ot.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Ot.envMapIntensity.value=U.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=H_()),zt&&(ht.setValue(C,"toneMappingExposure",M.toneMappingExposure),ve.needsLights&&sd(Ot,ma),ee&&k.fog===!0&&xe.refreshFogUniforms(Ot,ee),xe.refreshMaterialUniforms(Ot,k,le,Q,S.state.transmissionRenderTarget[_.id]),Ds.upload(C,Fl(ve),Ot,Re)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ds.upload(C,Fl(ve),Ot,Re),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ht.setValue(C,"center",D.center),ht.setValue(C,"modelViewMatrix",D.modelViewMatrix),ht.setValue(C,"normalMatrix",D.normalMatrix),ht.setValue(C,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ct=k.uniformsGroups;for(let ii=0,an=Ct.length;ii<an;ii++){const sr=Ct[ii];oe.update(sr,ti),oe.bind(sr,ti)}}return ti}function sd(_,U){_.ambientLightColor.needsUpdate=U,_.lightProbe.needsUpdate=U,_.directionalLights.needsUpdate=U,_.directionalLightShadows.needsUpdate=U,_.pointLights.needsUpdate=U,_.pointLightShadows.needsUpdate=U,_.spotLights.needsUpdate=U,_.spotLightShadows.needsUpdate=U,_.rectAreaLights.needsUpdate=U,_.hemisphereLights.needsUpdate=U}function nd(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(_,U,F){const k=be.get(_);k.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),be.get(_.texture).__webglTexture=U,be.get(_.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:F,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,U){const F=be.get(_);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0};const od=C.createFramebuffer();this.setRenderTarget=function(_,U=0,F=0){x=_,V=U,y=F;let k=!0,D=null,ee=!1,he=!1;if(_){const de=be.get(_);if(de.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(de.__webglFramebuffer===void 0)Re.setupRenderTarget(_);else if(de.__hasExternalTextures)Re.rebindTextures(_,be.get(_.texture).__webglTexture,be.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Ce=_.depthTexture;if(de.__boundDepthTexture!==Ce){if(Ce!==null&&be.has(Ce)&&(_.width!==Ce.image.width||_.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Re.setupDepthRenderbuffer(_)}}const pe=_.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(he=!0);const Ee=be.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?D=Ee[U][F]:D=Ee[U],ee=!0):_.samples>0&&Re.useMultisampledRTT(_)===!1?D=be.get(_).__webglMultisampledFramebuffer:Array.isArray(Ee)?D=Ee[F]:D=Ee,z.copy(_.viewport),G.copy(_.scissor),Z=_.scissorTest}else z.copy(Ze).multiplyScalar(le).floor(),G.copy(et).multiplyScalar(le).floor(),Z=tt;if(F!==0&&(D=od),ge.bindFramebuffer(C.FRAMEBUFFER,D)&&k&&ge.drawBuffers(_,D),ge.viewport(z),ge.scissor(G),ge.setScissorTest(Z),ee){const de=be.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,F)}else if(he){const de=U;for(let pe=0;pe<_.textures.length;pe++){const Ee=be.get(_.textures[pe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+pe,Ee.__webglTexture,F,de)}}else if(_!==null&&F!==0){const de=be.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,de.__webglTexture,F)}R=-1},this.readRenderTargetPixels=function(_,U,F,k,D,ee,he,de=0){if(!(_&&_.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=be.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){ge.bindFramebuffer(C.FRAMEBUFFER,pe);try{const Ee=_.textures[de],Ce=Ee.format,Te=Ee.type;if(!rt.textureFormatReadable(Ce)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Te)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=_.width-k&&F>=0&&F<=_.height-D&&(_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),C.readPixels(U,F,k,D,Pe.convert(Ce),Pe.convert(Te),ee))}finally{const Ee=x!==null?be.get(x).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(_,U,F,k,D,ee,he,de=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=be.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(U>=0&&U<=_.width-k&&F>=0&&F<=_.height-D){ge.bindFramebuffer(C.FRAMEBUFFER,pe);const Ee=_.textures[de],Ce=Ee.format,Te=Ee.type;if(!rt.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ze),C.bufferData(C.PIXEL_PACK_BUFFER,ee.byteLength,C.STREAM_READ),_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),C.readPixels(U,F,k,D,Pe.convert(Ce),Pe.convert(Te),0);const at=x!==null?be.get(x).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,at);const dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Qd(C,dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ee),C.deleteBuffer(ze),C.deleteSync(dt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,U=null,F=0){const k=Math.pow(2,-F),D=Math.floor(_.image.width*k),ee=Math.floor(_.image.height*k),he=U!==null?U.x:0,de=U!==null?U.y:0;Re.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,he,de,D,ee),ge.unbindTexture()};const ld=C.createFramebuffer(),cd=C.createFramebuffer();this.copyTextureToTexture=function(_,U,F=null,k=null,D=0,ee=null){ee===null&&(D!==0?(Na("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=D,D=0):ee=0);let he,de,pe,Ee,Ce,Te,ze,at,dt;const ct=_.isCompressedTexture?_.mipmaps[ee]:_.image;if(F!==null)he=F.max.x-F.min.x,de=F.max.y-F.min.y,pe=F.isBox3?F.max.z-F.min.z:1,Ee=F.min.x,Ce=F.min.y,Te=F.isBox3?F.min.z:0;else{const Yt=Math.pow(2,-D);he=Math.floor(ct.width*Yt),de=Math.floor(ct.height*Yt),_.isDataArrayTexture?pe=ct.depth:_.isData3DTexture?pe=Math.floor(ct.depth*Yt):pe=1,Ee=0,Ce=0,Te=0}k!==null?(ze=k.x,at=k.y,dt=k.z):(ze=0,at=0,dt=0);const st=Pe.convert(U.format),ve=Pe.convert(U.type);let Tt;U.isData3DTexture?(Re.setTexture3D(U,0),Tt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Re.setTexture2DArray(U,0),Tt=C.TEXTURE_2D_ARRAY):(Re.setTexture2D(U,0),Tt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const _i=C.getParameter(C.UNPACK_ROW_LENGTH),ti=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ar=C.getParameter(C.UNPACK_SKIP_PIXELS),zt=C.getParameter(C.UNPACK_SKIP_ROWS),ma=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ct.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ct.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ee),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ce),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Te);const ht=_.isDataArrayTexture||_.isData3DTexture,Ot=U.isDataArrayTexture||U.isData3DTexture;if(_.isDepthTexture){const Yt=be.get(_),Ct=be.get(U),ii=be.get(Yt.__renderTarget),an=be.get(Ct.__renderTarget);ge.bindFramebuffer(C.READ_FRAMEBUFFER,ii.__webglFramebuffer),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let sr=0;sr<pe;sr++)ht&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.get(_).__webglTexture,D,Te+sr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.get(U).__webglTexture,ee,dt+sr)),C.blitFramebuffer(Ee,Ce,he,de,ze,at,he,de,C.DEPTH_BUFFER_BIT,C.NEAREST);ge.bindFramebuffer(C.READ_FRAMEBUFFER,null),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(D!==0||_.isRenderTargetTexture||be.has(_)){const Yt=be.get(_),Ct=be.get(U);ge.bindFramebuffer(C.READ_FRAMEBUFFER,ld),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,cd);for(let ii=0;ii<pe;ii++)ht?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Yt.__webglTexture,D,Te+ii):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Yt.__webglTexture,D),Ot?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ct.__webglTexture,ee,dt+ii):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ct.__webglTexture,ee),D!==0?C.blitFramebuffer(Ee,Ce,he,de,ze,at,he,de,C.COLOR_BUFFER_BIT,C.NEAREST):Ot?C.copyTexSubImage3D(Tt,ee,ze,at,dt+ii,Ee,Ce,he,de):C.copyTexSubImage2D(Tt,ee,ze,at,Ee,Ce,he,de);ge.bindFramebuffer(C.READ_FRAMEBUFFER,null),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ot?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(Tt,ee,ze,at,dt,he,de,pe,st,ve,ct.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Tt,ee,ze,at,dt,he,de,pe,st,ct.data):C.texSubImage3D(Tt,ee,ze,at,dt,he,de,pe,st,ve,ct):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ee,ze,at,he,de,st,ve,ct.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ee,ze,at,ct.width,ct.height,st,ct.data):C.texSubImage2D(C.TEXTURE_2D,ee,ze,at,he,de,st,ve,ct);C.pixelStorei(C.UNPACK_ROW_LENGTH,_i),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ti),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ar),C.pixelStorei(C.UNPACK_SKIP_ROWS,zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ma),ee===0&&U.generateMipmaps&&C.generateMipmap(Tt),ge.unbindTexture()},this.initRenderTarget=function(_){be.get(_).__webglFramebuffer===void 0&&Re.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Re.setTextureCube(_,0):_.isData3DTexture?Re.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Re.setTexture2DArray(_,0):Re.setTexture2D(_,0),ge.unbindTexture()},this.resetState=function(){V=0,y=0,x=null,ge.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Hc={type:"change"},el={type:"start"},qh={type:"end"},Es=new $o,Gc=new Ki,W_=Math.cos(70*gr.DEG2RAD),bt=new I,Ft=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},In=1e-6;class j_ extends tf{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kr.ROTATE,MIDDLE:Kr.DOLLY,RIGHT:Kr.PAN},this.touches={ONE:qr.ROTATE,TWO:qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new br,this._lastTargetPosition=new I,this._quat=new br().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vc,this._sphericalDelta=new vc,this._scale=1,this._panOffset=new I,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new I,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q_.bind(this),this._onPointerDown=X_.bind(this),this._onPointerUp=Y_.bind(this),this._onContextMenu=t0.bind(this),this._onMouseWheel=$_.bind(this),this._onKeyDown=J_.bind(this),this._onTouchStart=Q_.bind(this),this._onTouchMove=e0.bind(this),this._onMouseDown=K_.bind(this),this._onMouseMove=Z_.bind(this),this._interceptControlDown=i0.bind(this),this._interceptControlUp=r0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hc),this.update(),this.state=Qe.NONE}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Ft:r>Math.PI&&(r-=Ft),a<-Math.PI?a+=Ft:a>Math.PI&&(a-=Ft),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=n!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){const o=bt.length();n=this._clampDistance(o*this._scale);const c=o-n;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),n=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(Es.origin.copy(this.object.position),Es.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Es.direction))<W_?this.object.lookAt(this.target):(Gc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Es.intersectPlane(Gc,this.target))))}else if(this.object.isOrthographicCamera){const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>In||8*(1-this._lastQuaternion.dot(this.object.quaternion))>In||this._lastTargetPosition.distanceToSquared(this.target)>In?(this.dispatchEvent(Hc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;bt.copy(a).sub(this.target);let s=bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/r.clientHeight,this.object.matrix),this._panUp(2*t*s/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,s=t-r.top,n=r.width,o=r.height;this._mouse.x=a/n*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,s=Math.sqrt(r*r+a*a);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),s=.5*(e.pageY+r.y);this._rotateEnd.set(a,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,s=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const n=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(n,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function X_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function q_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Y_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qh),this.state=Qe.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function K_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qe.DOLLY;break;case Kr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}break;case Kr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(el)}function Z_(i){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(i.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qh))}function J_(i){this.enabled!==!1&&this._handleKeyDown(i)}function Q_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qe.TOUCH_ROTATE;break;case qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qe.TOUCH_DOLLY_PAN;break;case qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(el)}function e0(i){switch(this._trackPointer(i),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qe.NONE}}function t0(i){this.enabled!==!1&&i.preventDefault()}function i0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function r0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nt(i){return i==null}function tl(i){return i!==null&&typeof i=="object"}function Uo(i){return i!==null&&typeof i=="object"}function a0(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function yr(i,e){return Array.from(new Set([...Object.keys(i),...Object.keys(e)])).reduce((t,r)=>{const a=i[r],s=e[r];return Uo(a)&&Uo(s)?Object.assign(Object.assign({},t),{[r]:yr(a,s)}):Object.assign(Object.assign({},t),{[r]:r in e?s:a})},{})}function il(i){return tl(i)?"target"in i:!1}const s0={alreadydisposed:()=>"View has been already disposed",invalidparams:i=>`Invalid parameters for '${i.name}'`,nomatchingcontroller:i=>`No matching controller for '${i.key}'`,nomatchingview:i=>`No matching view for '${JSON.stringify(i.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:i=>`Not compatible with  plugin '${i.id}'`,propertynotfound:i=>`Property '${i.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class pt{static alreadyDisposed(){return new pt({type:"alreadydisposed"})}static notBindable(){return new pt({type:"notbindable"})}static notCompatible(e,t){return new pt({type:"notcompatible",context:{id:`${e}.${t}`}})}static propertyNotFound(e){return new pt({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new pt({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=s0[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}toString(){return this.message}}class Vs{constructor(e,t){this.obj_=e,this.key=t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}read(){return this.obj_[this.key]}write(e){this.obj_[this.key]=e}writeProperty(e,t){const r=this.read();if(!Vs.isBindable(r))throw pt.notBindable();if(!(e in r))throw pt.propertyNotFound(e);r[e]=t}}class _t{constructor(){this.observers_={}}on(e,t,r){var a;let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t,key:(a=r?.key)!==null&&a!==void 0?a:t}),this}off(e,t){const r=this.observers_[e];return r&&(this.observers_[e]=r.filter(a=>a.key!==t)),this}emit(e,t){const r=this.observers_[e];r&&r.forEach(a=>{a.handler(t)})}}class n0{constructor(e,t){var r;this.constraint_=t?.constraint,this.equals_=(r=t?.equals)!==null&&r!==void 0?r:((a,s)=>a===s),this.emitter=new _t,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},a=this.constraint_?this.constraint_.constrain(e):e,s=this.rawValue_;this.equals_(s,a)&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=a,this.emitter.emit("change",{options:r,previousRawValue:s,rawValue:a,sender:this}))}}class o0{constructor(e){this.emitter=new _t,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},a=this.value_;a===e&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:r,previousRawValue:a,rawValue:this.value_,sender:this}))}}class l0{constructor(e){this.emitter=new _t,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=e,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function ot(i,e){const t=e?.constraint,r=e?.equals;return!t&&!r?new o0(i):new n0(i,e)}function c0(i){return[new l0(i),(e,t)=>{i.setRawValue(e,t)}]}class Fe{constructor(e){this.emitter=new _t,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((t,r)=>Object.assign(t,{[r]:ot(e[r])}),{})}static fromObject(e){const t=this.createCore(e);return new Fe(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}class ja{constructor(e){this.values=Fe.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),r=this.values.get("min");return Math.min(Math.max(e,r),t)}}class h0{constructor(e){this.values=Fe.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),r=this.values.get("min");let a=e;return nt(r)||(a=Math.max(a,r)),nt(t)||(a=Math.min(a,t)),a}}class u0{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,r=Math.round((e-t)/this.step);return t+r*this.step}}class d0{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const p0={"**":(i,e)=>Math.pow(i,e),"*":(i,e)=>i*e,"/":(i,e)=>i/e,"%":(i,e)=>i%e,"+":(i,e)=>i+e,"-":(i,e)=>i-e,"<<":(i,e)=>i<<e,">>":(i,e)=>i>>e,">>>":(i,e)=>i>>>e,"&":(i,e)=>i&e,"^":(i,e)=>i^e,"|":(i,e)=>i|e};class f0{constructor(e,t,r){this.left=t,this.operator=e,this.right=r}evaluate(){const e=p0[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const m0={"+":i=>i,"-":i=>-i,"~":i=>~i};class g0{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=m0[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function rl(i){return(e,t)=>{for(let r=0;r<i.length;r++){const a=i[r](e,t);if(a!=="")return a}return""}}function Oa(i,e){var t;const r=i.substr(e).match(/^\s+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function v0(i,e){const t=i.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Fa(i,e){var t;const r=i.substr(e).match(/^[0-9]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function _0(i,e){const t=Fa(i,e);if(t!=="")return t;const r=i.substr(e,1);if(e+=1,r!=="-"&&r!=="+")return"";const a=Fa(i,e);return a===""?"":r+a}function al(i,e){const t=i.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const r=_0(i,e);return r===""?"":t+r}function Yh(i,e){const t=i.substr(e,1);if(t==="0")return t;const r=v0(i,e);return e+=r.length,r===""?"":r+Fa(i,e)}function b0(i,e){const t=Yh(i,e);if(e+=t.length,t==="")return"";const r=i.substr(e,1);if(e+=r.length,r!==".")return"";const a=Fa(i,e);return e+=a.length,t+r+a+al(i,e)}function x0(i,e){const t=i.substr(e,1);if(e+=t.length,t!==".")return"";const r=Fa(i,e);return e+=r.length,r===""?"":t+r+al(i,e)}function y0(i,e){const t=Yh(i,e);return e+=t.length,t===""?"":t+al(i,e)}const w0=rl([b0,x0,y0]);function M0(i,e){var t;const r=i.substr(e).match(/^[01]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function S0(i,e){const t=i.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const r=M0(i,e);return r===""?"":t+r}function E0(i,e){var t;const r=i.substr(e).match(/^[0-7]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function T0(i,e){const t=i.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const r=E0(i,e);return r===""?"":t+r}function C0(i,e){var t;const r=i.substr(e).match(/^[0-9a-f]+/i);return(t=r&&r[0])!==null&&t!==void 0?t:""}function A0(i,e){const t=i.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const r=C0(i,e);return r===""?"":t+r}const P0=rl([S0,T0,A0]),R0=rl([P0,w0]);function D0(i,e){const t=R0(i,e);return e+=t.length,t===""?null:{evaluable:new d0(t),cursor:e}}function L0(i,e){const t=i.substr(e,1);if(e+=t.length,t!=="(")return null;const r=Zh(i,e);if(!r)return null;e=r.cursor,e+=Oa(i,e).length;const a=i.substr(e,1);return e+=a.length,a!==")"?null:{evaluable:r.evaluable,cursor:e}}function U0(i,e){var t;return(t=D0(i,e))!==null&&t!==void 0?t:L0(i,e)}function Kh(i,e){const t=U0(i,e);if(t)return t;const r=i.substr(e,1);if(e+=r.length,r!=="+"&&r!=="-"&&r!=="~")return null;const a=Kh(i,e);return a?(e=a.cursor,{cursor:e,evaluable:new g0(r,a.evaluable)}):null}function N0(i,e,t){t+=Oa(e,t).length;const r=i.filter(a=>e.startsWith(a,t))[0];return r?(t+=r.length,t+=Oa(e,t).length,{cursor:t,operator:r}):null}function I0(i,e){return(t,r)=>{const a=i(t,r);if(!a)return null;r=a.cursor;let s=a.evaluable;for(;;){const n=N0(e,t,r);if(!n)break;r=n.cursor;const o=i(t,r);if(!o)return null;r=o.cursor,s=new f0(n.operator,s,o.evaluable)}return s?{cursor:r,evaluable:s}:null}}const O0=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((i,e)=>I0(i,e),Kh);function Zh(i,e){return e+=Oa(i,e).length,O0(i,e)}function F0(i){const e=Zh(i,0);return!e||e.cursor+Oa(i,e.cursor).length!==i.length?null:e.evaluable}function Fi(i){var e;return(e=F0(i)?.evaluate())!==null&&e!==void 0?e:null}function $h(i){if(typeof i=="number")return i;if(typeof i=="string"){const e=Fi(i);if(!nt(e))return e}return 0}function k0(i){return String(i)}function Bt(i){return e=>e.toFixed(Math.max(Math.min(i,20),0))}function Ke(i,e,t,r,a){const s=(i-e)/(t-e);return r+s*(a-r)}function Wc(i){return String(i.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function xt(i,e,t){return Math.min(Math.max(i,e),t)}function Jh(i,e){return(i%e+e)%e}function V0(i,e){return nt(i.step)?Math.max(Wc(e),2):Wc(i.step)}function Qh(i){var e;return(e=i.step)!==null&&e!==void 0?e:1}function eu(i,e){var t;const r=Math.abs((t=i.step)!==null&&t!==void 0?t:e);return r===0?.1:Math.pow(10,Math.floor(Math.log10(r))-1)}function tu(i,e){return nt(i.step)?null:new u0(i.step,e)}function iu(i){return!nt(i.max)&&!nt(i.min)?new ja({max:i.max,min:i.min}):!nt(i.max)||!nt(i.min)?new h0({max:i.max,min:i.min}):null}function ru(i,e){var t,r,a;return{formatter:(t=i.format)!==null&&t!==void 0?t:Bt(V0(i,e)),keyScale:(r=i.keyScale)!==null&&r!==void 0?r:Qh(i),pointerScale:(a=i.pointerScale)!==null&&a!==void 0?a:eu(i,e)}}function au(i){return{format:i.optional.function,keyScale:i.optional.number,max:i.optional.number,min:i.optional.number,pointerScale:i.optional.number,step:i.optional.number}}function sl(i){return{constraint:i.constraint,textProps:Fe.fromObject(ru(i.params,i.initialValue))}}class Er{constructor(e){this.controller=e}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(e){this.controller.viewProps.set("disabled",e)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(e){this.controller.viewProps.set("hidden",e)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(e){return this.controller.importState(e)}exportState(){return this.controller.exportState()}}class $s{constructor(e){this.target=e}}class Xa extends $s{constructor(e,t,r){super(e),this.value=t,this.last=r??!0}}class B0 extends $s{constructor(e,t){super(e),this.expanded=t}}class z0 extends $s{constructor(e,t){super(e),this.index=t}}class H0 extends $s{constructor(e,t){super(e),this.native=t}}class ka extends Er{constructor(e){super(e),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new _t,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(e){this.controller.tag=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}refresh(){this.controller.value.fetch()}onValueChange_(e){const t=this.controller.value;this.emitter_.emit("change",new Xa(this,t.binding.target.read(),e.options.last))}}class G0{constructor(e,t){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t,this.value_=e,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new _t}get rawValue(){return this.value_.rawValue}set rawValue(e){this.value_.rawValue=e}setRawValue(e,t){this.value_.setRawValue(e,t)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function W0(i){if(!("binding"in i))return!1;const e=i.binding;return il(e)&&"read"in e&&"write"in e}function j0(i,e){return Object.keys(e).reduce((r,a)=>{if(r===void 0)return;const s=e[a],n=s(i[a]);return n.succeeded?Object.assign(Object.assign({},r),{[a]:n.value}):void 0},{})}function X0(i,e){return i.reduce((t,r)=>{if(t===void 0)return;const a=e(r);if(!(!a.succeeded||a.value===void 0))return[...t,a.value]},[])}function q0(i){return i===null?!1:typeof i=="object"}function Ei(i){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const r=i(t);return r!==void 0?{succeeded:!0,value:r}:{succeeded:!1,value:void 0}}}function jc(i){return{custom:e=>Ei(e)(i),boolean:Ei(e=>typeof e=="boolean"?e:void 0)(i),number:Ei(e=>typeof e=="number"?e:void 0)(i),string:Ei(e=>typeof e=="string"?e:void 0)(i),function:Ei(e=>typeof e=="function"?e:void 0)(i),constant:e=>Ei(t=>t===e?e:void 0)(i),raw:Ei(e=>e)(i),object:e=>Ei(t=>{if(q0(t))return j0(t,e)})(i),array:e=>Ei(t=>{if(Array.isArray(t))return X0(t,e)})(i)}}const No={optional:jc(!0),required:jc(!1)};function ut(i,e){const t=e(No),r=No.required.object(t)(i);return r.succeeded?r.value:void 0}function Xt(i,e,t,r){if(e&&!e(i))return!1;const a=ut(i,t);return a?r(a):!1}function qt(i,e){var t;return yr((t=i?.())!==null&&t!==void 0?t:{},e)}function vr(i){return"value"in i}function su(i){if(!tl(i)||!("binding"in i))return!1;const e=i.binding;return il(e)}const di="http://www.w3.org/2000/svg";function Bs(i){i.offsetHeight}function Y0(i,e){const t=i.style.transition;i.style.transition="none",e(),i.style.transition=t}function nl(i){return i.ontouchstart!==void 0}function K0(){return globalThis}function Z0(){return K0().document}function $0(i){const e=i.ownerDocument.defaultView;return e&&"document"in e?i.getContext("2d",{willReadFrequently:!0}):null}const J0={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Js(i,e){const t=i.createElementNS(di,"svg");return t.innerHTML=J0[e],t}function nu(i,e,t){i.insertBefore(e,i.children[t])}function ol(i){i.parentElement&&i.parentElement.removeChild(i)}function ou(i){for(;i.children.length>0;)i.removeChild(i.children[0])}function Q0(i){for(;i.childNodes.length>0;)i.removeChild(i.childNodes[0])}function lu(i){return i.relatedTarget?i.relatedTarget:"explicitOriginalTarget"in i?i.explicitOriginalTarget:null}function Ui(i,e){i.emitter.on("change",t=>{e(t.rawValue)}),e(i.rawValue)}function mi(i,e,t){Ui(i.value(e),t)}const e1="tp";function Ge(i){return(e,t)=>[e1,"-",i,"v",e?`_${e}`:"",t?`-${t}`:""].join("")}const wa=Ge("lbl");function t1(i,e){const t=i.createDocumentFragment();return e.split(`
`).map(r=>i.createTextNode(r)).forEach((r,a)=>{a>0&&t.appendChild(i.createElement("br")),t.appendChild(r)}),t}class cu{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(wa()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(wa("l")),mi(t.props,"label",s=>{nt(s)?this.element.classList.add(wa(void 0,"nol")):(this.element.classList.remove(wa(void 0,"nol")),Q0(r),r.appendChild(t1(e,s)))}),this.element.appendChild(r),this.labelElement=r;const a=e.createElement("div");a.classList.add(wa("v")),this.element.appendChild(a),this.valueElement=a}}class hu{constructor(e,t){this.props=t.props,this.valueController=t.valueController,this.viewProps=t.valueController.viewProps,this.view=new cu(e,{props:t.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(e){return Xt(e,null,t=>({label:t.optional.string}),t=>(this.props.set("label",t.label),!0))}exportProps(){return qt(null,{label:this.props.get("label")})}}function i1(){return["veryfirst","first","last","verylast"]}const Xc=Ge(""),qc={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Qs{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{i1().forEach(r=>{t.classList.remove(Xc(void 0,qc[r]))}),this.blade.get("positions").forEach(r=>{t.classList.add(Xc(void 0,qc[r]))})}),this.viewProps.handleDispose(()=>{ol(t)})}get parent(){return this.parent_}set parent(e){this.parent_=e,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(e){return Xt(e,null,t=>({disabled:t.required.boolean,hidden:t.required.boolean}),t=>(this.viewProps.importState(t),!0))}exportState(){return qt(null,Object.assign({},this.viewProps.exportState()))}}class wr extends Qs{constructor(e,t){if(t.value!==t.valueController.value)throw pt.shouldNeverHappen();const r=t.valueController.viewProps,a=new hu(e,{blade:t.blade,props:t.props,valueController:t.valueController});super(Object.assign(Object.assign({},t),{view:new cu(e,{props:t.props,viewProps:r}),viewProps:r})),this.labelController=a,this.value=t.value,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(e){return Xt(e,t=>{var r,a,s;return super.importState(t)&&this.labelController.importProps(t)&&((s=(a=(r=this.valueController).importProps)===null||a===void 0?void 0:a.call(r,e))!==null&&s!==void 0?s:!0)},t=>({value:t.optional.raw}),t=>(t.value&&(this.value.rawValue=t.value),!0))}exportState(){var e,t,r;return qt(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(r=(t=(e=this.valueController).exportProps)===null||t===void 0?void 0:t.call(e))!==null&&r!==void 0?r:{}))}}function Yc(i){const e=Object.assign({},i);return delete e.value,e}class uu extends wr{constructor(e,t){super(e,t),this.tag=t.tag}importState(e){return Xt(e,t=>super.importState(Yc(e)),t=>({tag:t.optional.string}),t=>(this.tag=t.tag,!0))}exportState(){return qt(()=>Yc(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function r1(i){return vr(i)&&su(i.value)}class a1 extends uu{importState(e){return Xt(e,t=>super.importState(t),t=>({binding:t.required.object({value:t.required.raw})}),t=>(this.value.binding.inject(t.binding.value),this.value.fetch(),!0))}}function s1(i){return vr(i)&&W0(i.value)}function du(i,e){for(;i.length<e;)i.push(void 0)}function n1(i){const e=[];return du(e,i),e}function o1(i){const e=i.indexOf(void 0);return e<0?i:i.slice(0,e)}function l1(i,e){const t=[...o1(i),e];return t.length>i.length?t.splice(0,t.length-i.length):du(t,i.length),t}class c1{constructor(e){this.emitter=new _t,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e.binding,this.value_=ot(n1(e.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(e){this.value_.rawValue=e}setRawValue(e,t){this.value_.setRawValue(e,t)}fetch(){this.value_.rawValue=l1(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function h1(i){if(!("binding"in i))return!1;const e=i.binding;return il(e)&&"read"in e&&!("write"in e)}class u1 extends uu{exportState(){return qt(()=>super.exportState(),{binding:{readonly:!0}})}}function d1(i){return vr(i)&&h1(i.value)}class p1 extends Er{get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get title(){var e;return(e=this.controller.buttonController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller.buttonController.props.set("title",e)}on(e,t){const r=t.bind(this);return this.controller.buttonController.emitter.on(e,a=>{r(new H0(this,a.nativeEvent))}),this}off(e,t){return this.controller.buttonController.emitter.off(e,t),this}}function f1(i,e,t){t?i.classList.add(e):i.classList.remove(e)}function ha(i,e){return t=>{f1(i,e,t)}}function ll(i,e){Ui(i,t=>{e.textContent=t??""})}const On=Ge("btn");class m1{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(On()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("button");r.classList.add(On("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const a=e.createElement("div");a.classList.add(On("t")),ll(t.props.value("title"),a),this.buttonElement.appendChild(a)}}class g1{constructor(e,t){this.emitter=new _t,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new m1(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(e){return Xt(e,null,t=>({title:t.optional.string}),t=>(this.props.set("title",t.title),!0))}exportProps(){return qt(null,{title:this.props.get("title")})}onClick_(e){this.emitter.emit("click",{nativeEvent:e,sender:this})}}class Kc extends Qs{constructor(e,t){const r=new g1(e,{props:t.buttonProps,viewProps:t.viewProps}),a=new hu(e,{blade:t.blade,props:t.labelProps,valueController:r});super({blade:t.blade,view:a.view,viewProps:t.viewProps}),this.buttonController=r,this.labelController=a}importState(e){return Xt(e,t=>super.importState(t)&&this.buttonController.importProps(t)&&this.labelController.importProps(t),()=>({}),()=>!0)}exportState(){return qt(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class pu{constructor(e){const[t,r]=e.split("-"),a=t.split(".");this.major=parseInt(a[0],10),this.minor=parseInt(a[1],10),this.patch=parseInt(a[2],10),this.prerelease=r??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}const ua=new pu("2.0.5");function It(i){return Object.assign({core:ua},i)}const v1=It({id:"button",type:"blade",accept(i){const e=ut(i,t=>({title:t.required.string,view:t.required.constant("button"),label:t.optional.string}));return e?{params:e}:null},controller(i){return new Kc(i.document,{blade:i.blade,buttonProps:Fe.fromObject({title:i.params.title}),labelProps:Fe.fromObject({label:i.params.label}),viewProps:i.viewProps})},api(i){return i.controller instanceof Kc?new p1(i.controller):null}});function _1(i,e){return i.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function b1(i,e){return i.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function x1(i,e){return i.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}function y1(i){return tl(i)?"refresh"in i&&typeof i.refresh=="function":!1}function w1(i,e){if(!Vs.isBindable(i))throw pt.notBindable();return new Vs(i,e)}class M1{constructor(e,t){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=e,this.emitter_=new _t,this.pool_=t,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(e=>this.pool_.createApi(e))}addBinding(e,t,r){const a=r??{},s=this.controller_.element.ownerDocument,n=this.pool_.createBinding(s,w1(e,t),a),o=this.pool_.createBindingApi(n);return this.add(o,a.index)}addFolder(e){return b1(this,e)}addButton(e){return _1(this,e)}addTab(e){return x1(this,e)}add(e,t){const r=e.controller;return this.controller_.rack.add(r,t),e}remove(e){this.controller_.rack.remove(e.controller)}addBlade(e){const t=this.controller_.element.ownerDocument,r=this.pool_.createBlade(t,e),a=this.pool_.createApi(r);return this.add(a,e.index)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}refresh(){this.children.forEach(e=>{y1(e)&&e.refresh()})}onRackValueChange_(e){const t=e.bladeController,r=this.pool_.createApi(t),a=su(t.value)?t.value.binding:null;this.emitter_.emit("change",new Xa(r,a?a.target.read():t.value.rawValue,e.options.last))}}class cl extends Er{constructor(e,t){super(e),this.rackApi_=new M1(e.rackController,t)}refresh(){this.rackApi_.refresh()}}class hl extends Qs{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}importState(e){return Xt(e,t=>super.importState(t),t=>({children:t.required.array(t.required.raw)}),t=>this.rackController.rack.children.every((r,a)=>r.importState(t.children[a])))}exportState(){return qt(()=>super.exportState(),{children:this.rackController.rack.children.map(e=>e.exportState())})}}function Io(i){return"rackController"in i}class S1{constructor(e){this.emitter=new _t,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw pt.shouldNeverHappen();const r=t!==void 0?t:this.items_.length;this.items_.splice(r,0,e),this.cache_.add(e);const a=this.extract_(e);a&&(a.emitter.on("add",this.onSubListAdd_),a.emitter.on("remove",this.onSubListRemove_),a.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:r,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const r=this.extract_(e);r&&(r.allItems().forEach(a=>{this.cache_.delete(a)}),r.emitter.off("add",this.onSubListAdd_),r.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}function E1(i,e){for(let t=0;t<i.length;t++){const r=i[t];if(vr(r)&&r.value===e)return r}return null}function T1(i){return Io(i)?i.rackController.rack.bcSet_:null}class C1{constructor(e){var t,r;this.emitter=new _t,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new S1(T1),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var r;(r=e.parent)===null||r===void 0||r.remove(e),e.parent=this,this.bcSet_.add(e,t)}remove(e){e.parent=null,this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,root:t,sender:this}),!t)return;const r=e.item;if(r.viewProps.emitter.on("change",this.onChildViewPropsChange_),r.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),r.viewProps.handleDispose(this.onChildDispose_),vr(r))r.value.emitter.on("change",this.onChildValueChange_);else if(Io(r)){const a=r.rackController.rack;if(a){const s=a.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,root:t,sender:this}),!t)return;const r=e.item;if(vr(r))r.value.emitter.off("change",this.onChildValueChange_);else if(Io(r)){const a=r.rackController.rack;if(a){const s=a.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const e=this.bcSet_.items.filter(a=>!a.viewProps.get("hidden")),t=e[0],r=e[e.length-1];this.bcSet_.items.forEach(a=>{const s=[];a===t&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),a===r&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),a.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(e){const t=E1(this.find(vr),e.sender);if(!t)throw pt.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:t,options:e.options,sender:this})}onRackLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(e){this.emitter.emit("valuechange",{bladeController:e.bladeController,options:e.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class ul{constructor(e){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=e.element,this.viewProps=e.viewProps;const t=new C1({blade:e.root?void 0:e.blade,viewProps:e.viewProps});t.emitter.on("add",this.onRackAdd_),t.emitter.on("remove",this.onRackRemove_),this.rack=t,this.viewProps.handleDispose(()=>{for(let r=this.rack.children.length-1;r>=0;r--)this.rack.children[r].viewProps.set("disposed",!0)})}onRackAdd_(e){e.root&&nu(this.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.root&&ol(e.bladeController.view.element)}}function da(){return new Fe({positions:ot([],{equals:a0})})}class qa extends Fe{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},r=Fe.createCore(t);return new qa(r)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!nt(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const r=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};mi(this,"expanded",r),mi(this,"temporaryExpanded",r)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function A1(i,e){let t=0;return Y0(e,()=>{i.set("expandedHeight",null),i.set("temporaryExpanded",!0),Bs(e),t=e.clientHeight,i.set("temporaryExpanded",null),Bs(e)}),t}function Zc(i,e){e.style.height=i.styleHeight}function dl(i,e){i.value("expanded").emitter.on("beforechange",()=>{if(i.set("completed",!1),nt(i.get("expandedHeight"))){const t=A1(i,e);t>0&&i.set("expandedHeight",t)}i.set("shouldFixHeight",!0),Bs(e)}),i.emitter.on("change",()=>{Zc(i,e)}),Zc(i,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&i.cleanUpTransition()})}class fu extends cl{constructor(e,t){super(e,t),this.emitter_=new _t,this.controller.foldable.value("expanded").emitter.on("change",r=>{this.emitter_.emit("fold",new B0(this,r.sender.rawValue))}),this.rackApi_.on("change",r=>{this.emitter_.emit("change",r)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(e){this.controller.foldable.set("expanded",e)}get title(){return this.controller.props.get("title")}set title(e){this.controller.props.set("title",e)}get children(){return this.rackApi_.children}addBinding(e,t,r){return this.rackApi_.addBinding(e,t,r)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}const mu=Ge("cnt");class P1{constructor(e,t){var r;this.className_=Ge((r=t.viewName)!==null&&r!==void 0?r:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),mu()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),mi(this.foldable_,"completed",ha(this.element,this.className_(void 0,"cpl")));const a=e.createElement("button");a.classList.add(this.className_("b")),mi(t.props,"title",l=>{nt(l)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(a),this.element.appendChild(a),this.buttonElement=a;const s=e.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const n=e.createElement("div");n.classList.add(this.className_("t")),ll(t.props.value("title"),n),this.buttonElement.appendChild(n),this.titleElement=n;const o=e.createElement("div");o.classList.add(this.className_("m")),this.buttonElement.appendChild(o);const c=e.createElement("div");c.classList.add(this.className_("c")),this.element.appendChild(c),this.containerElement=c}}class Oo extends hl{constructor(e,t){var r;const a=qa.create((r=t.expanded)!==null&&r!==void 0?r:!0),s=new P1(e,{foldable:a,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:new ul({blade:t.blade,element:s.containerElement,root:t.root,viewProps:t.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=a,dl(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(e){return Xt(e,t=>super.importState(t),t=>({expanded:t.required.boolean,title:t.optional.string}),t=>(this.foldable.set("expanded",t.expanded),this.props.set("title",t.title),!0))}exportState(){return qt(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const R1=It({id:"folder",type:"blade",accept(i){const e=ut(i,t=>({title:t.required.string,view:t.required.constant("folder"),expanded:t.optional.boolean}));return e?{params:e}:null},controller(i){return new Oo(i.document,{blade:i.blade,expanded:i.params.expanded,props:Fe.fromObject({title:i.params.title}),viewProps:i.viewProps})},api(i){return i.controller instanceof Oo?new fu(i.controller,i.pool):null}}),D1=Ge("");function $c(i,e){return ha(i,D1(void 0,e))}class Vi extends Fe{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=c0(ot(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,r,a;const s=e??{};return new Vi(Fe.createCore({disabled:(t=s.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(r=s.hidden)!==null&&r!==void 0?r:!1,parent:(a=s.parent)!==null&&a!==void 0?a:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){Ui(this.globalDisabled_,$c(e,"disabled")),mi(this,"hidden",$c(e,"hidden"))}bindDisabled(e){Ui(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){Ui(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}importState(e){this.set("disabled",e.disabled),this.set("hidden",e.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;e.previousRawValue?.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const Jc=Ge("tbp");class L1{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Jc()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Jc("c")),this.element.appendChild(r),this.containerElement=r}}const Ma=Ge("tbi");class U1{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ma()),t.viewProps.bindClassModifiers(this.element),mi(t.props,"selected",s=>{s?this.element.classList.add(Ma(void 0,"sel")):this.element.classList.remove(Ma(void 0,"sel"))});const r=e.createElement("button");r.classList.add(Ma("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const a=e.createElement("div");a.classList.add(Ma("t")),ll(t.props.value("title"),a),this.buttonElement.appendChild(a),this.titleElement=a}}class N1{constructor(e,t){this.emitter=new _t,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new U1(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Fo extends hl{constructor(e,t){const r=new L1(e,{viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:new ul({blade:t.blade,element:r.containerElement,viewProps:t.viewProps}),view:r})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new N1(e,{props:t.itemProps,viewProps:Vi.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=t.props,mi(this.props,"selected",a=>{this.itemController.props.set("selected",a),this.viewProps.set("hidden",!a)})}get itemController(){return this.ic_}importState(e){return Xt(e,t=>super.importState(t),t=>({selected:t.required.boolean,title:t.required.string}),t=>(this.ic_.props.set("selected",t.selected),this.ic_.props.set("title",t.title),!0))}exportState(){return qt(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class I1 extends cl{constructor(e,t){super(e,t),this.emitter_=new _t,this.onSelect_=this.onSelect_.bind(this),this.pool_=t,this.rackApi_.on("change",r=>{this.emitter_.emit("change",r)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(e){const t=this.controller.view.element.ownerDocument,r=new Fo(t,{blade:da(),itemProps:Fe.fromObject({selected:!1,title:e.title}),props:Fe.fromObject({selected:!1}),viewProps:Vi.create()}),a=this.pool_.createApi(r);return this.rackApi_.add(a,e.index)}removePage(e){this.rackApi_.remove(this.rackApi_.children[e])}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}onSelect_(e){this.emitter_.emit("select",new z0(this,e.rawValue))}}class O1 extends cl{get title(){var e;return(e=this.controller.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller.itemController.props.set("title",e)}get selected(){return this.controller.props.get("selected")}set selected(e){this.controller.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBinding(e,t,r){return this.rackApi_.addBinding(e,t,r)}addBlade(e){return this.rackApi_.addBlade(e)}}const Qc=-1;class F1{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ot(!0),this.selectedIndex=ot(Qc),this.items_=[]}add(e,t){const r=t??this.items_.length;this.items_.splice(r,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Qc,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,r)=>{t.rawValue=r===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,r)=>{t.rawValue=r===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(r=>r===e.sender);this.items_.forEach((r,a)=>{r.rawValue=a===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Sa=Ge("tab");class k1{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Sa(),mu()),t.viewProps.bindClassModifiers(this.element),Ui(t.empty,ha(this.element,Sa(void 0,"nop")));const r=e.createElement("div");r.classList.add(Sa("t")),this.element.appendChild(r),this.itemsElement=r;const a=e.createElement("div");a.classList.add(Sa("i")),this.element.appendChild(a);const s=e.createElement("div");s.classList.add(Sa("c")),this.element.appendChild(s),this.contentsElement=s}}class eh extends hl{constructor(e,t){const r=new F1,a=new k1(e,{empty:r.empty,viewProps:t.viewProps});super({blade:t.blade,rackController:new ul({blade:t.blade,element:a.contentsElement,viewProps:t.viewProps}),view:a}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=r}add(e,t){this.rackController.rack.add(e,t)}remove(e){this.rackController.rack.remove(this.rackController.rack.children[e])}onRackAdd_(e){if(!e.root)return;const t=e.bladeController;nu(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.tab.add(t.props.value("selected"))}onRackRemove_(e){if(!e.root)return;const t=e.bladeController;ol(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.tab.remove(t.props.value("selected"))}}const gu=It({id:"tab",type:"blade",accept(i){const e=ut(i,t=>({pages:t.required.array(t.required.object({title:t.required.string})),view:t.required.constant("tab")}));return!e||e.pages.length===0?null:{params:e}},controller(i){const e=new eh(i.document,{blade:i.blade,viewProps:i.viewProps});return i.params.pages.forEach(t=>{const r=new Fo(i.document,{blade:da(),itemProps:Fe.fromObject({selected:!1,title:t.title}),props:Fe.fromObject({selected:!1}),viewProps:Vi.create()});e.add(r)}),e},api(i){return i.controller instanceof eh?new I1(i.controller,i.pool):i.controller instanceof Fo?new O1(i.controller,i.pool):null}});function V1(i,e){const t=i.accept(e.params);if(!t)return null;const r=ut(e.params,a=>({disabled:a.optional.boolean,hidden:a.optional.boolean}));return i.controller({blade:da(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:r?.disabled,hidden:r?.hidden}),viewProps:Vi.create({disabled:r?.disabled,hidden:r?.hidden})})}class pl extends ka{get options(){return this.controller.valueController.props.get("options")}set options(e){this.controller.valueController.props.set("options",e)}}class B1{constructor(){this.disabled=!1,this.emitter=new _t}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class z1{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new _t,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ya{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,r)=>r.constrain(t),e)}}function zs(i,e){if(i instanceof e)return i;if(i instanceof Ya){const t=i.constraints.reduce((r,a)=>r||(a instanceof e?a:null),null);if(t)return t}return null}class Ka{constructor(e){this.values=Fe.fromObject({options:e})}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(r=>r.value===e).length>0?e:t[0].value}}function Za(i){var e;const t=No;if(Array.isArray(i))return(e=ut({items:i},r=>({items:r.required.array(r.required.object({text:r.required.string,value:r.required.raw}))})))===null||e===void 0?void 0:e.items;if(typeof i=="object")return t.required.raw(i).value}function fl(i){if(Array.isArray(i))return i;const e=[];return Object.keys(i).forEach(t=>{e.push({text:t,value:i[t]})}),e}function ml(i){return nt(i)?null:new Ka(fl(i))}const Fn=Ge("lst");class H1{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Fn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("select");r.classList.add(Fn("s")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.selectElement=r;const a=e.createElement("div");a.classList.add(Fn("m")),a.appendChild(Js(e,"dropdown")),this.element.appendChild(a),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,mi(this.props_,"options",s=>{ou(this.selectElement),s.forEach(n=>{const o=e.createElement("option");o.textContent=n.text,this.selectElement.appendChild(o)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class ir{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new H1(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}importProps(e){return Xt(e,null,t=>({options:t.required.custom(Za)}),t=>(this.props.set("options",fl(t.options)),!0))}exportProps(){return qt(null,{options:this.props.get("options")})}}const th=Ge("pop");class G1{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(th()),t.viewProps.bindClassModifiers(this.element),Ui(t.shows,ha(this.element,th(void 0,"v")))}}class vu{constructor(e,t){this.shows=ot(!1),this.viewProps=t.viewProps,this.view=new G1(e,{shows:this.shows,viewProps:this.viewProps})}}const ih=Ge("txt");class W1{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(ih()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const r=e.createElement("input");r.classList.add(ih("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Va{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new W1(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget.value,r=this.parser_(t);nt(r)||(this.value.rawValue=r),this.view.refresh()}}function j1(i){return String(i)}function _u(i){return i==="false"?!1:!!i}function rh(i){return j1(i)}function X1(i){return e=>i.reduce((t,r)=>t!==null?t:r(e),null)}const q1=Bt(0);function Hs(i){return q1(i)+"%"}function bu(i){return String(i)}function ko(i){return i}function pa({primary:i,secondary:e,forward:t,backward:r}){let a=!1;function s(n){a||(a=!0,n(),a=!1)}i.emitter.on("change",n=>{s(()=>{e.setRawValue(t(i.rawValue,e.rawValue),n.options)})}),e.emitter.on("change",n=>{s(()=>{i.setRawValue(r(i.rawValue,e.rawValue),n.options)}),s(()=>{e.setRawValue(t(i.rawValue,e.rawValue),n.options)})}),s(()=>{e.setRawValue(t(i.rawValue,e.rawValue),{forceEmit:!1,last:!0})})}function kt(i,e){const t=i*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Ba(i){return{altKey:i.altKey,downKey:i.key==="ArrowDown",shiftKey:i.shiftKey,upKey:i.key==="ArrowUp"}}function ki(i){return{altKey:i.altKey,downKey:i.key==="ArrowLeft",shiftKey:i.shiftKey,upKey:i.key==="ArrowRight"}}function Y1(i){return i==="ArrowUp"||i==="ArrowDown"}function xu(i){return Y1(i)||i==="ArrowLeft"||i==="ArrowRight"}function kn(i,e){var t,r;const a=e.ownerDocument.defaultView,s=e.getBoundingClientRect();return{x:i.pageX-(((t=a&&a.scrollX)!==null&&t!==void 0?t:0)+s.left),y:i.pageY-(((r=a&&a.scrollY)!==null&&r!==void 0?r:0)+s.top)}}class Tr{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new _t,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const r=this.elem_.ownerDocument;r.addEventListener("mousemove",this.onDocumentMouseMove_),r.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(kn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(kn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(kn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const r=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,a=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(r?{x:r.clientX-a.left,y:r.clientY-a.top}:void 0),sender:this,shiftKey:e.shiftKey})}}const Zt=Ge("txt");class K1{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Zt(),Zt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Zt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(Zt("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Zt()),this.inputElement.classList.add(Zt("i"));const a=e.createElement("div");a.classList.add(Zt("k")),this.element.appendChild(a),this.knobElement=a;const s=e.createElementNS(di,"svg");s.classList.add(Zt("g")),this.knobElement.appendChild(s);const n=e.createElementNS(di,"path");n.classList.add(Zt("gb")),s.appendChild(n),this.guideBodyElem_=n;const o=e.createElementNS(di,"path");o.classList.add(Zt("gh")),s.appendChild(o),this.guideHeadElem_=o;const c=e.createElement("div");c.classList.add(Ge("tt")()),this.knobElement.appendChild(c),this.tooltipElem_=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Zt(void 0,"drg"));return}this.element.classList.add(Zt(void 0,"drg"));const t=e.rawValue/this.props_.get("pointerScale"),r=t+(t>0?-1:t<0?1:0),a=xt(-r,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${r+a},0 L${r},4 L${r+a},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class $a{constructor(e,t){var r;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=t.parser,this.props=t.props,this.sliderProps_=(r=t.sliderProps)!==null&&r!==void 0?r:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=ot(null),this.view=new K1(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const a=new Tr(this.view.knobElement);a.emitter.on("down",this.onPointerDown_),a.emitter.on("move",this.onPointerMove_),a.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,r;const a=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("min"),s=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("max");let n=e;return a!==void 0&&(n=Math.max(n,a)),s!==void 0&&(n=Math.min(n,s)),n}onInputChange_(e){const t=e.currentTarget.value,r=this.parser_(t);nt(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(e){const t=kt(this.props.get("keyScale"),Ba(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){kt(this.props.get("keyScale"),Ba(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("pointerScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Vn=Ge("sld");class Z1{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Vn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Vn("t")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.trackElement=r;const a=e.createElement("div");a.classList.add(Vn("k")),this.trackElement.appendChild(a),this.knobElement=a,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=xt(Ke(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class $1{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new Z1(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Tr(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Ke(xt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("min"),this.props.get("max")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=kt(this.props.get("keyScale"),ki(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){kt(this.props.get("keyScale"),ki(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Bn=Ge("sldtxt");class J1{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Bn());const r=e.createElement("div");r.classList.add(Bn("s")),this.sliderView_=t.sliderView,r.appendChild(this.sliderView_.element),this.element.appendChild(r);const a=e.createElement("div");a.classList.add(Bn("t")),this.textView_=t.textView,a.appendChild(this.textView_.element),this.element.appendChild(a)}}class Gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new $1(e,{props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new $a(e,{parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new J1(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(e){return Xt(e,null,t=>({max:t.required.number,min:t.required.number}),t=>{const r=this.sliderC_.props;return r.set("max",t.max),r.set("min",t.min),!0})}exportProps(){const e=this.sliderC_.props;return qt(null,{max:e.get("max"),min:e.get("min")})}}function yu(i){return{sliderProps:new Fe({keyScale:i.keyScale,max:i.max,min:i.min}),textProps:new Fe({formatter:ot(i.formatter),keyScale:i.keyScale,pointerScale:ot(i.pointerScale)})}}const Q1={containerUnitSize:"cnt-usz"};function wu(i){return`--${Q1[i]}`}function za(i){return au(i)}function Ji(i){if(Uo(i))return ut(i,za)}function Ri(i,e){if(!i)return;const t=[],r=tu(i,e);r&&t.push(r);const a=iu(i);return a&&t.push(a),new Ya(t)}function eb(i){return i?i.major===ua.major:!1}function Mu(i){if(i==="inline"||i==="popup")return i}function Ja(i,e){i.write(e)}const Ts=Ge("ckb");class tb{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ts()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("label");r.classList.add(Ts("l")),this.element.appendChild(r),this.labelElement=r;const a=e.createElement("input");a.classList.add(Ts("i")),a.type="checkbox",this.labelElement.appendChild(a),this.inputElement=a,t.viewProps.bindDisabled(this.inputElement);const s=e.createElement("div");s.classList.add(Ts("w")),this.labelElement.appendChild(s);const n=Js(e,"check");s.appendChild(n),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class ib{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new tb(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked,e.preventDefault(),e.stopPropagation()}onLabelMouseDown_(e){e.preventDefault()}}function rb(i){const e=[],t=ml(i.options);return t&&e.push(t),new Ya(e)}const ab=It({id:"input-bool",type:"input",accept:(i,e)=>{if(typeof i!="boolean")return null;const t=ut(e,r=>({options:r.optional.custom(Za),readonly:r.optional.constant(!1)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>_u,constraint:i=>rb(i.params),writer:i=>Ja},controller:i=>{const e=i.document,t=i.value,r=i.constraint,a=r&&zs(r,Ka);return a?new ir(e,{props:new Fe({options:a.values.value("options")}),value:t,viewProps:i.viewProps}):new ib(e,{value:t,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="boolean"?null:i.controller.valueController instanceof ir?new pl(i.controller):null}}),dr=Ge("col");class sb{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(dr()),t.foldable.bindExpandedClass(this.element,dr(void 0,"expanded")),mi(t.foldable,"completed",ha(this.element,dr(void 0,"cpl")));const r=e.createElement("div");r.classList.add(dr("h")),this.element.appendChild(r);const a=e.createElement("div");a.classList.add(dr("s")),r.appendChild(a),this.swatchElement=a;const s=e.createElement("div");if(s.classList.add(dr("t")),r.appendChild(s),this.textElement=s,t.pickerLayout==="inline"){const n=e.createElement("div");n.classList.add(dr("p")),this.element.appendChild(n),this.pickerElement=n}else this.pickerElement=null}}function nb(i,e,t){const r=xt(i/255,0,1),a=xt(e/255,0,1),s=xt(t/255,0,1),n=Math.max(r,a,s),o=Math.min(r,a,s),c=n-o;let l=0,h=0;const d=(o+n)/2;return c!==0&&(h=c/(1-Math.abs(n+o-1)),r===n?l=(a-s)/c:a===n?l=2+(s-r)/c:l=4+(r-a)/c,l=l/6+(l<0?1:0)),[l*360,h*100,d*100]}function ob(i,e,t){const r=(i%360+360)%360,a=xt(e/100,0,1),s=xt(t/100,0,1),n=(1-Math.abs(2*s-1))*a,o=n*(1-Math.abs(r/60%2-1)),c=s-n/2;let l,h,d;return r>=0&&r<60?[l,h,d]=[n,o,0]:r>=60&&r<120?[l,h,d]=[o,n,0]:r>=120&&r<180?[l,h,d]=[0,n,o]:r>=180&&r<240?[l,h,d]=[0,o,n]:r>=240&&r<300?[l,h,d]=[o,0,n]:[l,h,d]=[n,0,o],[(l+c)*255,(h+c)*255,(d+c)*255]}function lb(i,e,t){const r=xt(i/255,0,1),a=xt(e/255,0,1),s=xt(t/255,0,1),n=Math.max(r,a,s),o=Math.min(r,a,s),c=n-o;let l;c===0?l=0:n===r?l=60*(((a-s)/c%6+6)%6):n===a?l=60*((s-r)/c+2):l=60*((r-a)/c+4);const h=n===0?0:c/n,d=n;return[l,h*100,d*100]}function Su(i,e,t){const r=Jh(i,360),a=xt(e/100,0,1),s=xt(t/100,0,1),n=s*a,o=n*(1-Math.abs(r/60%2-1)),c=s-n;let l,h,d;return r>=0&&r<60?[l,h,d]=[n,o,0]:r>=60&&r<120?[l,h,d]=[o,n,0]:r>=120&&r<180?[l,h,d]=[0,n,o]:r>=180&&r<240?[l,h,d]=[0,o,n]:r>=240&&r<300?[l,h,d]=[o,0,n]:[l,h,d]=[n,0,o],[(l+c)*255,(h+c)*255,(d+c)*255]}function cb(i,e,t){const r=t+e*(100-Math.abs(2*t-100))/200;return[i,r!==0?e*(100-Math.abs(2*t-100))/r:0,t+e*(100-Math.abs(2*t-100))/200]}function hb(i,e,t){const r=100-Math.abs(t*(200-e)/100-100);return[i,r!==0?e*t/r:0,t*(200-e)/200]}function gi(i){return[i[0],i[1],i[2]]}function en(i,e){return[i[0],i[1],i[2],e]}const ub={hsl:{hsl:(i,e,t)=>[i,e,t],hsv:cb,rgb:ob},hsv:{hsl:hb,hsv:(i,e,t)=>[i,e,t],rgb:Su},rgb:{hsl:nb,hsv:lb,rgb:(i,e,t)=>[i,e,t]}};function sa(i,e){return[e==="float"?1:i==="rgb"?255:360,e==="float"?1:i==="rgb"?255:100,e==="float"?1:i==="rgb"?255:100]}function db(i,e){return i===e?e:Jh(i,e)}function Eu(i,e,t){var r;const a=sa(e,t);return[e==="rgb"?xt(i[0],0,a[0]):db(i[0],a[0]),xt(i[1],0,a[1]),xt(i[2],0,a[2]),xt((r=i[3])!==null&&r!==void 0?r:1,0,1)]}function ah(i,e,t,r){const a=sa(e,t),s=sa(e,r);return i.map((n,o)=>n/a[o]*s[o])}function Tu(i,e,t){const r=ah(i,e.mode,e.type,"int"),a=ub[e.mode][t.mode](...r);return ah(a,t.mode,"int",t.type)}class qe{static black(){return new qe([0,0,0],"rgb")}constructor(e,t){this.type="int",this.mode=t,this.comps_=Eu(e,t,this.type)}getComponents(e){return en(Tu(gi(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const e=this.getComponents("rgb");return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const Xi=Ge("colp");class pb{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Xi()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Xi("hsv"));const a=e.createElement("div");a.classList.add(Xi("sv")),this.svPaletteView_=t.svPaletteView,a.appendChild(this.svPaletteView_.element),r.appendChild(a);const s=e.createElement("div");s.classList.add(Xi("h")),this.hPaletteView_=t.hPaletteView,s.appendChild(this.hPaletteView_.element),r.appendChild(s),this.element.appendChild(r);const n=e.createElement("div");if(n.classList.add(Xi("rgb")),this.textsView_=t.textsView,n.appendChild(this.textsView_.element),this.element.appendChild(n),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const o=e.createElement("div");o.classList.add(Xi("a"));const c=e.createElement("div");c.classList.add(Xi("ap")),c.appendChild(this.alphaViews_.palette.element),o.appendChild(c);const l=e.createElement("div");l.classList.add(Xi("at")),l.appendChild(this.alphaViews_.text.element),o.appendChild(l),this.element.appendChild(o)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function fb(i){return i==="int"?"int":i==="float"?"float":void 0}function gl(i){return ut(i,e=>({color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(fb)}),expanded:e.optional.boolean,picker:e.optional.custom(Mu),readonly:e.optional.constant(!1)}))}function Mr(i){return i?.1:1}function Cu(i){var e;return(e=i.color)===null||e===void 0?void 0:e.type}class vl{constructor(e,t){this.type="float",this.mode=t,this.comps_=Eu(e,t,this.type)}getComponents(e){return en(Tu(gi(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const e=this.getComponents("rgb");return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const mb={int:(i,e)=>new qe(i,e),float:(i,e)=>new vl(i,e)};function _l(i,e,t){return mb[t](i,e)}function gb(i){return i.type==="float"}function vb(i){return i.type==="int"}function _b(i){const e=i.getComponents(),t=sa(i.mode,"int");return new qe([Math.round(Ke(e[0],0,1,0,t[0])),Math.round(Ke(e[1],0,1,0,t[1])),Math.round(Ke(e[2],0,1,0,t[2])),e[3]],i.mode)}function bb(i){const e=i.getComponents(),t=sa(i.mode,"int");return new vl([Ke(e[0],0,t[0],0,1),Ke(e[1],0,t[1],0,1),Ke(e[2],0,t[2],0,1),e[3]],i.mode)}function Nt(i,e){if(i.type===e)return i;if(vb(i)&&e==="float")return bb(i);if(gb(i)&&e==="int")return _b(i);throw pt.shouldNeverHappen()}function xb(i,e){return i.alpha===e.alpha&&i.mode===e.mode&&i.notation===e.notation&&i.type===e.type}function Qt(i,e){const t=i.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(i),e)}const yb={deg:i=>i,grad:i=>i*360/400,rad:i=>i*360/(2*Math.PI),turn:i=>i*360};function Au(i){const e=i.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(i);const t=parseFloat(e[1]),r=e[2];return yb[r](t)}function Pu(i){const e=i.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Qt(e[1],255),Qt(e[2],255),Qt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function wb(i){const e=Pu(i);return e?new qe(e,"rgb"):null}function Ru(i){const e=i.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Qt(e[1],255),Qt(e[2],255),Qt(e[3],255),Qt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Mb(i){const e=Ru(i);return e?new qe(e,"rgb"):null}function Du(i){const e=i.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Au(e[1]),Qt(e[2],100),Qt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Sb(i){const e=Du(i);return e?new qe(e,"hsl"):null}function Lu(i){const e=i.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Au(e[1]),Qt(e[2],100),Qt(e[3],100),Qt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Eb(i){const e=Lu(i);return e?new qe(e,"hsl"):null}function Uu(i){const e=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=i.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Tb(i){const e=Uu(i);return e?new qe(e,"rgb"):null}function Nu(i){const e=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Ke(parseInt(e[4]+e[4],16),0,255,0,1)];const t=i.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Ke(parseInt(t[4],16),0,255,0,1)]:null}function Cb(i){const e=Nu(i);return e?new qe(e,"rgb"):null}function Iu(i){const e=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ab(i){return e=>{const t=Iu(e);return t?_l(t,"rgb",i):null}}function Ou(i){const e=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Pb(i){return e=>{const t=Ou(e);return t?_l(t,"rgb",i):null}}const Rb=[{parser:Uu,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Nu,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Pu,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Ru,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Du,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Lu,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Iu,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ou,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Db(i){return Rb.reduce((e,{parser:t,result:r})=>e||(t(i)?r:null),null)}function Lb(i,e="int"){const t=Db(i);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}function Qa(i){const e=[Tb,Cb,wb,Mb,Sb,Eb];e.push(Ab("int"),Pb("int"));const t=X1(e);return r=>{const a=t(r);return a?Nt(a,i):null}}function Ub(i){const e=Qa("int");return typeof i!="string"?qe.black():e(i)??qe.black()}function Fu(i){const e=xt(Math.floor(i),0,255).toString(16);return e.length===1?`0${e}`:e}function bl(i,e="#"){const t=gi(i.getComponents("rgb")).map(Fu).join("");return`${e}${t}`}function xl(i,e="#"){const t=i.getComponents("rgb"),r=[t[0],t[1],t[2],t[3]*255].map(Fu).join("");return`${e}${r}`}function ku(i){const e=Bt(0),t=Nt(i,"int");return`rgb(${gi(t.getComponents("rgb")).map(r=>e(r)).join(", ")})`}function Ls(i){const e=Bt(2),t=Bt(0);return`rgba(${Nt(i,"int").getComponents("rgb").map((r,a)=>(a===3?e:t)(r)).join(", ")})`}function Nb(i){const e=[Bt(0),Hs,Hs],t=Nt(i,"int");return`hsl(${gi(t.getComponents("hsl")).map((r,a)=>e[a](r)).join(", ")})`}function Ib(i){const e=[Bt(0),Hs,Hs,Bt(2)];return`hsla(${Nt(i,"int").getComponents("hsl").map((t,r)=>e[r](t)).join(", ")})`}function Vu(i,e){const t=Bt(e==="float"?2:0),r=["r","g","b"],a=Nt(i,e);return`{${gi(a.getComponents("rgb")).map((s,n)=>`${r[n]}: ${t(s)}`).join(", ")}}`}function Ob(i){return e=>Vu(e,i)}function Bu(i,e){const t=Bt(2),r=Bt(e==="float"?2:0),a=["r","g","b","a"];return`{${Nt(i,e).getComponents("rgb").map((s,n)=>{const o=n===3?t:r;return`${a[n]}: ${o(s)}`}).join(", ")}}`}function Fb(i){return e=>Bu(e,i)}const kb=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:bl},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:xl},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:ku},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:Ls},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Nb},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Ib},...["int","float"].reduce((i,e)=>[...i,{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Ob(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Fb(e)}],[])];function zu(i){return kb.reduce((e,t)=>e||(xb(t.format,i)?t.stringifier:null),null)}const Ea=Ge("apl");class Vb{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ea()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(Ea("b")),this.element.appendChild(r);const a=e.createElement("div");a.classList.add(Ea("c")),r.appendChild(a),this.colorElem_=a;const s=e.createElement("div");s.classList.add(Ea("m")),this.element.appendChild(s),this.markerElem_=s;const n=e.createElement("div");n.classList.add(Ea("p")),this.markerElem_.appendChild(n),this.previewElem_=n,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),r=new qe([t[0],t[1],t[2],0],"rgb"),a=new qe([t[0],t[1],t[2],255],"rgb"),s=["to right",Ls(r),Ls(a)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=Ls(e);const n=Ke(t[3],0,1,0,100);this.markerElem_.style.left=`${n}%`}onValueChange_(){this.update_()}}class Bb{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Vb(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Tr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=e.point.x/e.bounds.width,a=this.value.rawValue,[s,n,o]=a.getComponents("hsv");this.value.setRawValue(new qe([s,n,o,r],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=kt(Mr(!0),ki(e));if(t===0)return;const r=this.value.rawValue,[a,s,n,o]=r.getComponents("hsv");this.value.setRawValue(new qe([a,s,n,o+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){kt(Mr(!0),ki(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Gr=Ge("coltxt");function zb(i){const e=i.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return e.appendChild(t.reduce((r,a)=>{const s=i.createElement("option");return s.textContent=a.text,s.value=a.value,r.appendChild(s),r},i.createDocumentFragment())),e}class Hb{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Gr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Gr("m")),this.modeElem_=zb(e),this.modeElem_.classList.add(Gr("ms")),r.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const a=e.createElement("div");a.classList.add(Gr("mm")),a.appendChild(Js(e,"dropdown")),r.appendChild(a),this.element.appendChild(r);const s=e.createElement("div");s.classList.add(Gr("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=t.inputViews,this.applyInputViews_(),Ui(t.mode,n=>{this.modeElem_.value=n})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(e){this.inputViews_=e,this.applyInputViews_()}applyInputViews_(){ou(this.inputsElem_);const e=this.element.ownerDocument;this.inputViews_.forEach(t=>{const r=e.createElement("div");r.classList.add(Gr("c")),r.appendChild(t.element),this.inputsElem_.appendChild(r)})}}function Gb(i){return Bt(i==="float"?2:0)}function Wb(i,e,t){const r=sa(i,e)[t];return new ja({min:0,max:r})}function jb(i,e,t){return new $a(i,{arrayPosition:t===0?"fst":t===2?"lst":"mid",parser:e.parser,props:Fe.fromObject({formatter:Gb(e.colorType),keyScale:Mr(!1),pointerScale:e.colorType==="float"?.01:1}),value:ot(0,{constraint:Wb(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}function Xb(i,e){const t={colorMode:e.colorMode,colorType:e.colorType,parser:Fi,viewProps:e.viewProps};return[0,1,2].map(r=>{const a=jb(i,t,r);return pa({primary:e.value,secondary:a.value,forward(s){return Nt(s,e.colorType).getComponents(e.colorMode)[r]},backward(s,n){const o=e.colorMode,c=Nt(s,e.colorType).getComponents(o);c[r]=n;const l=_l(en(gi(c),c[3]),o,e.colorType);return Nt(l,"int")}}),a})}function qb(i,e){const t=new Va(i,{parser:Qa("int"),props:Fe.fromObject({formatter:bl}),value:ot(qe.black()),viewProps:e.viewProps});return pa({primary:e.value,secondary:t.value,forward:r=>new qe(gi(r.getComponents()),r.mode),backward:(r,a)=>new qe(en(gi(a.getComponents(r.mode)),r.getComponents()[3]),r.mode)}),[t]}function Yb(i){return i!=="hex"}class Kb{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=ot(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Hb(e,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t=this.colorMode.rawValue;return Yb(t)?Xb(e,{colorMode:t,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):qb(e,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(r=>r.view)}}const zn=Ge("hpl");class Zb{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(zn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(zn("c")),this.element.appendChild(r);const a=e.createElement("div");a.classList.add(zn("m")),this.element.appendChild(a),this.markerElem_=a,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=ku(new qe([t,100,100],"hsv"));const r=Ke(t,0,360,0,100);this.markerElem_.style.left=`${r}%`}onValueChange_(){this.update_()}}class $b{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Zb(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Tr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=Ke(xt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),a=this.value.rawValue,[,s,n,o]=a.getComponents("hsv");this.value.setRawValue(new qe([r,s,n,o],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=kt(Mr(!1),ki(e));if(t===0)return;const r=this.value.rawValue,[a,s,n,o]=r.getComponents("hsv");this.value.setRawValue(new qe([a+t,s,n,o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){kt(Mr(!1),ki(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Hn=Ge("svp"),sh=64;class Jb{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Hn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("canvas");r.height=sh,r.width=sh,r.classList.add(Hn("c")),this.element.appendChild(r),this.canvasElement=r;const a=e.createElement("div");a.classList.add(Hn("m")),this.element.appendChild(a),this.markerElem_=a,this.update_()}update_(){const e=$0(this.canvasElement);if(!e)return;const t=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,a=this.canvasElement.height,s=e.getImageData(0,0,r,a),n=s.data;for(let l=0;l<a;l++)for(let h=0;h<r;h++){const d=Ke(h,0,r,0,100),p=Ke(l,0,a,100,0),f=Su(t[0],d,p),v=(l*r+h)*4;n[v]=f[0],n[v+1]=f[1],n[v+2]=f[2],n[v+3]=255}e.putImageData(s,0,0);const o=Ke(t[1],0,100,0,100);this.markerElem_.style.left=`${o}%`;const c=Ke(t[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class Qb{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Jb(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Tr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=Ke(e.point.x,0,e.bounds.width,0,100),a=Ke(e.point.y,0,e.bounds.height,100,0),[s,,,n]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new qe([s,r,a,n],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){xu(e.key)&&e.preventDefault();const[t,r,a,s]=this.value.rawValue.getComponents("hsv"),n=Mr(!1),o=kt(n,ki(e)),c=kt(n,Ba(e));o===0&&c===0||this.value.setRawValue(new qe([t,r+o,a+c,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Mr(!1),r=kt(t,ki(e)),a=kt(t,Ba(e));r===0&&a===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ex{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new $b(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Qb(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Bb(e,{value:this.value,viewProps:this.viewProps}),text:new $a(e,{parser:Fi,props:Fe.fromObject({pointerScale:.01,keyScale:.1,formatter:Bt(2)}),value:ot(0,{constraint:new ja({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&pa({primary:this.value,secondary:this.alphaIcs_.text.value,forward:r=>r.getComponents()[3],backward:(r,a)=>{const s=r.getComponents();return s[3]=a,new qe(s,r.mode)}}),this.textsC_=new Kb(e,{colorType:t.colorType,value:this.value,viewProps:this.viewProps}),this.view=new pb(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Gn=Ge("colsw");class tx{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Gn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Gn("sw")),this.element.appendChild(r),this.swatchElem_=r;const a=e.createElement("button");a.classList.add(Gn("b")),t.viewProps.bindDisabled(a),this.element.appendChild(a),this.buttonElement=a,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=xl(e)}onValueChange_(){this.update_()}}class ix{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new tx(e,{value:this.value,viewProps:this.viewProps})}}class yl{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qa.create(t.expanded),this.swatchC_=new ix(e,{value:this.value,viewProps:this.viewProps});const r=this.swatchC_.view.buttonElement;r.addEventListener("blur",this.onButtonBlur_),r.addEventListener("click",this.onButtonClick_),this.textC_=new Va(e,{parser:t.parser,props:Fe.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new sb(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new vu(e,{viewProps:this.viewProps}):null;const a=new ex(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});a.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=a,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(a.view.element),pa({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,n)=>n})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),dl(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=lu(e);r&&t.contains(r)||r&&r===this.swatchC_.view.buttonElement&&!nl(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function rx(i){return gi(i.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ax(i){return i.getComponents("rgb").reduce((e,t,r)=>{const a=Math.floor(r===3?t*255:t)&255;return e<<8|a},0)>>>0}function sx(i){return new qe([i>>16&255,i>>8&255,i&255],"rgb")}function nx(i){return new qe([i>>24&255,i>>16&255,i>>8&255,Ke(i&255,0,255,0,1)],"rgb")}function ox(i){return typeof i!="number"?qe.black():sx(i)}function lx(i){return typeof i!="number"?qe.black():nx(i)}function Us(i,e){return typeof i!="object"||nt(i)?!1:e in i&&typeof i[e]=="number"}function Hu(i){return Us(i,"r")&&Us(i,"g")&&Us(i,"b")}function Gu(i){return Hu(i)&&Us(i,"a")}function Wu(i){return Hu(i)}function wl(i,e){if(i.mode!==e.mode||i.type!==e.type)return!1;const t=i.getComponents(),r=e.getComponents();for(let a=0;a<t.length;a++)if(t[a]!==r[a])return!1;return!0}function nh(i){return"a"in i?[i.r,i.g,i.b,i.a]:[i.r,i.g,i.b]}function cx(i){const e=zu(i);return e?(t,r)=>{Ja(t,e(r))}:null}function hx(i){const e=i?ax:rx;return(t,r)=>{Ja(t,e(r))}}function ux(i,e,t){const r=Nt(e,t).toRgbaObject();i.writeProperty("r",r.r),i.writeProperty("g",r.g),i.writeProperty("b",r.b),i.writeProperty("a",r.a)}function dx(i,e,t){const r=Nt(e,t).toRgbaObject();i.writeProperty("r",r.r),i.writeProperty("g",r.g),i.writeProperty("b",r.b)}function px(i,e){return(t,r)=>{i?ux(t,r,e):dx(t,r,e)}}function fx(i){var e;return!!(!((e=i?.color)===null||e===void 0)&&e.alpha)}function mx(i){return i?e=>xl(e,"0x"):e=>bl(e,"0x")}function gx(i){return"color"in i||i.view==="color"}const vx=It({id:"input-color-number",type:"input",accept:(i,e)=>{if(typeof i!="number"||!gx(e))return null;const t=gl(e);return t?{initialValue:i,params:Object.assign(Object.assign({},t),{supportsAlpha:fx(e)})}:null},binding:{reader:i=>i.params.supportsAlpha?lx:ox,equals:wl,writer:i=>hx(i.params.supportsAlpha)},controller:i=>{var e,t;return new yl(i.document,{colorType:"int",expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,formatter:mx(i.params.supportsAlpha),parser:Qa("int"),pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:i.params.supportsAlpha,value:i.value,viewProps:i.viewProps})}});function _x(i,e){if(!Wu(i))return Nt(qe.black(),e);if(e==="int"){const t=nh(i);return new qe(t,"rgb")}if(e==="float"){const t=nh(i);return new vl(t,"rgb")}return Nt(qe.black(),"int")}function bx(i){return Gu(i)}function xx(i){return e=>{const t=_x(e,i);return Nt(t,"int")}}function yx(i,e){return t=>i?Bu(t,e):Vu(t,e)}const wx=It({id:"input-color-object",type:"input",accept:(i,e)=>{var t;if(!Wu(i))return null;const r=gl(e);return r?{initialValue:i,params:Object.assign(Object.assign({},r),{colorType:(t=Cu(e))!==null&&t!==void 0?t:"int"})}:null},binding:{reader:i=>xx(i.params.colorType),equals:wl,writer:i=>px(bx(i.initialValue),i.params.colorType)},controller:i=>{var e,t;const r=Gu(i.initialValue);return new yl(i.document,{colorType:i.params.colorType,expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,formatter:yx(r,i.params.colorType),parser:Qa("int"),pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:r,value:i.value,viewProps:i.viewProps})}}),Mx=It({id:"input-color-string",type:"input",accept:(i,e)=>{if(typeof i!="string"||e.view==="text")return null;const t=Lb(i,Cu(e));if(!t)return null;const r=zu(t);if(!r)return null;const a=gl(e);return a?{initialValue:i,params:Object.assign(Object.assign({},a),{format:t,stringifier:r})}:null},binding:{reader:()=>Ub,equals:wl,writer:i=>{const e=cx(i.params.format);if(!e)throw pt.notBindable();return e}},controller:i=>{var e,t;return new yl(i.document,{colorType:i.params.format.type,expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,formatter:i.params.stringifier,parser:Qa("int"),pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:i.params.format.alpha,value:i.value,viewProps:i.viewProps})}});class Ml{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((r,a)=>{var s,n;return(n=(s=this.components[a])===null||s===void 0?void 0:s.constrain(r))!==null&&n!==void 0?n:r});return this.asm_.fromComponents(t)}}const oh=Ge("pndtxt");class Sx{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(oh()),this.textViews.forEach(r=>{const a=e.createElement("div");a.classList.add(oh("a")),a.appendChild(r.element),this.element.appendChild(a)})}}function Ex(i,e,t){return new $a(i,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",parser:e.parser,props:e.axes[t].textProps,value:ot(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Sl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((r,a)=>Ex(e,t,a)),this.acs_.forEach((r,a)=>{pa({primary:this.value,secondary:r.value,forward:s=>t.assembly.toComponents(s)[a],backward:(s,n)=>{const o=t.assembly.toComponents(s);return o[a]=n,t.assembly.fromComponents(o)}})}),this.view=new Sx(e,{textViews:this.acs_.map(r=>r.view)})}get textControllers(){return this.acs_}}class Tx extends ka{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(e){this.controller.valueController.sliderController.props.set("max",e)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(e){this.controller.valueController.sliderController.props.set("min",e)}}function Cx(i,e){const t=[],r=tu(i,e);r&&t.push(r);const a=iu(i);a&&t.push(a);const s=ml(i.options);return s&&t.push(s),new Ya(t)}const Ax=It({id:"input-number",type:"input",accept:(i,e)=>{if(typeof i!="number")return null;const t=ut(e,r=>Object.assign(Object.assign({},au(r)),{options:r.optional.custom(Za),readonly:r.optional.constant(!1)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>$h,constraint:i=>Cx(i.params,i.initialValue),writer:i=>Ja},controller:i=>{const e=i.value,t=i.constraint,r=t&&zs(t,Ka);if(r)return new ir(i.document,{props:new Fe({options:r.values.value("options")}),value:e,viewProps:i.viewProps});const a=ru(i.params,e.rawValue),s=t&&zs(t,ja);return s?new Gs(i.document,Object.assign(Object.assign({},yu(Object.assign(Object.assign({},a),{keyScale:ot(a.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:Fi,value:e,viewProps:i.viewProps})):new $a(i.document,{parser:Fi,props:Fe.fromObject(a),value:e,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="number"?null:i.controller.valueController instanceof Gs?new Tx(i.controller):i.controller.valueController instanceof ir?new pl(i.controller):null}});class er{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(nt(e))return!1;const t=e.x,r=e.y;return!(typeof t!="number"||typeof r!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const ju={toComponents:i=>i.getComponents(),fromComponents:i=>new er(...i)},Wr=Ge("p2d");class Px{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Wr()),t.viewProps.bindClassModifiers(this.element),Ui(t.expanded,ha(this.element,Wr(void 0,"expanded")));const r=e.createElement("div");r.classList.add(Wr("h")),this.element.appendChild(r);const a=e.createElement("button");a.classList.add(Wr("b")),a.appendChild(Js(e,"p2dpad")),t.viewProps.bindDisabled(a),r.appendChild(a),this.buttonElement=a;const s=e.createElement("div");if(s.classList.add(Wr("t")),r.appendChild(s),this.textElement=s,t.pickerLayout==="inline"){const n=e.createElement("div");n.classList.add(Wr("p")),this.element.appendChild(n),this.pickerElement=n}else this.pickerElement=null}}const qi=Ge("p2dp");class Rx{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=e.createElement("div"),this.element.classList.add(qi()),t.layout==="popup"&&this.element.classList.add(qi(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(qi("p")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.padElement=r;const a=e.createElementNS(di,"svg");a.classList.add(qi("g")),this.padElement.appendChild(a),this.svgElem_=a;const s=e.createElementNS(di,"line");s.classList.add(qi("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const n=e.createElementNS(di,"line");n.classList.add(qi("ax")),n.setAttributeNS(null,"x1","50%"),n.setAttributeNS(null,"y1","0"),n.setAttributeNS(null,"x2","50%"),n.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(n);const o=e.createElementNS(di,"line");o.classList.add(qi("l")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(o),this.lineElem_=o;const c=e.createElement("div");c.classList.add(qi("m")),this.padElement.appendChild(c),this.markerElem_=c,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),r=this.props_.get("max"),a=Ke(e,-r,+r,0,100),s=Ke(t,-r,+r,0,100),n=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${a}%`),this.lineElem_.setAttributeNS(null,"y2",`${n}%`),this.markerElem_.style.left=`${a}%`,this.markerElem_.style.top=`${n}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function lh(i,e,t){return[kt(e[0],ki(i)),kt(e[1],Ba(i))*(t?1:-1)]}class Dx{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Rx(e,{layout:t.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Tr(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=this.props.get("max"),a=Ke(e.point.x,0,e.bounds.width,-r,+r),s=Ke(this.props.get("invertsY")?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-r,+r);this.value.setRawValue(new er(a,s),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){xu(e.key)&&e.preventDefault();const[t,r]=lh(e,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));t===0&&r===0||this.value.setRawValue(new er(this.value.rawValue.x+t,this.value.rawValue.y+r),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,r]=lh(e,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));t===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Lx{constructor(e,t){var r,a;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qa.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new vu(e,{viewProps:this.viewProps}):null;const s=new Dx(e,{layout:t.pickerLayout,props:new Fe({invertsY:ot(t.invertsY),max:ot(t.max),xKeyScale:t.axes[0].textProps.value("keyScale"),yKeyScale:t.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(n=>{n.addEventListener("blur",this.onPopupChildBlur_),n.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new Sl(e,{assembly:ju,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Px(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("blur",this.onPadButtonBlur_),(a=this.view.buttonElement)===null||a===void 0||a.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),pa({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:n=>n,backward:(n,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),dl(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=lu(e);r&&t.contains(r)||r&&r===this.view.buttonElement&&!nl(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}function Ux(i){return er.isObject(i)?new er(i.x,i.y):new er}function Nx(i,e){i.writeProperty("x",e.x),i.writeProperty("y",e.y)}function Ix(i,e){return new Ml({assembly:ju,components:[Ri(Object.assign(Object.assign({},i),i.x),e.x),Ri(Object.assign(Object.assign({},i),i.y),e.y)]})}function ch(i,e){var t,r;if(!nt(i.min)||!nt(i.max))return Math.max(Math.abs((t=i.min)!==null&&t!==void 0?t:0),Math.abs((r=i.max)!==null&&r!==void 0?r:0));const a=Qh(i);return Math.max(Math.abs(a)*10,Math.abs(e)*10)}function Ox(i,e){var t,r;const a=ch(yr(i,(t=i.x)!==null&&t!==void 0?t:{}),e.x),s=ch(yr(i,(r=i.y)!==null&&r!==void 0?r:{}),e.y);return Math.max(a,s)}function Fx(i){if(!("y"in i))return!1;const e=i.y;return e&&"inverted"in e?!!e.inverted:!1}const kx=It({id:"input-point2d",type:"input",accept:(i,e)=>{if(!er.isObject(i))return null;const t=ut(e,r=>Object.assign(Object.assign({},za(r)),{expanded:r.optional.boolean,picker:r.optional.custom(Mu),readonly:r.optional.constant(!1),x:r.optional.custom(Ji),y:r.optional.object(Object.assign(Object.assign({},za(r)),{inverted:r.optional.boolean}))}));return t?{initialValue:i,params:t}:null},binding:{reader:()=>Ux,constraint:i=>Ix(i.params,i.initialValue),equals:er.equals,writer:()=>Nx},controller:i=>{var e,t;const r=i.document,a=i.value,s=i.constraint,n=[i.params.x,i.params.y];return new Lx(r,{axes:a.rawValue.getComponents().map((o,c)=>{var l;return sl({constraint:s.components[c],initialValue:o,params:yr(i.params,(l=n[c])!==null&&l!==void 0?l:{})})}),expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,invertsY:Fx(i.params),max:Ox(i.params,a.rawValue),parser:Fi,pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",value:a,viewProps:i.viewProps})}});class Jr{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(nt(e))return!1;const t=e.x,r=e.y,a=e.z;return!(typeof t!="number"||typeof r!="number"||typeof a!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Xu={toComponents:i=>i.getComponents(),fromComponents:i=>new Jr(...i)};function Vx(i){return Jr.isObject(i)?new Jr(i.x,i.y,i.z):new Jr}function Bx(i,e){i.writeProperty("x",e.x),i.writeProperty("y",e.y),i.writeProperty("z",e.z)}function zx(i,e){return new Ml({assembly:Xu,components:[Ri(Object.assign(Object.assign({},i),i.x),e.x),Ri(Object.assign(Object.assign({},i),i.y),e.y),Ri(Object.assign(Object.assign({},i),i.z),e.z)]})}const Hx=It({id:"input-point3d",type:"input",accept:(i,e)=>{if(!Jr.isObject(i))return null;const t=ut(e,r=>Object.assign(Object.assign({},za(r)),{readonly:r.optional.constant(!1),x:r.optional.custom(Ji),y:r.optional.custom(Ji),z:r.optional.custom(Ji)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>Vx,constraint:i=>zx(i.params,i.initialValue),equals:Jr.equals,writer:i=>Bx},controller:i=>{const e=i.value,t=i.constraint,r=[i.params.x,i.params.y,i.params.z];return new Sl(i.document,{assembly:Xu,axes:e.rawValue.getComponents().map((a,s)=>{var n;return sl({constraint:t.components[s],initialValue:a,params:yr(i.params,(n=r[s])!==null&&n!==void 0?n:{})})}),parser:Fi,value:e,viewProps:i.viewProps})}});class Qr{constructor(e=0,t=0,r=0,a=0){this.x=e,this.y=t,this.z=r,this.w=a}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(nt(e))return!1;const t=e.x,r=e.y,a=e.z,s=e.w;return!(typeof t!="number"||typeof r!="number"||typeof a!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const qu={toComponents:i=>i.getComponents(),fromComponents:i=>new Qr(...i)};function Gx(i){return Qr.isObject(i)?new Qr(i.x,i.y,i.z,i.w):new Qr}function Wx(i,e){i.writeProperty("x",e.x),i.writeProperty("y",e.y),i.writeProperty("z",e.z),i.writeProperty("w",e.w)}function jx(i,e){return new Ml({assembly:qu,components:[Ri(Object.assign(Object.assign({},i),i.x),e.x),Ri(Object.assign(Object.assign({},i),i.y),e.y),Ri(Object.assign(Object.assign({},i),i.z),e.z),Ri(Object.assign(Object.assign({},i),i.w),e.w)]})}const Xx=It({id:"input-point4d",type:"input",accept:(i,e)=>{if(!Qr.isObject(i))return null;const t=ut(e,r=>Object.assign(Object.assign({},za(r)),{readonly:r.optional.constant(!1),w:r.optional.custom(Ji),x:r.optional.custom(Ji),y:r.optional.custom(Ji),z:r.optional.custom(Ji)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>Gx,constraint:i=>jx(i.params,i.initialValue),equals:Qr.equals,writer:i=>Wx},controller:i=>{const e=i.value,t=i.constraint,r=[i.params.x,i.params.y,i.params.z,i.params.w];return new Sl(i.document,{assembly:qu,axes:e.rawValue.getComponents().map((a,s)=>{var n;return sl({constraint:t.components[s],initialValue:a,params:yr(i.params,(n=r[s])!==null&&n!==void 0?n:{})})}),parser:Fi,value:e,viewProps:i.viewProps})}});function qx(i){const e=[],t=ml(i.options);return t&&e.push(t),new Ya(e)}const Yx=It({id:"input-string",type:"input",accept:(i,e)=>{if(typeof i!="string")return null;const t=ut(e,r=>({readonly:r.optional.constant(!1),options:r.optional.custom(Za)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>bu,constraint:i=>qx(i.params),writer:i=>Ja},controller:i=>{const e=i.document,t=i.value,r=i.constraint,a=r&&zs(r,Ka);return a?new ir(e,{props:new Fe({options:a.values.value("options")}),value:t,viewProps:i.viewProps}):new Va(e,{parser:s=>s,props:Fe.fromObject({formatter:ko}),value:t,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="string"?null:i.controller.valueController instanceof ir?new pl(i.controller):null}}),es={monitor:{defaultInterval:200,defaultRows:3}},hh=Ge("mll");class Kx{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(hh()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("textarea");r.classList.add(hh("i")),r.style.height=`calc(var(${wu("containerUnitSize")}) * ${t.rows})`,r.readOnly=!0,t.viewProps.bindDisabled(r),this.element.appendChild(r),this.textareaElem_=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,r=[];this.value.rawValue.forEach(a=>{a!==void 0&&r.push(this.formatter_(a))}),e.textContent=r.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class El{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Kx(e,{formatter:t.formatter,rows:t.rows,value:this.value,viewProps:this.viewProps})}}const uh=Ge("sgl");class Zx{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(uh()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(uh("i")),r.readOnly=!0,r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Tl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Zx(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const $x=It({id:"monitor-bool",type:"monitor",accept:(i,e)=>{if(typeof i!="boolean")return null;const t=ut(e,r=>({readonly:r.required.constant(!0),rows:r.optional.number}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>_u},controller:i=>{var e;return i.value.rawValue.length===1?new Tl(i.document,{formatter:rh,value:i.value,viewProps:i.viewProps}):new El(i.document,{formatter:rh,rows:(e=i.params.rows)!==null&&e!==void 0?e:es.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}});class Jx extends ka{get max(){return this.controller.valueController.props.get("max")}set max(e){this.controller.valueController.props.set("max",e)}get min(){return this.controller.valueController.props.get("min")}set min(e){this.controller.valueController.props.set("min",e)}}const Yi=Ge("grl");class Qx{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Yi()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const r=e.createElementNS(di,"svg");r.classList.add(Yi("g")),r.style.height=`calc(var(${wu("containerUnitSize")}) * ${t.rows})`,this.element.appendChild(r),this.svgElem_=r;const a=e.createElementNS(di,"polyline");this.svgElem_.appendChild(a),this.lineElem_=a;const s=e.createElement("div");s.classList.add(Yi("t"),Ge("tt")()),this.element.appendChild(s),this.tooltipElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:e,clientHeight:t}=this.element,r=this.value.rawValue.length-1,a=this.props_.get("min"),s=this.props_.get("max"),n=[];this.value.rawValue.forEach((d,p)=>{if(d===void 0)return;const f=Ke(p,0,r,0,e),v=Ke(d,a,s,t,0);n.push([f,v].join(","))}),this.lineElem_.setAttributeNS(null,"points",n.join(" "));const o=this.tooltipElem_,c=this.value.rawValue[this.cursor_.rawValue];if(c===void 0){o.classList.remove(Yi("t","a"));return}const l=Ke(this.cursor_.rawValue,0,r,0,e),h=Ke(c,a,s,t,0);o.style.left=`${l}px`,o.style.top=`${h}px`,o.textContent=`${this.formatter_(c)}`,o.classList.contains(Yi("t","a"))||(o.classList.add(Yi("t","a"),Yi("t","in")),Bs(o),o.classList.remove(Yi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Yu{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=ot(-1),this.view=new Qx(e,{cursor:this.cursor_,formatter:t.formatter,rows:t.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!nl(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const r=new Tr(this.view.element);r.emitter.on("down",this.onGraphPointerDown_),r.emitter.on("move",this.onGraphPointerMove_),r.emitter.on("up",this.onGraphPointerUp_)}}importProps(e){return Xt(e,null,t=>({max:t.required.number,min:t.required.number}),t=>(this.props.set("max",t.max),this.props.set("min",t.min),!0))}exportProps(){return qt(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const{clientWidth:t}=this.view.element;this.cursor_.rawValue=Math.floor(Ke(e.offsetX,0,t,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ke(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Vo(i){return nt(i.format)?Bt(2):i.format}function ey(i){var e;return i.value.rawValue.length===1?new Tl(i.document,{formatter:Vo(i.params),value:i.value,viewProps:i.viewProps}):new El(i.document,{formatter:Vo(i.params),rows:(e=i.params.rows)!==null&&e!==void 0?e:es.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}function ty(i){var e,t,r;return new Yu(i.document,{formatter:Vo(i.params),rows:(e=i.params.rows)!==null&&e!==void 0?e:es.monitor.defaultRows,props:Fe.fromObject({max:(t=i.params.max)!==null&&t!==void 0?t:100,min:(r=i.params.min)!==null&&r!==void 0?r:0}),value:i.value,viewProps:i.viewProps})}function dh(i){return i.view==="graph"}const iy=It({id:"monitor-number",type:"monitor",accept:(i,e)=>{if(typeof i!="number")return null;const t=ut(e,r=>({format:r.optional.function,max:r.optional.number,min:r.optional.number,readonly:r.required.constant(!0),rows:r.optional.number,view:r.optional.string}));return t?{initialValue:i,params:t}:null},binding:{defaultBufferSize:i=>dh(i)?64:1,reader:i=>$h},controller:i=>dh(i.params)?ty(i):ey(i),api:i=>i.controller.valueController instanceof Yu?new Jx(i.controller):null}),ry=It({id:"monitor-string",type:"monitor",accept:(i,e)=>{if(typeof i!="string")return null;const t=ut(e,r=>({multiline:r.optional.boolean,readonly:r.required.constant(!0),rows:r.optional.number}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>bu},controller:i=>{var e;const t=i.value;return t.rawValue.length>1||i.params.multiline?new El(i.document,{formatter:ko,rows:(e=i.params.rows)!==null&&e!==void 0?e:es.monitor.defaultRows,value:t,viewProps:i.viewProps}):new Tl(i.document,{formatter:ko,value:t,viewProps:i.viewProps})}});class ay{constructor(){this.map_=new Map}get(e){var t;return(t=this.map_.get(e))!==null&&t!==void 0?t:null}has(e){return this.map_.has(e)}add(e,t){return this.map_.set(e,t),e.viewProps.handleDispose(()=>{this.map_.delete(e)}),t}}class sy{constructor(e){this.target=e.target,this.reader_=e.reader,this.writer_=e.writer}read(){return this.reader_(this.target.read())}write(e){this.writer_(this.target,e)}inject(e){this.write(this.reader_(e))}}function ny(i,e){var t;const r=i.accept(e.target.read(),e.params);if(nt(r))return null;const a={target:e.target,initialValue:r.initialValue,params:r.params},s=ut(e.params,d=>({disabled:d.optional.boolean,hidden:d.optional.boolean,label:d.optional.string,tag:d.optional.string})),n=i.binding.reader(a),o=i.binding.constraint?i.binding.constraint(a):void 0,c=new sy({reader:n,target:e.target,writer:i.binding.writer(a)}),l=new G0(ot(n(r.initialValue),{constraint:o,equals:i.binding.equals}),c),h=i.controller({constraint:o,document:e.document,initialValue:r.initialValue,params:r.params,value:l,viewProps:Vi.create({disabled:s?.disabled,hidden:s?.hidden})});return new a1(e.document,{blade:da(),props:Fe.fromObject({label:"label"in e.params?(t=s?.label)!==null&&t!==void 0?t:null:e.target.key}),tag:s?.tag,value:l,valueController:h})}class oy{constructor(e){this.target=e.target,this.reader_=e.reader}read(){return this.reader_(this.target.read())}}function ly(i,e){return e===0?new B1:new z1(i,e??es.monitor.defaultInterval)}function cy(i,e){var t,r,a;const s=i.accept(e.target.read(),e.params);if(nt(s))return null;const n={target:e.target,initialValue:s.initialValue,params:s.params},o=ut(e.params,p=>({bufferSize:p.optional.number,disabled:p.optional.boolean,hidden:p.optional.boolean,interval:p.optional.number,label:p.optional.string})),c=i.binding.reader(n),l=(r=(t=o?.bufferSize)!==null&&t!==void 0?t:i.binding.defaultBufferSize&&i.binding.defaultBufferSize(s.params))!==null&&r!==void 0?r:1,h=new c1({binding:new oy({reader:c,target:e.target}),bufferSize:l,ticker:ly(e.document,o?.interval)}),d=i.controller({document:e.document,params:s.params,value:h,viewProps:Vi.create({disabled:o?.disabled,hidden:o?.hidden})});return d.viewProps.bindDisabled(h.ticker),d.viewProps.handleDispose(()=>{h.ticker.dispose()}),new u1(e.document,{blade:da(),props:Fe.fromObject({label:"label"in e.params?(a=o?.label)!==null&&a!==void 0?a:null:e.target.key}),value:h,valueController:d})}class hy{constructor(e){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=e}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e,t){if(!eb(t.core))throw pt.notCompatible(e,t.id);t.type==="blade"?this.pluginsMap_.blades.unshift(t):t.type==="input"?this.pluginsMap_.inputs.unshift(t):t.type==="monitor"&&this.pluginsMap_.monitors.unshift(t)}createInput_(e,t,r){return this.pluginsMap_.inputs.reduce((a,s)=>a??ny(s,{document:e,target:t,params:r}),null)}createMonitor_(e,t,r){return this.pluginsMap_.monitors.reduce((a,s)=>a??cy(s,{document:e,params:r,target:t}),null)}createBinding(e,t,r){const a=t.read();if(nt(a))throw new pt({context:{key:t.key},type:"nomatchingcontroller"});const s=this.createInput_(e,t,r);if(s)return s;const n=this.createMonitor_(e,t,r);if(n)return n;throw new pt({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const r=this.pluginsMap_.blades.reduce((a,s)=>a??V1(s,{document:e,params:t}),null);if(!r)throw new pt({type:"nomatchingview",context:{params:t}});return r}createInputBindingApi_(e){const t=this.pluginsMap_.inputs.reduce((r,a)=>{var s,n;return r||((n=(s=a.api)===null||s===void 0?void 0:s.call(a,{controller:e}))!==null&&n!==void 0?n:null)},null);return this.apiCache_.add(e,t??new ka(e))}createMonitorBindingApi_(e){const t=this.pluginsMap_.monitors.reduce((r,a)=>{var s,n;return r||((n=(s=a.api)===null||s===void 0?void 0:s.call(a,{controller:e}))!==null&&n!==void 0?n:null)},null);return this.apiCache_.add(e,t??new ka(e))}createBindingApi(e){if(this.apiCache_.has(e))return this.apiCache_.get(e);if(s1(e))return this.createInputBindingApi_(e);if(d1(e))return this.createMonitorBindingApi_(e);throw pt.shouldNeverHappen()}createApi(e){if(this.apiCache_.has(e))return this.apiCache_.get(e);if(r1(e))return this.createBindingApi(e);const t=this.pluginsMap_.blades.reduce((r,a)=>r??a.api({controller:e,pool:this}),null);if(!t)throw pt.shouldNeverHappen();return this.apiCache_.add(e,t)}}const uy=new ay;function dy(){const i=new hy(uy);return[kx,Hx,Xx,Yx,Ax,Mx,wx,vx,ab,$x,ry,iy,v1,R1,gu].forEach(e=>{i.register("core",e)}),i}class py extends Er{constructor(e){super(e),this.emitter_=new _t,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new Xa(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get options(){return this.controller.valueController.props.get("options")}set options(e){this.controller.valueController.props.set("options",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}class fy extends Er{}class my extends Er{constructor(e){super(e),this.emitter_=new _t,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new Xa(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(e){this.controller.valueController.sliderController.props.set("max",e)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(e){this.controller.valueController.sliderController.props.set("min",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}class gy extends Er{constructor(e){super(e),this.emitter_=new _t,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new Xa(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(e){this.controller.valueController.props.set("formatter",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,a=>{r(a)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}const vy=(function(){return{id:"list",type:"blade",core:ua,accept(i){const e=ut(i,t=>({options:t.required.custom(Za),value:t.required.raw,view:t.required.constant("list"),label:t.optional.string}));return e?{params:e}:null},controller(i){const e=new Ka(fl(i.params.options)),t=ot(i.params.value,{constraint:e}),r=new ir(i.document,{props:new Fe({options:e.values.value("options")}),value:t,viewProps:i.viewProps});return new wr(i.document,{blade:i.blade,props:Fe.fromObject({label:i.params.label}),value:t,valueController:r})},api(i){return!(i.controller instanceof wr)||!(i.controller.valueController instanceof ir)?null:new py(i.controller)}}})();class _y extends fu{constructor(e,t){super(e,t)}get element(){return this.controller.view.element}}class by extends Oo{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const ph=Ge("spr");class xy{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ph()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("hr");r.classList.add(ph("r")),this.element.appendChild(r)}}class fh extends Qs{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new xy(e,{viewProps:t.viewProps})}))}}const yy={id:"separator",type:"blade",core:ua,accept(i){const e=ut(i,t=>({view:t.required.constant("separator")}));return e?{params:e}:null},controller(i){return new fh(i.document,{blade:i.blade,viewProps:i.viewProps})},api(i){return i.controller instanceof fh?new fy(i.controller):null}},wy={id:"slider",type:"blade",core:ua,accept(i){const e=ut(i,t=>({max:t.required.number,min:t.required.number,view:t.required.constant("slider"),format:t.optional.function,label:t.optional.string,value:t.optional.number}));return e?{params:e}:null},controller(i){var e,t;const r=(e=i.params.value)!==null&&e!==void 0?e:0,a=new ja({max:i.params.max,min:i.params.min}),s=ot(r,{constraint:a}),n=new Gs(i.document,Object.assign(Object.assign({},yu({formatter:(t=i.params.format)!==null&&t!==void 0?t:k0,keyScale:ot(1),max:a.values.value("max"),min:a.values.value("min"),pointerScale:eu(i.params,r)})),{parser:Fi,value:s,viewProps:i.viewProps}));return new wr(i.document,{blade:i.blade,props:Fe.fromObject({label:i.params.label}),value:s,valueController:n})},api(i){return!(i.controller instanceof wr)||!(i.controller.valueController instanceof Gs)?null:new my(i.controller)}},My=(function(){return{id:"text",type:"blade",core:ua,accept(i){const e=ut(i,t=>({parse:t.required.function,value:t.required.raw,view:t.required.constant("text"),format:t.optional.function,label:t.optional.string}));return e?{params:e}:null},controller(i){var e;const t=ot(i.params.value),r=new Va(i.document,{parser:i.params.parse,props:Fe.fromObject({formatter:(e=i.params.format)!==null&&e!==void 0?e:(a=>String(a))}),value:t,viewProps:i.viewProps});return new wr(i.document,{blade:i.blade,props:Fe.fromObject({label:i.params.label}),value:t,valueController:r})},api(i){return!(i.controller instanceof wr)||!(i.controller.valueController instanceof Va)?null:new gy(i.controller)}}})();function Sy(i){const e=i.createElement("div");return e.classList.add(Ge("dfw")()),i.body&&i.body.appendChild(e),e}function Ey(i,e,t){if(i.querySelector(`style[data-tp-style=${e}]`))return;const r=i.createElement("style");r.dataset.tpStyle=e,r.textContent=t,i.head.appendChild(r)}class Ty extends _y{constructor(e){var t,r;const a=e??{},s=(t=a.document)!==null&&t!==void 0?t:Z0(),n=dy(),o=new by(s,{expanded:a.expanded,blade:da(),props:Fe.fromObject({title:a.title}),viewProps:Vi.create()});super(o,n),this.pool_=n,this.containerElem_=(r=a.container)!==null&&r!==void 0?r:Sy(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!a.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw pt.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw pt.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){e.css&&Ey(this.document,`plugin-${e.id}`,e.css),("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(t=>{this.pool_.register(e.id,t)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[vy,yy,wy,gu,My]})}}new pu("4.0.5");const Bo={linear:i=>i,easeIn:i=>i*i,easeOut:i=>1-(1-i)*(1-i),easeInOut:i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2},Ku=Object.keys(Bo),Cy=.92,Ay=.4,Py=20;function Ry(i){const e=new Yr,t=Math.max(1,Math.floor(i.floors)),r=Math.max(1,i.totalHeight),a=Math.max(.1,Math.min(i.radiusMin,i.radiusMax)),s=Math.max(a+.1,Math.max(i.radiusMin,i.radiusMax)),n=i.twistMin,o=i.twistMax,c=Ws(i.scaleEasing),l=Ws(i.twistEasing),h=r/t,d=gr.clamp(typeof i.slabGap=="number"?i.slabGap:Ay,0,.95),p=h*(1-d),f=h-p,v=new Jo({color:0,wireframe:!0});for(let m=0;m<t;m+=1){const u=t===1?0:m/(t-1||1),E=gr.lerp(a,s,c(u)),S=gr.lerp(n,o,l(u)),A=Uy({height:p,topRadius:E*Cy,bottomRadius:E}),L=new Ii(A,v);L.position.y=-r/2+h*m+h/2,L.rotation.y=S,e.add(L)}e.userData.sharedMaterial=v,e.userData.meta={floors:t,totalHeight:r,floorHeight:h};const b=r/2-f/2+Py;return e.position.y=b,e}function Dy(i){i&&(i.traverse(e=>{e.isMesh&&e.geometry?.dispose?.()}),i.userData.sharedMaterial?.dispose?.())}function Ly(i,e){const t=gr.clamp(e,0,1),r=Math.max(.1,Math.min(i.radiusMin,i.radiusMax)),a=Math.max(r+.1,Math.max(i.radiusMin,i.radiusMax)),s=i.twistMin,n=i.twistMax,o=Ws(i.scaleEasing),c=Ws(i.twistEasing);return{radius:gr.lerp(r,a,o(t)),twist:gr.lerp(s,n,c(t))}}function Ws(i){return Bo[i]||Bo.linear}function Uy({height:i,topRadius:e,bottomRadius:t}){const r=t*2,a=t*2,s=new la(r,i,a,1,1,1);if(e!==t){const n=e/t,o=s.attributes.position;for(let c=0;c<o.count;c+=1)o.getY(c)>0&&(o.setX(c,o.getX(c)*n),o.setZ(c,o.getZ(c)*n));o.needsUpdate=!0}return s}const Cl=document.getElementById("app"),fa=new G_({antialias:!0});fa.outputColorSpace=Wt;fa.setPixelRatio(Math.min(window.devicePixelRatio,2));Cl.appendChild(fa.domElement);const Cr=new Bp;Cr.background=new He(15981765);const Ha=new $t(50,window.innerWidth/window.innerHeight,.1,1e3);Ha.position.set(80,90,160);const tn=new j_(Ha,fa.domElement);tn.enableDamping=!0;Cr.add(new $p(12371158,.7));const Zu=new zh(16777215,.9);Zu.position.set(60,120,140);Cr.add(Zu);const $u=new zh(10070271,.4);$u.position.set(-80,60,-40);Cr.add($u);const Pa=new ef(500,20,12886914,14267798);Pa.position.y=-1;const mh=i=>{i.transparent=!0,i.opacity=.12,i.depthWrite=!1};Array.isArray(Pa.material)?Pa.material.forEach(mh):mh(Pa.material);Cr.add(Pa);const js=new Yr;Cr.add(js);let Xr=null;const Al=document.createElement("div");Al.className="metrics-card";Cl.appendChild(Al);const Pl=document.createElement("div");Pl.className="pane-card";Cl.appendChild(Pl);const je={floors:28,totalHeight:160,slabGap:.4,radiusMin:4,radiusMax:18,twistMin:0,twistMax:Math.PI,scaleEasing:"easeOut",twistEasing:"easeInOut",bottomColor:"#1152b6",topColor:"#f25f3a",autoSpin:!0,spinSpeed:.2},rr=new Ty({title:"Tower Controls",container:Pl});tn.target.set(0,je.totalHeight*.35,0);tn.update();rr.addBinding(je,"floors",{min:3,max:150,step:1});rr.addBinding(je,"totalHeight",{min:20,max:500,step:1,label:"height"});rr.addBinding(je,"slabGap",{min:0,max:.85,step:.01,label:"slab gap"});const Rl=rr.addFolder({title:"Scaling"}),Ny=Rl.addBinding(je,"radiusMin",{min:1,max:40,step:.1,label:"radius min"}),Iy=Rl.addBinding(je,"radiusMax",{min:1,max:40,step:.1,label:"radius max"});Rl.addBinding(je,"scaleEasing",{options:Ku.reduce((i,e)=>({...i,[e]:e}),{}),label:"gradient"});const Dl=rr.addFolder({title:"Twist"}),Oy=Dl.addBinding(je,"twistMin",{min:-Math.PI*2,max:Math.PI*2,step:.01,label:"twist min"}),Fy=Dl.addBinding(je,"twistMax",{min:-Math.PI*2,max:Math.PI*2,step:.01,label:"twist max"});Dl.addBinding(je,"twistEasing",{options:Ku.reduce((i,e)=>({...i,[e]:e}),{}),label:"gradient"});const Ju=rr.addFolder({title:"Gradient Colors"});Ju.addBinding(je,"bottomColor",{view:"color"});Ju.addBinding(je,"topColor",{view:"color"});const Qu=rr.addFolder({title:"Motion"});Qu.addBinding(je,"autoSpin",{label:"auto rotate"});Qu.addBinding(je,"spinSpeed",{min:-1,max:1,step:.01,label:"spin speed"});rr.on("change",()=>{ky(),ed()});function ky(){if(je.radiusMin>je.radiusMax){const i=je.radiusMin;je.radiusMin=je.radiusMax,je.radiusMax=i,Ny.refresh(),Iy.refresh()}if(je.twistMin>je.twistMax){const i=je.twistMin;je.twistMin=je.twistMax,je.twistMax=i,Oy.refresh(),Fy.refresh()}}function ed(){Xr&&(js.remove(Xr),Dy(Xr)),Xr=Ry(je),js.add(Xr),Vy()}function Vy(){const i=Math.max(1,Math.floor(je.floors)),e=je.totalHeight/i,t=Ly(je,1);Al.innerHTML=`
    <span>Floors: ${i}</span>
    <span>Floor height: ${e.toFixed(2)}m</span>
    <span>Top radius: ${t.radius.toFixed(2)}m</span>
  `}function td(){const i=window.innerWidth,e=window.innerHeight;fa.setSize(i,e),Ha.aspect=i/e,Ha.updateProjectionMatrix()}window.addEventListener("resize",td);td();ed();const By=new Qp;function id(){const i=By.getDelta();je.autoSpin&&Xr&&(js.rotation.y+=i*je.spinSpeed),tn.update(),fa.render(Cr,Ha),requestAnimationFrame(id)}id();
