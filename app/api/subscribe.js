import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dpqakfxkjdcesxbotfon.supabase.co"
const supabaseServiceKey = "QmxoaapjVHfVJ7b0"

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Received subscription request:', req.body)
    const { email } = req.body

    if (!email) {
      console.log('Email is missing in the request')
      return res.status(400).json({ message: 'Email is required' })
    }

    try {
      console.log('Checking if email already exists')
      const { data, error } = await supabase
        .from('subscribers')
        .select('email')
        .eq('email', email)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking existing email:', error)
        throw error
      }

      if (data) {
        console.log('Email already exists')
        return res.status(400).json({ message: 'Email already subscribed' })
      }

      console.log('Inserting new subscriber')
      const { error: insertError } = await supabase
        .from('subscribers')
        .insert({ email })

      if (insertError) {
        console.error('Error inserting subscriber:', insertError)
        throw insertError
      }

      console.log('Subscriber added successfully')
      res.status(200).json({ message: 'Subscribed successfully' })
    } catch (error) {
      console.error('Server error:', error)
      res.status(500).json({ message: 'An error occurred. Please try again.' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}