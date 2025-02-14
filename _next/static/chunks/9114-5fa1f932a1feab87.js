"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9114],{73860:(e,t,n)=>{n.d(t,{Dp:()=>c,E9:()=>l,mA:()=>i});var o=n(60513);n(89114);let a=e=>e?"".concat(e,"mm"):void 0,c=(e,t,n)=>["".concat(a(e)," Focal Length"),(0,o.du)(null!=n?n:t.length)].join(" "),l=e=>"Photos shot at ".concat(a(e)),i=(e,t,n,a)=>(0,o.wF)(e,void 0,t,n,a)},94418:(e,t,n)=>{n.d(t,{GS:()=>a,p3:()=>o,tn:()=>c});let o=["title","caption","tags","semantic"],a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=e.trim().toLocaleLowerCase();return"none"===t?[]:"all"===t?o:t.toLocaleLowerCase().split(",").map(e=>e.trim()).filter(e=>o.includes(e))},c=e=>{var t,n;let o=e.includes("Title")?e.match(/^[`'"]*Title: ["']*(.*?)["']*[ ]*Caption: ["']*(.*?)\.*["']*[`'"]*$/):e.match(/^(.*?): (.*?)$/);return{title:null!==(t=null==o?void 0:o[1])&&void 0!==t?t:"",caption:null!==(n=null==o?void 0:o[2])&&void 0!==n?n:""}}},60513:(e,t,n)=>{n.d(t,{Kl:()=>_,PT:()=>O,RS:()=>d,Yu:()=>E,ZQ:()=>m,_S:()=>R,bR:()=>r,dB:()=>U,du:()=>p,hY:()=>I,mH:()=>P,mr:()=>g,qS:()=>L,qg:()=>s,sn:()=>u,uk:()=>v,wF:()=>T}),n(73860),n(94806);var o=n(8136);n(89114);var a=n(411);n(52973);var c=n(54074),l=n(38155),i=n(64267);let r=new Date("2024-06-16"),d=(o.dn,48),s=["image/jpg","image/jpeg","image/png"],v=e=>{var t,n;return null!==(n=null!==(t=e.caption)&&void 0!==t?t:e.title)&&void 0!==n?n:""},_=(e,t)=>{let n=t.findIndex(t=>t.id===e.id);return n>0?t[n-1]:void 0},E=(e,t)=>{let n=t.findIndex(t=>t.id===e.id);return n<t.length-1?t[n+1]:void 0};JSON.parse(i.env.PHOTO_ID_FORWARDING_TABLE||"{}");let u=(e,t)=>e.title?e.title:t&&(e.takenAt||e.createdAt)?(0,a.Yq)(e.takenAt||e.createdAt,"tiny"):"Untitled",g=e=>e.semanticDescription||u(e),h=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return t?1===e?"Photo":"Photos":1===e?"photo":"photos"},p=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=arguments.length>2?arguments[2]:void 0;return t?"(".concat(e," ").concat(h(e,n),")"):"".concat(e," ").concat(h(e,n))},m=e=>'Are you sure you want to delete "'.concat(u(e),'?"'),T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return n?L(e,a).description.toUpperCase():[null!=o?o:e.length,t,h(null!=o?o:e.length,!1)].join(" ")},A=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DESC";return[...e].sort((e,n)=>"DESC"===t?n.takenAt.getTime()-e.takenAt.getTime():e.takenAt.getTime()-n.takenAt.getTime())},L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n="",o="",c="";if(t||e.length>0){var l,i;let r=A(e);c=(n=(0,a.Wq)(null!==(l=null==t?void 0:t.start)&&void 0!==l?l:r[e.length-1].takenAtNaive,"short"))===(o=(0,a.Wq)(null!==(i=null==t?void 0:t.end)&&void 0!==i?i:r[0].takenAtNaive,"short"))?n:"".concat(n,"–").concat(o)}return{start:n,end:o,description:c}},S=e=>!!e.make&&!!e.model,C=e=>!!e.focalLength||!!e.focalLengthIn35MmFormat||!!e.fNumberFormatted||!!e.isoFormatted||!!e.exposureTimeFormatted||!!e.exposureCompensationFormatted,I=e=>o.cd&&S(e),R=e=>o.cd&&C(e),P=e=>{var t,n;return(null!==(t=e.caption)&&void 0!==t?t:"").split(" ").concat((null!==(n=e.semanticDescription)&&void 0!==n?n:"").split(" ")).filter(Boolean).map(e=>e.toLocaleLowerCase())},O=e=>e.title?"".concat((0,c.y9)(e.title),".").concat(e.extension):e.url.split("/").pop()||"download",U=e=>(0,l.Y)(e.updatedAt,new Date("2024-05-07"))},94806:(e,t,n)=>{n.d(t,{No:()=>a,Y:()=>l});var o=n(8136);let a=3840,c=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:75,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.C1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=new URL("".concat(a,"/_next/image"));return l.searchParams.append("url",e),l.searchParams.append("w",t.toString()),l.searchParams.append("q",n.toString()),c&&o.SE&&l.searchParams.append(o.BX,o.SE),l.toString()},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return c(e,640,90,void 0,t)}},8136:(e,t,n)=>{n.d(t,{BX:()=>g,C1:()=>m,KC:()=>w,KJ:()=>u,Mt:()=>b,SE:()=>h,Sl:()=>s,_X:()=>X,aB:()=>$,cd:()=>H,dn:()=>j,e4:()=>A,e6:()=>F,kI:()=>W,kX:()=>T,mm:()=>N,ot:()=>D,q3:()=>M});var o,a,c,l,i=n(94418),r=n(10080),d=n(64267);let s=void 0,v="20ad4318596d1ef0946c527858b9b74237161029";d.env.VERCEL_PROJECT_PRODUCTION_URL;let _="jak-git-main-tobias-schmanns-projects.vercel.app",E="main";_&&E&&_.split("-git-".concat(E,"-"))[0];let u=!1,g="x-vercel-protection-bypass",h=d.env.VERCEL_AUTOMATION_BYPASS_SECRET,p="jak-coin.com",m=null===(o=(0,r.rP)(p))||void 0===o?void 0:o.toLocaleLowerCase();(0,r.XK)(p);let T=d.env.NEXT_PUBLIC_SITE_ABOUT,A=!0,L=!!d.env.POSTGRES_URL,S="1"!==d.env.DISABLE_POSTGRES_SSL,C=!!d.env.KV_URL,I=!!d.env.BLOB_READ_WRITE_TOKEN,R=!!d.env.NEXT_PUBLIC_CLOUDFLARE_R2_BUCKET&&!!d.env.NEXT_PUBLIC_CLOUDFLARE_R2_ACCOUNT_ID&&!!d.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_DOMAIN,P=R&&!!d.env.CLOUDFLARE_R2_ACCESS_KEY&&!!d.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,O=!!d.env.NEXT_PUBLIC_AWS_S3_BUCKET&&!!d.env.NEXT_PUBLIC_AWS_S3_REGION,U=O&&!!d.env.AWS_S3_ACCESS_KEY&&!!d.env.AWS_S3_SECRET_ACCESS_KEY,f=[I,P,U].filter(Boolean).length>1,w=d.env.NEXT_PUBLIC_STORAGE_PREFERENCE||(R?"cloudflare-r2":O?"aws-s3":"vercel-blob"),D="1"===d.env.NEXT_PUBLIC_GRID_HOMEPAGE,N="1"===d.env.NEXT_PUBLIC_PRESERVE_ORIGINAL_UPLOADS||"1"===d.env.NEXT_PUBLIC_PRO_MODE,B="1"===d.env.NEXT_PUBLIC_STATICALLY_OPTIMIZE_PHOTOS||"1"===d.env.NEXT_PUBLIC_STATICALLY_OPTIMIZE_PAGES,G="1"===d.env.NEXT_PUBLIC_STATICALLY_OPTIMIZE_PHOTO_OG_IMAGES||"1"===d.env.NEXT_PUBLIC_STATICALLY_OPTIMIZE_OG_IMAGES,y="1"===d.env.NEXT_PUBLIC_STATICALLY_OPTIMIZE_PHOTO_CATEGORIES,M="1"===d.env.NEXT_PUBLIC_MATTE_PHOTOS,X="1"!==d.env.NEXT_PUBLIC_BLUR_DISABLED,b=!!d.env.OPENAI_SECRET_KEY,x=(0,i.GS)(d.env.AI_TEXT_AUTO_GENERATED_FIELDS),k="1"!==d.env.NEXT_PUBLIC_IGNORE_PRIORITY_ORDER,F=!0,Y="1"!==d.env.NEXT_PUBLIC_HIDE_REPO_LINK,$=!1,H=!1,W=d.env.NEXT_PUBLIC_GRID_ASPECT_RATIO?parseFloat(d.env.NEXT_PUBLIC_GRID_ASPECT_RATIO):1,K="BOTTOM"===(null!==(a=d.env.NEXT_PUBLIC_OG_TEXT_ALIGNMENT)&&void 0!==a?a:"").toUpperCase();d.env.ADMIN_DEBUG_TOOLS;let q="1"===d.env.NEXT_PUBLIC_SHOW_LARGE_THUMBNAILS,j=W<=1&&!q,V={hasDatabase:L,isPostgresSslEnabled:S,hasVercelPostgres:/\/verceldb\?/.test(null!==(c=d.env.POSTGRES_URL)&&void 0!==c?c:"")||/\.vercel-storage\.com\//.test(null!==(l=d.env.POSTGRES_URL)&&void 0!==l?l:""),hasVercelKv:C,hasVercelBlobStorage:I,hasCloudflareR2Storage:P,hasAwsS3Storage:U,hasStorageProvider:I||P||U,hasMultipleStorageProviders:f,currentStorage:w,hasAuthSecret:!!d.env.AUTH_SECRET,hasAdminUser:!!d.env.ADMIN_EMAIL&&!!d.env.ADMIN_PASSWORD,hasDomain:!0,hasTitle:!0,hasDescription:A,hasAbout:!!d.env.NEXT_PUBLIC_SITE_ABOUT,hasDefaultTheme:!0,showRepoLink:Y,showSocial:$,showFilmSimulations:!1,showExifInfo:H,isGridHomepageEnabled:D,defaultTheme:"dark",areOriginalUploadsPreserved:N,isStaticallyOptimized:B||G||y,arePhotosStaticallyOptimized:B,arePhotoOGImagesStaticallyOptimized:G,arePhotoCategoriesStaticallyOptimized:y,arePhotosMatted:M,isBlurEnabled:X,isGeoPrivacyEnabled:!0,isAiTextGenerationEnabled:b,aiTextAutoGeneratedFields:d.env.AI_TEXT_AUTO_GENERATED_FIELDS?0===x.length?["none"]:x:["all"],hasAiTextAutoGeneratedFields:!!d.env.AI_TEXT_AUTO_GENERATED_FIELDS,isPriorityOrderEnabled:k,isPublicApiEnabled:!0,arePublicDownloadsEnabled:F,isOgTextBottomAligned:K,gridAspectRatio:W,hasGridAspectRatio:!!d.env.NEXT_PUBLIC_GRID_ASPECT_RATIO,gridDensity:j,hasGridDensityPreference:!!d.env.NEXT_PUBLIC_SHOW_LARGE_THUMBNAILS,baseUrl:m,commitSha:v?v.slice(0,7):void 0,commitMessage:"add solana footer"};V.hasDatabase&&V.hasStorageProvider&&V.hasAuthSecret&&V.hasAdminUser},89114:(e,t,n)=>{n.d(t,{$n:()=>v,B5:()=>N,Bn:()=>Y,DL:()=>ei,ED:()=>er,EI:()=>X,Hv:()=>ec,IX:()=>el,Nj:()=>R,OM:()=>f,WA:()=>H,WG:()=>ea,WR:()=>B,X_:()=>E,YE:()=>L,Yy:()=>M,em:()=>ed,f8:()=>es,fO:()=>l,fk:()=>T,fm:()=>_,hg:()=>P,iY:()=>et,in:()=>y,iy:()=>s,k4:()=>m,lb:()=>D,nA:()=>A,ok:()=>eo,qJ:()=>U,rX:()=>b,se:()=>en,t3:()=>i,u7:()=>$,vm:()=>S,wX:()=>W,wx:()=>G,xF:()=>F,xH:()=>x,y8:()=>C,zU:()=>k});var o=n(8136),a=n(54074),c=n(73905);let l="/",i="/grid",r="/feed",d="/admin",s="/sign-in",v="/og",_=o.ot?l:i,E=o.ot?r:l,u="/tag",g="/shot-on",h="/film",p="/focal",m="".concat(d,"/photos"),T="".concat(d,"/outdated"),A="".concat(d,"/uploads"),L="".concat(d,"/tags"),S="".concat(d,"/configuration"),C="".concat(d,"/baseline"),I="".concat("/api","/storage"),R="".concat(I,"/vercel-blob"),P="".concat(I,"/presigned-url"),O=[d,m,A,L,S];[...O],o.C1;let U=e=>"".concat(A,"/").concat(encodeURIComponent(e)),f=e=>"".concat(m,"/").concat(w(e),"/").concat("edit"),w=e=>"string"==typeof e?e:e.id,D=e=>{let{photo:t,tag:n,camera:o,simulation:a,focal:l}=e;return"string"!=typeof t&&t.hidden?"".concat(N(c.u_),"/").concat(w(t)):n?"".concat(N(n),"/").concat(w(t)):o?"".concat(B(o),"/").concat(w(t)):a?"".concat(G(a),"/").concat(w(t)):l?"".concat(y(l),"/").concat(w(t)):"".concat("/p","/").concat(w(t))},N=e=>"".concat(u,"/").concat(e),B=e=>{let{make:t,model:n}=e;return"".concat(g,"/").concat((0,a.y9)(t,!0),"/").concat((0,a.y9)(n,!0))},G=e=>"".concat(h,"/").concat(e),y=e=>"".concat(p,"/").concat(e,"mm"),M=e=>"".concat(o.C1).concat(D(e)),X=e=>"".concat(o.C1).concat(N(e)),b=e=>"".concat(o.C1).concat(B(e)),x=e=>"".concat(o.C1).concat(G(e)),k=e=>"".concat(o.C1).concat(y(e)),F=e=>"".concat(M({photo:e}),"/image"),Y=e=>"".concat(X(e),"/image"),$=e=>"".concat(b(e),"/image"),H=e=>"".concat(x(e),"/image"),W=e=>"".concat(k(e),"/image"),K=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp("^".concat("/p","/[^/]+/?$")).test(e)},q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp("^".concat(u,"/[^/]+/?$")).test(e)},j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp("^".concat(u,"/[^/]+/[^/]+/?$")).test(e)},V=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp("^".concat(g,"/[^/]+/[^/]+/?$")).test(e)},z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp("^".concat(g,"/[^/]+/[^/]+/[^/]+/?$")).test(e)},Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp("^".concat(h,"/[^/]+/?$")).test(e)},J=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp("^".concat(h,"/[^/]+/[^/]+/?$")).test(e)},Q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp("^".concat(p,"/[^/]+/?$")).test(e)},ee=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp("^".concat(p,"/[^/]+/[^/]+/?$")).test(e)},et=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return e.toLowerCase().startsWith(t)},en=e=>et(e,i),eo=e=>et(e,r),ea=e=>et(e,s),ec=e=>et(e,d),el=e=>O.some(t=>t===e),ei=e=>et(e,S),er=e=>et(e,d)||et(e,N(c.u_))||et(e,v),ed=function(){var e,t,n,o,a,c,l,i,r,d;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",v=null===(e=s.match(new RegExp("^".concat("/p","/([^/]+)"))))||void 0===e?void 0:e[1],_=null===(t=s.match(new RegExp("^".concat(u,"/[^/]+/([^/]+)"))))||void 0===t?void 0:t[1],E=null===(n=s.match(new RegExp("^".concat(g,"/[^/]+/[^/]+/([^/]+)"))))||void 0===n?void 0:n[1],m=null===(o=s.match(new RegExp("^".concat(h,"/[^/]+/([^/]+)"))))||void 0===o?void 0:o[1],T=null===(a=s.match(new RegExp("^".concat(p,"/[0-9]+mm/([^/]+)"))))||void 0===a?void 0:a[1],A=null===(c=s.match(new RegExp("^".concat(u,"/([^/]+)"))))||void 0===c?void 0:c[1],L=null===(l=s.match(new RegExp("^".concat(g,"/([^/]+)"))))||void 0===l?void 0:l[1],S=null===(i=s.match(new RegExp("^".concat(g,"/[^/]+/([^/]+)"))))||void 0===i?void 0:i[1],C=null===(r=s.match(new RegExp("^".concat(h,"/([^/]+)"))))||void 0===r?void 0:r[1],I=null===(d=s.match(new RegExp("^".concat(p,"/([0-9]+)mm"))))||void 0===d?void 0:d[1];return{photoId:v||_||E||m||T,tag:A,camera:L&&S?{make:L,model:S}:void 0,simulation:C,focal:I?parseInt(I):void 0}},es=e=>{let{photoId:t,tag:n,camera:o,simulation:a,focal:c}=ed(e);return t&&K(e)||n&&q(e)||o&&V(e)||a&&Z(e)||c&&Q(e)?l:n&&j(e)?N(n):o&&z(e)?B(o):a&&J(e)?G(a):c&&ee(e)?y(c):void 0}},73905:(e,t,n)=>{n.d(t,{E0:()=>L,Gx:()=>l,MP:()=>p,_3:()=>r,ag:()=>A,cg:()=>v,pV:()=>d,sF:()=>s,sV:()=>m,uO:()=>_,u_:()=>i,vp:()=>h,zr:()=>g});var o=n(60513),a=n(89114),c=n(54074);let l="favs",i="hidden",r=e=>(0,c.kR)(null==e?void 0:e.replaceAll("-"," ")),d=e=>{var t;let n=(null!==(t=(0,c.P1)(e))&&void 0!==t?t:[]).filter(e=>h(e)||T(e)).map(e=>e.toLocaleUpperCase());return n.length?"Reserved tags: ".concat(n.join(", ").toLocaleLowerCase()):void 0},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return[r(e),(0,o.du)(null!=n?n:t.length)].join(" ")},v=e=>h(e)?"Favorite photos":"Photos tagged '".concat(r(e),"'"),_=(e,t)=>e.filter(e=>e!==t).sort((e,t)=>h(e)?-1:e.localeCompare(t)),E=(e,t)=>e.filter(e=>{let{tag:n}=e;return n!==t}).sort((e,t)=>{let{tag:n}=e,{tag:o}=t;return h(n)?-1:n.localeCompare(o)}),u=e=>E(e,l),g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return(0,o.wF)(e,"tagged",t,n,a)},h=e=>e.toLocaleLowerCase()===l,p=e=>{let{tags:t}=e;return t.some(h)},m=e=>(0,a.em)(e).tag===l,T=e=>e.toLowerCase()===i,A=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t>0?e.filter(e=>{let{tag:t}=e;return t===l}).concat({tag:i,count:t}).concat(e.filter(e=>{let{tag:t}=e;return t!==l})):e},L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return u(e).map(e=>{let{tag:t,count:n}=e;return{value:t,annotation:(0,c.B4)(n),annotationAria:(0,c.l4)(n,"tagged")}})}},411:(e,t,n)=>{n.d(t,{Wq:()=>_,Yq:()=>v,ew:()=>g,r:()=>u});var o=n(78910),a=n(1362),c=n(10422);let l="dd MMM yy",i="dd MMM yyyy",r="dd MMM yy h:mma",d="dd MMM yyyy h:mma",s="yyyy-MM-dd HH:mm:ss",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long",n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;switch(t){case"tiny":return a?"00 000 00":n?(0,c.qD)(e,n,l):(0,o.GP)(e,l);case"short":return a?"00 000 0000":n?(0,c.qD)(e,n,i):(0,o.GP)(e,i);case"medium":return a?"00 000 00 00:0000":n?(0,c.qD)(e,n,r):(0,o.GP)(e,r);default:return a?"00 000 0000 00:0000":n?(0,c.qD)(e,n,d):(0,o.GP)(e,d)}},_=(e,t)=>v((0,a.qg)(e,s,new Date),t),E=e=>e.toISOString().replace(/(\d{4}):(\d{2}):(\d{2}) (\d{2}:\d{2}:\d{2})/,"$1-$2-$3 $4"),u=()=>E(new Date),g=()=>(0,o.GP)(new Date,s)},52973:(e,t,n)=>{n(47141)},54074:(e,t,n)=>{n.d(t,{B4:()=>i,P1:()=>o,kR:()=>c,l4:()=>r,y9:()=>l});let o=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return e?e.split(",").map(e=>t?l(e):e.trim()):void 0},a=e=>e.charAt(0).toLocaleUpperCase()+e.slice(1),c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(" ").map(a).join(" ")},l=(e,t)=>e.trim().replaceAll(/[\s_–—]/gi,"-").replaceAll(/['"!@#$%^&*()_+=[\]{};:/?,.<>\\|`~]/gi,"").replaceAll(t?/([^a-z0-9-])/gi:/''/gi,"").toLocaleLowerCase(),i=e=>"\xd7 ".concat(e),r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"found",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"photo",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"s";return"".concat(t," in ").concat(e," ").concat(n).concat(1===e?o:a)}},10080:(e,t,n)=>{n.d(t,{XK:()=>o,lG:()=>c,rP:()=>a});let o=e=>e?e.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"").replace(/\/$/,""):void 0,a=e=>void 0!==e?(e.startsWith("http")?e:"https://".concat(e)).replace(/\/$/,""):void 0,c=async(e,t)=>{let n=await fetch(e).then(e=>e.blob()),o=window.URL.createObjectURL(n),a=document.createElement("a");a.href=o,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(o)}}}]);