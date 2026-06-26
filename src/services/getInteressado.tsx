import supabase from '../lib/database';
import type { Database } from '../types/database.types';
import type { ApiResponse } from '../types/api.types';

type Interessado = Database['public']['Tables']['interessado']['Row'];