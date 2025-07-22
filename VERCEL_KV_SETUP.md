# Configuración de Vercel KV para el Sistema de Likes

## 🚀 Pasos para Configurar en Vercel

### 1. Desplegar en Vercel
```bash
# Conecta tu repositorio a Vercel
# O usa el CLI de Vercel
npx vercel
```

### 2. Crear Base de Datos KV
1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Navega a **Storage** → **KV**
3. Haz clic en **Create Database**
4. Nombra tu base de datos (ej: `portfolio-likes`)
5. Selecciona tu región

### 3. Conectar a tu Proyecto
1. En la página de tu base de datos KV
2. Ve a la pestaña **Settings**
3. Conecta la base de datos a tu proyecto
4. Las variables de entorno se configurarán automáticamente

### 4. Variables de Entorno (Automáticas)
Vercel configurará automáticamente:
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

### 5. Para Desarrollo Local (Opcional)
Si quieres probar localmente:

1. Crea un archivo `.env.local` en la raíz
2. Copia las credenciales desde Vercel Dashboard → Storage → KV → Settings
3. Agrega:
```env
KV_REST_API_URL=tu_url_aqui
KV_REST_API_TOKEN=tu_token_aqui
```

## ✅ Verificación
Una vez desplegado, tu sistema de likes funcionará automáticamente:
- Los likes se guardan en Vercel KV
- Persisten para siempre
- Anti-spam funcional
- Escalable para muchos usuarios

## 🔧 Límites Gratuitos de Vercel KV
- **3,000 requests/mes**
- **256 MB de datos**
- Perfecto para un portafolio personal

¡Listo! Tu sistema de likes funcionará perfectamente en Vercel. 🎉 