import { supabase } from '../../components/supabaseClient'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'

const resend = new Resend("re_123456789")

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { filename } = req.body

    try {
      // Read the JSON file
      const filePath = path.join(process.cwd(), 'data/blog', filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const article = JSON.parse(fileContents)


      // Save the article to Supabase
      const { error: articleError } = await supabase
        .from('data/blog')
        .insert({ 
          title: article.title, 
          content: article.content, 
          url: article.url,
          published_at: new Date()
        })

      if (articleError) throw articleError

      // Get all subscribers
      const { data: subscribers, error: subscribersError } = await supabase
        .from('subscribers')
        .select('email')

      if (subscribersError) throw subscribersError

      const subscriberEmails = subscribers.map(sub => sub.email)

      // Send notifications
      await resend.emails.send({
        from: 'talchrist10@gmail.com',
        to: subscriberEmails,
        subject: `New article: ${article.title}`,
        html: `<p>A new article has been published: <a href="${article.url}">${article.title}</a></p>`
      })

      res.status(200).json({ message: 'Article published and notifications sent' })
    } catch (error) {
      res.status(500).json({ message: 'Error publishing article', error: error.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}