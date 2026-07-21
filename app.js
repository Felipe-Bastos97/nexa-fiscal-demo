const clients = [
  {name:'Ana Martins', document:'***.482.***-**', service:'Consultoria técnica'},
  {name:'Bruno Almeida', document:'***.105.***-**', service:'Avaliação profissional'},
  {name:'Carla Nogueira', document:'***.739.***-**', service:'Atendimento especializado'},
  {name:'Diego Santos', document:'***.264.***-**', service:'Consultoria técnica'},
  {name:'Elisa Moreira', document:'***.918.***-**', service:'Atendimento especializado'},
  {name:'Fábio Cunha', document:'***.356.***-**', service:'Avaliação profissional'}
];
const records = [
  {date:'18/07/2026',client:'Ana Martins',doc:'DEMO-0127',value:180,status:'Concluída'},
  {date:'17/07/2026',client:'Bruno Almeida',doc:'DEMO-0126',value:220,status:'Concluída'},
  {date:'16/07/2026',client:'Carla Nogueira',doc:'RASC-0041',value:160,status:'Rascunho'},
  {date:'15/07/2026',client:'Diego Santos',doc:'DEMO-0125',value:240,status:'Concluída'},
  {date:'14/07/2026',client:'Elisa Moreira',doc:'CANC-0013',value:190,status:'Cancelada'},
  {date:'12/07/2026',client:'Fábio Cunha',doc:'DEMO-0124',value:150,status:'Concluída'}
];
const chartData={3:[['Mai',6200],['Jun',7100],['Jul',8150]],6:[['Fev',4400],['Mar',5600],['Abr',6200],['Mai',7000],['Jun',6200],['Jul',8150]],12:[['Ago',3800],['Set',4200],['Out',4050],['Nov',4600],['Dez',4400],['Jan',4700],['Fev',4400],['Mar',5600],['Abr',6200],['Mai',7000],['Jun',6200],['Jul',8150]]};
const money=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const badge=s=>`<span class="badge ${s.toLowerCase().replace('í','i')}">${s}</span>`;
function renderTable(target,data){document.querySelector(target).innerHTML=data.map(r=>`<tr><td>${r.date}</td><td>${r.client}</td><td>${r.doc}</td><td>${money(r.value)}</td><td>${badge(r.status)}</td></tr>`).join('')}
function renderChart(period=12){const data=chartData[period],max=Math.max(...data.map(x=>x[1]));document.querySelector('#chart').innerHTML=data.map(([label,value])=>`<div class="bar-wrap"><b>${(value/1000).toFixed(1).replace('.',',')} mil</b><div class="bar" style="height:${Math.round(value/max*82)}%" title="${money(value)}"></div><small>${label}</small></div>`).join('')}
function renderClients(filter=''){document.querySelector('#client-grid').innerHTML=clients.filter(c=>c.name.toLowerCase().includes(filter.toLowerCase())).map(c=>`<div class="client-card"><strong>${c.name}</strong><span>CPF protegido: ${c.document}</span><span>${c.service}</span></div>`).join('')||'<p>Nenhum cliente encontrado.</p>'}
function showView(id){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===id));const titles={dashboard:'Dashboard',pacientes:'Clientes',emitir:'Simular nota',historico:'Histórico'};document.querySelector('#page-title').textContent=titles[id];window.scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.go)));
document.querySelectorAll('[data-period]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-period]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');renderChart(Number(b.dataset.period))}));
document.querySelector('#search').addEventListener('input',e=>renderClients(e.target.value));
document.querySelector('#status-filter').addEventListener('change',e=>renderTable('#history-body',e.target.value==='Todos'?records:records.filter(r=>r.status===e.target.value)));
document.querySelector('#refresh').addEventListener('click',()=>{const toast=document.querySelector('#toast');toast.textContent='Dados demonstrativos atualizados';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)});
const dateInput=document.querySelector('#invoice-date');dateInput.value=new Date().toISOString().slice(0,10);
document.querySelector('#invoice-client').innerHTML=clients.map(c=>`<option>${c.name}</option>`).join('');
document.querySelector('#invoice-form').addEventListener('submit',e=>{e.preventDefault();const client=document.querySelector('#invoice-client').value,value=Number(document.querySelector('#invoice-value').value);document.querySelector('#preview-text').textContent=`Cliente: ${client} · Valor: ${money(value)} · Identificador: PREV-${String(Date.now()).slice(-6)}`;document.querySelector('#preview').hidden=false});
renderChart();renderClients();renderTable('#recent-body',records.slice(0,5));renderTable('#history-body',records);
