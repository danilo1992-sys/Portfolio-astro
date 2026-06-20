# 💡 **TiposCoordenadas**  

TiposCoordenadas es una micro‑biblioteca escrita en **Python 3.11** que facilita la transformación y manipulación de coordenadas geográficas en el dominio de las mediciones de temperatura y densidad de gases a distintas latitudes y longitudes. El proyecto fue pensado para integrarse en sistemas de monitoreo ambiental, meteorología y análisis de datos geoespaciales, ofreciendo una interfaz simple y altamente tipada que permite a los desarrolladores trabajar sin preocuparse por los errores de conversión de unidades.

---

## 📋 Tabla de Características  

| Característica | Descripción |
|----------------|-------------|
| **Tipado estático** | Utiliza `pydantic` y `typing` para validar y documentar los modelos de datos. |
| **Conversión de unidades** | Funciones de ayuda para pasar entre grados Celsius y Kelvin, metros y kilómetros. |
| **Políticas de latitud/longitud** | `LatitudePolicy` y `LongitudePolicy` garantizan que los valores se mantengan en rangos válidos. |
| **Mensajes de error claros** | Los errores de conversión generan excepciones con mensajes descriptivos que facilitan la depuración. |
| **v1.0.0** | Primera versión estable con API simple y bien documentada. |

---

## 🚀 Instalación

### Requisitos previos  

- Python 3.11 o superior  
- `pip` actualizado  

### Pasos

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/tu-usuario/tiposcoordenadas.git
   cd tiposcoordenadas
   ```

2. **Crea un entorno virtual (opcional pero recomendado)**  
   ```bash
   python -m venv .venv
   source .venv/bin/activate   # Windows: .venv\Scripts\activate
   ```

3. **Instala las dependencias**  
   ```bash
   pip install -e .
   ```

   El proyecto depende únicamente de:

   | Paquete | Versión |
   |--------|--------|
   | `pydantic` | `>=2.0.0` |
   | `typing-extensions` | `>=4.12.0` |

4. **Verifica la instalación**  
   ```bash
   python -c "import tiposcordenadas; print(tiposcordenadas.__version__)"
   ```

   Deberías ver algo como: `TiposCoordenadas v1.0.0`.

---

## 🛠️ Uso Básico

```python
from tiposcordenadas import (
    ConvertToMetrics,
    ConvertToKilometers,
    Temperature
)

# Convertir temperatura de Celsius a Kelvin
k = ConvertToMetrics.convert_from_celsius_to_kelvin(Temperature(25))
print(k)  # 298.15

# Conversión de metros a kilómetros
km = ConvertToKilometers.convert_from_meters_to_kilometers(8500)
print(km)  # 8.5
```

La biblioteca está diseñada para ser *fluent* y clara, con nombres de métodos que reflejan exactamente la operación que se realiza.

---

## 🤝 Cómo contribuir

¡Todas las contribuciones son bienvenidas! Si quieres mejorar la biblioteca, sigue estos pasos:

1. **Fork** el repositorio.  
2. **Crea una rama** con un nombre descriptivo:  
   ```bash
   git checkout -b feature/nueva-conversión
   ```  
3. **Escribe tests** (la suite existente se ejecuta con `pytest`).  
4. **Ejecuta la linting** y el test suite:  
   ```bash
   pre-commit run --all-files
   pytest
   ```  
5. **Haz un Pull Request** describiendo los cambios y los motivos.  

Asegúrate de seguir el formato de docstring estándar y de mantener la documentación actualizada. Para iniciar una discusión, abre un Issue detallando tu idea antes de enviar el PR.  

---

## 📜 Licencia  

MIT © 2026 *TiposCoordenadas*  – <https://github.com/tu-usuario/tiposcoordenadas/blob/main/LICENSE>  

---