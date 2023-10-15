function initMap() {
    var embuGuacu = new google.maps.LatLng(-23.83287108977146, -46.816376088976426);
  
    var map = new google.maps.Map(document.getElementById('map'), {
      center: embuGuacu,
      zoom: 14,
      mapTypeId: 'satellite'
    });
  
var heatmapData = [
  {location: new google.maps.LatLng(-23.856940795805407, -46.831581166263916), weight: 1000},
  new google.maps.LatLng(-23.85979560935784, -46.829415924921584),
  {location: new google.maps.LatLng(-23.850487120292033, -46.8219794268916), weight: 2000},
  {location: new google.maps.LatLng(-23.852999588427927, -46.82318064574513), weight: 1200},
  {location: new google.maps.LatLng(-23.8543527861297, -46.8197703905933), weight: 1800},
  {location: new google.maps.LatLng(-23.84896466528253, -46.8201853949357), weight: 1000},
  {location: new google.maps.LatLng(-23.843486972691974, -46.81984602345714), weight: 1500},
  {location: new google.maps.LatLng(-23.834987177425607, -46.82207672916969), weight: 100},
  new google.maps.LatLng(-23.83078363050836, -46.825425139331934),
  {location: new google.maps.LatLng(-23.808180497462466, -46.844617226538006), weight: 1800},
  {location: new google.maps.LatLng(-23.807503659541545, -46.85033707241735), weight: 1799},
  {location: new google.maps.LatLng(-23.811809154437732, -46.86594007257632), weight: 1600},
  new google.maps.LatLng(-23.823471195652946, -46.87308554852547),
  {location: new google.maps.LatLng(-23.863369582618414, -46.842793402034545), weight: 2000},
  {location: new google.maps.LatLng(-23.868373723152366, -46.83850426469963), weight: 1500},
  {location: new google.maps.LatLng(-23.877668740370694, -46.85266260503957), weight: 1200},
  {location: new google.maps.LatLng(-23.888687244354422, -46.857867598559814), weight: 1800},
  new google.maps.LatLng(-23.90651288051743, -46.88005379175372),
  {location: new google.maps.LatLng(-23.92752467825273, -46.87222029576568), weight: 2000},
  {location: new google.maps.LatLng(-23.93241975558562, -46.865631247868556), weight: 1500},
  {location: new google.maps.LatLng(-23.932321387632253, -46.85530493037018), weight: 1200},
  {location: new google.maps.LatLng(-23.92935743895287, -46.83863856184136), weight: 1800},
  new google.maps.LatLng(-23.913216662860464, -46.82646320670955),
  {location: new google.maps.LatLng(-23.89804564810845, -46.82564251810513), weight: 1700},
  {location: new google.maps.LatLng(-23.893689747292488, -46.82315416811005), weight: 1596},
  {location: new google.maps.LatLng(-23.89181694224661, -46.81913335872327), weight: 1890},
  {location: new google.maps.LatLng(-23.83932574797739, -46.82732346043817), weight: 1800},
  new google.maps.LatLng(-23.841701550601446, -46.833012741268924),
  {location: new google.maps.LatLng(-23.82877649363121, -46.81321952472002), weight: 1890},
  {location: new google.maps.LatLng(-23.819586886216996, -46.829359520551385), weight: 1800},
  {location: new google.maps.LatLng(-23.814304619054493, -46.819218973854895), weight: 1799},
  {location: new google.maps.LatLng(-23.81034257997501, -46.837047799170016), weight: 1600},
  new google.maps.LatLng(-23.80589509721828, -46.837094178503655),
  {location: new google.maps.LatLng(-23.783766327219148, -46.81909803065099), weight: 1890},
  {location: new google.maps.LatLng(-23.784599382186276, -46.815760000565625), weight: 1800},
  {location: new google.maps.LatLng(-23.78659869232722, -46.81478893726806), weight: 1799},
  {location: new google.maps.LatLng(-23.785293590581105, -46.815760000565625), weight: 1600},
  new google.maps.LatLng(-23.785374799286114, -46.8157202436707),
  {location: new google.maps.LatLng(-23.780153001539126, -46.80409714642645), weight: 1890},
  {location: new google.maps.LatLng(-23.778958913593595, -46.80027358469229), weight: 1800},
  {location: new google.maps.LatLng(-23.778406846019614, -46.795396456716105), weight: 1799},
  {location: new google.maps.LatLng(-23.774283185664384, -46.79239238245046), weight: 1600},
  new google.maps.LatLng(-23.77599157503507, -46.793808588604705),
  {location: new google.maps.LatLng(-23.82555419071884, -46.81912667296357), weight: 1890},
  {location: new google.maps.LatLng(-23.830225900503276, -46.819430870597586), weight: 1800},
  {location: new google.maps.LatLng(-23.833640170249403, -46.81484866545785), weight: 1799},
  {location: new google.maps.LatLng(-23.83472272479497, -46.813483107655365), weight: 1600},
  new google.maps.LatLng(-23.838692014140044, -46.812299624261456),
  {location: new google.maps.LatLng(-23.833390348683906, -46.80905263115582), weight: 1890},
  {location: new google.maps.LatLng(-23.83670233333907, -46.80922651864067), weight: 1800},
  {location: new google.maps.LatLng(-23.83507325278296, -46.806479936870005), weight: 1799},
  {location: new google.maps.LatLng(-23.837305706382654, -46.80160490462423), weight: 1600},
  new google.maps.LatLng(-23.841299732477307, -46.80322883563098),
  {location: new google.maps.LatLng(-23.843905665101556, -46.82004613256068), weight: 1890},
  {location: new google.maps.LatLng(-23.838435778698525, -46.8258071789731), weight: 1800},
  {location: new google.maps.LatLng(-23.85017655426645, -46.81874271979477), weight: 1799},
  {location: new google.maps.LatLng(-23.83017811841866, -46.81942437087971), weight: 1600},
  new google.maps.LatLng(-23.83404484388634, -46.82399485460747),
  {location: new google.maps.LatLng(-23.812209899037587, -46.81418020094075), weight: 1890},
  {location: new google.maps.LatLng(-23.80838005924726, -46.81941286751806), weight: 1800},
  {location: new google.maps.LatLng(-23.80204076580263, -46.81288105603604), weight: 1799},
  {location: new google.maps.LatLng(-23.80102071939129, -46.81515947422533), weight: 1600},
  new google.maps.LatLng(-23.79436952622156, -46.8112436922042),
  {location: new google.maps.LatLng(-23.79116640750438, -46.798114853401785), weight: 1890},
  {location: new google.maps.LatLng(-23.78660463467669, -46.80024183756226), weight: 1800},
  {location: new google.maps.LatLng(-23.77851445093366, -46.79614321196123), weight: 1799},
  {location: new google.maps.LatLng(-23.7733532177065, -46.799841432541406), weight: 1600},
  new google.maps.LatLng(-23.77160551926724, -46.79445555735049),
  {location: new google.maps.LatLng(-23.830738358266125, -46.77231182628255), weight: 1890},
  {location: new google.maps.LatLng(-23.837215520964804, -46.777547497782884), weight: 1800},
  {location: new google.maps.LatLng(-23.8307383580751, -46.786216396989246), weight: 1799},
  {location: new google.maps.LatLng(-23.83615564360428, -46.79162373002533), weight: 1600},
  new google.maps.LatLng(-23.843094229278336, -46.80308989905616),
  ];
  
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData
  });
  heatmap.setMap(map);
}
