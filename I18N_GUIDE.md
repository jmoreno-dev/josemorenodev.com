# Guía de Internacionalización (i18n) - Proyecto React

## ¿Qué se ha configurado?

✅ **Instalación completada**: Se ha agregado `i18next` y `react-i18next`  
✅ **Archivos de traducción**: Creados en `src/locales/` (es.json y en.json)  
✅ **Configuración i18n**: Archivo `src/i18n.js` configurado  
✅ **Inicialización**: Se importa en `main.jsx`  
✅ **Componentes actualizados**: `Navbar.jsx` y `Hero.jsx` (ejemplos listos)  
✅ **Botón de idioma**: Ahora puedes cambiar manualmente entre español e inglés

## Cómo el sistema detecta el idioma

El sistema detecta automáticamente el idioma del navegador/PC:
- Si el navegador está en **español** → muestra la web en español
- Si el navegador está en otro idioma → muestra en inglés (fallback)

## Cómo usar en tus componentes

### Paso 1: Importar el hook
```javascript
import { useTranslation } from 'react-i18next'
```

### Paso 2: Usar el hook en tu componente
```javascript
function MiComponente() {
    const { t, i18n } = useTranslation()
    
    return (
        <div>
            <h1>{t('nav.about')}</h1>
            <p>{t('hero.description')}</p>
        </div>
    )
}
```

### Paso 3: Agregar las claves en los archivos de traducción
En `src/locales/es.json` y `src/locales/en.json`, agrega tus traducciones:

```json
{
  "miComponente": {
    "titulo": "Mi Título",
    "descripcion": "Mi descripción"
  }
}
```

## Acceso a información avanzada

- `i18n.language` - obtiene el idioma actual ('es' o 'en')
- `i18n.changeLanguage('es')` - cambia el idioma programáticamente
- `t('clave')` - obtiene la traducción

## Componentes pendientes de actualizar

Sigue estas claves en los archivos JSON para actualizar los demás componentes:

```javascript
// ProfileSection.jsx
t('profile.title')
t('profile.description')

// Experience.jsx
t('experience.title')
t('experience.label')

// TechSkills.jsx
t('skills.title')
t('skills.frontend')
t('skills.backend')
t('skills.tools')

// Projects.jsx
t('projects.title')
t('projects.label')

// Contact.jsx
t('contact.title')
t('contact.subtitle')
t('contact.button')

// Footer.jsx
t('footer.rights')
t('footer.followMe')
```

## Ejemplo: Actualizar ProfileSection.jsx

```javascript
import { useTranslation } from 'react-i18next'

function ProfileSection() {
    const { t } = useTranslation()

    return (
        <section>
            <h2>{t('profile.title')}</h2>
            <p>{t('profile.description')}</p>
            {/* resto del contenido */}
        </section>
    )
}

export default ProfileSection
```

## Agregar más idiomas

Si en el futuro quieres agregar más idiomas (ej: francés, alemán):

1. Crea un archivo `src/locales/fr.json` con todas las traducciones
2. Agrega a `src/i18n.js`:
```javascript
import frTranslations from './locales/fr.json'

// En la sección de resources:
fr: { translation: frTranslations }
```

## Testing

Para verificar que funciona:
1. Abre tu navegador en Developer Tools (F12)
2. Abre la consola y ejecuta: `navigator.language`
3. Verifica que tu web se muestre en el idioma correcto
4. Haz clic en el botón de cambio de idioma (arriba en la navbar)
5. Verifica que el contenido cambia

## Notas importantes

- Todos los textos dinámicos DEBEN estar en los archivos JSON
- NO dejes strings hardcodeados en los componentes
- Si olvidaste una traducción, se mostrará la clave (ej: "nav.about")
- El navegador cachea el idioma seleccionado en localStorage automáticamente

¡Listo para empezar a traducir el resto de componentes!
