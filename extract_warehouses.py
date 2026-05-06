import osmium
import json
import gzip

# Archivo PBF de entrada
PBF_FILE = "app_cargo_sns/data/storage/geofabrik/colombia-latest.osm.pbf"
OUTPUT_FILE = "warehouses.json.gz"

class WarehouseHandler(osmium.SimpleHandler):
    def __init__(self):
        super(WarehouseHandler, self).__init__()
        self.warehouses = []

    def node(self, n):
        # Buscamos nodos (puntos) que tengan la etiqueta building=warehouse
        if 'building' in n.tags and n.tags['building'] == 'warehouse':
            name = n.tags.get('name', 'Bodega sin nombre')
            self.warehouses.append({
                'id': n.id,
                'name': name,
                'lat': n.location.lat,
                'lon': n.location.lon,
                'type': 'node'
            })

    def area(self, a):
        # Buscamos áreas (polígonos de edificios) que sean bodegas
        if 'building' in a.tags and a.tags['building'] == 'warehouse':
            name = a.tags.get('name', 'Bodega sin nombre')
            self.warehouses.append({
                'id': a.id,
                'name': name,
                'type': 'area'
            })

if __name__ == '__main__':
    print(f"Analizando el archivo {PBF_FILE}...")
    print("Extrayendo todas las bodegas...")
    
    # Inicializamos nuestro manejador
    handler = WarehouseHandler()
    
    # Procesamos el archivo. Esto puede tardar un par de minutos.
    handler.apply_file(PBF_FILE)
    
    print(f"Se encontraron {len(handler.warehouses)} bodegas/almacenes en total.")
    print(f"Comprimiendo y guardando los resultados en {OUTPUT_FILE}...")
    
    # Guardamos los resultados como JSON comprimido en GZIP para ahorrar mucho espacio
    with gzip.open(OUTPUT_FILE, 'wt', encoding='utf-8') as f:
        json.dump(handler.warehouses, f, ensure_ascii=False, indent=2)
        
    print("¡Proceso completado exitosamente!")
