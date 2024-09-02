import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dpqakfxkjdcesxbotfon.supabase.co"
const supabaseAnonKey = "QmxoaapjVHfVJ7b0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);