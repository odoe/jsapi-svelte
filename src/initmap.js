export async function initmap() {
  const [Map, MapView] = await Promise.all([
    import("esri/Map"),
    import("esri/views/MapView")
  ]);

  const map = new Map({
    basemap: "streets"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
    center: [15, 65]
  });

  return view;
}
