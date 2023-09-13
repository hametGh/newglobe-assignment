(()=>{"use strict";const e=(e,n,t,i,a)=>{e[n]||(e[n]={academyId:n,malfunctioningDevices:[],unknownDevices:[]}),"UNHEALTHY"===i?e[n].malfunctioningDevices.push({serialNumber:t,usage:a}):e[n].unknownDevices.push({serialNumber:t,usage:a})};const n=()=>{return n=void 0,t=void 0,a=function*(){(e=>{const n=document.getElementById("result");0!==e.length?e.forEach((e=>{const t=document.createElement("details");t.className="m-2",t.innerHTML=`\n        <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">\n            <h2 class="font-medium flex-grow">Academy: ${e.academyId}</h2>\n            <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">${e.unknownDevices.length}</span>\n            <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">${e.malfunctioningDevices.length}</span>\n        </summary>`;const i=document.createElement("p");i.innerHTML='<p class="m-2">Malfunctioning Devices:<p>',e.malfunctioningDevices.forEach((e=>{const n=document.createElement("span");n.className="inline-flex m-1 items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10",n.innerHTML=`${e.serialNumber} - Usage: ${Math.round(100*e.usage)}%`,i.appendChild(n)}));const a=document.createElement("p");a.innerHTML='<p class="m-2">Unknown Devices:<p>',e.unknownDevices.forEach((e=>{const n=document.createElement("span");n.className="inline-flex m-1 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10",n.innerHTML=`${e.serialNumber}`,a.appendChild(n)})),e.unknownDevices.length>0&&t.appendChild(a),t.appendChild(i),n.appendChild(t)})):n.innerHTML="<p>No schools with battery issues found.</p>"})((n=>{const t=(e=>e.reduce(((e,n)=>{const t=`${n.academyId}/${n.serialNumber}`;return e[t]||(e[t]=[]),e[t].push(n),e}),{}))(n),i={};Object.entries(t).forEach((([n,t])=>{t.sort(((e,n)=>new Date(e.timestamp).getTime()-new Date(n.timestamp).getTime()));const{totalBatteryUsage:a,count:s}=(e=>{let n=0,t=0;for(let i=1;i<e.length;i++){const a=e[i-1],s=e[i];if(s.batteryLevel>a.batteryLevel)continue;t++;const r=Math.abs(new Date(s.timestamp).getTime()-new Date(a.timestamp).getTime())/36e5;n+=(a.batteryLevel-s.batteryLevel)/r*24}return{totalBatteryUsage:n,count:t}})(t),{academyId:r,serialNumber:c}=(e=>{const[n,t]=e.split("/");return{academyId:+n,serialNumber:t}})(n),o=a/s;s>=1&&o>.3&&e(i,+r,c,"UNHEALTHY",o),0===s&&0===a&&e(i,+r,c,"UNKNOWN",0)}));const a=Object.values(i);return a.sort(((e,n)=>n.malfunctioningDevices.length-e.malfunctioningDevices.length)),a})(yield fetch("https://hametGh.github.io/newglobe-assignment/data/battery-data.json").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))))},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{o(a.next(e))}catch(e){s(e)}}function c(e){try{o(a.throw(e))}catch(e){s(e)}}function o(n){var t;n.done?e(n.value):(t=n.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,c)}o((a=a.apply(n,t||[])).next())}));var n,t,i,a};document.addEventListener("DOMContentLoaded",(function(){n()}))})();