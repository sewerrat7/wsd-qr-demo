const inventory = [
{id:"WSD-001", item:"Modern Accent Chair", status:"Available", tier:"Tier 1", uses:5},
{id:"WSD-002", item:"Neutral Sofa", status:"In Use", tier:"Tier 2", uses:7},
{id:"WSD-003", item:"Dining Table", status:"Available", tier:"Tier 1", uses:4},
{id:"WSD-004", item:"Floor Lamp", status:"Maintenance", tier:"Tier 3", uses:9}
];

const rows = document.getElementById("rows");

inventory.forEach(item=>{
rows.innerHTML+=`
<tr>
<td>${item.id}</td>
<td>${item.item}</td>
<td>${item.status}</td>
<td>${item.tier}</td>
<td>${item.uses}</td>
</tr>
`;
});
