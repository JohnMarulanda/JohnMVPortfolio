import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

const LIKES_KEY = 'portfolio_likes';
const VISITORS_KEY = 'portfolio_visitors';

// GET - Obtener el número actual de likes
export async function GET() {
  try {
    const likes = await kv.get<number>(LIKES_KEY) || 0;
    return NextResponse.json({ likes });
  } catch (error) {
    console.error('Error reading likes:', error);
    return NextResponse.json({ likes: 0 });
  }
}

// POST - Agregar un like
export async function POST(request: NextRequest) {
  try {
    // Obtener IP del usuario para evitar spam
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Obtener datos actuales
    const currentLikes = await kv.get<number>(LIKES_KEY) || 0;
    const visitors = await kv.get<Array<{ip: string, timestamp: number}>>(VISITORS_KEY) || [];
    
    // Verificar si esta IP ya dio like en las últimas 24 horas
    const now = Date.now();
    const oneDayAgo = now - (24 * 60 * 60 * 1000);
    
    // Limpiar visitantes antiguos
    const activeVisitors = visitors.filter(visitor => visitor.timestamp > oneDayAgo);
    
    // Verificar si ya dio like
    const hasLiked = activeVisitors.some(visitor => visitor.ip === ip);
    
    if (hasLiked) {
      return NextResponse.json({ 
        success: false, 
        message: 'Ya has dado like en las últimas 24 horas',
        likes: currentLikes 
      });
    }
    
    // Agregar like y visitor
    const newLikes = currentLikes + 1;
    const newVisitors = [...activeVisitors, { ip, timestamp: now }];
    
    // Guardar en KV
    await Promise.all([
      kv.set(LIKES_KEY, newLikes),
      kv.set(VISITORS_KEY, newVisitors)
    ]);
    
    return NextResponse.json({ 
      success: true, 
      likes: newLikes,
      message: '¡Gracias por tu like!' 
    });
    
  } catch (error) {
    console.error('Error adding like:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Error al procesar el like' 
    }, { status: 500 });
  }
} 